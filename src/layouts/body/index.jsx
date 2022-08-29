import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonSide from "../../components/button-side/button-side";
import SideBar from "./sidebar";
import { FiBookmark, FiMoreHorizontal, FiThumbsUp } from "react-icons/fi";
import Story from "../../components/story";
import RightSidebar from "./right-sidebar";

function Body() {
  return (
    <div className="bg-light">
      <Container>
        <Row className="">
          <Col className="bg-light d-none d-lg-block mb-2" lg={2}>
            <SideBar></SideBar>
          </Col>
          <Col className="pt-2" xs={12} lg={7}>
            <div className="category">
              <span className="category-badge">Relevant</span>
              <span className="category-badge">Latest</span>
              <span className="category-badge">Top</span>
            </div>
            <div className="story-list">
              <Story />
              <Story />
              <Story />
            </div>
          </Col>
          <Col className="d-none d-lg-block right-sidebar pt-3" lg={3}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Body;
