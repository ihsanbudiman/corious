import { Fragment } from "preact";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiSearch } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";

function NavScrollExample() {
  return (
    <Navbar bg="white" className="shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/write-story">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Nav.Item>
              <InputGroup className="d-flex">
                <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <InputGroup.Text id="basic-addon2" className="btn btn-primary pt-1">
                  <FiSearch></FiSearch>
                </InputGroup.Text>
              </InputGroup>
            </Nav.Item>
          </Nav>
          <Fragment>
            <Button>ads</Button>
          </Fragment>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
