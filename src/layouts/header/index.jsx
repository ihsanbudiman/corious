import { Fragment } from "preact";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FiSearch } from "react-icons/fi";
import InputGroup from "react-bootstrap/InputGroup";
import PublishButton from "../../components/publish-button";
import { route } from "preact-router";

function NavScrollExample() {
  return (
    <Navbar bg="white" className="shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="/">Dear Dairy</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        {/* <Navbar.Collapse id="navbarScroll"> */}
        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
          {/* <Nav.Item>
            <InputGroup className="d-flex">
              <Form.Control placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <InputGroup.Text id="basic-addon2" className="btn btn-primary pt-1">
                <FiSearch></FiSearch>
              </InputGroup.Text>
            </InputGroup>
          </Nav.Item> */}
        </Nav>
        <Fragment>
          <PublishButton onClick={() => route("/write-story")} style={{ marginRight: `0.75rem` }}>
            Tell Your Story
          </PublishButton>
          {/* make a profile image */}
          <NavDropdown
            align="end"
            title={
              <>
                <img src="https://picsum.photos/200" className="rounded-circle" style={{ width: `30px`, height: `30px` }} />
              </>
            }
            id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
          </NavDropdown>
        </Fragment>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
