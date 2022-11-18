import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Card, CardBody, CardText, CardTitle, CardSubtitle, Button, Col, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Row} from 'reactstrap'

function PokeCard({name, url, row}){

const [isLoading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([])
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);

  console.log(show)
  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      });
  }, []);
  
  if (isLoading) {
    return <div className="App">Loading...</div>;
  }else{


    const toggle = () => setModal(!modal);
  const bName = name.charAt(0).toUpperCase() + name.slice(1);
  const price = Math.round(pokemon.base_experience * 1.23);
  const types = pokemon.types;
  row = row === "1" ? row = true : row=false;

  return (
    <>
    <Col className='pokeColumn'>
      <Card color="dark" inverse style={{ width: '20rem'}}>
            <img alt={name} src={pokemon.sprites.front_default === null ? pokemon.sprites.back_default : pokemon.sprites.front_default} />
      <CardBody>
        <CardTitle tag="h5">
          {bName}      
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {price}€
        </CardSubtitle>
        <CardText>
        {
        types.map((type) =>
          <b>{type.type.name.toUpperCase()} </b>
          )
        }
        
        </CardText>
        <Button onClick={toggle}>
          Buy
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader className='bg-secondary' toggle={toggle}>Buy {bName} </ModalHeader>
          <ModalBody style={{ display: 'flex'}} className='bg-dark text-white text-center'>
            <Col md={6}><img style={{ width: '100%', height:'auto'}} alt={name} src={pokemon.sprites.front_default === null ? pokemon.sprites.back_default : pokemon.sprites.front_default} />
            <h1>{price}€</h1>
            </Col>
            <Col md={5}>
              <Form>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="trainerId">
                      Trainer ID
                    </Label>
                    <Input
                      id="trainerId"
                      name="trainerId"
                      placeholder="956 026 321"
                      type="email"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">
                  Delivery Address
                </Label>
                <Input
                  id="exampleAddress"
                  name="address"
                  placeholder="1234 Pallet Town"
                />
              </FormGroup>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="cardNumber">
                      Card Number
                    </Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="expireDate">
                      Expire Date
                    </Label>
                    <Input
                      id="expireDate"
                      name="expireDate"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cvv">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      name="cvv"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Col>
          </ModalBody>
          <ModalFooter className='bg-secondary'>
            <Button color="success" onClick={toggle}>
              Purchase
            </Button>{' '}
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </CardBody>
      </Card>
    </Col>
  </>
  )
}
}
export default PokeCard