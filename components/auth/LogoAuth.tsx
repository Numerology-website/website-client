import Image from "next/image";

export const LogoAuth = () => {
  return (
    <div className="flex gap-2">
      <Image
        src={"/assets/images/logo-white.png"}
        alt="transparent logo"
        width={45}
        height={25}
      />
      <h1>Tra cứu thần số học</h1>
    </div>
  );
};
