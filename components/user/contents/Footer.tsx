import Image from "next/image";

function Footer() {
  const logo = "/static/logo/logo_square.png";
  return (
    <footer>
      <div className="flex flex-col md:flex-row mx-0 py-8">
        <div className="my-auto text-center md:text-left w-full lg:w-1/4">
          <div className="flex flex-col">
            <div className="w-full mb-0 md:mb-2 font-bold text-lg">
              Mail Me!
            </div>
            <div className="w-full">
              <a
                href="mailto:teamprivateclub@gmail.com"
                className="footer-email"
              >
                teamprivateclub@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="my-4 md:my-0 w-full lg:w-1/2">
          <div className="flex justify-center my-auto h-full">
            <div className="my-auto px-0 w-1/4">
              <Image
                alt="logo"
                src={logo}
                className="footer-logo"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
        <div className="my-auto w-full lg:w-1/4">
          <div className="flex">
            <div className="footer-small md:text-right w-full">
              Published by DeveloperRyou
            </div>
          </div>
        </div>
      </div>
      <span className="footer-lastline"></span>
    </footer>
  );
}

export default Footer;
