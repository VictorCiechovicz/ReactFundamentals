import styles from './Avatar.module.css'

export function Avatar(props) {
  return (
    <img className={props.className} src={props.src} />
  )
}

