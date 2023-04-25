import Pagina from '@/components/Pagina'
import apiMovies from '@/service/apiMovies'
import { formatarData, formatarNota } from '@/util/formatarValores'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const index = ({filmes}) => {
  
  return (
    <>
      <Pagina titulo="Filmes">
        <Container>
          <h2>Conheça os Filmes Populares</h2>
          <Row md={4}>
            {filmes.map(item => (
              <Col key={item.id}>
                <Card className="mt-3" style={{ width: '20rem' }}>
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + item.backdrop_path}   />
                  <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text>Avaliação: <strong> {formatarNota(item.vote_average)} </strong> </Card.Text>
                    <Card.Text>Lançamento: <strong> {formatarData(item.release_date)} </strong> </Card.Text>
                    <div className='text-center mb-2'>
                      <Link href={'/filmes/' + item.id} className='btn btn-primary'>Detalhes</Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Pagina>  
    </>
  )
}

export default index

export async function getServerSideProps(context) {

  const resultado = await apiMovies.get('/movie/popular')
  const filmes = resultado.data.results

  return {
    props: {filmes},
  }
}