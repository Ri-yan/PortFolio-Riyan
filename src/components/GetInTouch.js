import { useState } from "react";
import { Container, Row, Col, Form,Card } from "react-bootstrap";
import styled from "styled-components";
import  newsletter from "../assets/newsletter.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { BsEmojiSmile } from "react-icons/bs";
import cover from '../assets/cover.jpg'

const Response = () => {
  const [load, setload] = useState(false);
  const [thankU, setthankU] = useState(true);
  const [responseData, setresponseData] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });
  const handleChange = async (e) => {
    setresponseData({ ...responseData, [e.target.name]: e.target.value });
  };
  const reviewSubmit = async (e) => {
    e.preventDefault();
    try {
      setload(true);
    //   await sentResponse(responseData);
      setload(false);
      setthankU(false);
    } catch (error) {
      console.log(error.message);
    }
    reviewClear();
  };
  const reviewClear = () => {
    setresponseData({
      email: "",
      name: "",
      subject: "",
      message: "",
    });
  };
  const { email, name, subject, message } = responseData;

  return (
    <SubCom id='contact'>
      <Container>
        {/* <Row>
          <Col className="underline">
            <h2>GET IN TOUCH</h2>
          </Col>
        </Row> */}
    <Card className="p-5 mt-4" style={{borderRadius:'20px'}}>
       <Container>
       <Row>
          <Col className="underline mb-4  ">
            <h2>GET IN TOUCH</h2>
          </Col>
        </Row>
       </Container>
        
        <Row className="d-flex justify-content-center">
          <Col xs={6} md={4} lg={4}>
            <img src={newsletter} alt="sent" className="sent" />
          </Col>

          {thankU ? (
            <Col xs={8} className="form">
              <Form onSubmit={reviewSubmit}>
                <Container>
                  <Row className="small">
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3 text-start"
                      >
                        <Form.Control
                          type="text"
                          name="name"
                          placeholder="name"
                          value={name}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 text-start"
                      >
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="name@example.com"
                          value={email}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Subject"
                        className="mb-3 text-start"
                      >
                        <Form.Control
                          type="text"
                          name="subject"
                          placeholder="subject"
                          value={subject}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FloatingLabel
                        className="mb-3 text-start"
                        controlId="floatingTextarea2"
                        label="Comments"
                      >
                        <Form.Control
                          as="textarea"
                          rows="4"
                          value={message}
                          resize="none"
                          name="message"
                          placeholder="Leave a comment here"
                          style={{ height: "110px" }}
                          onChange={handleChange}
                          required
                        />
                      </FloatingLabel>
                    </Col>
                  </Row>
                  <Row className="d-md-flex justify-content-md-end">
                    <button
                      disabled={load}
                      type="submit"
                      style={{ width: "7em" }}
                      className="btn btn-danger me-md-2 "
                    >
                      Submit
                    </button>
                  </Row>
                </Container>
              </Form>{" "}
            </Col>
          ) : (
            <Col xs={8} className="thank">
              {" "}
              <h2>
                <BsEmojiSmile /> Thanks for your response.
              </h2>
            </Col>
          )}
        </Row>
        </Card>
      </Container>
    </SubCom>
  );
};

export default Response;

const SubCom = styled.div`
background: #86eff1;
background: url(${cover});
padding: 20px;
background-position: top;
  background-size: cover;
  background-position: center;
background-repeat: no-repeat;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  margin: 0em auto;
  padding: 6em 0px;
  .sent {
    height: auto;
    width: 100%;
  }
  @media (max-width: 940px) {
    padding: 5em 0px;
    .form {
      width: -webkit-fill-available;
    }
    .small{
      display: flex;
      flex-direction: column;
      margin-top: 1em;
    }
  }
  .thank {
    margin: auto;
    font-variant: small-caps;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .underline {
    --color: red;
    --position: center bottom;
    --width: 100px;
    --height: 5px;
    background: linear-gradient(var(--color), var(--color)) var(--position) /
      var(--width) var(--height) no-repeat;
    padding-bottom: 10px;
    font: bold 2.5rem sans-serif;
  }
  p {
    letter-spacing: 0.02em;
    text-align: center !important;
    padding-top: 1.5rem !important;
  }
`;
