import React from "react"
import styles from './Input.module.css'
const Input =React.forwardRef((props, ref)=>{
    return(
        <input className={styles[`${props.className}`]} type={props.type} ref={ref} placeholder={props.placeholder} /> 
    )
    
})
export default Input