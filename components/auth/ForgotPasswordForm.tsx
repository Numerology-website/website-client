"use client"
import { firebaseAuth } from "@/libs/firebase"
import { toastify } from "@/libs/toastify"
import { countryCode, getFlagEmoji } from "@/utils/countryCode"
import { PostAPI } from "@/utils/fetch"
import { getErrorMessage } from "@/utils/helpers"
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type ForgotPasswordStep = "INPUT_PHONE_NUMBER" | "VERIFY_OTP"

export const ForgotPasswordForm = () => {
  const [step, setStep] = useState<ForgotPasswordStep>("INPUT_PHONE_NUMBER")
  const [phoneNumber, setPhoneNumber] = useState<string>("")
  const [country_code, setCountryCode] = useState<string>("+84")
  const [otp, setOtp] = useState<string>("")
  const [result, setResult] = useState<ConfirmationResult | undefined>(
    undefined,
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
        body: { phone_number: country_code + phoneNumber },
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
    const phone_number = country_code + phoneNumber
    signInWithPhoneNumber(firebaseAuth, phone_number, appVerifier)
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
          phone_number: `${country_code}${phoneNumber}`,
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
      },
    )
  }, [])
  return (
    <div className="flex flex-col items-center gap-2">
      {step === "INPUT_PHONE_NUMBER" && (
        <div className="flex flex-col gap-7">
          <div className="flex gap-2">
            <div className="w-fit">
              <select
                id="countries"
                className="block w-full rounded-md border bg-auth-input-gray  text-sm text-white"
                style={{ backgroundColor: "rgba(243, 246, 249, 0.36)" }}
                onChange={(e) => setCountryCode(e.target.value)}
              >
                <option value="+84">{getFlagEmoji("VN")} - Vietnam +84</option>
                {countryCode.map((country, index) => (
                  <option key={index} value={country.dial_code}>
                    {getFlagEmoji(country.code)} - {country.name}{" "}
                    {country.dial_code}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <input
                className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
                type={"text"}
                placeholder={"Số điện thoại của bạn"}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div id="forgot-password-form"></div>
          </div>
          <div className="flex justify-center gap-5">
            <button
              className="rounded-full border border-solid border-gray-400 px-10 py-2 text-xs hover:bg-white hover:text-[#3F4254]"
              onClick={submitPhoneNumber}
            >
              Gửi
            </button>
            <Link
              className="rounded-full border border-solid border-gray-400 px-10 py-2 text-xs hover:bg-white hover:text-[#3F4254]"
              href="/login"
            >
              Huỷ
            </Link>
          </div>
        </div>
      )}
      {step === "VERIFY_OTP" && (
        <div className="flex flex-col gap-2">
          <div id="forgot-password-form"></div>
          <div className="flex gap-2">
            <div className="w-fit">
              <select
                id="countries"
                className="block w-full rounded-md border bg-auth-input-gray  text-sm text-white"
                style={{ backgroundColor: "rgba(243, 246, 249, 0.36)" }}
                disabled
              >
                <option value="+84">{getFlagEmoji("VN")} - Vietnam +84</option>
                {countryCode.map((country, index) => (
                  <option key={index} value={country.dial_code}>
                    {getFlagEmoji(country.code)} - {country.name}{" "}
                    {country.dial_code}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full">
              <input
                className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
                type={"text"}
                placeholder={"Số điện thoại của bạn"}
                value={phoneNumber}
                disabled
              />
            </div>
          </div>
          <div className="w-full">
            <input
              className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              value={otp}
              placeholder="Nhập mã nhận được"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <input
            className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
            type="password"
            placeholder="Nhập mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <div className="mt-5 flex justify-center gap-7">
            <button
              className="rounded-full border border-solid border-gray-400 px-10 py-2 hover:bg-white hover:text-[#3F4254]"
              onClick={validateOTP}
            >
              Submit
            </button>
            <button
              className="rounded-full border border-solid border-gray-400 px-10 py-2 hover:bg-white hover:text-[#3F4254]"
              type="button"
              onClick={() => router.push("/login")}
            >
              Huỷ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
