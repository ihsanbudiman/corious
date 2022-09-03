import { Col, Row } from "react-bootstrap";
import Story from "../../components/story";
import Layout from "../../layouts/app";
import Body from "../../layouts/body";
import RightSidebar from "../../layouts/body/right-sidebar";
import SideBar from "../../layouts/body/sidebar";
import Header from "../../layouts/header";

const Main = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <Body>
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
        </Body>
      </Layout>
    </>
  );
};

export default Main;
