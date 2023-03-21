import { Header } from "./components/Header/Header"
import { SideBar } from "./components/SideBar/SideBar"
import { Post } from "./components/Post/Post"

import styles from './App.module.css'

import './global.css'

export function App() {
  return ( 
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <div>
        <Post />
        <Post />
        <Post/>

        </div>
      </div>
    </div>
  )
}


