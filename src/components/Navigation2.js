import {Container,Nav,Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
const NavBar2 = () => {
  return (
    <div>
        <Navbar style={{zIndex:'1'}} bg="light" collapseOnSelect expand="lg" variant="light" >
        <Container>
          <Navbar.Brand href="#home" style={{fontVariant:'petite-caps',fontWeight:600}}>Mohd Riyan</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto me-auto">
            <LinkContainer to='/'><Nav.Link className='me-2'>Home</Nav.Link></LinkContainer>
            <LinkContainer to='/education'><Nav.Link className='me-2'>Education</Nav.Link></LinkContainer>
            <LinkContainer to='/projects'><Nav.Link className='me-2'>Projects</Nav.Link></LinkContainer>
            <LinkContainer to='/experience'><Nav.Link className='me-2'>Experience</Nav.Link></LinkContainer>
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

export default NavBar2