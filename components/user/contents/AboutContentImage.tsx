import Image from "next/image";

type Props = {
  className?: string
  children : React.ReactNode
  src : string
}

function AboutContentImage({className, children, src} : Props) {
  return (
    <div className={"flex "+(className ?? '')}>
      <div className="md:pr-5 md:w-2/3">
		    {children}
      </div>
      <div className="md:block hidden md:w-1/3" >
        <div className="flex h-full">
          <Image src={src} className="w-full my-auto" alt="content" width={1200} height={1000}/>
        </div>
      </div>
    </div>
  ); 
}
export default AboutContentImage;