import styles from "../styles/Accordian.module.css";
import Navbar from "./Components/Navbar";

export default function Art_Culture() {
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
                                Overview
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Culture plays an important role in the
                                development of any nation. It represents a set
                                of shared attitudes, values, goals and
                                practices. Culture and creativity manifest
                                themselves in almost all economic, social and
                                other activities. A country as diverse as India
                                is symbolized by the plurality of its culture.
                                <br></br>
                                India has one of the world’s largest collections
                                of songs, music, dance, theatre, folk
                                traditions, performing arts, rites and rituals,
                                paintings and writings that are known, as the
                                ‘Intangible Cultural Heritage’ (ICH) of
                                humanity. In order to preserve these elements,
                                the Ministry of Culture implements a number of
                                schemes and programmes aimed at providing
                                financial support to individuals, groups and
                                cultural organizations engaged in performing,
                                visual and literary arts etc.<br></br> This
                                section offers comprehensive information related
                                to cultural heritage, ancient monuments,
                                literary arts, visual arts, schemes, programmes,
                                performing arts, fairs and festivals and
                                handicraft of India. Detailed information on
                                various organizations involved in promotion and
                                propagation of Indian art and culture is also
                                available in this section.
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
                                Archives
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                The genesis of the National Archives of India
                                may be traced back to the year 1860 when
                                Sandeman, the Civil Auditor, in his report
                                stressed the need of relieving the offices of
                                congestion by destruction of the papers of
                                routine nature and transfer of all valuable
                                records to a ‘Grand Central Archive’. Nothing
                                could come out, however, in concrete shape until
                                1889 when Professor G.W. Forrest of Elphinstone
                                College, Bombay was entrusted the job to examine
                                the records of the Foreign Department of the
                                Government of India. <br></br>Earlier he had
                                earned reputation as an Archivist for his work
                                in the Bombay Records Office. In his report, he
                                made a strong plea for transferring all records
                                of the administration of East India Company to a
                                Central Repository. As a result, Imperial
                                Records Department (IRD) came into existence on
                                11 March 1891 which was located in Imperial
                                Secretariat Building at Calcutta (Kolkata).
                                Professor G.W Forrest was made its Officer in
                                Charge. His main task was to examine, transfer,
                                arrange and catalogue records of all the
                                Departments<br></br> and to organise a Central
                                Library in place of various Departmental
                                Libraries. After G.W. Forrest, the work at
                                Imperial Records Department (IRD) progressed
                                well under S.C. Hill (1900), C.R. Wilson (1902),
                                N.L. Hallward (1904), E. Denison Ross (1905),
                                A.F. Scholfield (1915), R.A. Blaker (1919), J.M.
                                Mitra (1920) and RaiBahadur A.F.M. Abdul Ali
                                (1922-1938) who were scholars as well as Records
                                Keepers<br></br>
                                <a
                                    href="https://www.indiaculture.nic.in/archives"
                                    target="_blank"
                                >
                                    Read more...
                                </a>
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
                                Music & Dance
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Indian classical music is a rich tradition that
                                originated in South Asia and can now be found in
                                all corners of the world. It’s origins date back
                                to sacred Vedic scriptures over 6,000 years ago
                                where chants developed a system of musical notes
                                and rhythmic cycles. In this way, Indian
                                classical music is very closely connected to
                                nature, taking inspiration from natural
                                phenomena including the seasons and times of the
                                day to create ‘ragas’ or musical moods and many
                                time cycles or ‘taals’ that have been further
                                codified.Compositions are fixed but most of the
                                music is improvised within the structure of
                                notes and mathematics. This gives the music a
                                spontaneous freedom where each artist and every
                                performance is ensured to be completely unique.
                                <br></br>
                                Indian classical music is generally passed down
                                in an oral tradition where the student would
                                spend many years with their ‘guru’, developing a
                                very special, spiritual bond, imbibing all
                                aspects of the music along with philosophical
                                and moral principles that shape them for life.
                                <br></br>
                                The Akademi's charter of functions was expanded
                                along the original lines in 1961, when the
                                Sangeet Natak Akademi was reconstituted by the
                                Government as a society and registered under the
                                Societies Registration Act of 1860 (as amended
                                in 1957). These functions are set down in the
                                Akademi's Memorandum of Association, adopted at
                                its registration as a society on 11 September
                                1961. <br></br>Since its inception the Akademi
                                has been functioning as the apex body of the
                                performing arts in the country, preserving and
                                promoting the vast intangible heritage of
                                India's diverse culture expressed in the forms
                                of music, dance and drama. In furtherance of its
                                objectives the Akademi coordinates and
                                collaborates with the governments and art
                                academies of different States and Territories of
                                the Union of India as also with major cultural
                                institutions in the country. The Akademi
                                establishes and looks after institutions and
                                projects of national importance in the field of
                                the performing arts.<br></br> The National
                                School of Drama, set up in 1959, was the first
                                of their two national institutions of dance --
                                Jawaharlal Nehru Manipur Dance Academy in Imphal
                                and Kathak Kendra (National Institute of Kathak
                                Dance) in New Delhi - were set up in 1964
                                respectively. National Projects of Support to
                                Kuttiyattam - the age-old Sanskrit theatre of
                                Kerala - Chhau dances of eastern India and
                                Sattriya traditions of Assam have been lauched
                                subsequently.<br></br>
                                <a
                                    href="https://sangeetnatak.gov.in/sections/music"
                                    target="_blank"
                                >
                                    Read more...
                                </a>
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
                                Meseum & Antiques
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                The National Gallery of Modern Art (NGMA),
                                founded in 1954, is the only institution of its
                                kind in the country representing evolution and
                                pictorial transformation in visual arts over the
                                last more than 150 years. NGMA functions as a
                                subordinate office under the superintendence and
                                administrative control of the Ministry of
                                Culture. The main objectives of the NGMA are to
                                create an understanding and sensibility among
                                the Indian public towards the visual and plastic
                                arts in general and to promote the development
                                of contemporary Indian art in particular. In
                                2009, NGMA inaugurated the opening of its New
                                Extension Wing at New Delhi which increased its
                                display spaces by more than 6 times. For more
                                information please visit{" "}
                                <a
                                    href="http://www.ngmaindia.gov.in"
                                    target="_blank"
                                >
                                    http://www.ngmaindia.gov.in
                                </a>
                                <br></br>
                                The Salar Jung Museum of Hyderabad is a
                                repository of the artistic achievements of
                                diverse European, Asian and Far Eastern
                                countries of the world. The major portion of
                                this collection was acquired by Nawab Mir Yousuf
                                Ali Khan popularly known as Salar Jung III. The
                                zeal for acquiring art objects continued as a
                                family tradition for three generations of Salar
                                Jungs. In 1914, Salar Jung III, after having
                                relinquished the post of Prime Minister to
                                H.E.H., the Nizam VII, Nawab Mir Osman Ali Khan,
                                devoted rest of his entire life in collecting
                                and enriching the treasures of art and
                                literature till he lived. The precious and rare
                                art objects collected by him for a period of
                                over forty years, find place in the portals of
                                the Salar Jung Museum, as rare to very rare
                                pieces of art.<br></br> After the demise of
                                Salar Jung-III, the vast collection of precious
                                art objects and his Library which were housed in
                                "Dewan-Deodi" the ancestral palace of the Salar
                                Jungs, the desirability of organizing a Museum
                                out of the Nawab's collection dawned quite soon
                                and Sri M.K. Velodi, the then Chief Civil
                                Administrator of the Hyderabad State approached
                                Dr.James Cousins a well known art critic, to
                                organize the various objects of art and curios
                                which were lying scattered in different palaces
                                of Salar Jung III to form a Museum.<br></br>
                                With a view to perpetuate the name of Salar Jung
                                as a world renowned art connoisseur, the Salar
                                Jung Museum was brought in to existence and was
                                opened to the public by Pandit Jawaharlal Nehru,
                                the then Prime Minister of India on 16th
                                December, 1951.
                                <br></br>
                                <a
                                    href="https://www.indiaculture.nic.in/museums-antiquities"
                                    target="_blank"
                                >
                                    Read more...
                                </a>
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
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseFive"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive"
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
                        <h2 className="accordion-header" id="headingSix">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseSix"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSix"
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
                        <h2 className="accordion-header" id="headingSeven">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseSeven"
                                aria-expanded="false"
                                aria-controls="collapseSeven"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseSeven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingSeven"
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
                        <h2 className="accordion-header" id="headingEight">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEight"
                                aria-expanded="false"
                                aria-controls="collapseEight"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseEight"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEight"
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
                        <h2 className="accordion-header" id="headingNine">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseNine"
                                aria-expanded="false"
                                aria-controls="collapseNine"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseNine"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingNine"
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
                        <h2 className="accordion-header" id="headingTen">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTen"
                                aria-expanded="false"
                                aria-controls="collapseTen"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseTen"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTen"
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
                        <h2 className="accordion-header" id="headingEleven">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseEleven"
                                aria-expanded="false"
                                aria-controls="collapseEleven"
                            >
                                Administration Department
                            </button>
                        </h2>
                        <div
                            id="collapseEleven"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingEleven"
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
