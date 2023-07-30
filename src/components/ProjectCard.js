import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import styled from 'styled-components'

const ProjectCard = ({name,preview,liveLink,codeLink,discription}) => {
  return (
    <Pcard>
        <div className="box-container">
            <img src={preview} alt="" />
            <div className="despriction-box">
                <h2><span className='name'></span> </h2>
                <div className="box2">
                <h3 style={{background:'#88a0ef',color:'white'}}>{name}</h3>
                <p>{discription}</p>
                <div className="links">
                    <a target='_blank' href={codeLink}><Button >Code</Button></a>
                    <a target='_blank' href={liveLink}><Button >Live</Button></a>
                </div>
                </div>
                
            </div>
        </div>
    </Pcard>
  )
}

export default ProjectCard

const Pcard=styled.div`
    .box-container{
        height: 280px;
        width: 380px;
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: #20212454 0 0 3px 0px;
    }
img{
    height: 280px;
    width: 100%;
    transition:1s;
    background-size: cover;
}

.links{
    display: flex;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
}
.despriction-box{
    height: 300px;
    margin-top: -11em;
    transition:1s;
    position: relative;
    z-index: 1;

}
.despriction-box:hover{
    transition:0.5s;
    margin-top: -19.5em;

}
.name{
    background: #88a0ef !important;

}
.despriction-box h2{
    padding-top: 4em;
    z-index: 1;
    padding-bottom: 0.1em;
    position: relative;
}
.box2{
    background: #ffffffe8;
    width: 100%;
    height: -webkit-fill-available;

}
h3{
    margin-bottom: 5px;
    padding-bottom: 10px;
}
a{
    text-decoration: none;
    color: white;
}
@media (max-width: 550px) {
    .box-container{
        width: 100%;
    }
    .despriction-box{
        margin-top: -9em;
    }
}
`