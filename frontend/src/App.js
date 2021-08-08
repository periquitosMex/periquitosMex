import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
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

const AppStyle = styled.div`
  .homePage {
    display: flex;
  }
`;

function App() {
  return (
    <AppStyle>
      <Router>
        <Header />
        <div className="homePage">
          <NavBar />
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
