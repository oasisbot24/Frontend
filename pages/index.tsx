import About from "@components/user/contents/About";
import FAQ from "@components/user/contents/FAQ";
import NFT from "@components/user/contents/NFT";
import UserFrame from "@components/user/userFrame";
import Footer from "@components/user/contents/Footer";
import Link from "next/link";
import data from "@lib/data";
import Image from "next/image";

export default function Home() {
  const href = {
    kakao: "https://open.kakao.com/o/g2IECVff",
    download:
      "https://github.com/DeveloperRyou/oasis/releases/download/v0.1.0/Oasis-Setup-0.1.0.exe",
  };
  return (
    <UserFrame className="home user-background">
      <div className="text-white font-viga flex flex-col w-full my-12">
        <div className="text-xl sm:text-2xl mb-2">Find your optimus bot</div>
        <div className="text-7xl leading-13 sm:text-8xl sm:leading-14 mb-12">
          OASIS
          <br />
          BOT
        </div>
        <a href={href.kakao} className="w-full sm:w-[400px] mb-4 sm:mb-8">
          <button className="btn btn-white-border rounded w-full h-[50px]">
            <div className="flex justify-center">
              <p className="my-auto">카카오톡 오픈채팅방 바로가기</p>
            </div>
          </button>
        </a>
        <div className="flex w-full sm:w-[400px]">
          <a href={href.download} className="w-full mr-2">
            <button className="btn btn-blue-300 rounded w-full h-[50px]">
              OASIS BOT Download
            </button>
          </a>
          <Link href="signin" className="w-full ml-2">
            <button className="btn btn-pink mb-4 rounded w-full h-[50px]">
              Sign in
            </button>
          </Link>
        </div>
        <Link href="signup">
          <div className="text-sm hover:text-yellow w-fit">
            New to OASIS Account? Sign up now.
          </div>
        </Link>
      </div>

      <hr className="my-12" />
      <About data={data.about} />
      <hr className="my-12" />
      <NFT data={data.roadmap} />
      <hr className="my-12" />
      <FAQ data={data.faq} />
      <hr className="my-12" />
      <Footer />
    </UserFrame>
  );
}
