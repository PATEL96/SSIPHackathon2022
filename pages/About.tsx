import Navbar from "./Components/Navbar";
import styles from "../styles/Home.module.css";

export default function About() {
    return (
        <div className={styles.container}>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
        </div>
    );
}
