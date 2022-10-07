import styles from "../styles/Accordian.module.css";
import Navbar from "./Components/Navbar";

export default function Communication() {
    return (
        <div>
            <div className="container-fluid bg-primary">
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                All administrative, establishment and service
                                matters of the officers and staffs posted in DAC
                                (Proper). Cadre management, promotions,
                                appointment /transfer/ postings of CSS/CSSS/CSCS
                                officials in the Department and its 5 other
                                participating units.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                All administrative, establishment and service
                                matters of the officers and staffs posted in DAC
                                (Proper). Cadre management, promotions,
                                appointment /transfer/ postings of CSS/CSSS/CSCS
                                officials in the Department and its 5 other
                                participating units.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
