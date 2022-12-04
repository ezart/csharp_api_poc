import { useState } from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";

// const CalculateForm = () => {
//   return (

//   );
// };
const Home = () => {
  const [sum, setSum] = useState(0);
  return (
    <Container
      fluid
      style={{ backgroundColor: "#9Fb6B2", height: "100vh" }}
      className="h-100"
    >
      <Row>
        <header>Memory API Demo (React frontend & C# backend)</header>
        <Col
          md="12"
          style={{ "margin-top": "25vh", border: "1px solid black" }}
          className="mb-5"
        >
          {sum}
        </Col>

        <Col>
          <Form>
            <Form.Group>
              <Form.Label>
                <Form.Label>Num 1</Form.Label>
                <Form.Control type="input" />
              </Form.Label>
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Form.Label>Num 2</Form.Label>
                <Form.Control type="input" />
              </Form.Label>
            </Form.Group>
            <Button className="btn btn-success">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
