import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdmPage from './Componentes/admArea/AdmPage';
import CreateTripPage from './Componentes/admArea/CreateTripPage';
import Header from './Componentes/Header';
import HomePage from './Componentes/home/HomePage';
import LoginPage from './Componentes/home/LoginPage';
import RegisterPage from './Componentes/home/RegisterPage';
import Welcome from './Componentes/home/Welcome';
import PageNotFound from './Componentes/PageNotFound';
import ListTripsPage from './Componentes/userArea/ListTripsPage';
import TripDetailsPage from './Componentes/userArea/TripDetailsPage';

const App = () => {
 
  const [viagemList, setViagemList] = useState('');

  useEffect(() => {
       getTrips()
  }, [viagemList])


  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabriel-marques-epps/trips",
      )
      .then((res) => {
        setViagemList(res.data.trips)
       })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <BrowserRouter>
       <Header></Header>
      <Switch>
        <Route exact path="/">
          <Welcome/>
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
        <Route exact path="/listaviagem">
          <ListTripsPage viagemList={viagemList}></ListTripsPage>
        </Route>
        <Route exact path={"/criarnovaviagem"}>
          <CreateTripPage getTrips={getTrips}></CreateTripPage>
        </Route>
        <Route exact path={"/TripDetailsPage"}>
          <TripDetailsPage></TripDetailsPage>
        </Route>
        <Route>
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
