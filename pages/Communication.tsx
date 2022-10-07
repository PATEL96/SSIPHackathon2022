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
                                Policies
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                This page provides details of major policy
                                initiatives of Government of India which have a
                                direct bearing on Electronics System Design and
                                Manufacturing (ESDM) sector.<br></br>{" "}
                                Electronics industry is the world’s largest and
                                fastest growing industry and is increasingly
                                finding applications in all sectors of the
                                economy. The Government of India attaches high
                                priority to electronics hardware manufacturing
                                and it is one of the important pillars of both
                                “Make in India” and “Digital India” programmes.
                                Implementation of the Schemes/ Programmes under
                                the aegis of the National Policy on Electronics
                                2012 (NPE 2012) has successfully consolidated
                                the foundations for a competitive Indian ESDM
                                value chain. It is now proposed to build on that
                                foundation to propel the growth of ESDM industry
                                in the country. Besides the economic imperative,
                                focus on electronics hardware manufacturing up
                                to the integrated circuit or chip level is
                                required due to the growing security concerns.
                                However, the sector continues to face many
                                challenges.<br></br> The National Policy on
                                Electronics 2019 (NPE 2019), prepared after
                                extensive stakeholder consultation, envisages to
                                position India as a global hub for ESDM with
                                thrust on exports by encouraging and driving
                                capabilities in the country for developing core
                                components, including chipsets, and creating an
                                enabling environment for the industry to compete
                                globally.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="true"
                                aria-controls="collapseTwo"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                In furtherance of the vision of Aatmanirbhar
                                Bharat and positioning India as the global hub
                                for ESDM, a comprehensive program for the
                                development of semiconductors and display
                                manufacturing ecosystem in India was approved by
                                Government of India with an outlay of ₹ 76,000
                                crore ({">"}10 billion USD). The Programme
                                contained various schemes to attract investments
                                in the field of semiconductors and display
                                manufacturing. The Union Cabinet in its meeting
                                held on 21.09.2022 has accorded its approval for
                                modification of this programme. Following
                                modifications have been approved:<br></br>
                                <br></br> 1. Fiscal support of 50% of Project
                                Cost on pari-passu basis for all technology
                                nodes under Scheme for Setting up of
                                Semiconductor Fabs in India.<br></br> 2. Fiscal
                                support of 50% of Project Cost on pari-passu
                                basis under Scheme for Setting up of Display
                                Fabs.<br></br> 3. Fiscal support of 50% of
                                Capital Expenditure on pari-passu basis under
                                Scheme for Setting up of Compound Semiconductors
                                / Silicon Photonics / Sensors Fab and
                                Semiconductor ATMP /OSAT facilities in India.
                                Additionally, target technologies under the
                                Scheme will include Discrete Semiconductor Fabs.
                                <br></br>
                                <br></br> The programme aims to provide
                                attractive incentive support to companies /
                                consortia that are engaged in Silicon
                                Semiconductor Fabs, Display Fabs, Compound
                                Semiconductors / Silicon Photonics / Sensors
                                (including MEMS) Fabs / Discrete Semiconductor
                                Fabs, Semiconductor Packaging (ATMP / OSAT) and
                                Semiconductor Design.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
