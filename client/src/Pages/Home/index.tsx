import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './Home.module.css';
import { useTaskContext } from '../../Context/TaskContext';
import Logo from '../../Components/Logo';
import Form from '../../Components/Form';
import InformacoesTasks from '../../Components/InformacoesTasks';
import CardTaskVoid from '../../Components/CardTaskVoid';
import CardTasks from '../../Components/CardTasks';
import { ITask } from '../../Interface/ITask';
import { useReactiveVar } from '@apollo/client';
import { deleteTasksVar } from '../../GraphQL/Task/state';
import { toast } from 'react-toastify';

function Home() {
  const {tasks, deleteTaskBanco} = useTaskContext();
  const response = useReactiveVar(deleteTasksVar);

  const handleEdit= (task: ITask) => {
    
  }

  const handleDelete = (task: ITask) => {
    deleteTaskBanco(task);
    if(response){
      toast.success(response.message);
    }
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
