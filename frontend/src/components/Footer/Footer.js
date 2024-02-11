import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", paddingTop: "20px", paddingBottom: "20px" }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>Stay Connected</p>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
              <a href="#" style={{ color: "#fff", margin: "0 10px", fontSize: "20px" }}>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="#" style={{ color: "#fff", margin: "0 10px", fontSize: "20px" }}>
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="#" style={{ color: "#fff", margin: "0 10px", fontSize: "20px" }}>
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </div>
            <p style={{ fontSize: "14px", marginBottom: "0" }}>Made with <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} /> by Cyber Note</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
