import backroundImage from './2.jpg'
import styled from 'styled-components'

export const Header = styled.header`
  background: url(${backroundImage}) no-repeat center / cover;
`
export const Container1 = styled.div`
  padding: 50px;
`
export const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  width: 120px;
`
export const Menu = styled.ul`
  display: flex;
`
export const MenuItems = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  color: white;
  margin-right: 40px;
  letter-spacing: 0.1em;
`
export const Offer = styled.div`
  text-transform: uppercase;
  margin-top: 200px;
  padding: 40px;
`
export const OfferItem = styled.h1`
  font-size: 70px;
  margin-bottom: 19px;
  margin-top: -9px;
  letter-spacing: 0.02em;
`
export const Btn = styled.a`
  display: block;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.01em;
  padding: 17px 47px;
  border: 1px solid #fff;
  width: 238px;
  color: white;
`
export const Section = styled.section`
  display: block;
`
export const Articles = styled.div`
  display: flex;
  flex-direction: column;
`
export const Articles1 = styled.div`
  display: block;
  justify-content: center;
  text-align: justify;
  margin-left: 20px;
  margin-bottom: 100px;
`
export const Articles2 = styled.div`
  display: block;
  justify-content: center;
  text-align: justify;
`
export const Text = styled.article`
  margin-top: 10px;
  margin-bottom: 20px;
  display: block;
  font-size: 20px;
  text-align: left;
`
export const HeaderText = styled.header`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-size: 18px;
`
export const CodeFrame = styled.p`
  display: block;
  font-size: 17px;
  text-align: center;
  letter-spacing: 0.01em;
  padding: 17px 47px;
  border: 1px solid #fff;
  width: fit-content;
  color: white;
`
export const Footer = styled.footer`
  border-top: 3px solid white;
`
export const ContainerSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
`
export const SocialMedia = styled.img`
  width: 400px;
  align-items: center;
  margin-top: -50px;
`
export const Title = styled.div`
  display: block;
  font-size: 50px;
  text-align: left;
  letter-spacing: 0.02em;
  margin-bottom: 50px;
`
export const Li = styled.li`
  display: block;
  margin: 0px;
  padding: 0px;
`
export const Global = styled.div`
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: white;
  background: #36454f;
`
export const Img = styled.img`
  margin-top: 30px;
  max-width: 100%;
  display: block;
  height: auto;
`
