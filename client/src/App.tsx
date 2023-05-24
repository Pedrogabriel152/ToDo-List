import React, { ChangeEvent, useState } from 'react';
import style from './App.module.css';
import Logo from './Components/Logo';
import Form from './Components/From';
import ABApolloClient from './Components/ApolloClient';
import TaskProvaider from './Context/TaskContext';

function App() {
  const [tasks, setTasks] = useState<any>({});
  const [totalTasks, setTotalTasks] = useState<number>(0);

  return (
    <ABApolloClient>
      <TaskProvaider>
        <div className={style.App}>
          <Logo />
          <Form text='Criar' classname='create'/>
        </div>
      </TaskProvaider>
    </ABApolloClient>
  );
}

export default App;
