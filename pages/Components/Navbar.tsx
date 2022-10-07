import Image from "next/image";
import styles from "../../styles/Department.module.css";
import Link from "next/link"; 
{ ssr: false }

const Navbar = () => {
    return (
        <>
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Image
                        src="https://amritmahotsav.mygov.in/assets/images/logo-new.svg"
                        height={60}
                        width={120}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" className={styles.Link}>
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/About" className={styles.Link}>
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/help" className={styles.Link}>
                                <a className="nav-link" href="/help">
                                    Help!
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <script async src="https://cse.google.com/cse.js?cx=503465bdf9ab64f35" />
            
            <div className="gcse-search" />
            </div>
        </nav>
        </>
    )
};

export default Navbar;
