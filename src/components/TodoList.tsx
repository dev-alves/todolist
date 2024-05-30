import styles from './TodoList.module.css'
import svg from '../assets/Clipboard.svg'
import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { Task } from './NewTask';

interface TaskListProps {
  content: Task[],
  changeState: (array: Task[]) => void
}

export function TodoList( { content,  changeState} : TaskListProps) {

  const allFinished = content.filter(task => !task.isActive).length;
  const allTasks = content.length;

  function handleChangeStateActiveTask(task: Task, isActive: boolean) {
    const values = [...content];
    const elementIndex = values.findIndex(c => c.content === task.content && c.isActive === task.isActive);
    const element = content[elementIndex];
    element.isActive = isActive;
    values[elementIndex] = element;
    changeState(values);
  }

  function handleInactiveTask(task: Task) {
    handleChangeStateActiveTask(task, false);
  }

  function handleActiveTask(task: Task) {
    handleChangeStateActiveTask(task, true);
  }

  function handleDelementTask(task: Task) {
    changeState([...content.filter(c => c.content !== task.content)])
  }

  return (
    <>
      {content.length === 0 ? (
         <div className={styles.todoListContainer}>
          <div className={styles.header}>
            <span className={styles.createdTask}>Tarefas criadas</span>
            <span className={styles.totalCreated}>0</span>
            <span className={styles.finishedTask}>Concluídas</span>
            <span className={styles.totalFinished}>0</span>
          </div>
          <div className={styles.todoList}>
            <img src={svg} alt="" />
            <div className={styles.todoInfo}>
              <p>
                Você ainda não tem tarefas cadastradas
              </p>
              <p>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        </div>
      ): (
        <div className={styles.todoListContainerWithValue}>
          <div className={styles.headerWithValues}>
            <div className={styles.createdTasksContainer}>
              <span className={styles.createdTask}>Tarefas criadas</span>
              <span className={styles.totalCreated}>{content.length}</span>
            </div>
            <div className={styles.finishedTaskContainer}>
              <span className={styles.finishedTask}>Concluídas</span>
              <span className={styles.totalFinished}>{allFinished} de {allTasks}</span>
            </div>
        </div>
        {content.map(task =>
          <div className={styles.todoListTasksContainer} key={task.content}>
            <div className={styles.btnFinishedTaskContainer}>
              {task.isActive ? 
                (<Circle 
                  className={styles.circle}
                  size={20}
                  weight='bold'
                  onClick={() => handleInactiveTask(task)}
                />) : (<CheckCircle
                  size={20}
                  weight="duotone" 
                  onClick={() => handleActiveTask(task)}
                />)
              }
            </div>
            <div className={styles.contentContainer}>
              {task.isActive ? (<p>{task.content}</p>) : (<p><s>{task.content}</s></p>)}
            </div>
            <div className={styles.btnDeleteContainer}>
              <Trash 
                size={20}
                onClick={() => handleDelementTask(task)}
              />
            </div>
          </div>
        )}
      </div>
      )}
    </> 
  )
}