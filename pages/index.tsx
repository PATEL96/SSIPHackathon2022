import Navbar from "../components/Navbar";
import Department from "./Depatments/Department";
import styles from "../styles/Home.module.css";

function IndexPage() {
    return (
        <div className={styles.container}>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
            <Department />
        </div>
    );
}

export default IndexPage;
