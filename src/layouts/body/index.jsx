import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonSide from "../../components/button-side/button-side";
import SideBar from "./sidebar";
import { FiBookmark, FiMoreHorizontal, FiThumbsUp } from "react-icons/fi";
import Story from "../../components/story";
import RightSidebar from "./right-sidebar";

function Body(props) {
  return (
    <div className="bg-light">
      <Container>{props.children}</Container>
    </div>
  );
}

export default Body;
