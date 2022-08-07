import { background, colors, fonts } from '../../helpers/theme'
import React from 'react'
import backroundImage from './2.webp'
import styled from 'styled-components'

export const WebPageApp = () => {
  return (
    <Div_Global>
      <meta charSet='UTF-8' />
      <meta
        name='viewport'
        content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
      />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <Header_Header>
        <div>
          <Div_Nav>
            <Ul_Menu></Ul_Menu>
          </Div_Nav>
          <Div_Offer>
            <p>Learn Javascript Fast by</p>
            <H1_OfferItem>“Hacking” Your Favorite Websites</H1_OfferItem>
            <A_Btn href='#'>Learn more</A_Btn>
          </Div_Offer>
        </div>
      </Header_Header>
      <Section_Section>
        <Div_Container1>
          <Div_Title>Hacks:</Div_Title>
          <Div_Articles>
            <Div_Articles1>
              <Header_Text>1. Replace All</Header_Text>
              <Article_Text>
                Sometimes used in debugging, alert() will pop up a small dialogue box in the
                browser. Go ahead and modify the code below to include your own message. (Don’t
                worry, you are the only one who will see this dialog box, you aren’t actually
                hacking the website!)
              </Article_Text>
              <P_CodeFrame>
                alert(HACKING IN PROGRESS!!! ^%$ I HAAZ HAXX (&amp;&amp;* 1337 )
              </P_CodeFrame>
              <Img_Img
                src='https://i.imgur.com/He1mv08.png'
                alt={'1'}
                style={{ marginLeft: '65px' }}
              />
            </Div_Articles1>
            <Div_Articles2>
              <Header_Text>
                2. Use Math.random() to give everything different orientations
              </Header_Text>
              <Article_Text>
                By selecting the div, p, span, img, a, and body tag(s) and using Math.random() you
                can give everything on the page random orientations, producing a very entertaining
                effect!
              </Article_Text>
              <P_CodeFrame>
                Array.prototype.slice.call( document.querySelectorAll(
                div,p,span,img,a,body)).map(function(tag){'{'}
                tag.style[transform] = rotate( + ( Math.floor(Math.random() * 3) - 1) + deg);
                {'}'});
              </P_CodeFrame>
              <Img_Img src='https://i.imgur.com/DurDSQu.png' alt={'2'} />
            </Div_Articles2>
            <Div_Articles2>
              <Header_Text>3. Change all tags &lt;&img&gt; to have cat pictures</Header_Text>
              <Article_Text>
                By selecting the div, p, span, img, a, and body tag(s) and using Math.random() you
                can give everything on the page random orientations, producing a very entertaining
                effect!
              </Article_Text>
              <P_CodeFrame>
                Array.prototype.slice.call( document.querySelectorAll(img)).map(function(tag)
                {'tag.src = http://bit.ly/2okYTfn'});
              </P_CodeFrame>
              <Img_Img src='https://i.imgur.com/Xk4e7gQ.png' alt={'3'} />
            </Div_Articles2>
          </Div_Articles>
        </Div_Container1>
      </Section_Section>
      <Footer_Footer>
        <Div_ContainerSocial>
          <p>Share this article</p>
          <Img_SocialMedia
            src='https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_960_720.png'
            alt='social-media'
          />
        </Div_ContainerSocial>
      </Footer_Footer>
    </Div_Global>
  )
}

export const Header_Header = styled.header`
  background: url(${backroundImage}) no-repeat center / cover;
`
export const Div_Container1 = styled.div`
  padding: 50px;
`
export const Div_Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  width: 120px;
`
export const Ul_Menu = styled.ul`
  display: flex;
`
export const A_MenuItems = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${fonts.small};
  color: white;
  margin-right: 40px;
  letter-spacing: 0.1em;
`
export const Div_Offer = styled.div`
  text-transform: uppercase;
  margin-top: 200px;
  padding: 40px;
`
export const H1_OfferItem = styled.h1`
  font-size: ${fonts.large};
  margin-bottom: 19px;
  margin-top: -9px;
  letter-spacing: 0.02em;
`
export const A_Btn = styled.a`
  display: block;
  font-size: ${fonts.small};
  text-align: center;
  letter-spacing: 0.01em;
  padding: 17px 47px;
  border: 1px solid #fff;
  width: 238px;
  color: white;
`
export const Section_Section = styled.section`
  display: block;
`
export const Div_Articles = styled.div`
  display: flex;
  flex-direction: column;
`
export const Div_Articles1 = styled.div`
  display: block;
  justify-content: center;
  text-align: justify;
  margin-left: 20px;
  margin-bottom: 100px;
`
export const Div_Articles2 = styled.div`
  display: block;
  justify-content: center;
  text-align: justify;
`
export const Article_Text = styled.article`
  margin-top: 10px;
  margin-bottom: 20px;
  display: block;
  font-size: 20px;
  text-align: left;
  color: black;
`
export const Header_Text = styled.header`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-size: ${fonts.small};
`
export const P_CodeFrame = styled.p`
  display: flex;
  align-items: center;
  font-size: ${fonts.small};
  text-align: center;
  letter-spacing: 0.01em;
  padding: 17px 47px;
  border: 0.3rem solid ${colors.green};
  width: fit-content;
  color: ${colors.blue};
`
export const Footer_Footer = styled.footer`
  border-top: 3px solid white;
`
export const Div_ContainerSocial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: ${fonts.small};
`
export const Img_SocialMedia = styled.img`
  width: 400px;
  align-items: center;
  margin-top: -50px;
`
export const Div_Title = styled.div`
  display: block;
  font-size: 50px;
  text-align: left;
  letter-spacing: 0.02em;
  margin-bottom: 50px;
`
export const Li_Li = styled.li`
  display: block;
  margin: 0px;
  padding: 0px;
`
export const Div_Global = styled.div`
  justify-content: center;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
  font-size: ${fonts.small};
  background: ${background.backgroundColor};
`
export const Img_Img = styled.img`
  margin-top: 30px;
  max-width: 100%;
  display: block;
  height: auto;
`
export default WebPageApp
