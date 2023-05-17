import { ChangeEvent } from "react"

interface IInput{
    value?: string
    type: string
    name: string
    className: string
    handleOnChange(e: ChangeEvent<HTMLInputElement>):void
}

export default IInput;