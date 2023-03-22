import styles from './Post.module.css' 
import { Comment } from '../Comment/Comment'

import { Avatar } from '../Avatar/Avatar'


export function Post(){
  return (
    <article className={styles.post}>
      
      <div className={styles.header}>
        <div className={styles.wrapperInfUser}>
         <Avatar className={styles.imgProfile} src='https://avatars.githubusercontent.com/u/106246945?v=4'/>
          <div className={styles.wrapperInfProfile}>
            <strong>Victor Ciechovicz</strong>
            <span>Dev Front-End</span>
          </div>


         </div>


        <time dateTime='2023-03-20'>
          Públicado há 1h
        </time>
      </div>
      
      <div className={styles.mansage}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href='#'>  jane.design/doctorcare </a> </p>
        <p> <a href='#'>#novoprojeto #nlw #rocketseat  </a></p>
      </div>
   
      <form className={styles.comentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe seu comentário' />
        

        <footer>
                 <button  type='submit'>Publicar</button>
      </footer>
          

</form >
<Comment/>
</article>
  )
}