import MookupImage from "./MookupImage";

function MookupImages() {
  const DashBoard = "/images/DashBoard.png";
  const OASISBot = "/images/OASISBot.png";
  const BackTest = "/images/BackTest.png";
  const Additional = "/images/Additional.png";
  return (
    <div className="flex flex-col mb-12">
      <div className="flex pb-2">
        <div className="pr-2">
          <MookupImage src={DashBoard} description="DashBoard" />  
        </div>
        <div className="pl-2">
          <MookupImage src={OASISBot} description="OASIS Bot" />
        </div>
      </div>
      <div className="flex pt-2">
        <div className="pr-2">
          <MookupImage src={BackTest} description="BackTest" />
        </div>
        <div className="pl-2">
          <MookupImage src={Additional} description="추가기능은<br/>지속적으로<br/>개발중입니다."/>
        </div>
      </div>
    </div>
  ); 
}
export default MookupImages;