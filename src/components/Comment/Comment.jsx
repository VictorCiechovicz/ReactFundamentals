import styles from './Comment.module.css'
import {Trash,ThumbsUp} from '@phosphor-icons/react'


export function Comment() {
  return (
    <div className={styles.comment}>
      <img className={styles.imgProfile} src='https://avatars.githubusercontent.com/u/106246945?v=4' />

      <div className={styles.wrapperInf}>
        <div className={styles.conteinerInf}>
          
        <div className={styles.userInf}>
          <strong>Victor Ciechovicz</strong>
          <span>Cerca de 2h</span>
            
          <p>Muito bom Devon, parabéns!! 👏👏</p>
          </div>
          <button className={styles.buttonTrash}>
          <Trash size={24} />
          </button>

        </div>
        <button className={styles.containerLike}>
         
        <ThumbsUp size={20} />
         
      <span>Aplaudir 03</span>

        </button>
  

      </div>
    </div>
  )
}