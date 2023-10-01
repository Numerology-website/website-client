import Image from "next/image"
import Link from "next/link"

export const LogoAuth = () => {
  return (
    <Link href={"/"} className="flex gap-2 hover:text-gray-300">
      <Image
        src={"/assets/images/logo-white.png"}
        alt="transparent logo"
        width={45}
        height={25}
      />
      <h1>Tra cứu thần số học</h1>
    </Link>
  )
}
