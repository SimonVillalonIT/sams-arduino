import React from "react";
import Button from "../Button";
import {BsArrowRight} from "react-icons/bs"

function Main() {
  return (
    <section className="main bg-white flex flex-col items-center justify-between pt-8 pb-16">
      <h1 className="text-4xl text-center italic font-semibold text-primary text-shadow px-4">
        Presentamos nuestro <span className="text-secondary">S</span>istema
        <span className="text-secondary"> A</span>utomatizado de
        <span className="text-secondary"> M</span>onitoreo de
        <span className="text-secondary"> S</span>onidos
      </h1>
      <div>
        <p className="text-center text-lg px-5 text-text text-shadow pt-8 pb-4">
          ¿Estás cansado de lidiar con ruidos disruptivos y charlas constantes
          en entornos educativos? Entendemos los desafíos que enfrentan las
          escuelas e instituciones cuando se trata de mantener un ambiente de
          aprendizaje propicio. Es por eso que hemos desarrollado una solución
          innovadora para abordar este problema de frente.
        </p>
        <p className="text-center text-xl px-5 text-strong">
          ¡Te presentamos nuestro Sistema Automatizado de Monitoreo de Sonidos!
        </p>
      </div>
      <Button text="Empieza ahora!" id="Button" href="/" className="mt-6 mb-8"><BsArrowRight id="Arrow" /></Button>
      <div className="wave"></div>
    </section>
  );
}

export default Main;
