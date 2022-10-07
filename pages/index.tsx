import Navbar from "./Components/Navbar";
import styles from "../styles/Home.module.css";
import DepartmentList from "./Depatments/DepartmentList";
import Footer from "./Components/Footer";

function IndexPage() {
    return (
        <div className={styles.container}>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
            <DepartmentList />
            <Footer />
        </div>
    );
}

export default IndexPage;
