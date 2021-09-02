import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';
import GroupGridItem from './GroupGridItem';

const PostStyle = styled.div``;

export default function HomePost() {
  return (
    <PostStyle>
      <PostItem
        title="Bienvenido a Periquitos Mex"
        desc={
          <>
            <p>
              Por allá en el año <span className="bold-text">2009</span>, un
              grupo de amigos mexicanos decidió que era momento de crear un foro
              propio para charlar y generar contenido sobre todo lo relacionado
              a los periquitos australianos. La idea surgió de la experiencia
              que se tenía ya en foros extranjeros, sobre todo españoles que se
              enfocaban en el mismo tema desde ya varios años antes.
            </p>
            <br />
            <p>
              Así, gracias a<span className="bold-text"> Rene Borjon </span>
              nació <span className="bold-text"> PeriquitosMex</span> como foro
              en internet, después de varios intentos y pruebas, el foro más
              estable se fundó el día{' '}
              <span className="bold-text"> 3 de noviembre de 2009</span>, ese
              foro se alojó en el servidor de miarroba{' '}
              <a href="https://miarroba.com/" className="text-link">
                {' '}
                (https://miarroba.com/){' '}
              </a>
              originalmente con la dirección:{' '}
              <span className="bold-text"> www.periquitosmex.mforos.com</span>,
              dicho foro original se encuentra actualmente deshabilitado debido
              que fue eliminado. (En el año 2018 se hizo un nuevo intento por
              revivir el foro en miarroba,{' '}
              <span className="bold-text"> Delfino Rosales </span> creó el foro
              nuevamente y se empezó a darle actividad con el apoyo de{' '}
              <span className="bold-text"> Rafael </span>
              House pero ya no funcionó de igual manera, Facebook dominó como
              red social por defecto y la comunidad PeriquitosMex no migró al
              foro. Al día de hoy{' '}
              <span className="bold-text">
                {' '}
                www.periquitosmex.mforos.com
              </span>{' '}
              existe como foro pero se mantiene cerrado.)
            </p>
            <br />
            <p>
              Después de algunos años, en{' '}
              <span className="bold-text"> enero de 2012</span>, el servidor de
              miarroba pasó por un mantenimiento general lo que causó que los
              foros fueran inaccesibles por varios días, motivados por las ganas
              seguir platicando sobre periquitos y para mantener el contacto
              entre amigos del hobbie,{' '}
              <span className="bold-text"> Ezequiel Gonzales</span>, uno de los
              administradores del foro, decidió crear un grupo de Facebook como
              una extensión temporal del foro de PeriquitosMex, este
              acontecimiento occurió el día{' '}
              <span className="bold-text"> 21 de enero del mismo año 2012</span>
              .
            </p>
            <br />
            <p>
              PeriquitosMex se ha fortalecido al paso del tiempo gracias a sus
              miembros y al equipo de administración, se han definido ideales
              como grupo y se han tenido logros importantes, entre ellos
              destacan los{' '}
              <span className="bold-text"> eventos, competencias</span> y
              algunos proyectos como la{' '}
              <span className="bold-text">
                {' '}
                Revista Ornitológica PeriquitosMex
              </span>
              . Hoy en día, PeriquitosMex es un referente como comunidad de
              ornicultura en México y en otros países, se ha constituido
              legalmente como una{' '}
              <span className="bold-text"> asociación civil</span> y se logró la
              incorporación a{' '}
              <span className="bold-text"> World Budgerigar Organization</span>{' '}
              <a
                href="http://www.world-budgerigar.org/"
                className="text-link bold-text"
              >
                (WBO)
              </a>
              .
            </p>
            <br />
            <p>
              Ha sido un camino con altas y bajas pero una constante han sido
              las ganas de mejorar y ayudar a profesionalizar la crianza de aves
              de ornato, aprender entre todos y ser una plataforma que impulse a
              los criadores a dar lo mejor de sí mismos,{' '}
              <span className="bold-text"> gracias</span> por acompañarnos en
              este camino y en lo que falta por venir.
            </p>
          </>
        }
      />
      <GroupGridItem
        title="Familia PeriquitosMex"
        desc={
          <>
            <p>
              Con el paso del tiempo, hemos formado alianzas de apoyo mútuo con
              varios grupos de criadores de aves de ornato en México y se
              mantienen acuerdos de colaboración para eventos y demás
              actividades que se requieran.
            </p>
            <br />
            <p>
              Dichos grupos son considerados parte de la familia PeriquitosMex y
              nuestra meta es ser una plataforma que promueve la mejora y
              crecimiento de otras comunidades de criadores. Si gustas que el
              grupo de tu zona o ciudad formen parte de la familia PeriquitosMex
              no dudes en contactarnos.
            </p>
            <br />
            <p>Lista oficial de grupos:</p>
          </>
        }
      />
    </PostStyle>
  );
}
