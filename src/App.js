import React, { useState, useEffect } from 'react';
import { Heading } from './components/Heading';
import { UnsplashImage } from './components/UnsplashImage';
import { Loader } from './components/Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import About from './About';
import SearchApp from './searchcomponents/SearchApp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=67BCxl2nbP3OR6vUVcFvPUcasaxe60Z3CELfWfvmuDY&count=${count}`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }


  return (
    <div className="Apps">
      <Router>
        <Heading />
        <Switch>
          <Route path="/About" component={About}/>
          <Route path="/SearchApp" component={SearchApp}/>
        </Switch>
      </Router>
        
        <GlobalStyle />
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <WrapperImages>
            {images.map(image => (
              <UnsplashImage url={image.urls.regular} key={image.id} />
            ))}
          </WrapperImages>
        </InfiniteScroll>
      
    </div>
  );
}


export default App;