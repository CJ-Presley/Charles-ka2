import { useEffect } from "react";
import ParagraphPair from "../components/ParagraphPair";
import { Row, Col } from "react-bootstrap";

function HomePage() {
  useEffect(() => {
    document.title = "KA2 - Homepage";
  });
  return (
    <>
      <Row>
        <Col>
          <h1 className="text-dark text-center">Homepage</h1>
          <h5 className="text-center text-secondary">
            Welcome to this site's Home!
          </h5>
        </Col>
      </Row>
      <ParagraphPair />
      <Row className="border border-danger my-5">
        <h1 className="text-danger text-center my-5 py-5">End Of Page</h1>
      </Row>
    </>
  );
}
export default HomePage;
