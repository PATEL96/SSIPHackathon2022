import Navbar from "../Components/Navbar";
import styles from "../styles/Home.module.css";
import DepartmentList from "./Depatments/DepartmentList";

function IndexPage() {
    return (
        <div className={styles.container}>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
            <DepartmentList />
        </div>
    );
}

export default IndexPage;
