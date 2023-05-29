import { ICardTasks } from "../../Interface/ICardTasks";
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';
import style from './CardTasks.module.css';

const CardTasks = ({tasks, editTask, deleteTask}: ICardTasks) => {
    return (
        <section>
            {tasks.map(task => (
                <div className={style.tasks} key={task.id}>
                    {task.status
                        ? (
                            <>
                            <AiFillCheckCircle 
                                color="#5E60CE" size={30} 
                                className={`${style.input} ${style.check}`}
                                onClick={() => editTask(task)}
                            />
                            <p className={`${style.descricao} ${style.concluida}`}>{task.descricao}</p>
                            </>
                        )
                        : (
                            <>
                            <div className={style.input} onClick={() => editTask(task)}></div>
                            <p className={style.descricao}>{task.descricao}</p>
                            </>
                        )
                    }
                    <div className={style.icons}>
                        <span className={style.first} ><TbEdit size={22} color="#808080"/></span>
                        <span onClick={() => deleteTask(task)}><RiDeleteBin6Line size={22} color="#808080"/></span>
                    </div>
                </div>
            ))}
            
        </section>
    );
}

export default CardTasks;