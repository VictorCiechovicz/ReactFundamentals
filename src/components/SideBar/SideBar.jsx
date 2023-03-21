import styles from './SideBar.module.css'
import {PencilLine} from '@phosphor-icons/react'


export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1679212792248-6c8c9b5fd899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />

      
      <div className={styles.profile}>
       
          
        <img className={styles.imgProfile} src='https://avatars.githubusercontent.com/u/106246945?v=4'/>
     

      <strong>Victor Ciechovicz</strong>
      <span>Dev Front-End</span>
      </div>

      <footer>
     
        <a href='#'>
        <PencilLine  size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}