import Pagina from '@/components/Pagina'
import apiMovies from '@/service/apiMovies'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const index = ({atores}) => {
  return (
    <>
      <Pagina titulo="Atores">
        <Container>
          <h2>Conheça os Atores Populares</h2>
          <Row>
            {atores.map(item => (
              <Col md={3} title={item.name} key={item.id}>
                <Link href={'/ator/' + item.id}>
                <Card.Img className='rounded mb-3' variant="top" src={'https://image.tmdb.org/t/p/w500' + item.profile_path}   />
                </Link>
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
  const resultado = await apiMovies.get('/person/popular')
  const atores = resultado.data.results

  return {
    props: {atores},
  }
}