"use client"
import { firebaseAuth } from "@/libs/firebase"
import { toastify } from "@/libs/toastify"
import { PostAPI } from "@/utils/fetch"
import { getErrorMessage } from "@/utils/helpers"
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type ForgotPasswordStep = "INPUT_PHONE_NUMBER" | "VERIFY_OTP"

export const ForgotPasswordForm = () => {
  const [step, setStep] = useState<ForgotPasswordStep>("INPUT_PHONE_NUMBER")
  const [phoneNumber, setPhoneNumber] = useState<string>("+840123456789")
  const [otp, setOtp] = useState<string>("")
  const [result, setResult] = useState<ConfirmationResult | undefined>(
    undefined
  )
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
  const router = useRouter()

  const checkPhoneNumber = async (): Promise<boolean> => {
    if (!phoneNumber) {
      toastify({ type: "error", message: "Please input phone number" })
      return false
    }
    try {
      const isValidPhoneNumber = await PostAPI<boolean>({
        url: "/auth/check-phone-number",
        body: { phone_number: phoneNumber },
        headers: {
          API_PUBLIC_KEY: process.env.NEXT_PUBLIC_API_PUBLIC_KEY,
        },
      })
      if (!isValidPhoneNumber) throw "Invalid phone number"
      return true
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toastify({
        type: "error",
        message: errorMessage,
      })
      return false
    }
  }

  const submitPhoneNumber = async () => {
    const isValid = await checkPhoneNumber()
    if (!isValid) return
    const appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setResult(confirmationResult)
        setStep("VERIFY_OTP")
      })
      .catch((error) => {
        console.error(error)
        toastify({
          type: "error",
          message: "Error when sending OTP",
        })
      })
  }

  const validateOTP = async () => {
    if (!otp.toString()) return
    if (!result) return
    try {
      if (!comparePassword()) return
      const confirm = await result.confirm(otp)
      if (!confirm) throw "OTP is invalid"
      await resetPassword()
    } catch (error) {
      const errorMessage = getErrorMessage(error)
      toastify({
        type: "error",
        message: errorMessage,
      })
    }
  }

  const resetPassword = async () => {
    try {
      // TODO: add localId of firebase to user schema to double check user when reset password
      // TODO: edit public api key to encrypt
      const response = await PostAPI<string>({
        url: "/auth/reset-password",
        body: {
          phone_number: phoneNumber,
          password: newPassword,
        },
        headers: {
          API_PUBLIC_KEY: process.env.NEXT_PUBLIC_API_PUBLIC_KEY,
        },
      })
      if (!response) throw "Reset password failed"
      toastify({
        type: "success",
        message: "Reset password successfully",
      })
      return router.push("/login")
    } catch (error) {
      throw error
    }
  }

  const comparePassword = () => {
    if (newPassword !== confirmNewPassword) {
      toastify({
        type: "error",
        message: "Password not match",
      })
      return false
    }
    return true
  }
  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      firebaseAuth,
      "forgot-password-form",
      {
        size: "invisible",
      }
    )
  }, [])
  return (
    <>
      {step === "INPUT_PHONE_NUMBER" && (
        <div>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div id="forgot-password-form"></div>
          <button onClick={submitPhoneNumber}>Submit</button>
        </div>
      )}
      {step === "VERIFY_OTP" && (
        <div>
          <label>PhoneNumber</label>
          <input type="text" value={phoneNumber} disabled />
          <label>OTP</label>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <label>Confirm New Password</label>
          <input
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <button onClick={validateOTP}>Submit</button>
        </div>
      )}
    </>
  )
}
