import {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styled from 'styled-components'
import projectCover from '../../assets/projectCover.png'
import ProjectList from './ProjectList'

const ProjectPage = () => {
    const [showTile, setshowTile] = useState(false)

  return (
    <Project>
        {
            !showTile?<Container>
            <Row>
                <Col><img src={projectCover} className='cover m-auto' alt="" /></Col>
                <Col  className='title-section'>
					<div className='title-name'>
						My Projects;<div className='nav-links ch'  onClick={()=>{setshowTile(true);window.scroll({ top: 100,left: 0,behavior: 'smooth'});}}><a href='#' className='' style={{'textDecoration':'none',color:'black'}}>Click Here</a></div>
					</div>
                </Col>
                
            </Row>
                
        </Container>:<><Container>
            <Row>
                {/* <Col><img src={projectCover} className='cover m-auto' alt="" /></Col> */}
                {/* <Col  className='title-section'> */}
					<div className='title-name mt-0'>
						My Projects;
                        {/* <div className='nav-links ch'  onClick={()=>{window.scroll({ top: 500,left: 0,behavior: 'smooth'});}}><a href='#' className='' style={{'textDecoration':'none',color:'black'}}>Click Here</a> </div>*/}
                        
					</div>
                {/* </Col> */}
                
            </Row>
                
        </Container><ProjectList/></>
        }
        
    </Project>
  )
}

export default ProjectPage

const Project = styled.div`
margin: 5em auto;
height: 100%;
.title-name {
    font-family: 'MuseoModerno', cursive;
    font-size: 5vw;
}
.ch {
    font-size: 20px;
    font-size: 1.5vw;
    border-radius: 1em;
    border: 2px solid rgba(0,0,0,.12156862745098039);
    padding: 7px;
}
.title-section{
    display: flex;
    margin: auto;
    justify-content: center;
}
.cover{
    width: -webkit-fill-available;
    margin: auto;
}
@media (max-width: 940px) {
    .title-name{
        font-size: xx-large;
    }
    .ch{
        font-size: small;
    }
}
`