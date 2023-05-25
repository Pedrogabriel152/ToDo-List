import { ICardTasks } from "../../Interface/ICardTasks";
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import style from './CardTasks.module.css';

const CardTasks = ({tasks}: ICardTasks) => {
    console.log('CardTasks', tasks)
    return (
        <section>
            {tasks.map(task => (
                <div className={style.tasks}>
                    <div className={style.input}></div>
                    <p className={style.descricao}>{task.descricao}</p>
                    <div className={style.icons}>
                        <span className={style.first}><TbEdit size={22} color="#808080"/></span>
                        <span><RiDeleteBin6Line size={22} color="#808080"/></span>
                    </div>
                </div>
            ))}
            
        </section>
    );
}

export default CardTasks;