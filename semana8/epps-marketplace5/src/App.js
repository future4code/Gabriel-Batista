import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { ProductPage } from './components/ProductPage'
import { SellersPage } from './components/SellersPage'
import { Main } from './components/Main'
import { CarDetails } from './components/CarDetails'
import { AboutUs } from './components/AboutUs'


export const MainPageContainer = styled.div`
display: grid;
grid-template-rows: 20% 72% 8%;
flex-direction: column;
background-color:#f5f5f6;
width: 100%;
height: 100vh;
align-items:center;
justify-content:center;
`


export class App extends Component {
	state = {
		ProductPage: false,
		SellersPage: false,
		MainPage: true,
		CarDetails: false,
		AboutUs: false,
		clickedCar: '',
	}


	ChangePageSell = () => {
		this.setState({
			SellersPage: true,
			ProductPage: false,
			MainPage: false,
		});
	}
	ChangePageBuy = () => {
		this.setState({
			ProductPage: true,
			SellersPage: false,
			MainPage: false,
		});
	}

	ChangePageHome = () => {
		this.setState({
			MainPage: true,
			ProductPage: false,
			SellersPage: false,
			CarDetails: false,
		})
	}

	ChangePageHome = () => {
		this.setState({
			MainPage: true,
			ProductPage: false,
			SellersPage: false,
			CarDetails: false,
		})
	}
	ChangePageAboutUs = () => {
		this.setState({
			AboutUs: true,
			MainPage: false,
			ProductPage: false,
			SellersPage: false,
			CarDetails: false,
		})
	}
	goToDetail = (id) => {
		this.setState({
			AboutUs: false,
			MainPage: false,
			ProductPage: false,
			SellersPage: false,
			CarDetails: true,
			clickedCar: id
		})
	}


	ShowPage = () => {
		if (this.state.ProductPage) {
			return (
				<ProductPage goToDetail={this.goToDetail} />
			)
		}
		else if (this.state.SellersPage) {
			return (
				<SellersPage />
			)
		}
		else if (this.state.MainPage) {
			return (
				<Main goToDetail={this.goToDetail} />
			)
		}
		else if (this.state.CarDetails) {
			return (
				<CarDetails Car={this.state.clickedCar} />
			)
		}
		else {
			return (
				<AboutUs />
			)
		}
	}



	render() {
		console.log(this.state.CarDetails)
		console.log(this.state.clickedCar)
		return (
			<MainPageContainer>
				<Header buy={this.ChangePageBuy} sell={this.ChangePageSell} home={this.ChangePageHome} />
				{this.ShowPage()}
				<Footer aboutus={this.ChangePageAboutUs} />
			</MainPageContainer>
		)
	}
}

export default App
