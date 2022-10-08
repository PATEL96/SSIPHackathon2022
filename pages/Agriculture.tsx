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
                                grains).<br></br> Productivity of horticulture
                                crops is much higher compared to productivity of
                                food grains (12.49 tones/ha against 2.23
                                tones/ha.). India has emerged as world leader in
                                the production of a variety of fruits like
                                mango, banana, guava, papaya, sapota,
                                pomegranate, Lime & aonla and is the second
                                largest producer of fruits and vegetables.
                                <br></br>
                                Besides, India has maintained its dominance in
                                the production of spices, coconut and cashewnut.
                                Among the new crops, kiwi, gherkins, kinnow,
                                date palm and oil palm have been successfully
                                introduced for commercial cultivation in the
                                country. Launch of National Horticulture Mission
                                has spurred the production and productivity of
                                horticultural crops. <br></br>Productivity of
                                horticultural crops has increased by about 38%
                                between 2004-05 and 2019-20(2nd Advance
                                Estimates). Increase in demand for horticultural
                                produce due to greater health awareness, rising
                                income, export demands and increasing population
                                poses the challenge for further increasing the
                                production and productivity of horticultural
                                crops. <br></br>The issue of climate change has
                                thrown up greater uncertainties and risks,
                                further imposing constraints on production
                                systems.
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
                                Digital Agricultural Division
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Ministry of Agriculture & Farmers Welfare aims
                                to improve awareness, knowledge and efficiency
                                of farmers. Keeping in view of the overall goal
                                of increasing farmers’ incomes and following the
                                recommendations of the Doubling of Farmers
                                Income (DFI) committee, the Digital Agriculture
                                Division has been created by reorienting the
                                erstwhile Information Technology Division.
                                <br></br> The National eGovernance Plan in
                                Agriculture (NeGPA) has been modified to include
                                new & emerging technologies in the field of
                                Digital Agriculture. During the last financial
                                year (2021-22 NeGPA), pilot projects have been
                                sanctioned in 10 States (details given below) as
                                per this modified NeGPA.<br></br> The Division
                                is also engaged in creating a federated Farmers
                                Database by compiling information of the farmers
                                from various databases available with the
                                Government and linking them with land records.
                                The Division is in the process of entering into
                                MoUs with various leading
                                Agriculture/Technology/Other players in the
                                Country for developing Proof of Concepts (PoCs)
                                on the farmers database. The IDEA Concept has
                                been finalised.<br></br> The Division also is
                                in-charge of an attached office – Mahalanobis
                                National Crop Forecast Centre (MNCFC). MNCFC was
                                established, initially, to provide in-season
                                crop forecasts and assessment of drought
                                situation using state of the art techniques and
                                methodologies developed by Indian Space Research
                                Organization (ISRO). Over the years, its scope
                                of work has expanded and it is now involved in
                                various activities of the Department.
                                <a href="http://www.ncfc.gov.in/">
                                    (http://www.ncfc.gov.in/)
                                </a>
                                <br></br> Apart from the above, a comprehensive
                                ICT strategy has been developed not only to
                                reach out to farmers in an easy and better way
                                but also for planning and monitoring of schemes
                                so that policy decisions can be taken at a
                                faster pace and farmers can be benefited
                                quickly. To empower different sections of rural
                                areas, different ICT strategies have been
                                devised:<br></br> a). Those who have access to
                                digital infrastructure can get the information
                                through websites/web portals.
                                <br></br> b). Those who have smart phones can
                                access the same information through mobile apps.
                                <br></br> c). Those who have basic phones, can
                                get this information through SMS advisories sent
                                by experts.<br></br> d). To get the personalized
                                information; farmers can call at the toll free
                                number of Kisan Call Centre – 18001801551.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                            >
                                Economin Administration
                            </button>
                        </h2>
                        <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Economic Administration (EA) Division in the D/o
                                Agriculture & Farmers Welfare deals with all
                                administrative & financial matters relating to
                                three attached offices i.e. Directorate of
                                Economics & Statistics (DES), Commission for
                                Agricultural Costs & Prices (CACP) and the MNCFC
                                (for FASAL Scheme).<br></br> Directorate of
                                Economics and Statistics (DES), an attached
                                office of the Department of Agriculture and
                                Farmers Welfare, is headed by Senior Economic &
                                Statistical Adviser. DES collects, disseminates
                                and publishes statistics on diverse facets of
                                agriculture and related sectors required for
                                policy formulation by the Government.<br></br>{" "}
                                Major Divisions of DES are (i) Cost of
                                Cultivation (ii) Land Use Statistics / Special
                                Data dissemination Standards (iii) Commercial
                                Crops (iv) Food Export (v) Coordination (vi)
                                Prices & Marketing (vii) Crops Forecasting
                                Coordination Centre (viii) Agro Economic
                                Research (ix) Agricultural Statistics.<br></br>{" "}
                                Over the years, a number of initiatives have
                                been taken by DES to bring about improvement in
                                the coverage, quality and timely availability of
                                agricultural statistics for the benefit of
                                farmers.<br></br>
                                <a href="http://desagri.gov.in" target="_blank">
                                    Read More...
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                            >
                                Plant Protection
                            </button>
                        </h2>
                        <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Plant Protection continues to play a significant
                                role in achieving targets of crops
                                production.Plant Protection The major thrust
                                areas of plant protection are promotion of
                                Integrated Pest management, ensuring
                                availability of safe and quality pesticides for
                                sustaining crop production from the ravages of
                                pests and diseases, streamlining the quarantine
                                measures for accelerating the introduction of
                                new high yielding crop varieties, besides
                                eliminating the chances of entry of exotic pests
                                and for human resource development including
                                empowerment of women in plant protection skills.
                                <br></br>
                                <a
                                    href="https://agricoop.gov.in/sites/default/files/Ready-reckoner-PP-I.pdf"
                                    target="_blank"
                                    className={styles.pdf}
                                >
                                    Ready Reckoner of Plant Protection – I (IPM
                                    Unit)
                                </a>
                                <br></br>
                                <a
                                    href="https://agricoop.gov.in/sites/default/files/Ready_Reckoner.pdf"
                                    target="_blank"
                                    className={styles.pdf}
                                >
                                    Ready Reckoner of Plant Protection – II
                                </a>
                                <br></br>
                                <a
                                    href="https://agricoop.gov.in/sites/default/files/ready_reckoner_pp_new.pdf"
                                    target="_blank"
                                    className={styles.pdf}
                                >
                                    Ready Reckoner of Plant Protection Division,
                                    Plant Protection - I Section (Pesticide
                                    Unit)
                                </a>
                                <br></br>
                                <a
                                    href="https://agricoop.gov.in/sites/default/files/ready-recokner-ppest_new.pdf"
                                    target="_blank"
                                    className={styles.pdf}
                                >
                                    Ready Reckoner of Plant Protection Division,
                                    Plant Protection, Establishment
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                            >
                                Drought Management
                            </button>
                        </h2>
                        <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Department of Agriculture and Farmers Welfare
                                (DA&FW) is mandated to coordinate relief
                                measures necessitated by drought, hailstorm,
                                pest attack and cold wave/frost. Spatial
                                distribution and quantum of rainfall during
                                South-West Monsoon (June-September) mainly
                                determines the incidence of drought in the
                                country, as South-West Monsoon accounts for more
                                than 70% of annual rainfall. DA&FW monitors
                                progress of South-West Monsoon in the country,
                                in close coordination with India Meteorological
                                Department (IMD) and keeps a watch over
                                deficient/scarcity rainfall conditions.<br></br>{" "}
                                The Department also reviews and updates the
                                Crisis Management Plan (CMP) for drought every
                                year. The Plan defines roles and
                                responsibilities of various agencies involved in
                                crisis management during drought.<br></br> The
                                State Governments initiate necessary relief
                                measures in the wake of natural calamities from
                                State Disaster Response Fund (SDRF), which is
                                readily available with them. Contribution to
                                SDRF is made by Central and State Governments in
                                the ratio of 3:1 for 18 general category States
                                (Andhra Pradesh, Bihar, Chhattisgarh, Goa,
                                Gujarat, Haryana, Jharkhand, Karnataka, Kerala,
                                Madhya Pradesh, Maharashtra, Odisha, Punjab,
                                Rajasthan, Tamil Nadu, Telangana, Uttar Pradesh
                                & West Bengal) and in the ratio of 9:1 for 10
                                special category States (8 North Eastern States,
                                namely, Arunachal Pradesh, Assam, Manipur,
                                Meghalaya, Mizoram, Nagaland, Tripura & Sikkim;
                                and 2 Hilly States, namely, Himachal Pradesh &
                                Uttarakhand). Government of India provides
                                additional financial assistance from National
                                Disaster Response Fund (NDRF), over and above
                                SDRF, for natural calamities of severe nature as
                                per established procedure and extant norms.
                                Allocation under SDRF is made on the basis of
                                recommendations of the Finance Commission.
                                <br></br>
                                Financial Assistance approved to the States from
                                NDRF for natural calamities, (drought,
                                hailstorm, pest attack & cold wave/frost) during
                                the period from 2010-11 to 2020-21, including
                                drought, is at{" "}
                                <a
                                    href="https://agricoop.nic.in/sites/default/files/drought_management.pdf"
                                    target="_blank"
                                >
                                    Annexure.
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); //AIzaSyA-WAnj2qPn5FaRIDBj8njHfPlgxR_yFso
}
