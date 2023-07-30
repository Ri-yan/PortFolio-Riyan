import { Container, Row, Col,Card, Table } from "react-bootstrap";
import styled from "styled-components";
import mphoto from '../assets/mphoto.jpg'
import RESUME from '../data/RESUME.pdf'
const AboutMe = () => {
  const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)
  return (
    <Who >
      <Container className="about" id="about">
        <h2 className="mt-4 mb-5" ><i className="fas fa-user-alt"></i> About <span>Me</span></h2>
        <Row>
            <Col className="mt-lg-5 mb-4  mb-lg-5 ">
                <img draggable="false"  className="tilt" src={mphoto} alt=""/>
            </Col>
            
            <Col className="about mx-1" style={{borderRadius:'15px'}}>
                <h3>I'm Riyan</h3>
                <span className="tag"><b>Full Stack Developer</b></span>
                <p className='text-justify'>I am a Full-Stack developer based in Lucknow, India. 
                I am a student of Bachelor of Technology in Computer Science and Engineering at Integral University Lucknow.
                I am very passionate about improving my coding skills & developing applications & websites.
                I build WebApps and Websites using MERN Stack.
                Working for myself to improve my skills.
                Love to build Full-Stack clones. </p>
                <Table>
                  <tbody>
                    <tr className='text-start'>
                      <td><b>Age</b> : {getAge('08-01-2002')}</td>
                      <td><b>Phone</b> : 0123456789</td>
                    </tr>
                    <tr className='text-start'>
                      <td><b>Email</b> : mriyan0801@gmail.com</td>
                      <td><b>Place</b> : Lucknow UP India</td>
                    </tr>
                  </tbody>
                </Table>
                <div className="resumebtn">
                  <a href={RESUME} target='_blank'>
                <button
                type="button"
                className="btn btn-primary btn-md-md btn-lg-lg mt-4"
              >
                Resume
              </button></a>
                </div>

            </Col>
        </Row>
</Container>
    </Who>
  );
};

export default AboutMe;
const Who = styled.div`
z-index: 1;
background: #f2f5fc;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  padding: 6em 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-attachment: fixed;

  img {
    width: auto;
    height: 350px;
    border-radius: 20px;
    box-shadow: #0000005c 0 0 15px 0px;
  }
  @media (max-width: 550px) {
    padding: 4em 0em;
    img {
      width: auto;
      height: 250px;
      
    }
  }
  h3 {
    font-size: 14px;
    font-weight: 700;
    color: #4154f1;
    text-transform: uppercase;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #012970;
  }
  p {
    margin: 15px 0 30px 0;
    text-align: justify;
    line-height: 1.3;
  }
  .about {
    background-color: #f6f9ff;
    padding: 40px;
    box-shadow: #00000012 0 0 6px 0px;
  }
`;
