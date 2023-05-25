import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ABApolloClient from './Components/ApolloClient';
import TaskProvaider from './Context/TaskContext';
import Rotas from './routes';

function App() {
  return (
    <ABApolloClient>
      <TaskProvaider>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </TaskProvaider>
    </ABApolloClient>
  );
}

export default App;
