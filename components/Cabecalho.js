import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Online Locator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/filmes">Filmes</Nav.Link>
            <Nav.Link href="/ator">Atores</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho