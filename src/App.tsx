import styles from './App.module.css'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

function App() {
  return (
    <>
      <Header />
      <div className={styles.taskContainer}>
        <NewTask />
      </div>
    </>
  )
}

export default App
