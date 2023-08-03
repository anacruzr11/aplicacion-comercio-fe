import Header from "../components/Header"

const AboutPage = () => {
  return (
    <>
     <main className="row">
       <article className="contenedor1">
       <div className="imgprincipal">
         <img src="https://cdn.shopify.com/s/files/1/1849/3247/files/make_up_services_banner_2048x2048.png?v=1629312218" className="rounded img-thumbnail" alt="main-image" />
        </div>
         <div className="inicio">
          <div className="inicio-child">
            <h1 className="display-1" style={{color: '#342C2A'}}>Sobre Nosotros</h1>
              <p className="lead" style={{color: '#342C2A'}}>
              Somos una tienda que surgió en Colombia en el año 2023, gracias al amor y a la pasión por el maquillaje como arte. Queremos inspirarte para que crees tus mejores looks.
             </p>
          </div>
        </div>        
       </article>
      </main>
    </>
  );
};

export default AboutPage;
