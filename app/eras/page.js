import MyEras from "../components/MyEras"
import classes from "../components/my-page-styles.module.css";


export default function Home() {
    return (
        <div className={classes.home}>
            <h1 className={classes.headers}>Taylor Swift's Eras</h1>
            <MyEras></MyEras>
        </div>
    )
}