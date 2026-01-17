// src/App.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        {/* Barre de navigation */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Checkpoint React</Navbar.Brand>
          </Container>
        </Navbar>

        {/* En-tête */}
        <header className="text-center my-4">
          <h1>Bienvenue sur mon projet React</h1>
          <p>Ce projet utilise React et React-Bootstrap</p>
        </header>

        {/* Trois cartes */}
        <Container>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Carte 1</Card.Title>
                  <Card.Text>
                    Ceci est la description de la première carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Carte 2</Card.Title>
                  <Card.Text>
                    Ceci est la description de la deuxième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Carte 3</Card.Title>
                  <Card.Text>
                    Ceci est la description de la troisième carte.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
