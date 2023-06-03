import classNames from "classnames"
import { FC, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLLabelElement> {

}

const TextLabel: FC<Props> = ({children, className, ...props}) => {
  return (
    <label className={classNames("", className)} {...props}>{children}</label>
  )
}

export default TextLabel