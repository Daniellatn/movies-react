import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

function ExibirPoster(props) {
  return (
    <Link href={props.link}>
      <Card.Img className='rounded mb-3' variant='top' src={'https://image.tmdb.org/t/p/w500' + item[props.imagens]} />
    </Link>
  )
}

const Poster = (props) => {
  return (
    <>
      {
        props.titulo &&
        <h2 className='mt-3'>{props.titulo}</h2>
      }
      <Row>
        {props.lista.map(item => (
          <Col md={2} key={item.id}>
            <Card.Img className='rounded mb-3' variant='top' src={'https://image.tmdb.org/t/p/w500' + item[props.imagens]} /> 
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Poster