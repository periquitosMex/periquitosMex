import React from 'react';
import styled from 'styled-components';
import PostItem from '../GlobalComponents/PostItem';
import Table from '../Magazine/Table';
import PostImageItem from '../GlobalComponents/PostImageItem';
import revista01 from '../../assets/images/revista/revista01.jpg';
import revista02 from '../../assets/images/revista/revista02.jpg';
import revista03 from '../../assets/images/revista/revista03.jpg';
import revista04 from '../../assets/images/revista/revista04.jpg';

const RevistaPMXStyle = styled.div`
  li {
    list-style: disc inside;
    margin-left: 2rem;
    line-height: 2.5rem;
  }
`;

export default function RevistaPost() {
  return (
    <RevistaPMXStyle>
      <PostImageItem
        title="Revista Ornitológica PeriquitosMex - Septiembre 2020 - #1"
        desc={
          <>
            <ul>
              <li>Bienestar aves de ornato (Lizbeth Pancardo Guzman)</li>
              <li>El ejercicio físico en voladeras (Adrian Guzman)</li>
              <li>Manteniendo a tus pájaros saludables (Bob Wilson)</li>
              <li>
                Descripción, peculiaridades y trucos para el criador, periquitos
                arcoiris (Francisco Planchadell)
              </li>
              <li>
                Un poco de historia del periquito australiano (Delfino Rosales)
              </li>
              <li>Introducción a los agapornis (Juan Contreras)</li>
              <li>La hibridación en agapornis (Pinyeres Assens - Phoebe)</li>
              <li>
                Mi experiencia y recomendaciones como criador de aves (Jorge
                Escobedo)
              </li>
              <li>
                El canario rojo lipocromo (MCP Francisco Javier Camargo
                Casillas)
              </li>
              <li>Entrevista a: Ing. Agr. David Montañez Valencia</li>
            </ul>
          </>
        }
        image={revista01}
      />
      <PostImageItem
        title="Revista Ornitológica PeriquitosMex - Septiembre 2020 - #2"
        desc={
          <>
            <ul>
              <li>
                Beneficios del vinagre de manzana (Lizbeth Pancardo Guzman)
              </li>
              <li>Sobre pluma y mudas (Delfino Rosales)</li>
              <li>
                11 Puntos básicos para una buena salud de tus aves (Cristian
                Arturo Aleriano Garcia)
              </li>
              <li>
                Periquitos arcoiris II: Definición de un proyecto a partir de
                ejemplares de fácil adquisición (Francisco Planchadell)
              </li>
              <li>
                Reproducción de ninfas albinas (Mari Carmen Garrido - Mari
                Bichos)
              </li>
              <li>
                Buena crianza en pericos kramer (Manolo Barragan - Aviario Casa
                Macao)
              </li>
              <li>Conceptos básicos de genética (Salvador Riambau)</li>
              <li>Forpus coelestis (Carlos Borboa - Periquitos CAB)</li>
              <li>
                Advertencia: Uso de antibióticos para tratar a los periquitos
                (Bob Wilson)
              </li>
              <li>
                Crónicas de la llegada de los periquitos texas clearbody a
                México (Jessy Padilla Fonseca)
              </li>
              <li>Entrevista a: MVZ. Carlos Fuentes</li>
            </ul>
          </>
        }
        image={revista02}
      />
      <PostImageItem
        title="Revista Ornitológica PeriquitosMex - Marzo 2021 - #3"
        desc={
          <>
            <ul>
              <li>
                Enriquecimiento ambiental en aves de jaula (Biol. Laura Ruiz
                Martinez)
              </li>
              <li>Genetica II - Herencia (Salvador Riambau)</li>
              <li>
                Prevencion de enfermedades y cuarentena en el aviario (Gibhert
                Melendez)
              </li>
              <li>Anatomia de los agapornis (Juan Contreras)</li>
              <li>
                Agapornis roseicollis y sus mutaciones (Van den Abeele, Dirk)
              </li>
              <li>
                Periquitos, particularidades y trabajo de la mutacion opalina
                (Francisco Planchadell)
              </li>
              <li>
                Jengibre y sus propiedades para nuestras aves (Lizbeth Pancardo
                Guzman)
              </li>
              <li>Criando un Best in Show (Bob Wilson)</li>
              <li>Entrevista a: Jorge Castellanos</li>
            </ul>
          </>
        }
        image={revista03}
      />
      <PostImageItem
        title="Revista Ornitológica PeriquitosMex - Agosto 2021 - #4"
        desc=""
        image={revista04}
      />
      <PostItem
        title="Donde comprar la revista PeriquitosMex?"
        desc={<Table />}
      />
    </RevistaPMXStyle>
  );
}
