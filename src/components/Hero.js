import { Container,Row,Col } from 'react-bootstrap'
import styled from 'styled-components'
import {FiChevronsRight} from "react-icons/fi"
import myphoto from '../assets/myphoto.png'
import cover2 from '../assets/cover2.png'
import comb from '../assets/comb.png'

import {AiFillLinkedin,AiFillGithub,AiOutlineInstagram,AiFillTwitterSquare} from 'react-icons/ai'
const WelcomePage = () => {
  return (
    <Welcome id='Home'>
        <Container>
          <Row>
            <Col className='text-start d-flex flex-column justify-content-center align-items-start up'>
              <h1 className=''>Hi! there, <br/> I Am Mohd Riyan </h1>
              <h3 className='mt-3 up'>I am in to web developement.</h3>
              
                <a href="#about">
                <button  type="button" className="btn btn-primary btn-md-md btn-lg-lg mt-4 up">About me <FiChevronsRight className='ms-1 my-auto fs-4'/></button>
             </a> 
             <Row>
                <Col className='icon'><a target='_blank' style={{textDecoration:'none',color:'black'}} href='https://www.linkedin.com/in/mohd-riyan-0330b4225/'><AiFillLinkedin/></a></Col>
                <Col className='icon'><a target='_blank' style={{textDecoration:'none',color:'black'}} href='https://github.com/Ri-yan/'><AiFillGithub/></a></Col>
                <Col className='icon'><a target='_blank' style={{textDecoration:'none',color:'black'}} href='https://www.instagram.com/mohdriyan01/'><AiOutlineInstagram/></a></Col>
                <Col className='icon'><a target='_blank' style={{textDecoration:'none',color:'black'}} href='https://twitter.com/mohdriyan08/'><AiFillTwitterSquare/></a></Col>
              </Row>
            </Col>
            
            <Col  className='right px-2 cover-container d-flex flex-column justify-content-center align-items-center'>
              <img src={myphoto} alt="hey" style={{width:'20rem',height:'auto'}}  className='cover up sh'  />
              {/* <img src={comb} className='sp' alt="" /> */}
            </Col>
          </Row>
        </Container>
        </Welcome>
  )
}

export default WelcomePage

const Welcome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: -webkit-fill-available;
    height: 100vh;
    background: transparent;

    /* height: -webkit-fill-available; */
    background: url(${cover2});
    padding: 20px;
    background-size: cover;
    background-position: top;
    padding-top: 0px;

    .sp{
      height: -webkit-fill-available;
      width: fit-content;
      height: auto;
      position: absolute;
      -webkit-animation:spin 20s linear infinite;
    -moz-animation:spin 20s linear infinite;
    animation:spin 20s linear infinite;
    z-index: 0;
    transition: 1s;
    transition-duration: 0.8s;
    }
    @-moz-keyframes spin { 
    100% { -moz-transform: rotate(360deg); } 
    }
    @-webkit-keyframes spin { 
        100% { -webkit-transform: rotate(360deg); } 
    }
    @keyframes spin { 
        100% { 
            -webkit-transform: rotate(360deg); 
            transform:rotate(360deg); 
        } 
    }
    .icon{
      font-weight: 400;
    background: white;
    padding: 10px 10px;
    border-radius: 44px;
    line-height: 0;
    font-size: 21px;
    margin-left: 15px;
    margin-top: 1em;
    border-style: ridge;
    cursor: pointer;
    }
    .sh:hover{
      transition: 0.8s;
    transform: scale(1.05);
    }
    .up{ 
      z-index: 1;
    animation-name: up;
    animation-duration: 2s;
   opacity: 1;
    }
    @keyframes up {
  from { 
    opacity: 0;
    transition: 1.8s;
    transform: translateY(148px);
}
  to {
    transition: 1.8s;
    transform: translateY(0px);
    opacity: 1;
}
    }
h1{
    font-size: 54px;
    font-weight: 700;
    color: #012970;
    margin: 0px;
    font-family: 'PT Sans Narrow', sans-serif;
    line-height: 1.2;
}
h2{
    color: #444444;
    margin: 15px 0 0 0;
    font-size: 26px;
    line-height: 1.2;
    font-weight: 300;
    font-family: 'Nunito Sans', sans-serif;
}
h3{
  font-weight: 400;
}
.cover{
    height: auto;
    width: auto;

}
@media (max-width: 940px) {
  margin-top: 4em;
padding-top: 20px;
  height: -webkit-fill-available;

    h1{
    font-size: 32px;
}
    h2{
        font-size: 24px;
    }
    .sp{
      width: 18em;
      height: auto;
    }
    }
    @media (max-width: 780px) {
        .cover-container{
            margin-top: 2rem;
        }
        .cover{
            height: 10rem;
            width: 10rem;
        }
}
 `