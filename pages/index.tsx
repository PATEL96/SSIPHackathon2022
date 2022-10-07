import Navbar from "./Components/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";

function IndexPage() {
    return (
        <>
        <div className={styles.container}>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
            
           <div className="gcse-searchresults"></div>
                      <Footer />
           
        </div>
        </>
    );
}

export default IndexPage;
