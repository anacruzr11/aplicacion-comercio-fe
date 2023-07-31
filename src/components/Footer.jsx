import style from "../style/Footer.css"

const Footer = () => {
    return (
      <>
      <div className="footer">
        <footer className="bg-dark text-center text-lg-start text-white">
          {/* Grid container */}
          <div className="container p-4">
            {/*Grid row*/}
            <div className="row mt-4">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Sobre Nosotros</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-book fa-fw fa-sm me-2" />
                      Bestsellers
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-book fa-fw fa-sm me-2" />
                      Marcas
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-user-edit fa-fw fa-sm me-2" />
                      Historia
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Servicios</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-shipping-fast fa-fw fa-sm me-2" />
                      Tienda física
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-backspace fa-fw fa-sm me-2" />
                      Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="far fa-file-alt fa-fw fa-sm me-2" />
                      Compra al pormayor
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="far fa-file-alt fa-fw fa-sm me-2" />
                      Venta por catálogo
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contáctanos</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Teléfono
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Whatsapp
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-briefcase fa-fw fa-sm me-2" />
                      Cita Presencial
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Social Media</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-at fa-fw fa-sm me-2" />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-shipping-fast fa-fw fa-sm me-2" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      <i className="fas fa-envelope fa-fw fa-sm me-2" />
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            Ana Maria Cruz Rodriguez © 2023
          </div>
          {/* Copyright */}
        </footer>
       </div>
      </>
    );
  };
  
  export default Footer;