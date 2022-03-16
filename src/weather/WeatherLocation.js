import styles from './WeatherLocation.module.css'
const WeatherLocation = ({city,country,date}) => {
  return (
    <div className= {styles["location-box"]}>
    <div className={styles["location"]}>
      {city}, {country}
    </div>
    <div className={styles["date"]}>{date}</div>
  </div>

  );
};
export default WeatherLocation;
