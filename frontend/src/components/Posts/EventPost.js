import React from 'react';
import PostImageItem from './PostImageItem';
import ExpoAvesMich2021 from '../../assets/images/ExpoAvesMich2021.png';
import ImageGridItem from '../ImageGrid/ImageGridItem';

export default function EventPost() {
  return (
    <div>
      <PostImageItem
        title="ExpoAves Morelia 2021"
        desc={
          <>
            <p>
              Una vez más está por llegar la gran ExpoAves Morelia ahora en su
              edición 2021. Esta reunión de criadores tiene 2 enfoques
              principales: ofrecer un espacio para encontrar todo lo necesario
              para la crianza en cautiverio de aves de ornato y ofrecer a los
              asistentes la oportunidad de aprender un poco más sobre esa
              afición a través de charlas dadas por especialistas en la materia.
            </p>
            <br />
            <p>
              Entre los proveedores asistentes podemos encontrar a: Kuini Aves,
              Mascocentro Morelia, Agapornis Shalom, Jaulas y Voladerás de
              Michoacán, Aviarios Integrales Reyga y muchos más.
            </p>
            <br />
            <p>
              Asiste este 7 y 8 de Agosto, aprende y encuentra todo lo que
              necesitas para tus actividades como criador.
            </p>
          </>
        }
        image={ExpoAvesMich2021}
      />
      <ImageGridItem
        title="Entradas y Resultados ExpoShow Irapuato 2021"
        desc={
          <>
            <p>
              Después de una etapa de gestión y planeación por parte del grupo
              local de Irapuato (PERIQUITOS AUSTRALIANOS, NINFAS Y AGAPORNIS DE
              IRAPUATO GTO MÉXICO), el día 18 de Julio de 2021 finalmente se
              llevó a cabo el primer evento PeriquitosMex en la ciudad, un
              evento de importante magnitud y relevancia para la región.
              Acudieron criadores de diversos estados del país unidos por una
              misma afición y motivados por la convivencia y el reto que
              representa el juzgamiento del periquito australiano.
            </p>
            <br />
            <p>
              Nuevamente <span className="bold-text">Bob Wilson</span> fue el
              encargado del juzgamiento de periquitos australianos de color y de
              exhibición, como asistentes de juez participaron los jueces en
              entrenamiento FOCDM;{' '}
              <span className="bold-text">
                Myriam Martínez, Carlos Fuentes, Delfino Rosales y Luis Miguel
                González
              </span>
              .
            </p>
            <br />
            <p>
              El evento contó con la participación de un gran número de
              proveedores de aves, alimentos y accesorios para la crianza de
              aves de ornato
            </p>
            <br />
            <p>
              El juzgamiento tuvo una entrada de aproximádamente 250 aves
              divididas en 13 clases, tanto en australianos de color como de
              exhibición. Dejamos aquí el archivo con los resultados del
              juzgamiento.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
      />
    </div>
  );
}
