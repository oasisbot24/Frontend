import Image from "next/image"

type Props = {
  src : string
	className?: string
}
  
const Icon = ({src, className}: Props) => {
	return (
    <Image alt="icon" src={src} width={24} height={24} className={(className ?? '')}/>
	)
}
  
export default Icon
  