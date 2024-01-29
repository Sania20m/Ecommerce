import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Img from '../../Img/Img';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import FigureCaption from 'react-bootstrap/FigureCaption';

const Products=()=>{

    return(
<div>
    <Container fluid>
    <Row>
      <Col>
        <Card style={{ height: '250px' }} className='bg-secondary text-white'>
          <Card.Body src="holder.js/100px1280">
            <Card.Title ><h1>The Generics</h1></Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>

  <Container>
    <Row>
      <Col xs={6} md={4}>
        {/* <Image src={image} style={{ width: '250px', height: '364px' }} thumbnail /> */}
        <img style={{width:'250px',height:'364px'}} src={Img.im1}/>
        <FigureCaption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </FigureCaption>
        <Button>Add to Cart</Button>
      </Col>
      <Col xs={6} md={4}>
        {/* <Image src={imag} style={{ width: '250px', height: '364px' }} thumbnail /> */}
        <img style={{width:'250px',height:'364px'}} src={Img.im2}/>
        <FigureCaption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </FigureCaption>
        <Button>Add to Cart</Button>
      </Col>
      <Col xs={6} md={4}>
        {/* <Image src={pin} style={{ width: '250px', height: '364px' }} thumbnail /> */}
        <img style={{width:'250px',height:'364px'}} src={Img.im2}/>
        <FigureCaption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </FigureCaption>
        <Button>Add to Cart</Button>
      </Col>
      <Col xs={6} md={4}>
        {/* <Image src={pin} style={{ width: '250px', height: '364px' }} thumbnail /> */}
        <img style={{width:'250px',height:'364px'}} src={Img.im2}/>
        <FigureCaption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </FigureCaption>
        <Button>Add to Cart</Button>
      </Col>
      <Col xs={6} md={4}>
        {/* <Image src={imag} style={{ width: '250px', height: '364px' }} thumbnail /> */}
        <img style={{width:'250px',height:'364px'}} src={Img.im2}/>
        <FigureCaption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </FigureCaption>
        <Button>Add to Cart</Button>
      </Col>
      <Col xs={6} md={4}>
        {/* <Image src={image} style={{ width: '250px', height: '364px' }} thumbnail /> */}
        <img style={{width:'250px',height:'364px'}} src={Img.im2}/>
        <FigureCaption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </FigureCaption>
        <Button>Add to Cart</Button>
      </Col>
    </Row>
  </Container>
  </div>
    )
}

export default Products;