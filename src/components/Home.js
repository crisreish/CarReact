import React from 'react';
import { Carousel } from 'react-bootstrap';

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
            <p>Alguma descrição do primeiro slide.</p>
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
            <p>Alguma descrição do segundo slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="Terceiro slide"
            src="https://autoentusiastas.com.br/ae/wp-content/uploads/2023/08/AE-GWM-Ora-03-divulgacao-1.png"
            alt="Terceiro slide"
          />
          <Carousel.Caption>
            <h3>BMW M3 Laranja 2025</h3>
            <p>Alguma descrição do terceiro slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
