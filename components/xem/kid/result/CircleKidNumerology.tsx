"use client"

export const CircleKidNumerology = ({ number }: { number: number }) => {
  return (
    <div className="relative block w-full overflow-hidden">
      <div className="bg-mandala-circle animate-spin-fast relative mx-auto mb-5 mt-2.5 max-h-[200px] w-[95%] max-w-[200px] bg-cover bg-center bg-no-repeat text-center">
        <div className="pt-[100%]" />
      </div>
      <div
        style={{
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ff1177, 0 0 40px #ff1177, 0 0 50px #ff1177, 0 0 60px #ff1177, 0 0 70px #ff1177, 0 0 80px #ff1177",
        }}
        className="absolute left-1/2 top-1/2 z-10 -ml-[90px] -mt-[87px] block h-[160px] w-[180px] animate-sign-pulse text-center text-[70px] font-semibold leading-[160px] text-white"
      >
        {number}
      </div>
    </div>
  )
}
