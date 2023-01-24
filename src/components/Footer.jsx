import React from "react";

const Footer = () => {
    return (
    <div className="container-fluid mt-5 p-0">
        <footer className="bg-dark text-center text- mt-5">
        <section className="mt-4">
            <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"> <i className="fab fa-twitter"></i></a>
            <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"> <i className="fab fa-google"></i></a>
            <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"> <i className="fab fa-instagram"></i></a>
            <a className="btn btn-outline-light btn-floating m-4"href="#!" role="button"><i   className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-outline-light btn-floating m-4" href="#!" role="button"><i  className="fab fa-github"></i></a>
        </section>

        <div className="text-center p-3">
            © 2023 Realizado por: Maria Elena Arroyo
        </div>
        </footer>
    </div>
    );
};
export default Footer;
