import { FooterContainer, Medias } from './styles'

import logo from '../../assets/images/logo.png'
import instagran from '../../assets/images/instagran.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} alt="efood" />
      <Medias>
        <a href="#">
          <img src={instagran} alt="Instagran" />
        </a>
        <a href="#">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#">
          <img src={twitter} alt="Twitter|X" />
        </a>
      </Medias>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </FooterContainer>
  )
}

export default Footer
