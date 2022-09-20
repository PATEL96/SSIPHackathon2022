import styles from "../styles/Accordian.module.css";
import Navbar from "./Components/Navbar";

export default function Agriculture() {
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
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
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
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Price Support
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                The Cooperative Sector has been playing a
                                significant role in the area of disbursing
                                agricultural credit providing market support to
                                farmers, distribution of agricultural inputs and
                                imparting cooperative education and training
                                etc.Agriculture MarketingThe basic objective of
                                the Cooperation Division is to design long term
                                and short term strategies for reducing economic
                                disparities between the downtrodden rural people
                                and the rural rich as well as regional
                                imbalances, including rural and urban
                                differences. The Cooperation Division is
                                implementing one Central Sector Plan Scheme in
                                the country during the 12th Five Year Plan viz.
                                Central Sector Integrated Scheme on Agriculture
                                Cooperation having two sub-components (i)
                                Assistance to NCDC programmes for development,
                                including assistance to Multi-State Cooperative
                                Societies and (ii) Assistance for Cooperative
                                Education & Training.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Horticulture
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Indian horticulture sector contributes about 33%
                                to the agriculture Gross Value Added (GVA)
                                making very significant contribution to the
                                Indian economy. Apart from ensuring nutritional
                                security of the nation, it provides alternate
                                rural employment opportunities, diversification
                                in farm activities, and enhanced income to
                                farmers. India is currently producing about
                                320.48 million tones of horticulture produce
                                which has surpassed the food grain production,
                                that too from much less area (25.66 million Ha.
                                for horticulture against 127.6 M. ha. for food
                                grains). Productivity of horticulture crops is
                                much higher compared to productivity of food
                                grains (12.49 tones/ha against 2.23 tones/ha.).
                                India has emerged as world leader in the
                                production of a variety of fruits like mango,
                                banana, guava, papaya, sapota, pomegranate, Lime
                                & aonla and is the second largest producer of
                                fruits and vegetables. Besides, India has
                                maintained its dominance in the production of
                                spices, coconut and cashewnut. Among the new
                                crops, kiwi, gherkins, kinnow, date palm and oil
                                palm have been successfully introduced for
                                commercial cultivation in the country. Launch of
                                National Horticulture Mission has spurred the
                                production and productivity of horticultural
                                crops. Productivity of horticultural crops has
                                increased by about 38% between 2004-05 and
                                2019-20(2nd Advance Estimates). Increase in
                                demand for horticultural produce due to greater
                                health awareness, rising income, export demands
                                and increasing population poses the challenge
                                for further increasing the production and
                                productivity of horticultural crops. The issue
                                of climate change has thrown up greater
                                uncertainties and risks, further imposing
                                constraints on production systems.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Accordion Item #4
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>
                                    This is the third item's accordion body.
                                </strong>{" "}
                                It is hidden by default, until the collapse
                                plugin adds the appropriate classes that we use
                                to style each element. These classes control the
                                overall appearance, as well as the showing and
                                hiding via CSS transitions. You can modify any
                                of this with custom CSS or overriding our
                                default variables. It's also worth noting that
                                just about any HTML can go within the{" "}
                                <code>.accordion-body</code>, though the
                                transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
