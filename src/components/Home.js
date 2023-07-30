import {Container, Col, Row } from "react-bootstrap"
import myphoto from '../assets/myphoto.png'
const Home = () => {
  return (
    <div>
        <Container className='h-100'>
            <Row>
                <Col style={{background:"blue",height:'100%',width:'50%'}}>
                    <p>Hi ! I Am</p>
                    <p>Mohd Riyan</p>
                </Col>
                <Col  style={{background:"orange",height:'100%',width:'50%'}}>
                <img src={myphoto} alt="" style={{width:'17rem'}} srcset="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home