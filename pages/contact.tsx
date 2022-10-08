import React from "react";
import styles from "../styles/Contact.module.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const Contact = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <form method="get" action="/Success">
                    <div className={styles.mb3}>
                        <label htmlFor="name" className={styles.formlabel}>
                            Enter your Full Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="email" className={styles.formlabel}>
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="phone" className={styles.formlabel}>
                            Phone
                        </label>
                        <input
                            type="phone"
                            className="form-control"
                            name="phone"
                            id="phone"
                        />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="desc">
                            Problem Description / Suggestion
                        </label>
                        <textarea
                            className="form-control"
                            placeholder="Write Problem or suggestion here"
                            name="desc"
                            id="desc"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            ;
            <Footer />
        </>
    );
};

export default Contact;
