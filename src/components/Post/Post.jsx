import { format, formatDistanceToNow} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import styles from './Post.module.css' 

import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'
import { useState } from 'react'


export function Post({ author, publishedAt, content }) { 
  const [comments, setComments] = useState([''])
  const [newComments,setNewComments] = useState('')

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale:ptBr,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix:true,
  })

  function hendleCreateNewComment() {
    event.preventDefault()
    
    setComments([...comments, newComments])
    setNewComments('')
  }
  
  function handleNewComments() {
    event.target.setCustomValidity('')
    setNewComments(event.target.value)
  }

  function deleteComment(commentToDelete) {
    const createNewArrayOfComments = comments.filter(comments => {
      return comments!==commentToDelete
    }
  )
    setComments(createNewArrayOfComments)
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  return (
    <article className={styles.post}>
      
      <div className={styles.header}>
        <div className={styles.wrapperInfUser}>

          <Avatar className={styles.imgProfile} src={author.authorUrl} />

          <div className={styles.wrapperInfProfile}>

            <strong>{author.name}</strong>

            <span>{author.role}</span>
          </div>


         </div>


        <time title= {publishedDateFormatted} dateTime={publishedAt.toISOString()}>
           {publishedDateRelativeToNow}
        </time>
      </div>
      
      <div className={styles.mansage}>
        {
          content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if (line.type === 'link') {
              return <p key={line.content}><a href='#'>{line.content}</a></p>
            }
            
          }
            )
     }
      </div>
   
      <form
        onSubmit={hendleCreateNewComment}
        className={styles.comentForm}
       
      
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder='Deixe seu comentário'
          value={newComments}
          onChange={handleNewComments}
          onInvalid={handleNewCommentChange}
          required
        />
        

        <footer>
          <button
           disabled={newComments.length   === 0}
            type='submit'>Publicar</button>
      </footer>
          

</form >
      {comments.map(comments => {
        return <Comment
          key={comments}
          content={comments}
          onDeleteComment={deleteComment}
        />
})}
</article>
  )
}