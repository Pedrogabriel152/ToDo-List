import style from './Home.module.css';
import { useTaskContext } from '../../Context/TaskContext';
import Logo from '../../Components/Logo';
import Form from '../../Components/Form';
import InformacoesTasks from '../../Components/InformacoesTasks';
import CardTaskVoid from '../../Components/CardTaskVoid';
import CardTasks from '../../Components/CardTasks';
import { ITask } from '../../Interface/ITask';
import { useReactiveVar } from '@apollo/client';
import { deleteTasksVar, updateTasksVar } from '../../GraphQL/Task/state';
import { toast } from 'react-toastify';

function Home() {
  const {tasks, deleteTaskBanco, editTask} = useTaskContext();
  const response = useReactiveVar(deleteTasksVar);
  const editResponse = useReactiveVar(updateTasksVar);

  const handleEdit= (task: ITask, acao: string) => {
    let updateTask: ITask = {
      id: task.id,
      descricao: task.descricao,
      status: true
    };
    if(acao === 'close'){
      editTask(updateTask);
    }

    if(acao === 'open'){
      updateTask.status = false
      editTask(updateTask);      
    }

    if(editResponse?.code != 200){
      toast.error(editResponse?.message);
      return;
    }

    toast.success(editResponse.message);
    return;
  }

  const handleDelete = (task: ITask) => {
    deleteTaskBanco(task);
    if(response?.code != 200){
      toast.error(response?.message);
      return;
    }

    toast.success(response.message);
  }
  
  return (
    <div className={style.Home}>
        <Logo />
        <Form text='Criar' className='create'/>
        <InformacoesTasks 
          total={tasks?.total? tasks?.total : 0}
          close={tasks?.close? tasks?.close : 0}
        />
        {!tasks?.total && <CardTaskVoid />}
        {tasks?.total && tasks?.total > 0 && <CardTasks tasks={tasks?.tasks? tasks?.tasks : []} deleteTask={handleDelete} editTask={handleEdit}/>}
    </div>
  );
}

export default Home;
