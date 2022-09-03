import { Col, Row } from "react-bootstrap";
import Layout from "../../../layouts/app";
import Body from "../../../layouts/body";
import RightSidebar from "../../../layouts/body/right-sidebar";
import SideBar from "../../../layouts/body/sidebar";
import Header from "../../../layouts/header";

import edjsHTML from "editorjs-html";
import editorJsParser from "../../../helpers/editorJsParser";
const edjsParser = edjsHTML();

const INITIAL = {
  time: 1661948372070,
  blocks: [
    { id: "Q62j2X7N_G", type: "paragraph", data: { text: "adsf" } },
    { id: "qHXbA-9So1", type: "header", data: { text: "adfasfdadsf", level: 2 } },
    { id: "u9pMk3BcnK", type: "code", data: { code: "adsfsdafds\n<h1>\n  asdf  \n</h1>" } },
    { id: "HVBbxPNJ7v", type: "delimiter", data: {} },
    { id: "Au6O_UH73E", type: "list", data: { style: "ordered", items: ["asdfdsaf"] } },
    { id: "ZYd7PY4RYU", type: "list", data: { style: "unordered", items: ["sdfsd"] } },
    { id: "ZMBajAHSTh", type: "image", data: { file: { url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" }, caption: "", withBorder: false, stretched: false, withBackground: false } },
  ],
  version: "2.25.0",
};

const Story = (props) => {
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
              {JSON.stringify(INITIAL) != `{}` ? (
                <div style={{ width: `100%` }}>
                  {editorJsParser(INITIAL).map((el) => {
                    console.log(el);
                    return el;
                  })}
                </div>
              ) : (
                ""
              )}
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

export default Story;
