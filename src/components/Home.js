import React from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="Primeiro slide"
            src="https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/09/18111512/16.09.21_Creta-Ultimate-1160x652.jpg"
            alt="Primeiro slide"
          />
          <Carousel.Caption>
            <h3>Renault Zoe e-tech Elétrico</h3>
            <p>
              SUV elétrico compacto, oferece bastante espaço para os ocupantes.
              células da bateria do novo SUV elétrico. Células da bateria que
              elimina o nível de ruído do módulo.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Segundo slide"
            src="https://carrosbemmontados.com.br/wp-content/webp-express/webp-images/uploads/2024/04/2025-HYUNDAI-SANTA-CRUZ-8-1536x864.jpg.webp"
            alt="Segundo slide"
          />
          <Carousel.Caption>
            <h3>Toyota Yaris 2023</h3>
            <p>
              Picape compacta monobloco, conjunto ótico full LED e rodas
              diamantadas de até 19 polegadas. Oferece um espaço de caçamba
              generoso, com capacidade para 935 litros.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Terceiro slide"
            src="https://autoentusiastas.com.br/ae/wp-content/uploads/2023/08/AE-GWM-Ora-03-divulgacao-1.png"
            alt="Terceiro slide"
          />
          <Carousel.Caption>
            <h3>GWM Ora 03 2024</h3>
            <p>
              Farol alto automático, que reduz o facho do farol quando detecta
              veículo no sentido oposto. Retrovisores externos com setas,
              rebatimento elétrico e aquecimento.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
