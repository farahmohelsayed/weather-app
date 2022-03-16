import styles from './SearchBox.module.css'
const SearchBox =(props)=>{
return(
<div className={styles[`${props.className}`]}>
    {props.children}
</div>
)
}
export default SearchBox