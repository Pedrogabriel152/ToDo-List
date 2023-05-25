import { HiOutlineClipboardList } from 'react-icons/hi';
import style from './CardTaskVoid.module.css';

const CardTaskVoid = () => {
    return(
        <section>
            <div className={style.card}>
                <HiOutlineClipboardList size={80} color='#444444'/>
                <h3 className={style.title}>Você ainda não tem tarefas cadastradas</h3>
                <h3 className={style.text}>Crie tarefas e organize seus itens a fazer</h3>
            </div>
        </section>
    );
}

export default CardTaskVoid;