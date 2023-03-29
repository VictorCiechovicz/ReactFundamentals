import { Header } from "./components/Header/Header"
import { SideBar } from "./components/SideBar/SideBar"
import { Post } from "./components/Post/Post"

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      authorUrl:'https://avatars.githubusercontent.com/u/9091491?v=4',
      name: 'Jane Cooper',
      role:'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
      
    ],
    publishedAt: new Date("2023-03-23 07:00:00"),
  },
  {
    id: 2,
    author: {
      authorUrl:'https://avatars.githubusercontent.com/u/37511552?v=4',
      name: 'Devon Lane',
      role:'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: 'devonlane.design' }
      
    ],
    publishedAt: new Date("2023-03-22 14:00:00"),
   },


 

]

export function App() {
  return ( 
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <div>
          {posts.map(posts => {
            return (<Post
              key={posts.id}
              author={posts.author}
              content={posts.content}
              publishedAt={posts.publishedAt}
            
            />)
        })}

        </div>
      </div>
    </div>
  )
}


