import { useTaskContext } from "../../Context/TaskContext"

interface InformacoesTasksProps {
    total: number
    close: number
}

const InformacoesTasks = ({total, close}: InformacoesTasksProps) => {
    const {tasks, carregando} = useTaskContext();
    console.log('InformacoesTasks ', close)
    return(
        <h1>ola</h1>
    )
}

export default InformacoesTasks;