import { Card, Container, Row } from "react-bootstrap"
import Home from "../components/Home"

function About() {
    return (
        <>
            <Home />
            <br />
            <Container>
                <Row>
                    <Card className="col-12">
                        <Card.Body>
                            <Card.Title>
                            Welcome to SOLV creative!
                            </Card.Title>
                            <Card.Text>
                                Designed to equip students with skills to thrive. Creativity has been clinically proven to build connections for learning, facilitate resilience, boost positive perspective and increase de-light!
                                SOLV creative is a place where cutting edge instructors have joined to spark creativity in the next generation through storytelling, rhythm, art, music, dance and more.
                                The dream of SOLV creative is to see young, budding creatives inspired, connected, and able to glean from skilled instructors who are already thriving in creative expression.
                                We’re here to see creativity flourish and students thrive!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Row>
                <Row>
                    <div className="col-12 col-md-6">
                        <Card className="col-12 pagecard">
                            <Card.Img src="Images/IMG_0292.JPG" />
                        </Card>
                    </div>
                    <div className="col-12 col-md-6">
                        <Card className="col-12 pagecard aboutCard">
                            <Card.Body>
                                <Card.Title>
                                    About me
                                </Card.Title>
                                <Card.Text>
                                    My name is Natalie, Creative Director at SOLV creative.
                                    I view life as one, big, creative adventure.
                                    I have been intrigued with creativity since childhood. At a young age, I was arranging food on my plate into designs and sculpting ‘clay’ from a river bed into complex objects (sometimes unrecognizable)!
                                    My passion to create has taken me into many different spaces.
                                    I studied piano in university and taught piano lessons. During this time, I trained as a music therapist and worked in the field for years. I had the privilege of using music to unlock children’s and adults’ potentials, inviting them into shared spaces of Joy and De-Light!
                                    A lifelong learner, I have studied multiple creative expressions, and continue to allow myself to be stretched. I have had the privilege of meeting several creatives along my journey who thrive in excellence and positive self-expression. I hope to connect you with as many of these creative champions as possible here in this space.
                                    Welcome to SOLV creative. Your life is about to get more vibrant!

                                    ~Natalie
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                {/* <Row className="m-15-top">
                    <h2>Our Courses</h2>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1678186878140-1c7eefc0a0b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1678384841436-26af8d484106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1679245883026-adea0f43e6f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://plus.unsplash.com/premium_photo-1669981123704-5836330e3ddd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
                <Row className="m-15-top">
                    <h2>Our Staff</h2>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1524854859347-bd2f42367134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <Card className="col-12 m-15-top">
                            <Card.Img variant="top" src="https://images.unsplash.com/photo-1687360440667-493016988a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" />
                            <Card.Body>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Row> */}
            </Container>
        </>
    )
}
export default About