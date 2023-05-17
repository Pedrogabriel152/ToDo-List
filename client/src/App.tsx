import React, { ChangeEvent, useState } from 'react';
import style from './App.module.css';
import Logo from './Components/Logo';
import Form from './Components/From';

function App() {
  const [tasks, setTasks] = useState<any>({});
  const [totalTasks, setTotalTasks] = useState<number>(0);

  return (
    <div className={style.App}>
      <Logo />
      <Form text='Criar'/>
    </div>
  );
}

export default App;
