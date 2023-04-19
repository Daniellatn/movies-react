import Pagina from '@/components/Pagina'
import apiMovies from '@/service/apiMovies'
import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'

const Detalhes = ({detalheFilme}) => {

  return (
    <>
      <Pagina titulo={detalheFilme.title}>
        <Container>
          <Row>
            <Col md={3}>
              <Card className="mt-3" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + detalheFilme.poster_path}   />
              </Card>
            </Col>
            <Col md={9}>
              <p>Lançamento: {detalheFilme.overview}</p>
            </Col>
          </Row>  
          </Container>
      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const id = context.params.idFilmes

  const resultado = await apiMovies.get('/movie/' + id + '?language=pt-BR')
  const detalheFilme = resultado.data
  
  return {
    props: {detalheFilme},
  }
}