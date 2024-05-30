import { PlusCircle } from "phosphor-react"
import styles from './NewTask.module.css'
import { ChangeEvent, FormEvent, useState } from "react";
import { TodoList } from "./TodoList";

export interface Task {
  content: string;
  isActive: boolean;
}

export function NewTask() {

  const [tasks, setNewTask] = useState<Task[]>([]);
  const [newTaskValueInput, setNewTaskValueInput] = useState('');

  function handleNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (newTaskValueInput !== '') {
      setNewTask([...tasks, {
        content: newTaskValueInput,
        isActive: true
      }]);
      setNewTaskValueInput('');
    }
  }

  function handleInputNewTask(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    setNewTaskValueInput(inputValue);
  }

  return (
    <div className={styles.taskContainer}>
      <div>
        <form onSubmit={handleNewTask}>
          <div className={styles.inputTask}>
            <input onChange={handleInputNewTask} type="text" placeholder="Adicione uma tarefa" value={newTaskValueInput} />
          </div>
          <div className={styles.btnTask}>
            <button>Criar
              <PlusCircle size={20}/>
            </button>
          </div>
        </form>
      </div>
      <div className={styles.todoListContainer}>
        <TodoList content={tasks} changeState={setNewTask}/>
      </div>  
    </div>
  )
}