import Navbar from "./Components/Navbar";
import styles from "../styles/Form.module.css";

export default function MoreSupport() {
    return (
        <div>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
            <div>
                <div className={styles.Form}>
                    <div className={styles.listing}>
                        <div className={styles.Name}>
                            First Name
                            <input type="text" className={styles.Input} />
                        </div>
                        <div className={styles.Name}>
                            Last Name
                            <input type="text" className={styles.Input} />
                        </div>
                    </div>
                </div>
                <div className={styles.Form}>
                    <div className={styles.listing}>
                        <div className={styles.Name}>
                            E-Mail
                            <input type="text" className={styles.Input} />
                        </div>
                        <div className={styles.Name}>
                            Contact Number
                            <input type="text" className={styles.Input} />
                        </div>
                    </div>
                </div>
                <div className={styles.Form}>
                    <div className={styles.listing}>
                        <div className={styles.Name}>
                            Problem Desciption/Suggestion
                            <textarea className={styles.Text} />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    );
}
