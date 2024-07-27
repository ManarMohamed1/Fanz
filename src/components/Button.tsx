type ButtonProps = {
  text: string
  textColor: string
  color: string
  onClick: React.MouseEventHandler<HTMLDivElement>
  width?: string
  height?: string
  img?: string
}

const Button = (props: ButtonProps) => {
  return (
    <div
      onClick={props.onClick}
      className={`${props.width} ${props.height} ${props.textColor}sm:w-[100px] font-Inter w-[275px] h-[55px] rounded-lg flex justify-center items-center${props.color}cursor-pointer`}
    >
      {props.img ? <img src={props.img} className="w-5" alt="" /> : null}
      <p className="text-base"> {props.text}</p>
    </div>
  )
}

export default Button
