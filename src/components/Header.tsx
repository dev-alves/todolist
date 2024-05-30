import styles from './Header.module.css'
import TodoImg from '../assets/todo.svg'
import Rocket from '../assets/rocket.svg'

export function Header() {
  return (
    <header>
      <div className={styles.logosContainer}>
        <div>
          <img src={Rocket} alt=""/>
        </div>
        <div>
          <img src={TodoImg} alt="" />
        </div>
      </div>
    </header>
  )
}