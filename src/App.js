import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar variant="dark"data-bs-theme="dark"expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </header>
      <main>
      <Container>
      <Row className='px-4 my-4'>
        <Col sm={7}>
          <Image src = "https://dummyimage.com/900x400/000/fff" fluid />
        </Col>
        <Col sm={5}>
        <h1 className='font-weigh-light'>Tagline</h1>
        <p>
          This is a template that is great for small business.
          it dosesnt have to much fancy flare to it,
           but it makes a great use of the standarg bootstrap 
           core components. Feel free to use this template for
            any project
        </p>
        <Button variant="outline-primary">
           Call To Action
        </Button>
        </Col>
      </Row>
      <Row>
        <Card className="text-center bg-secondary text-white">
          <Card.Body>
            This call to action vcard is a great place to showcase some 
            important information or display a clever tagline!
          </Card.Body>
        </Card>
      </Row>

    </Container>
      </main>
    </div>
  );
}

export default App;
