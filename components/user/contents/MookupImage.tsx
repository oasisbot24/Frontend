import Image from "next/image";

type Props = {
  src : string
  description : string
}

function MookupImage({src, description} : Props) {
  return (
    <div className="mookup">
      <Image src={src} alt="mookup" width={1000} height={1000} className="rounded-lg"/>
      <div className="description">
        <div dangerouslySetInnerHTML={{__html:description}}></div>
      </div>
    </div>
  ); 
}
export default MookupImage;