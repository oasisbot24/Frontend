import Image from "next/image";

function AboutSupport() {
  return (
    <div className="support">
      <div className="text-center">
        <p className="title-1">지원거래소</p>
      </div>
      <div className="flex justify-around pt-12">
        <div className="text-center mr-4 lg:mr-0">
          <Image
            src="/images/upbit.png"
            className="rounded-lg"
            alt="upbit"
            width={240}
            height={120}
          />
          <p className="my-6 text-xl text-gray-200 font-normal"> 업비트 </p>
        </div>
        <div className="text-center">
          <Image
            src="/images/lbank.png"
            className="rounded-lg"
            alt="upbit"
            width={240}
            height={120}
          />
          <p className="my-6 text-xl text-gray-200 font-normal"> 엘뱅크 </p>
        </div>
      </div>
    </div>
  );
}
export default AboutSupport;
