import { BrowserRouter } from 'react-router-dom';
import ABApolloClient from './Components/ApolloClient';
import TaskProvaider from './Context/TaskContext';
import Rotas from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ABApolloClient>
      <TaskProvaider>
        <BrowserRouter>
          <ToastContainer autoClose={3000} />
          <Rotas />
        </BrowserRouter>
      </TaskProvaider>
    </ABApolloClient>
  );
}

export default App;
