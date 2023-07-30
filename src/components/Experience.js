import {useState} from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'

const Experience = () => {
  const [data, setData] = useState([
    {
      id:'1',
      timestamp:'',
      company:'Accenture',
      position:'Virtual Experience Program',
      start:'Dec 2022',
      end:'Jan 2023',
      skills:'SDLC, Security, Requirements, Cloud'
    },
    {
      id:'2',
      timestamp:'',
      company:'Exposys Data Labs',
      position:'Web Dev Intern',
      start:'Dec 2021',
      end:'Jan 2022',
      skills:'HTML, CSS, JS, ReactJS'
    },
    {
      id:'3',
      timestamp:'',
      company:'Innovitt Global',
      position:'Java Trainee',
      start:'Jul 2022',
      end:'Aug 2022',
      skills:'Core Java,Data Stuctures, HTML, CSS, JS'
    },
    {
      id:'4',
      timestamp:'',
      company:'CSE Dept. IU',
      position:'Python Trainee',
      start:'Apr 2022',
      end:'May 2022',
      skills:'Implementations etc'
    }
  ])
  return (
    <Exp>
       <Container>
            <h1 className='my-4'>Experience</h1>
            <Row style={{gap:'0.5em'}} className='d-flex flex-wrap mb-4'>
              {
                data.map((i)=>{
                  return <Col key={i.id}>
                          <Card className='m-auto' style={{textAlign:'left',width:'100%'}}>
                                  <Card.Body className='d-flex flex-column justify-content-center align-items-center pb-0'>
                                  <h5 className='text-center'>{i.company}</h5>
                                  <p className='date text-muted fs-8'>{i.start} - {i.end}</p>
                                  <h6 className='title'>{i.position}</h6>
                                  </Card.Body>
                              <Card.Body  className='pt-0 text-center'>
                              <p className='skill'><b>Skills: </b>{i.skills} etc</p>
                              </Card.Body>
                          </Card>
                          </Col>
                })
              }
            {/* <Col>
            <Card style={{textAlign:'left'}}>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center pb-0'>
                    <h5 className='text-center'>Accenture</h5>
                    <p className='date text-muted fs-8'>Dec 2022 - Jan 2023</p>
                    <h6 className='title'>Virtual Experience Program</h6>
                    </Card.Body>
                <Card.Body  className='pt-0 text-center'>
                <p className='skill'><b>Skills: </b>SDLC, Security, Requirements, Cloud etc</p>
                </Card.Body>
            </Card>
          </Col>
            <Col>
            <Card style={{textAlign:'left'}}>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center pb-0'>
                    <h5 className='text-center'>Exposys Data Labs</h5>
                    <p className='date text-muted fs-8'>Dec 2019 - Jan 2021</p>
                    <h6 className='title'>Web Dev Intern</h6>
                    </Card.Body>
                <Card.Body  className='pt-0 text-center'>
                <p className='skill'><b>Skills: </b> HTML, CSS, JS, ReactJS etc.</p>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{textAlign:'left'}}>
                    <Card.Body className='d-flex flex-column justify-content-center align-items-center pb-0'>
                    <h5 className='text-center'>Innovitt Global</h5>
                    <p className='date text-muted fs-8'>Jul 2022 - Aug 2022</p>
                    <h6 className='title'>Java Trainee</h6>
                    </Card.Body>
                <Card.Body  className='pt-0 text-center'>
                <p className='skill'><b>Skills: </b>Core Java,Data Stuctures, HTML, CSS, JS</p>
                </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{textAlign:'left'}}>
            <Card.Body className='d-flex flex-column justify-content-center align-items-center pb-0'>
                    <h5 className='text-center'>CSE Dept. IU</h5> 
                    <p className='date text-muted fs-8'>Apr 2022 - May 2022</p>
                    <h6 className='title'>Python Trainee</h6>
                    </Card.Body>
                <Card.Body  className='pt-0 text-center'>
                <p className='skill'><b>Skills: </b>Implementations etc.</p>
                </Card.Body>
            </Card>
          </Col> */}
            </Row>
        </Container>
    </Exp>
  )
}

export default Experience

const Exp = styled.div`
h1{
  font-family: 'MuseoModerno',cursive;
  font-weight: 600;
}
.date{
  font-size: x-small !important;
}
.title{
  text-align: center;
  font-size: medium !important;
}
.skill{
  font-size: 12px !important;
  padding: 0 5px;
}
`