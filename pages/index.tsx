import Navbar from "./Components/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";
import Script from "next/script";

function IndexPage() {
    return (
        <>
            <div className={styles.container}>
                <div className="container-fluid bg-primary">
                    <Navbar />
                </div>
                <Script
                    async
                    src="https://cse.google.com/cse?cx=40a99cba2beb24774"
                ></Script>
                <div className="gcse-searchbox"></div>
                <Footer />
            </div>
        </>
    );
}

export default IndexPage;
