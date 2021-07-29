import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { ITask } from './Interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todolist, setTodolist] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask: ITask = { taskName: task, deadline: deadline };
    setTodolist([...todolist, newTask]);
    console.log(todolist);
    setTask('');
    setDeadline(0);
  };

  return (
    <div className='App'>
      {/* {' '} */}
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            name='task'
            id='task'
            value={task}
            placeholder='Task...'
            onChange={handleChange}
          />
          <input
            type='number'
            name='deadline'
            id='deadline'
            value={deadline}
            placeholder='Deadline (in Days)'
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todolist.map((task:ITask, key:number) => {
          return <TodoTask key={key} task={task} />
        })}
      </div>
    </div>
  );
};

export default App;
