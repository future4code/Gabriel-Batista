import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdmPage from './Componentes/admArea/AdmPage';
import CreateTripPage from './Componentes/admArea/CreateTripPage';
import Header from './Componentes/Header';
import HomePage from './Componentes/home/HomePage';
import LoginPage from './Componentes/home/LoginPage';
import RegisterPage from './Componentes/home/RegisterPage';
import ListTripsPage from './Componentes/userArea/ListTripsPage';
import TripDetailsPage from './Componentes/userArea/TripDetailsPage';

const App = () => {
  return (
    <BrowserRouter>
    <Header></Header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage></LoginPage>
        </Route>
        <Route exact path={"/register"}>
          <RegisterPage></RegisterPage>
        </Route>
        <Route exact path={"/admpage"}>
          <AdmPage></AdmPage>
        </Route>
      </Switch>
      <Switch>
        <Route exact path="/listaviagem">
          <ListTripsPage></ListTripsPage>
        </Route>
        <Route exact path={"/criarnovaviagem"}>
          <CreateTripPage></CreateTripPage>
        </Route>
        <Route exact path={"/Detalhes"}>
          <TripDetailsPage></TripDetailsPage>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
