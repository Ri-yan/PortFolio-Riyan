import {Container,Nav,Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import RESUME from '../data/RESUME.pdf'
const NavBar = () => {
  return (
    <div>
        <Navbar style={{zIndex:'1'}} bg="light" collapseOnSelect expand="lg" variant="light" >
        <Container>
          <Navbar.Brand href="#home" style={{fontVariant:'petite-caps',fontWeight:600}}>Mohd Riyan</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#home" className='me-2'>Home</Nav.Link>
            <Nav.Link href="#about" className='me-2'>About</Nav.Link>
            <LinkContainer to='/education'><Nav.Link className='me-2'>Education</Nav.Link></LinkContainer>
            <LinkContainer to='/projects'><Nav.Link className='me-2'>Projects</Nav.Link></LinkContainer>
            <LinkContainer to='/experience'><Nav.Link className='me-2'>Experience</Nav.Link></LinkContainer>
            <Nav.Link target='_blank' href={RESUME} className='me-2'>Resume</Nav.Link>
          </Nav>
          <Nav className="">
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavBar