import { useState } from "react";
import { Container, Row, Form, Button, Col, Spinner } from "react-bootstrap";

// const CalculateForm = () => {
//   return (

//   );
// };
const Home = () => {
  const [result, setResult] = useState(false);
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [history, setHistory] = useState([]);

  async function getHistory() {
    const response = await fetch("http://localhost:5075");
    const h = await response.json();
    setHistory(h);
  }

  return (
    <Container fluid style={{ backgroundColor: "#9Fb6B2" }} className="h-100">
      <Row className="pt-5 text-center h-50 ">
        <Col sm={12} className="bg-dark text-white mb-5">
          {" "}
          <header>
            <h1>Memory API Demo (React frontend & C# backend)</h1>
          </header>{" "}
        </Col>

        <Col sm="6" md={6} className="mt-5  h-100">
          <Row>
            <Col sm="6" md={6}>
              <Form>
                <Form.Group>
                  <Form.Label>
                    <Form.Label>Num 1</Form.Label>
                    <Form.Control
                      type="input"
                      onChange={(e) => {
                        setNum1(e.target.value);
                      }}
                    />
                  </Form.Label>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    <Form.Label>Num 2</Form.Label>
                    <Form.Control
                      type="input"
                      onChange={(e) => {
                        setNum2(e.target.value);
                      }}
                    />
                  </Form.Label>
                </Form.Group>
                <Button className="btn btn-success">Submit</Button>
              </Form>
            </Col>
            <Col sm={6} id="result">
              <Row>
                <Col sm={2}>{num1}</Col>
                <Col sm={2}>+</Col>
                <Col sm={2}>{num2}</Col>
                <Col sm={2}>=</Col>
                <Col sm={2}>
                  {result ? (
                    result
                  ) : (
                    <Spinner animation="border" variant="primary" />
                  )}
                </Col>
              </Row>

              <div></div>
            </Col>
          </Row>
        </Col>
        <Col sm="6" className="mt-5">
          <h2>history</h2>
          <button onClick={getHistory}>Get hisory</button>
          <ul>
            {history.map((h) => (
              <li>h</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
