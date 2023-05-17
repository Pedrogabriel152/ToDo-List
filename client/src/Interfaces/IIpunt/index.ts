import { ChangeEvent } from "react"

interface IInput{
    value?: string
    type: string
    name: string
    className: string
    placeholder: string
    handleOnChange(e: ChangeEvent<HTMLInputElement>):void
}

export default IInput;