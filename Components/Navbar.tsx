import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
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
                            <Link href="/">
                                <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Departments
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/About">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#">
                                <a className="nav-link" href="#">
                                    Help!
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
