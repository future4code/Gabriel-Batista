import React, { Component } from "react";
import {
  FooterStyled,
  Contact,
  ContactIcons,
  TextFooter,
  Payment,
  PaymentIcons,
} from "./Styled/StyledFooter";
import LogoEmail from "../img/email-icon.png";
import LogoFacebook from "../img/facebook-icon.png";
import LogoTwitter from "../img/twitter-icon.png";
import LogoPhone from "../img/whatsapp-icon.png";
import LogoAmericaExpress from "../img/americanexpress-icon.png";
import LogoMastercard from "../img/master-icon.png";
import LogoVisa from "../img/visa-icon.png";
import LogoPaypal from '../img/paypal-icon.png'

export class Footer extends Component {
  render() {
    return (
      <FooterStyled>
        <Contact>
          <a href="https://www.outlook.com" target="_blank">
            <ContactIcons src={LogoEmail} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <ContactIcons src={LogoFacebook} />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <ContactIcons src={LogoTwitter} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <ContactIcons src={LogoPhone} />
          </a>
        </Contact>
        <TextFooter onClick={this.props.aboutus}>Sobre nós</TextFooter>
        <TextFooter onClick={this.props.aboutus}>Institucional</TextFooter>
        <TextFooter onClick={this.props.aboutus}>F.A.Q</TextFooter>
        <Payment>
          <PaymentIcons src={LogoAmericaExpress} />
          <PaymentIcons src={LogoMastercard} />
          <PaymentIcons src={LogoVisa} />
          <PaymentIcons src={LogoPaypal} />
        </Payment>
      </FooterStyled>
    );
  }
}
