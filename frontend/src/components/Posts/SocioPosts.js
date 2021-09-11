import React from 'react';
import styled from 'styled-components';
import PostImageItem from '../GlobalComponents/PostImageItem';
import socio from '../../assets/images/socio.jpg';
import PostItem from '../GlobalComponents/PostItem';
import beneficios from '../../assets/data/Socios';
import items from '../../assets/data/Anillas';

const SocioPostStyle = styled.div`
  .list-items {
    list-style: disc inside;
    padding: 0 15px;
  }
  img {
    max-width: 40vw;
  }
`;

function ListItem({ item }) {
  let children = null;
  if (item.values && item.values.length) {
    children = (
      <ul>
        {item.values.map((i) => (
          <ListItem item={i} key={i.id} />
        ))}
      </ul>
    );
  }

  return (
    <li className="list-items">
      {item.desc}
      {children}
    </li>
  );
}

export default function SocioPost() {
  return (
    <SocioPostStyle>
      <PostImageItem
        title="Comunidad Ornitológica de PeriquitosMex A.C."
        desc={
          <>
            <p>
              PeriquitosMex es una asociación ornitológica basada en la
              fraternidad entre criadores, respeto, responsabilidad social,
              valores éticos y sentido humano, todo esto con la idea de formar
              una fuerte comunidad de criadores que promuevan la cultura de la
              crianza selectiva y sustentable de aves de ornato en México,
              apoyar en la conservación y protección de especies y educar sobre
              temas relacionados a la ornitología y cuidado de las aves.
            </p>
            <br />
            <p>
              Ser socio PMX require compromiso de apoyo y participación en
              actividades generadas desde la asociación. A lo largo del año, los
              grupos que conforman parte de la familia PeriquitosMex hacen
              eventos en diferentes localidades del país en donde cualquier
              criador de cualquier asociación puede participar, de la misma
              forma PeriquitosMex genera actividades online como conferencias,
              charlas didácticas con profesionales y especialistas en diversos
              temas, se crean y promueven rifas, entre otras actividades.
            </p>
            <br />
            <p>
              Al ser socio registrado se te otorgan algunos beneficios, entre
              los cuales destacan:
              <ul>
                {beneficios.map((item) => (
                  <li className="list-items" key={item.id}>
                    {item.desc}
                  </li>
                ))}
              </ul>
            </p>
          </>
        }
        image={socio}
      />
      <PostItem
        title="Anillas y credenciales - Marzo 2021"
        desc={
          <>
            <p>
              Tenemos ya las anillas del último pedido y tenemos las
              credenciales de socios (Hasta socio #159).
            </p>
            <br />
            <p>
              La constancia es en formato digital y será enviada por correo
              electrónico. (Comunicarse por whatsapp con Delfino Rosales para
              pedir su constancia / 331-024-0881)
            </p>
            <br />
            <p>
              El envío de anillos cuesta $195 por FedEx o $65 por Correos de
              México registrado (Con número de guía).
            </p>
            <br />
            <p>
              El envío de credencial corre por cuenta de PeriquitosMex y se
              realiza por Correos de México tradicional (Sin número de guía), si
              alguien quiere una opción más rápida pueden elegir alguna de las
              opciones anteriores.
            </p>
            <br />
            <p className="bold-text">
              Para pedir tus anillas y/o credencial, sigue las instrucciones
              siguientes:
            </p>
            <ul>
              {items.map((i) => (
                <ListItem item={i} key={i.id} />
              ))}
            </ul>
            <br />
            <p>
              <span className="bold-text">Espera confirmación</span> de parte de
              Alberto Lomeli, se te informará la fecha en que se va a realizar
              tu envío y recibirás tu numero de guía después de realizado el
              envío.
            </p>
          </>
        }
      />
    </SocioPostStyle>
  );
}
