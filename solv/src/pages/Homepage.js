import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import Home from "../components/Home";
import Footer from "../components/Footer";

function Homepage() {
    return (
        <>
            <Home />
            <Container>
                <Carousel>
                    <Carousel.Item interval={7000}>
                        <img
                            className="d-block w-100"
                            src="Images/slide1.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={7000}>
                        <img
                            className="d-block w-100"
                            src="Images/slide2.png"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <Row className="m-15">
                    <center>
                        <h2>Welcome to SOLV creative. Your life is about to get more vibrant!</h2>
                    </center>
                    <div className="col-12 col-md-6">
                        <Card className="col-12 pagecard">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1670746428028-139a4241918f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />
                            <Card.Body>
                                <Card.Title>Join In...</Card.Title>
                                <Card.Text>
                                    Story telling, art, music, dance and more.

                                    Awaken creativity. Engage your being in de-light. Start to thrive.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="col-12 pagecard">
                            <Card.Img src="https://images.unsplash.com/photo-1644224076179-31d622e21511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" />
                        </Card>
                    </div>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default Homepage