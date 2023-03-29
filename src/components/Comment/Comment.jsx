import styles from './Comment.module.css'
import { Trash, ThumbsUp } from '@phosphor-icons/react'

import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'


export function Comment({ content, onDeleteComment }) {
  const [like, setLike] = useState(0)
  
  function handleDeleteComment() {
    onDeleteComment(content)
}

  function handleLikeComment() {
    setLike((state) =>{
      return state+1
      }
      )
  }
  return (
    <div className={styles.comment}>
      <Avatar className={styles.imgProfile} src='https://github.com/maykbrito.png' />

      <div className={styles.wrapperInf}>
        <div className={styles.conteinerInf}>
          
        <div className={styles.userInf}>
          <strong>Victor Ciechovicz</strong>
          <span>Cerca de 2h</span>
            
            <p>{content}</p>
          </div>
          <button className={styles.buttonTrash} onClick={handleDeleteComment}>
          <Trash size={24} />
          </button>

        </div>
        <button className={styles.containerLike} onClick={handleLikeComment}>
         
        <ThumbsUp size={20} />
      
          <span>Aplaudir {like}</span>

        </button>
  

      </div>
    </div>
  )
}