import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import {FaUserGraduate,FaSchool} from 'react-icons/fa'
import {GiSchoolBag} from 'react-icons/gi'


export const Education = () => {
  return (
    <Edu>
        <Container>
            <h1 className='my-4'>Education</h1>
            <Row>
                <Container>
                    <Row className='d-flex flex-column'>
                        <Col className='mb-3'>
                            <Card style={{textAlign:'left'}}>
                                <Card.Body className='d-flex justify-content-between align-items-center pb-0'>
                                    <h5><FaUserGraduate style={{margin:'inherit'}}/> B. Tech in Computer Science and Engineering </h5><h6>2023</h6>
                                    </Card.Body>
                                <Card.Body  className='pt-0'>
                                <h6 className='ms-4'>Integral University</h6>
                                <h6 className='ms-4'>87.8 %</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-3'>
                            <Card style={{textAlign:'left'}}>
                                <Card.Body className='d-flex justify-content-between align-items-center pb-0'>
                                    <h5><FaSchool style={{margin:'inherit'}}/> Senior School Certificate Examination</h5> <h6>2019</h6>
                                    </Card.Body>
                                <Card.Body  className='pt-0'>
                                <h6 className='ms-4'>Rani Laxmi Bai Memorial School</h6>
                                <h6 className='ms-4'>83.2 %</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className='mb-3'>
                            <Card style={{textAlign:'left'}}>
                                <Card.Body className='d-flex justify-content-between align-items-center pb-0'>
                                    <h5><GiSchoolBag style={{margin:'inherit'}}/> Secondary School Certificate Examination</h5> <h6>2017</h6>
                                </Card.Body>
                                <Card.Body className='pt-0'>
                                <h6 className='ms-4'>Rani Laxmi Bai Memorial School</h6>
                                <h6 className='ms-4'>10 CGPA</h6>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            {/* <ul class="StepProgress">
            <li class="StepProgress-item is-done">
                <FaUserGraduate/>
                <strong>Post a contest</strong>
                </li>
            <li class="StepProgress-item is-done"><strong>Award an entry</strong>
                Got more entries that you love? Buy more entries anytime! Just hover on your favorite entry and click the Buy button
            </li>
            </ul> */}
            </Row>
        </Container>
        
    </Edu>
  )
}
const Edu =styled.div`
height:'100vh';
h1{
  font-family: 'MuseoModerno',cursive;
  font-weight: 600;
}
.StepProgress {
  position: relative;
  padding-left: 45px;
  list-style: none;

  &::before {
    display: inline-block;
    content: '';
    position: absolute;
    top: 0;
    left: 15px;
    width: 10px;
    height: 100%;
    border-left: 2px solid #CCC;
  }
}
  &-item {
    position: relative;
    counter-increment: list;
    
    &:not(:last-child) {
      padding-bottom: 20px;
    }
    
    &::before {
      display: inline-block;
      content: '';
      position: absolute;
      left: -30px;
      height: 100%;
      width: 10px;
    }
    
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      left: -37px;
      width: 12px;
      height: 12px;
      border: 2px solid #CCC;
      border-radius: 50%;
      background-color: #FFF;
    }
    
    &.is-done {
      &::before {
        border-left: 2px solid green;
      
      &::after {
        content: "✔";
        font-size: 10px;
        color: #FFF;
        text-align: center;
        border: 2px solid green;
        background-color: green;
      }
    }
    
    &.current {
      &::before {
        border-left: 2px solid green;
      }
      
      &::after {
        content: counter(list);
        padding-top: 1px;
        width: 19px;
        height: 18px;
        top: -4px;
        left: -40px;
        font-size: 14px;
        text-align: center;
        color: green;
        border: 2px solid green;
        background-color: white;
      }
    }
  }
}
`
