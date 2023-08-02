import "./navbar.scss";
import { Col, Row } from "antd";

export default function Navbar() {
  return (
    <div className="navbar_container">
      <Row className="navbar_row_one" justify={"center"} align={"center"}>
        <Col className="navbar_elements" span={10}>
          <img
            src="https://t3.ftcdn.net/jpg/05/04/21/08/240_F_504210856_atjaINEICHOThP14bNnCFq2LNXqu1Plx.jpg"
            alt=""
          />
        </Col>
      </Row>

      <Row className="navbar_row_two" justify={"space-around"}>
        <Col className="navbar_elements" span={2}>
          <h3>Item</h3>
        </Col>
        <Col className="navbar_elements" span={2}>
          <h3>Item</h3>
        </Col>
        <Col className="navbar_elements" span={2}>
          <h3>Item</h3>
        </Col>
        <Col className="navbar_elements" span={2}>
          <h3>Item</h3>
        </Col>
      </Row>
    </div>
  );
}
