import Image from "next/image";
import styles from "../../styles/Department.module.css";
import Link from "next/link";
import e_logo from "/public/e_logo.png"
const Footer = () => {
  return (
    <>

<footer className="text-center text-lg-start bg-primary text-muted" >
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block" style={{color: "white"}}>
      <span>Get connected with us </span>
    </div>

    <div >
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-facebook-f" ></i>
      </a>
      <a href="#" className="me-4 text-reset" >
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </a>
      <a href="#" className="me-4 text-reset" >
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" className="me-4 text-reset" >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="#" className="me-4 text-reset" >
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{color: "white"}}>
          <h6 className="text-uppercase fw-bold mb-4">
          <Image
                        src={e_logo}
                        height={180}
                        width={120}
                    />
            {/* <i className="fas fa-gem me-3"></i>Why US ? */}
          </h6>
          <p>
          
          </p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4" style={{color: "white"}}>
          <h6 className="text-uppercase fw-bold mb-4">
            Some Departments
          </h6>
          <p>
            <a href="/Agriculture" className="text-reset">Agriculture</a>
          </p>
          <p>
            <a href="/Art&Culture" className="text-reset">Law and Justice</a>
          </p>
          <p>
            <a href="/Communication" className="text-reset">Communication & I.T.</a>
          </p>
          <p>
            <a href="/Agriculture" className="text-reset">Education</a>
          </p>
          <p>
            <a href="/Agriculture" className="text-reset">Science & Technology</a>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4" style={{color: "white"}}>
          <h6 className="text-uppercase fw-bold mb-4" >
            Useful links
          </h6>
          <p>
            <a href="/" className="text-reset">Home</a>
          </p>
          <p>
            <a href="/About" className="text-reset">About</a>
          </p>
          <p>
          <Link href="/help" className={styles.Link}>
            <a href="/help" className="text-reset">Help</a>
            </Link>
          </p>
          
        </div>

        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4" style={{color: "white"}}>
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
          <a>Toll Free : 1800 111 111</a>
          </p>
          <p>
          <a>E-mail : help@guj.gov.in</a>
          </p>
          <p>
          <a style={{color: "white"}}>See more , </a><a href="/contact" style={{color: "white"}}> click here</a>
          </p>
          
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" style={{ color: "white"}}>
    
  © 2022 - All Rights Reserved.
    <a className="text-reset fw-bold" style={{color: "white"}} href="#"> Design by Gov. Guj</a>
  </div>
    </footer>
  </>
  );
}

export default Footer;