import Pagina from '@/components/Pagina'
import apiMovies from '@/service/apiMovies'
import { formatarData, formatarNota, formatarReal } from '@/util/formatarValores'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const Detalhes = ({detalheFilme, atores}) => {

  return (
    <>
      <Pagina titulo={detalheFilme.title}>
        <Container className='bg-light shadow-lg rounded'>
          <Row>
            <Col md={3}>
              <Card.Img className='rounded mt-3' variant="top" src={'https://image.tmdb.org/t/p/w500' + detalheFilme.poster_path}   />
            </Col>
            <Col md={9}>
              <p className="mt-3"><strong>Lançamento: </strong> {formatarData(detalheFilme.release_date)}</p>
              <p className="mt-3"><strong>Orçamento: </strong> {formatarReal(detalheFilme.budget)}</p>
              <p className="mt-3"><strong>Duração do filme: </strong> {detalheFilme.runtime}</p>
              <p className="mt-3"><strong>Nota: </strong> {formatarNota(detalheFilme.vote_average)}</p>
              <p className="mt-3"><strong>Sinopse: </strong> {detalheFilme.overview}</p>
              <div>
                <strong>Generos: </strong>
                <ul>
                  {detalheFilme.genres.map(item => (
                    <li key={item.id}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <h2>Atores</h2>
          <Row md={6}>
            {atores.map(item => (
              <Col title={item.name + ' - ' + item.character} key={item.id}>
                <Card.Img className='rounded mb-3' variant="top" src={'https://image.tmdb.org/t/p/w500' + item.profile_path}   />
              </Col>
            ))}
          </Row>
        </Container>
      </Pagina>
    </>
  )
}

export default Detalhes

export async function getServerSideProps(context) {

  const idFilmes = context.params.idFilmes
  const resDetalhe = await apiMovies.get('/movie/' + idFilmes + '?language=pt-BR')
  const detalheFilme = resDetalhe.data

  const resAtores = await apiMovies.get('/movie/' + idFilmes + '/credits')
  const atores = resAtores.data.cast
  
  return {
    props: {detalheFilme, atores},
  }
}