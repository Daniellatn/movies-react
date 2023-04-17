import Pagina from '@/components/Pagina'
import apiMovies from '@/service/apiMovies'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const index = () => {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    apiMovies.get('/movie/popular').then(resultado => {
      setFilmes(resultado.data.results)
      console.log(resultado.data.results)
    })
  }, [])
  
  return (
    <>
      <Pagina titulo="Filmes Poplares">
        <Container>
          <h2>Conheça os Filmes Populares</h2>
          <Row md={4}>
            {filmes.map(item => (
              <Col key={item.id}>
                <Card className="mt-3" style={{ width: '15rem' }}>
                  <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + item.poster_path}   />
                  <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text>Avaliação: <strong> {item.vote_average} </strong> </Card.Text>
                    <Card.Text>Lançamento: <strong> {item.release_date} </strong> </Card.Text>
                    <Button variant="primary">Detalhes</Button>
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