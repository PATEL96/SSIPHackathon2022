import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Department.module.css";

export default function DepartmentList() {
    return (
        <div>
            <div className={styles.Main}>
                <div className={styles.Card}>
                    <Link href="/Agriculture">
                        <div className="card">
                            <Image
                                src="https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg"
                                className="card-img-top"
                                alt="..."
                                height={250}
                                width={450}
                            />
                            <div className={styles.Link}>
                                <div className="card-body">
                                    <p className="card-text">Agriculture</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.Card}>
                    <Link href="/Agriculture">
                        <div className="card">
                            <Image
                                src="https://media.istockphoto.com/photos/blurred-paintings-on-the-wall-picture-id936902194?b=1&k=20&m=936902194&s=170667a&w=0&h=T6uvJCSpHdJU80aICVKA8ojxxZkpb58ofigSB89GXP8="
                                className="card-img-top"
                                alt="..."
                                height={250}
                                width={450}
                            />
                            <div className={styles.Link}>
                                <div className="card-body">
                                    <p className="card-text">Art & Culture</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.Card}>
                    <Link href="/Agriculture">
                        <div className="card">
                            <Image
                                src="https://cdn.pixabay.com/photo/2018/10/19/10/43/social-media-3758364__340.jpg"
                                className="card-img-top"
                                alt="..."
                                height={250}
                                width={450}
                            />
                            <div className={styles.Link}>
                                <div className="card-body">
                                    <p className="card-text">
                                        Communication & I.T.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.Card}>
                    <Link href="/Agriculture">
                        <div className="card">
                            <Image
                                src="https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498__340.jpg"
                                className="card-img-top"
                                alt="..."
                                height={250}
                                width={450}
                            />
                            <div className={styles.Link}>
                                <div className="card-body">
                                    <p className="card-text">Education</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.Card}>
                    <Link href="/Agriculture">
                        <div className="card">
                            <Image
                                src="https://media.istockphoto.com/photos/golden-color-plate-describing-the-constitution-of-india-picture-id1311748943?b=1&k=20&m=1311748943&s=170667a&w=0&h=D4BSQH_vqd2ePX_wI77uaQB6rZQ7B5yVif0QobwizG0="
                                className="card-img-top"
                                alt="..."
                                height={250}
                                width={450}
                            />
                            <div className={styles.Link}>
                                <div className="card-body">
                                    <p className="card-text">Law & Justice</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.Card}>
                    <Link href="/Agriculture">
                        <div className="card">
                            <Image
                                src="https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__340.jpg"
                                className="card-img-top"
                                alt="..."
                                height={250}
                                width={450}
                            />
                            <div className={styles.Link}>
                                <div className="card-body">
                                    <p className="card-text">
                                        Science & Teccnology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
