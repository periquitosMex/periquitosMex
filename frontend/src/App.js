import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { useOnClickOutside } from './components/Burger/Hook';
import NavBar from './components/GlobalComponents/NavBar';
import BibliotecaPMX from './pages/BibliotecaPMX';
import SalonDeFama from './pages/SalonDeFama';
import RevistaPMX from './pages/RevistaPMX';
import Eventos from './pages/Eventos';
import Inicio from './pages/Inicio';
import SocioPMX from './pages/SocioPMX';
import Tienda from './pages/Tienda';
import Header from './components/GlobalComponents/Header';
import Footer from './components/GlobalComponents/Footer';
import Burger from './components/Burger/Burger';

const AppStyle = styled.div`
  width: 100vw;
  .homePage {
    display: flex;
  }
`;

function App() {
  const [openNav, setopenNav] = useState(false);
  const menuId = 'main-menu';
  const node = useRef();
  useOnClickOutside(node, () => setopenNav(false));
  return (
    <AppStyle>
      <Router>
        <Header />
        <div ref={node}>
          <Burger
            openNav={openNav}
            setopenNav={setopenNav}
            aria-controls={menuId}
          />
          <NavBar openNav={openNav} setopenNav={setopenNav} id={menuId} />
        </div>
        <div className="homePage">
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
            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </AppStyle>
  );
}

export default App;
