import React, { ChangeEvent, useEffect, useState } from 'react';
import style from './Home.module.css';
import { useTaskContext } from '../../Context/TaskContext';
import Logo from '../../Components/Logo';
import Form from '../../Components/Form';
import InformacoesTasks from '../../Components/InformacoesTasks';
import CardTaskVoid from '../../Components/CardTaskVoid';
import CardTasks from '../../Components/CardTasks';

function Home() {
  const {tasks} = useTaskContext();

  const handleOnSubmit = () => {

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
        {tasks?.total && tasks?.total > 0 && <CardTasks tasks={tasks?.tasks? tasks?.tasks : []}/>}
    </div>
  );
}

export default Home;
