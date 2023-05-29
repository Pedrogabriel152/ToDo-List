export interface IButton {
    className: string
    onclick():void
    text: string
    setModal?(stado: boolean): void
}