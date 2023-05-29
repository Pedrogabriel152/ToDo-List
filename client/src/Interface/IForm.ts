import { ChangeEvent } from "react";

interface IForm {
    task?: any
    text: string
    className: string
    setModal?(stado: boolean): void
}

export default IForm;