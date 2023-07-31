import style from "../style/Home.css"

const HomePage = () => {
  return (
    <>     
      <main className="row">
       <article className="contenedor1">
         <div className="inicio">
          <div className="inicio-child">
            <h1 className="display-1" style={{color: '#342C2A'}}>Benatha MakeUp</h1>
              <p className="lead" style={{color: '#342C2A'}}>
              Encuentra las mejores marcas de maquillaje para ti. Tenemos la mejor variedad de sombras para tus ojos traídas de varios países alrededor del mundo.
             </p>
         </div>
        </div>
        <div className="imgprincipal">
         <img src="https://www.bettinafrumboli.com/wp-content/uploads/2022/11/tendencias-de-maquillaje-primavera-verano-2023-01.jpg" class="rounded img-thumbnail" alt="main-image" />
        </div>
       </article>
      </main>
    </>
  );
};

export default HomePage;
