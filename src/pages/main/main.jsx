import Layout from "../../layouts/app";
import Body from "../../layouts/body";
import Header from "../../layouts/header";

const Main = (props) => {
  return (
    <>
      <Layout>
        <Header />
        <Body></Body>
      </Layout>
    </>
  );
};

export default Main;
