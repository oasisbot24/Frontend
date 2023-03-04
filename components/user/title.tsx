type Props = {
  children: React.ReactNode
  className?: string
}

const Title = ({ children, className }: Props) => {
  return (
    <div className={'text-lg sm:text-xl font-viga '+(className ?? '')}>
      {children}
    </div>
  )
}

export default Title
