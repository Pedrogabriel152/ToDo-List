import React from "react";
import Form from "../Form";
import { ITask } from "../../Interface/ITask";
import style from './Modal.module.css';

interface IModalProps{
    task: ITask | {}
    setModal(stado: boolean): void
}

const Modal = ({task, setModal}: IModalProps) => {
    return(
        <div className={style.modal}>
            <div className={style.outside} onClick={() => setModal(false)}></div>
            <div className={style.content}>
                <h1 className={style.title}>Editar Tarefa</h1>
                <Form className="edit" text="Salvar" task={task} setModal={setModal}/>
            </div>
        </div>
    );
}

export default Modal;