import { useTaskContext } from "../../Context/TaskContext";
import style from './Info.module.css'

interface InformacoesTasksProps {
    total: number
    close: number
}

const InformacoesTasks = ({total, close}: InformacoesTasksProps) => {
    const {tasks, carregando} = useTaskContext();
    console.log('InformacoesTasks ', close)
    return(
        <section>
            <div className={style.info}>
                <h4 className={style.total}>Tarefas criadas <span className={style.span}>{total}</span></h4>
                <h4 className={style.close}>Concluídas <span className={style.span}>{total == 0? 0 : `${close} de ${total}`}</span></h4>
            </div>
        </section>
    )
}

export default InformacoesTasks;