import Image from "next/image";

function MookupImage(props) {
  return (
    <div className="mookup">
      <Image src={props.src} alt="mookup" width={1000} height={1000} className="rounded-lg"/>
      <div className="description">
        <div dangerouslySetInnerHTML={{__html:props.description}}></div>
      </div>
    </div>
  ); 
}
export default MookupImage;