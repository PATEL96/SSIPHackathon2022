import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Department.module.css";

export default function DepartmentList() {
    return (
        <div className={styles.Main}>
            <div className={styles.Card}>
                <Link href="/Agriculture">
                    <div className="card">
                        <Image
                            src="https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg"
                            className="card-img-top"
                            alt="..."
                            height={350}
                            width={450}
                        />
                        <div className="card-body">
                            <p className="card-text">
                                <div className={styles.Link}>Agriculture</div>
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={styles.Card}>
                <div className="card">
                    <Image
                        src="https://media.istockphoto.com/photos/blurred-paintings-on-the-wall-picture-id936902194?b=1&k=20&m=936902194&s=170667a&w=0&h=T6uvJCSpHdJU80aICVKA8ojxxZkpb58ofigSB89GXP8="
                        className="card-img-top"
                        alt="..."
                        height={350}
                        width={450}
                    />
                    <div className="card-body">
                        <p className="card-text">
                            <div className={styles.Link}>Art & Culture</div>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.Card}>
                <div className="card">
                    <Image
                        src="https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg"
                        className="card-img-top"
                        alt="..."
                        height={350}
                        width={450}
                    />
                    <div className="card-body">
                        <p className="card-text">
                            <div className={styles.Link}>Agriculture.</div>
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.Card}>
                <div className="card">
                    <Image
                        src="https://cdn.pixabay.com/photo/2017/06/11/02/05/wheat-2391348__340.jpg"
                        className="card-img-top"
                        alt="..."
                        height={350}
                        width={450}
                    />
                    <div className="card-body">
                        <p className="card-text">
                            <div className={styles.Link}>Agriculture.</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
