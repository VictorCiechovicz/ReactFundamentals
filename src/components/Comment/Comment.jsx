import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import { Avatar } from '../Avatar/Avatar'


export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar className={styles.imgProfile} src='https://github.com/maykbrito.png' />

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