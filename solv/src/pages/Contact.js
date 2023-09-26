import { Button, Card, Container, Row } from "react-bootstrap"
import Home from "../components/Home"

function Contact() {
    return (
        <>
        <Home/>
        <Container>
            <Row className="m-15-top">
                <div className="col-md-2"/>
                <Card className="col-12 col-md-8">
                    <Card.Header>
                        <h2>Get in touch!</h2>
                    </Card.Header>
                    <Card.Body>
                        A message about getting in touch
                        <br/>
                        <hr/>
                        Email: <a href="mailto:email@gmail.com">email@gmail.com</a>
                        <hr/>
                        Schedule a call: <a href="https://google.com">Calendly</a>
                    </Card.Body>
                </Card>
                <div className="col-md-2"/>
            </Row>
        </Container>
        </>
    )
}
export default Contact