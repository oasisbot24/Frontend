type Props = {
  data : {
    title : string
    content : string
  }[]
}

function NFTRoadmap({data} : Props) {
  const roadmap = data;
	return (
		<div className="roadmap">
      <p className="title-2">NFT Roadmap</p>
      <div className="flex w-full mt-6">
        <div className="bar"></div>
        <div className="pt-6 mb-6">
        {roadmap.map((content, index) =>
        <div key={index} className="pl-6 mb-6">
          <div className={"mb-6 line line-"+(index + 1) }></div>
          <div className={"mb-4 text-bar-"+(Math.floor(index/2) + 1) }>
            {content.title}
          </div>
          <p className="text-white" dangerouslySetInnerHTML={{__html:content.content}}></p>
        </div>
        )}
        </div>
      </div>
    </div>
	);
}

export default NFTRoadmap;