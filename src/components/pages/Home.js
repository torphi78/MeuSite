import React from 'react';
import '../../App.css';
import Navbar from "../Navbar/Navbar";
import HeaderConcept from "../HeaderConcept/HeaderConcept"
import "./Home.css";
import Accordion from "../Accordeon/Accordion";
import Slideshow from "../Carousel/Slideshow";
import site1 from "../ecransWeb/blogChartres.jpg";
import site2 from "../ecransWeb/livresEthiques.jpg";
import site3 from "../ecransWeb/serieNator.jpg";
import site4 from "../ecransWeb/partirauvert.jpg";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import moi from "./Avatar.png";
import print from "../pictos/print.png";
import webby from "../pictos/globe.png";


import img1 from "../Carousel/1.jpg";
import img2 from "../Carousel/2.jpg";
import img3 from "../Carousel/3.jpg";
import img4 from "../Carousel/4.jpg";
import img5 from "../Carousel/5.jpg";
import img6 from "../Carousel/6.jpg";
import img7 from "../Carousel/7.jpg";
import img8 from "../Carousel/8.jpg";
import img9 from "../Carousel/9.jpg";
import img10 from "../Carousel/10.jpg";
import img11 from "../Carousel/11.jpg";
import img12 from "../Carousel/12.jpg";
import img13 from "../Carousel/13.jpg";
import img14 from "../Carousel/14.jpg";
import img15 from "../Carousel/15.jpg";
import img16 from "../Carousel/16.jpg";
import img17 from "../Carousel/17.jpg";
import img18 from "../Carousel/18.jpg";

const collection = [
  { src: img1, caption: "Caption one" },
  { src: img2, caption: "Caption two" },
  { src: img3, caption: "Caption three" },
  { src: img4, caption: "Caption four" },
  { src: img5, caption: "Caption five" },
  { src: img6, caption: "Caption one" },
  { src: img7, caption: "Caption two" },
  { src: img8, caption: "Caption three" },
  { src: img9, caption: "Caption four" },
  { src: img9, caption: "Caption five" },
  { src: img10, caption: "Caption one" },
  { src: img11, caption: "Caption two" },
  { src: img12, caption: "Caption three" },
  { src: img13, caption: "Caption four" },
  { src: img14, caption: "Caption five" },
  { src: img15, caption: "Caption three" },
  { src: img16, caption: "Caption four" },
  { src: img17, caption: "Caption five" },
  { src: img18, caption: "Caption six" }
];


