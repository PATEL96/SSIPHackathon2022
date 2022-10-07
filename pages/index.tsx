import Navbar from "./Components/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";
import DepartmentList from "./Depatments/DepartmentList";

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
