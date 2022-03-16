import styles from './WeatherTemp.module.css'
const WeatherTemp =({temp,state})=>{
    return(
        <div className={styles["weather-box"]}>
        <div className={styles["temp"]}>{temp}°C</div>
        <div className={styles["weather"]}>{state}</div>
      </div>
    )
}
export default WeatherTemp