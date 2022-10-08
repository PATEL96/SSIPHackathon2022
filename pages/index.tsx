import Navbar from "./Components/Navbar";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer";
import dynamic from "next/dynamic";

const Search = dynamic(() => import("./Components/Search"));

function IndexPage() {
    return (
        <>
            <div className={styles.container}>
                <div className="container-fluid bg-primary">
                    <Navbar />
                    <Search />
                </div>
                <DepartmentList />
                <Footer />
            </div>
        </>
    );
}

export default IndexPage;
