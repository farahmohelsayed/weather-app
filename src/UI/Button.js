import styles from './Button.module.css'
const Button =(props)=>{
    return(
        <button className={styles[`${props.className}`]}  onClick={props.onClick}>{props.children}</button>
    )
}
export default Button