import axios from 'axios'
import React, { Component } from 'react'
import { ContainerCard, ImageCard, PCard, ButtonCard } from './Styled/StyledProductCard'
import { ProductCardItem ,DivBox,Quantidade} from './Styled/StyledProductPage'
import { MainStyled, FiltroQuantidade } from './Styled/StyledMain'



export class ProductCardMain extends Component {
  state = {
    cars: []
  }

  componentDidMount = () => {
    this.getCars()
  }

  getCars = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars?limit=10')
      .then((res) => {
        this.setState({ cars: res.data.cars })
        console.log(this.state.cars)
      })
      .catch((err) => {
      })
  }
  filteredCars = () => {
    return this.state.cars.filter(car => car.name.includes(this.props.textInput))
  }


  render() {
    const filteredCars = this.filteredCars()
    console.log()

    return (
      <DivBox>
        <Quantidade>
        <FiltroQuantidade>Temos {filteredCars.length} carros esperando por você!</FiltroQuantidade>
        </Quantidade>
        <ProductCardItem>
          <MainStyled>
            {filteredCars.map((car) => {
              return (
                <ContainerCard>
                  <ImageCard src={car.imagen} alt="BMW" />
                  <PCard> {car.name} - {car.Modelo}</PCard>
                  <PCard> R$ {car.price},00</PCard>
                  <ButtonCard onClick={() => this.props.goToDetail(car)} >Comprar</ButtonCard>
                </ContainerCard>

              )
            })}

          </MainStyled>
        </ProductCardItem>
      </DivBox>
    )
  }
}
