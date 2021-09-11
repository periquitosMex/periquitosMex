import React from 'react';
import PostDownloadItem from '../GlobalComponents/PostDownloadItem';
import RostralesPeriquitos from '../../assets/downloads/Biblioteca/RostralesPeriquitos.png';
import Protocolo from '../../assets/downloads/Biblioteca/Protocolo.png';
import Sistema from '../../assets/downloads/Biblioteca/Sistema Digestivo de los Periquitos.png';
import alimentacion from '../../assets/downloads/Biblioteca/Introduccion a la alimentacion en periquitos - Delfino Rosales.png';
import color from '../../assets/downloads/Biblioteca/Determinación del color de los periquitos en etapas tempranas.pdf';
import estandar from '../../assets/downloads/Biblioteca/ESTÁNDAR OFICIAL COE & COM.pdf';
import nutricion from '../../assets/downloads/Biblioteca/El avance de la nutricion en nuestras aves - Fernando Osoro.pdf';
import juzgamiento from '../../assets/downloads/Biblioteca/El juzgamiento del perico Australiano.pdf';
import fertilidad from '../../assets/downloads/Biblioteca/Ciclos de fertilidad en los periquitos - A. Terry Tuxford.pdf';
import cuestiones from '../../assets/downloads/Biblioteca/Cuestiones previas a la cría y reproducción de los periquitos.pdf';
import reducir from '../../assets/downloads/Biblioteca/Como reducir la mortalidad en las crías.pdf';
import puros from '../../assets/downloads/Biblioteca/Tabla de cruces para Texas Clearbody Puros.jpg';
import impuros from '../../assets/downloads/Biblioteca/Tabla de cruces para Texas Clearbody Impuros.jpg';

export default function BibliotecaPosts() {
  return (
    <div>
      <PostDownloadItem
        title="Periquitos Rostrales"
        desc={
          <>
            <p>
              Una pequeña referencia gráfica para identificar los tipos de
              rostrales en periquitos australianos.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={RostralesPeriquitos}
      />
      <PostDownloadItem
        title="Protocolo para la visita de aviarios"
        desc={
          <>
            <p>
              Siempre es enriquecedor y motivante visitar los aviarios de amigos
              y conocidos criadores, pero siempre hay que tener en cuenta que la
              entrada de extraños al aviario puede conllevar riesgos.
            </p>
            <br />
            <p>
              Te dejamos aquí una referencia gráfica del protocolo sugerido para
              la visita de aviarios.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={Protocolo}
      />
      <PostDownloadItem
        title="Sistema digestivo de los Periquitos"
        desc={
          <>
            <p>
              Una pequeña redacción explicando de forma breve sobre el sistema
              digestivo de los periquitos, esperamos sirva para conocer un poco
              más a estas interesantes aves.
            </p>
            <br />
            <p> Clic para descargar archivo:</p>
          </>
        }
        link={Sistema}
      />
      <PostDownloadItem
        title="Introducción a la alimentación en Periquitos"
        desc={
          <>
            <p>
              Dejamos en esta ocasión un breve documento relacionado a la
              alimentación en cautiverio sugerida para los periquitos.
            </p>
            <br />
            <p>
              Es importante mencionar que NO es una guía definitiva, la
              alimentación de nuestras aves queda limitada por la disponibilidad
              y hábitos, es nuestro deber como criador busca aprender cada vez
              más sobre este y otros temas relaciondos.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={alimentacion}
      />
      <PostDownloadItem
        title="Determinación del color de un periquito (Etapas tempranas)"
        desc={
          <>
            <p>
              Un excelente documento muy útil a manera de referencia para
              identificar algunas mutaciones en los periquitos australianos
              desde etapas tempranas de su nacimiento.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={color}
      />
      <PostDownloadItem
        title="Estándar Oficial de periquitos (COE & COM)"
        desc={
          <>
            <p>
              Un recurso muy valioso para aprender un poco sobre estándares para
              exhibición del periquito australiano.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={estandar}
      />
      <PostDownloadItem
        title="El avance de la nutrición en nuestras aves"
        desc={
          <>
            <p>
              Otro artículo sobre la alimentación en aves, en esta ocasión viene
              de la mano de un Juez nacional de fauna eropea que nos comparte
              aquí su experiencia.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={nutricion}
      />
      <PostDownloadItem
        title="El juzgamiento del periquito australiano"
        desc={
          <>
            <p>
              Un documento que detalla la mayoría de los puntos que los jueces
              toman en cuenta durante el juzgamiento.
            </p>
            <br />
            <p>
              Muy útil también para el criador para tomar el cuenta al momento
              de preparar aves para concurso y para tomar decisiones al
              respecto.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={juzgamiento}
      />
      <PostDownloadItem
        title="Ciclos de fertilidad en los periquitos"
        desc={
          <>
            <p>
              Aprenderemos un poco de la mano de Terry Tuxford sobre algunos
              factores a tomar en cuenta que afectan diréctamente los ciclos de
              fertilidad de los periquitos australianos
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={fertilidad}
      />
      <PostDownloadItem
        title="Cuestiones previas a la cría y reproducción de los periquitos"
        desc={
          <>
            <p>
              Si finalmente permites que tu pareja críe, descubrirás lo
              fascinanteque es ver la evolución de una puesta de huevos.
            </p>
            <br />
            <p>
              A continuación encontrarás todo lo que debes saber para que todo
              vaya bien.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={cuestiones}
      />
      <PostDownloadItem
        title="Reducir la mortalidad de las crías"
        desc={
          <>
            <p>
              Un excelente documento respecto a los factores que afectan la
              mortalidad de las crías de periquitos australianos.
            </p>
            <br />
            <p>
              Una referencia de lo que hay que cuidar y atender para lograr
              nidadas más exitosas.
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={reducir}
      />
      <PostDownloadItem
        title="Tabla de cruces para Texas Clearbody Puros"
        desc={
          <>
            <p>
              Referencia sobre el cruce y resultados de Texas Clearbody Puros
              (Sin gen INO)
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={puros}
      />
      <PostDownloadItem
        title="Tabla de cruces para Texas Clearbody Impuros"
        desc={
          <>
            <p>
              Referencia sobre el cruce y resultados de Texas Clearbody Impuros
              (Con gen INO)
            </p>
            <br />
            <p>Clic para descargar archivo:</p>
          </>
        }
        link={impuros}
      />
    </div>
  );
}
