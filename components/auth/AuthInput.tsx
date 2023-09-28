import { HTMLInputTypeAttribute } from "react";

interface IAuthInput {
  placeholder: string;
  type?: HTMLInputTypeAttribute;
}
export const AuthInput = ({ placeholder, type = "text" }: IAuthInput) => {
  return (
    <input
      className="bg-auth-input-gray text h-10 w-full rounded-md border-0 border-gray-400 p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
      type={type}
      placeholder={placeholder}
    />
  );
};