export default function Home() {
  return (
    <>
    <div id="haut"></div>
    <Navbar />
    <HeaderConcept />
    <section id="presentation" className="presentation">
      <br></br>
      <br></br>
        
      <h2 className="titrePresentation">Quem sou eu ?</h2>
      <div className="portrait">
        <img src={moi} className="moiAvatar" alt="moi"/>
      </div>
      <div className="containerPresentation">
        <div className="textDePresentation">
          <p className="maPresentation">
            Sou <b>Designer Gr??fico Multim??dia (Web e Impress??o) </b> desde 2001.<br></br><br></br>
            Trabalho com softwares de retoque de imagens e vetores como: Photoshop, Illustrator, InDesign ...<br></br>
            Falei Web atrav??s do WebDesign com Dreamweaver, WordPress ... e participei na reda????o de artigos como Webmaster.<br></br>
            Tamb??m lido com fotografia e durante a minha carreira tive tamb??m que fazer edi????o de v??deo (Vegas Pro<br></br><br></br>
            Em setembro de 2021, articulei minhas habilidades na Web com um treinamento como <b>Desenvolvedor web e m??vel</b>,
            onde pude ver linguagens e ferramentas como:<br></br>
            <i>Html, CSS , React JS, Node Js, Express JS, SQL, Github, Figma, ...</i><br></br><br></br>
            Tamb??m acompanhei um treinamento em <b>Edi????o de V??deo</b> e <b>Motion Designer</b> no Adobe Premiere e no After Effects.
          </p>
          </div>
        <div className="lesAscenseurs">
          <div className="accordeons">
              <Accordion
              title="Meu curr??culo"
              
              content="
              <p>
              Para mais informa????es sobre minha experi??ncia profissional ou minhas habilidades...n??o hesite em baixar meu curr??culo <i>(clicando nele)</i>.</p><br></br>
              <p><b>1997:</b> BAC S</p>
              <p><b>2000:</b> BAC +2 : Publicidade e Designer Gr??fico Art??stico <i>(Photoshop, Illustrator, Xpress, Indesign...)</i></p>
              <p><b>2003:</b> Niv. BAC +2 : Treinamento Webdesigner</p>
              <p><b>2020:</b> BAC +2 : Desenvolvedor web e m??vel <i>(Html, Css, JS, ReactJS, NodeJS, ExpressJS, Figma, Github...)</i></p>
              <p><b>2021:</b> Niv. BAC +2 : Motion Designer e editor de v??deo<i>(Adobe Premiere et After Effects...)</i></p><br></br>
              <p><b>langues :</b> Franc??s, ingl??s, espanhol</i></p><br></br>
              "
                         
            />
            <Accordion
              title="experi??ncias profissionais"
              content="
              <p>JANEIRO DE 2021 - ABRIL DE 2021</p>
              <p><b>DESENVOLVEDOR WEB UX/UI</b></p>
              <p>Soci??t?? : Partir au vert</p>
              <p>(Est??gio profissional 3 meses) Projeto cheio com React JS,
              Node JS, Express JS, MySQL, FIGMA, GITHUB...
              Desenvolvemos todo o site para a cria????o de um neg??cio
              com base em reservas de estadias naturais.</p><br></br>
              
              <p>2011 - 2020</p>
              <p><b>DESIGNER GR??FICO MULTIM??DIA (IMPRESS??O E WEB)</b></p>
              <p>Sociedade : JCB Siganlisations</p>
              <p>Dentro de uma empresa de sinaliza????o, participei durante
              muitos anos na cria????o da comunica????o
              interno e externo para v??rios clientes(Photoshop,
              Illustrator foram minhas ferramentas)<p><br></br>

              <p>2006 - 2011</p>
              <p><b>DESIGNER GR??FICO CRIATIVO MULTIMEDIA & WEB DESIGNER</b></p>
              <p>Sociedade : 707COM</p>
              <p>Dentro de uma ag??ncia de comunica????o, participei do
              cria????o de todos os tipos de produtos para comunica????o e IA
              trouxe ideias para uma carta gr??fica e ideias para
              marketing: (logotipo, cart??o de visita, brochuras profissionais, folhetos
              promocionais, p??steres, capas de CD, card??pios de restaurantes,
              sinais, marca????o de janelas, marca????o de ve??culos, etc.) e
              tamb??m para a web (site da internet, banners, emails ...)</p>
              <p>Experi??ncia muito enriquecedora em versatilidade.<p><br></br>

              <p>2004 - 2006</p>
              <p><b>DESIGNER GR??FICO CRIATIVO MULTIMEDIA</b></p>
              <p>Sociedad : ILL EVENTS MUSIC</p>
              <p>Dentro de uma gravadora independente de m??sica urbana
              (Yvelines)</p>
              <p>Desenvolvi v??rias tarefas relacionadas ao
              comunica????o: (bolsos de artistas, cartazes promocionais, p??ginas
              especiais para revistas especializadas, capas de CD e livretos e
              vinysl ...) Tamb??m alimentei o site da etiqueta de novidades e
              not??cias...</p><br></br>

              <p>2001 - 2004</p>
              <p><b>DESIGNER GR??FICO - WEBMASTER - WEBDESIGNER - EDITOR DA WEB</b></p>
              <p>Sociedad : ADIQ</p>
              <p>Funcion??rio de uma associa????o parisiense, alimentei o conte??do
              de um site j?? existente sobre culturas urbanas (macite.net):
              graficamente e do ponto de vista de desenho.</p>
              <p>Meus prim??rdios da web</p><br></br>    
              "
            />
            <Accordion
              title="Habilidades"
              content="
              <p><b>Curioso :</b> Por natureza, gosto de aprender novos technos e geralmente de descobrir coisas ??teis que podem permitir otimiza????o..</p><br></br>
              <p><b>Rigoroso:</b> Tenho boas habilidades organizacionais e anal??ticas.</p><br></br>
              <p><b>Criativo :</b> Sou pr??-ativo e gosto de trazer um toque estilizado e novas ideias de Marketing.</p><br></br>
              
              
              "
            />
            <Accordion
              title="Minhas aspira????es"
              content="
              <p>Apaixonado, preciso me encontrar em um contexto vers??til: Design, Funcionalidade, Criatividade, Arte, Layout, Coer??ncia, Operacional.</p>
              </br>
              
              "
            />
            <Accordion
              title="Meus interesses"
              content="
              <p><b>Design :</b> Seja para impress??o e web, foto ou v??deo. com uma certa sensibilidade aos disparos, ao jogo de luzes e cores..</p>
              <p><b>esporte :</b> Coletiva ou individual, pratiquei por muitos anos e continuo a t??tulo pessoal.</p>
              <p><b>viagens:</b> Gosto de descobrir outros horizontes e culturas, preciso fugir.</p>
              <p><b>lendo :</b> todos os tipos</p>
              "
            />
            </div>   
        </div>
      </div>
    </section>

    <div className="containerDivider">
      <div className="divider"></div>
    </div>

    <section className="leCarousel" id="elCarousel">
      <div className="pictoPrint">
      <img src={print} className="print" alt="print"/>
      <h2 className="titrePresentation2">Meu portf??lio<i>(impress??o)</i></h2>
    <h3 className="sousTitrePresentation2">Alguns exemplos do meu trabalho</h3>
      </div>

    
     <div className="containerSlide">
          <div className="gauche">
          <Slideshow
          input={collection}
          ratio={`3:2`}
          mode={`automatic`}
          timeout={`5000`}
        />
        </div>
        <div className="droite">
          
          <p><b>Gr??fico Designer Print</b> (Edi????o),<br></br>  
            Realizo todos os tipos de trabalhos gr??ficos:<br></br>  <br></br>
            <ul className="listeGraphiste">
            <li>
            De logotipo a brochuras profissionais<br></br><br></br> 
            </li>
            <li>
            por meio de cart??es de visita,<br></br><br></br>  
            </li>
            <li>
            folhetos, card??pios de restaurantes (ou outros),<br></br><br></br>  
            </li>
            <li>
            folhetos promocionais, cartazes (para festas, aberturas profissionais, outras promo????es ...),<br></br><br></br>  
            </li>
            <li>
            Capas de CD de artista, cart??es eletr??nicos ...<br></br> <br></br> 
            </li>
          </ul>       
          Trago ideias interessantes de Reda????o e Marketing para atualizar sua Comunica????o.<br></br> <br></br> 
          Tamb??m desenvolvo elementos para Multim??dia.</p>
        </div>
      </div>      
    </section>
    <div className="containerDivider">
      <div className="divider"></div>
    </div>
    <section className="portFolioWeb" id="webPortfolio">
    {/* <br></br> */}
      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
    <div className="pictoWeb">
      <img src={webby} className="web" alt="web"/>
      <h2 className="titrePresentation2">Meu portf??lio (Web)</h2>
    <h3 className="sousTitrePresentation2">Alguns exemplos do meu trabalho</h3>
      </div>
    
    <div className="containerWeb">

      <div className="site">
        <div className="cardSite">
          <div className="imageSite">
              <a href="https://blog2chartres.netlify.app/" ><img src={site1} alt="imagesSite" className="imagesSite"/></a>
          </div>
          <div className="textSite">
              <p className="prezSite">Blog de apresenta????o de Chartres</p>
              <p className="prezSite"><i>Equipe de desenvolvedores: 4 pessoas</i></p>
              <p className="prezSite">Projeto Html, Css, JS</p>
          </div>
          </div>
      </div>

      <div className="site">
        <div className="cardSite">
          <div className="imageSite">
                <a href="https://projet2serinator.netlify.app/" target="_blank" rel="noreferrer"><img src={site3} alt="imagesSite" className="imagesSite"/></a>
          </div>
          <div className="textSite">
                <p className="prezSite">S??rinator : Aplica????o da escolha da s??rie</p>
                <p className="prezSite"><i>Equipe de desenvolvedores: 4 pessoas</i></p>
              <p className="prezSite">Projeto React Js</p>
          </div>
          </div>
      </div>

      <div className="site">
          <div className="cardSite">
              <div className="imageSite">
                  <a href="http://livres-enfants-ethiques.fr/" target="_blank" rel="noreferrer"><img src={site2} alt="imagesSite" className="imagesSite"/></a>
              </div>
              <div className="textSite">
                  <p className="prezSite">Livros de ??tica para crian??as</p>
                  <p className="prezSite"><i>Equipe de desenvolvedores: 4 pessoas</i></p>
              <p className="prezSite">Projeto cheio: React JS, Node JS, Express JS</p>
              </div>
          </div>
      </div>      

      <div className="site">
          <div className="cardSite">
              <div className="imageSite">
                  <a href="http://partirauvert.fr/" target="_blank" rel="noreferrer"><img src={site4} alt="imagesSite" className="imagesSite"/></a>
              </div>
              <div className="textSite">
                  <p className="prezSite">Partir au vert : A natureza fica</p>
                  <p className="prezSite"><i>Equipe de desenvolvedores: 4 pessoas</i></p>
              <p className="prezSite">Projeto cheio: React JS, Node JS, Express JS</p>
              </div>
          </div>
      </div>

    </div>
    </section>
     <section id="contactPartie">
    < ContactForm />
    </section>

    <section id="footerPartie">      
      <Footer/>
    </section>
    
    </>
  );
}
