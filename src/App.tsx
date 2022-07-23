import './App.css'
import React from 'react'

const App = () => {
  return (
    <div>
      <meta charSet='UTF-8' />
      <meta
        name='viewport'
        content='width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
      />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <title>JS</title>
      <link rel='stylesheet' href='./main.css' />
      <link rel='stylesheet' href='main.css' />
      <header className='header'>
        <div className='container'>
          <div className='nav'>
            <ul className='menu'>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#'>About</a>
              </li>
            </ul>
          </div>
          <div className='offer'>
            <p>Learn Javascript Fast by</p>
            <h1>“Hacking” Your Favorite Websites</h1>
            <a href='#' className='btn'>
              Learn more
            </a>
          </div>
        </div>
      </header>
      <section id='section' className='section'>
        <div className='container-1'>
          <div className='title'>Hacks:</div>
          <div className='articles'>
            <div className='articles-1'>
              <h3>1. Replace All</h3>
              <p>
                Sometimes used in debugging, alert() will pop up a small dialogue box in the
                browser. Go ahead and modify the code below to include your own message. (Don’t
                worry, you are the only one who will see this dialog box, you aren’t actually
                hacking the website!)
              </p>
              <p className='code-frame'>
                alert(HACKING IN PROGRESS!!! ^%$ I HAAZ HAXX (&amp;&amp;* 1337 )
              </p>
              <img src='https://i.imgur.com/He1mv08.png' alt={'1'} style={{ marginLeft: '65px' }} />
            </div>
            <div className='articles-2'>
              <h4>2. Use Math.random() to give everything different orientations</h4>
              <p>
                By selecting the div, p, span, img, a, and body tag(s) and using Math.random() you
                can give everything on the page random orientations, producing a very entertaining
                effect!
              </p>
              <p className='code-frame'>
                Array.prototype.slice.call( document.querySelectorAll(
                div,p,span,img,a,body)).map(function(tag){'{'}
                tag.style[transform] = rotate( + ( Math.floor(Math.random() * 3) - 1) + deg);
                {'}'});
              </p>
              <img src='https://i.imgur.com/DurDSQu.png' alt={'2'} />
            </div>
            <div className='articles-2'>
              <h4>3. Change all tags &lt;&img&gt; to have cat pictures</h4>
              <p>
                By selecting the div, p, span, img, a, and body tag(s) and using Math.random() you
                can give everything on the page random orientations, producing a very entertaining
                effect!
              </p>
              <p className='code-frame'>
                Array.prototype.slice.call( document.querySelectorAll(img)).map(function(tag)
                {'tag.src = http://bit.ly/2okYTfn'});
              </p>
              <img src='https://i.imgur.com/Xk4e7gQ.png' alt={'3'} />
            </div>
          </div>
        </div>
      </section>
      <footer className='footer'>
        <div className='container-social'>
          <p>Share this article</p>
          <img
            className='social-media'
            src='https://cdn.pixabay.com/photo/2021/02/08/15/44/social-media-5995266_960_720.png'
            alt='social-media'
          />
        </div>
        <div />
      </footer>
    </div>
  )
}

export default App
