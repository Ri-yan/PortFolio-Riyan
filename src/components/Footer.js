import { Col, Container, InputGroup, Row,Button ,Form} from 'react-bootstrap'
import styled from 'styled-components'
import {GrTwitter,GrInstagram,GrLinkedinOption } from 'react-icons/gr';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <FCom>
        <Container>
            <Row>
                <Col lg={4} style={{width:'fit-content'}} className="d-flex flex-column align-items-start mb-5" >
                    <div className='align-self-center ' >
                        <a href="/" className="d-flex align-items-center p-0 text-dark">
                        <span className="ml-3 h5 font-weight-bold">MOHD RIYAN</span>
                        </a>
                        <p className='text-start'>Thank you for visiting my personal portfolio website.<br/> Connect with me over socials.</p>
                        <div className="d-flex mt-5">
                        
                        <Button flat="true" color="dark" className="bg-black border-dark mx-3 px-3 py-2 d-flex align-items-center">
                            <GrLinkedinOption style={{fontSize:'0.8em'}}/>
                        </Button>
                        <Button flat="true" color="dark" className="bg-black border-dark px-3 py-2 d-flex align-items-center">
                            <FaFacebookF style={{fontSize:'0.8em'}}/>
                        </Button>
                        <Button flat="true" color="dark" className="bg-black border-dark mx-3 px-3 py-2 d-flex align-items-center">
                        <GrTwitter style={{fontSize:'0.8em'}}/>
                        </Button>
                        <Button flat="true" color="dark" className="bg-black border-dark px-3 py-2 d-flex align-items-center">
                        <GrInstagram style={{fontSize:'0.8em'}}/>
                        </Button>
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-evenly" style={{width:'100%'}}>
                <Col sm={5} lg={4}>
                <p className="h5 mb-4 text-start" style={{ fontWeight: '600' }}>
                    Quick Links
                </p>
                <div className="d-flex flex-column text-start mb-5" style={{ cursor: 'pointer' }}>
                    <a href="/">Resources</a>
                    <a href="https://www.linkedin.com/in/mohd-riyan-0330b4225/" target='_blank'  rel="noreferrer">About Us</a>
                    <a href="https://www.linkedin.com/in/mohd-riyan-0330b4225/" target='_blank'  rel="noreferrer">Contact</a>
                    <a href="/">Blog</a>
                </div>
                </Col>
                <Col lg={4}>
                    <p className="h5 mb-4 text-start" style={{ fontWeight: '600' }}>
                    Help
                    </p>
                    <div className="d-flex flex-column text-start" style={{ cursor: 'pointer' }}>
                        <a href="/">Support</a>
                        <a href="/">Support</a>
                        <a href="/">Support</a>
                    </div>
                </Col>
                </Col>
                
            </Row>
        </Container>


        <Row className="justify-content-center">
         <small className="text-center mt-5">&copy; <a style={{color:'black'}} href="https://www.linkedin.com/in/mohd-riyan-0330b4225/" target="_blank" rel="noopener noreferrer"> 
          Mohd Riyan</a> , 2022. All rights reserved.</small>
        </Row>
    </FCom>
  )
}

export default Footer

const FCom = styled.div`
background: white;
width: 100%;
padding-top: 4em;
padding-bottom: 2em;
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
`