import Pagina from '@/components/Pagina'
import Poster from '@/components/Poster'
import apiMovies from '@/service/apiMovies'
import { formatarData } from '@/util/formatarValores'
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const DetalhesAtor = ({detalheAtor, imagemAtor, filmesAtor, TVAtor}) => {
  console.log('filmes', TVAtor)
  return (
    <>
      <Pagina titulo={detalheAtor.name}>
        <Container className='bg-light shadow-lg rounded'>
          <Row>
            <Col md={3}>
              <Card.Img className='rounded my-3' variant="top" src={'https://image.tmdb.org/t/p/w500' + detalheAtor.profile_path}/>
            </Col>
            <Col md={9}>
              <p className="mt-3"><strong>Data de Nascimento: </strong> {formatarData(detalheAtor.birthday)} </p>
              <p className="mt-3"><strong>Local de Nascimento: </strong> {detalheAtor.place_of_birth}</p>
              <p className="mt-3">{detalheAtor.biography}</p>
            </Col>
          </Row>

          <Poster titulo="Imagens" lista={imagemAtor} imagens="file_path" link="/filmes/"/>
          <Poster titulo="Filmes" lista={filmesAtor} imagens="poster_path" link="/filmes/"/>
          <Poster titulo="Séries" lista={TVAtor} imagens="poster_path" link="/series/"/>

        </Container>
      </Pagina>
    </>
  )
}

export default DetalhesAtor

export async function getServerSideProps(context) {
  
  const idAtor = context.params.idAtor
  const resAtor = await apiMovies.get('/person/' + idAtor + '?language=pt-BR')
  const detalheAtor = resAtor.data

  const resImagens = await apiMovies.get('/person/' + idAtor + '/images')
  const imagemAtor = resImagens.data.profiles

  const resFilmes = await apiMovies.get('/person/' + idAtor+ '/movie_credits?language=pt-BR')
  const filmesAtor = resFilmes.data.cast

  const resTV = await apiMovies.get('/person/' + idAtor+ '/tv_credits?language=pt-BR')
  const TVAtor = resTV.data.cast

  return {
    props: {detalheAtor, imagemAtor, filmesAtor, TVAtor},
  }
}