import { useContext, useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Biscuit from "../assets/biscuitClicker.png";
import { CountContext } from "../components/countProvider";

function ClickerPage() {
  useEffect(() => {
    document.title = "KA2 - Biscuit Clicker";
  });
  const countContext = useContext(CountContext);

  const handleIncrement = () => {
    countContext?.setCount(countContext?.count + multiplier);
  };
  const [multiplier, setMultiplier] = useState(1);
  const updateMultiplier = () => {
    setMultiplier(multiplier + 1);
    countContext?.setCount(countContext?.count - 100);
  };

  return (
    <>
      <Row>
        <Col></Col>
        <Col className="my-5 py-5">
          <img
            src={Biscuit}
            alt="Cookie Img"
            className=""
            onClick={handleIncrement}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <h2 className="">Upgrade Multiplier: {multiplier}</h2>
          <Button
            variant="success"
            disabled={Number(countContext?.count) < 99}
            onClick={updateMultiplier}
          >
            Upgrade
          </Button>
        </Col>
      </Row>
    </>
  );
}
export default ClickerPage;

