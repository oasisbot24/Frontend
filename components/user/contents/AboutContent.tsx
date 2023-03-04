import AboutContentImage from "./AboutContentImage";

type Props = {
  title : string
  semititle : string
  src : string
  children : string
  className ?: string 
}

function AboutContent({title, semititle, src, children, className} : Props) {
	return (
		<AboutContentImage src={src} className={className ?? ''}>
      <div>
        <p className="title-1">{title}</p>
        <p className="title-small">{semititle}</p>
      </div>
      <div className="text-gray-200" dangerouslySetInnerHTML={{__html:children}}>
      </div>
    </AboutContentImage>
	);
}

export default AboutContent;