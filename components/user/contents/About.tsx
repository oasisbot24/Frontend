import AboutSupport from "./AboutSupport";
import MookupImages from "./MookupImages";
import AboutContent from "@components/user/contents/AboutContent";

type Props = {
  data : {
    title : string
    semititle : string
    content : string
  }[]
}

function About({data} : Props) {
	return (
    <div className="about py-16">
        <AboutContent title={data[0].title} semititle={data[0].semititle}
        src="/images/About1.png" className="mb-12">
          {data[0].content}
        </AboutContent>

        <AboutContent title={data[1].title} semititle={data[1].semititle}
        src="/images/About2.png" className="mb-12">
          {data[1].content}
        </AboutContent>

        <MookupImages />

        <AboutContent title={data[2].title} semititle={data[2].semititle}
        src="/images/Advantage.png" className="mb-12">
          {data[2].content}
        </AboutContent>

        <AboutSupport />
    </div>
	);
}
export default About;