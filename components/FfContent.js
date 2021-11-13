import { Container, Row, Col, Button } from 'reactstrap'

const FfContent = () => {

    const ffContents = [
        { title: "Learn about Social Tokens", linkText: "FF Learn", link: "https://forefront.market/learn/social-tokens" },
        { title: "Read our latest newsletter", linkText: "Latest Issue", link: "https://forefront.market/newsletter"},
        { title: "Subscribe to our newletter", linkText: "Subscribe", link: "https://forefront.market/newsletter"}
    ]
    return (
        <div className="section ffContent">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h3 className="mb-4">More from Forefront</h3>
                    </Col>      
                </Row>
                <Row>
                    {
                        ffContents.map((content, key) => 
                            <Col key={key} md={4}>
                                <div className="mt-4">
                                    <h6>{content.title}</h6>
                                    <a href={content.link} target="_blank" rel="noopener noreferrer">
                                        <Button color="success" size="sm">{content.linkText}</Button>
                                    </a>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default FfContent