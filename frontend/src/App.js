import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useOnClickOutside } from './components/Menu/Hook';
import NavBar from './components/Menu/NavBar';
import BibliotecaPMX from './pages/BibliotecaPMX';
import SalonDeFama from './pages/SalonDeFama';
import RevistaPMX from './pages/RevistaPMX';
import Eventos from './pages/Eventos';
import Inicio from './pages/Inicio';
import SocioPMX from './pages/SocioPMX';
import Tienda from './pages/Tienda';
import Periquitos from './pages/Periquitos';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';
import Burger from './components/Menu/Burger';
import SmoothScroll from './components/GlobalComponents/SmoothScroll';

function App() {
  const [openNav, setopenNav] = useState(false);
  const menuId = 'main-menu';
  const node = useRef();
  useOnClickOutside(node, () => setopenNav(false));
  return (
    <>
      <Router>
        <Header />
        <div ref={node}>
          <span className="menuIcon">
            <Burger
              openNav={openNav}
              setopenNav={setopenNav}
              aria-controls={menuId}
            />
          </span>
          <NavBar openNav={openNav} setopenNav={setopenNav} id={menuId} />
        </div>
        <SmoothScroll>
          <Switch>
            <Route path="/tienda">
              <Tienda />
            </Route>
            <Route path="/eventos">
              <Eventos />
            </Route>
            <Route path="/socios">
              <SocioPMX />
            </Route>
            <Route path="/revista">
              <RevistaPMX />
            </Route>
            <Route path="/biblioteca">
              <BibliotecaPMX />
            </Route>
            <Route path="/fama">
              <SalonDeFama />
            </Route>
            <Route path="/PeriquitosMex">
              <Periquitos />
            </Route>
            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
        </SmoothScroll>
        <Footer />
      </Router>
    </>
  );
}

export default App;
