"use client"
import { firebaseAuth } from "@/libs/firebase"
import { toastify } from "@/libs/toastify"
import { ClientPostAPI, PostAPI } from "@/utils/fetch"
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"

type ForgotPasswordStep =
  | "INPUT_PHONE_NUMBER"
  | "VERIFY_OTP"
  | "VERIFY_SUCCESS"
  | "VERIFY_FAILED"

export const ForgotPasswordForm = () => {
  const [step, setStep] = useState<ForgotPasswordStep>("INPUT_PHONE_NUMBER")
  const [phoneNumber, setPhoneNumber] = useState<string>("+840123456789")
  const [otp, setOtp] = useState<string>("")
  const [result, setResult] = useState<ConfirmationResult | undefined>(
    undefined
  )
  const [newPassword, setNewPassword] = useState<string>("")
  const [confirmNewPassword, setConfirmNewPassword] = useState<string>("")
  const { data, status } = useSession()

  const checkPhoneNumber = async () => {
    if (!phoneNumber) return false

    console.log("submitPhoneNumber")
    let accessToken: string = ""
    if (status === "authenticated") {
      accessToken = data.accessToken
    }
    const isValidPhoneNumber = await ClientPostAPI<boolean>({
      path: "/auth/check-phone-number",
      options: {
        headers: {
          API_PUBLIC_KEY: process.env.NEXT_PUBLIC_API_PUBLIC_KEY as string,
        },
      },
      accessToken,
    })
    console.log(isValidPhoneNumber)
    if (!isValidPhoneNumber) throw new Error("Invalid phone number")
    return true
  }

  const submitPhoneNumber = async () => {
    const test = await checkPhoneNumber()
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

  const validateOTP = () => {
    if (!otp.toString()) return
    if (!result) return
    try {
      if (!comparePassword()) return
      result
        .confirm(otp)
        .then(() => setStep("VERIFY_SUCCESS"))
        .catch(() => setStep("VERIFY_FAILED"))
    } catch (error) {}
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
