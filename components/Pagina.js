import React from 'react'
import { Card, Container } from 'react-bootstrap'
import Cabecalho from './Cabecalho'

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />
      <div className='bg-light text-dark py-3 text-center mb-3'>
        <Container> 
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      {props.children}

      <Card.Footer style={{width: '100%'}} className="text-dark text-center bg-light position-fixed bottom-0 p-2">Todos os direitos reservados®</Card.Footer>
    </>
    

  )
}

export default Pagina