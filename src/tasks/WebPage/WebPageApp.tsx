import {
  Articles,
  Articles1,
  Articles2,
  Btn,
  CodeFrame,
  Container1,
  ContainerSocial,
  Footer,
  Global,
  Header,
  HeaderText,
  Img,
  Li,
  Menu,
  MenuItems,
  Nav,
  Offer,
  OfferItem,
  Section,
  SocialMedia,
  Text,
  Title,
} from './style-components/Styles.styled'
import React from 'react'

export const WebPageApp = () => {
  return (
    <Global>
      <meta charSet='UTF-8' />
      <meta
        name='viewport'
        content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
      />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <Header>
        <div>
          <Nav>
            <Menu>
              <Li>
                <MenuItems href='home'>Home</MenuItems>
              </Li>
              <Li>
                <MenuItems href='about'>About</MenuItems>
              </Li>
            </Menu>
          </Nav>
          <Offer>
            <p>Learn Javascript Fast by</p>
            <OfferItem>“Hacking” Your Favorite Websites</OfferItem>
            <Btn href='#'>Learn more</Btn>
          </Offer>
        </div>
      </Header>
      <Section>
        <Container1>
          <Title>Hacks:</Title>
          <Articles>
            <Articles1>
              <HeaderText>1. Replace All</HeaderText>
              <Text>
                Sometimes used in debugging, alert() will pop up a small dialogue box in the
                browser. Go ahead and modify the code below to include your own message. (Don’t
                worry, you are the only one who will see this dialog box, you aren’t actually
                hacking the website!)
              </Text>
              <CodeFrame>
                alert(HACKING IN PROGRESS!!! ^%$ I HAAZ HAXX (&amp;&amp;* 1337 )
              </CodeFrame>
              <Img src='https://i.imgur.com/He1mv08.png' alt={'1'} style={{ marginLeft: '65px' }} />
            </Articles1>
            <Articles2>
              <HeaderText>
                2. Use Math.random() to give everything different orientations
              </HeaderText>
              <Text>
                By selecting the div, p, span, img, a, and body tag(s) and using Math.random() you
                can give everything on the page random orientations, producing a very entertaining
                effect!
              </Text>
              <CodeFrame>
                Array.prototype.slice.call( document.querySelectorAll(
                div,p,span,img,a,body)).map(function(tag){'{'}
                tag.style[transform] = rotate( + ( Math.floor(Math.random() * 3) - 1) + deg);
                {'}'});
              </CodeFrame>
              <Img src='https://i.imgur.com/DurDSQu.png' alt={'2'} />
            </Articles2>
            <Articles2>
              <HeaderText>3. Change all tags &lt;&img&gt; to have cat pictures</HeaderText>
              <Text>
                By selecting the div, p, span, img, a, and body tag(s) and using Math.random() you
                can give everything on the page random orientations, producing a very entertaining
                effect!
              </Text>
              <CodeFrame>
                Array.prototype.slice.call( document.querySelectorAll(img)).map(function(tag)
                {'tag.src = http://bit.ly/2okYTfn'});
              </CodeFrame>
              <Img src='https://i.imgur.com/Xk4e7gQ.png' alt={'3'} />
            </Articles2>
          </Articles>
        </Container1>
      </Section>
      <Footer>
        <ContainerSocial>
          <p>Share this article</p>
          <SocialMedia
            src='https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_960_720.png'
            alt='social-media'
          />
        </ContainerSocial>
      </Footer>
    </Global>
  )
}

export default WebPageApp
