import './App.css';
import Task2 from './Components/Task2/Task2';
import Task3 from './Components/Task3/Task3';
import Task4 from './Components/Task4/Task4';
import Task5 from './Components/Task5/Task5';
import Task6 from './Components/Task6/Task6';

function App() {
    return (
        <>
            <Task2 />
            <Task3 default='Hello, I am prop' />
            <Task4 />
            <Task5 />
            <Task6 />
        </>
    );
}

export default App;
