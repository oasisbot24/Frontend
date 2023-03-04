type Props = {
  children: React.ReactNode
  className?: string
}

const TitleBorder = ({ children, className }: Props) => {
  return (
    <div className={'text-sm w-fit border-b-2 mb-6 px-4 pb-1 '+(className ?? '')}>
      {children}
    </div>
  )
}

export default TitleBorder
