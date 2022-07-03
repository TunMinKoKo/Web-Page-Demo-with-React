import React,{useState,useEffect} from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Banner from './Banner'
import Artists from './Artists'
import ArtistsMobile from './ArtistsMobile'
import Categories from './Categories'
import MediaQuery from 'react-responsive'
import {
  banner,
  artists,
  categories
} from './_Data.js'

function App() {
  return (
    <div className="App">
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0">
            <Banner banner={banner}/>
          </Col>
        </Row>
      </Container>
      <Container fluid className="p-5 artist-section">
        <Container>
          <Row className="m-0">
          <MediaQuery maxWidth={480}>
            <ArtistsMobile artists={artists}/>
          </MediaQuery>
          <MediaQuery minWidth={481}>
            <Artists artists={artists}/>
          </MediaQuery>
          </Row>
        </Container>
      </Container>
      <Container fluid className="p-3 category-section">
        <Container>
          <Row className="m-0">
            <Col className="p-0">
              <Categories categories={categories}/>
            </Col>
          </Row>
          </Container>
        </Container>
    </div>
  );
}

export default App;
