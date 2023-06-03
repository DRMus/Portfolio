import classNames from "classnames"
import { FC, HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLLabelElement> {

}

const TextLabel: FC<Props> = ({children, className, ...props}) => {
  return (
    <label className={classNames("block text-lg text-gray-500 font-medium mb-2 mt-4", className)} {...props}>{children}</label>
  )
}

export default TextLabel