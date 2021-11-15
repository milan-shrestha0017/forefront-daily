import { Container, Row, Col, Button } from 'reactstrap'

const FfContent = () => {

    const ffContents = [
        { title: "Learn about Social Tokens", linkText: "FF Learn", link: "https://forefront.market/learn/social-tokens" },
        { title: "Read our latest newsletter", linkText: "Latest Issue", link: "https://forefront.market/newsletter"},
        { title: "Join our Discord server", linkText: "Join", link: "https://discord.com/invite/9tfgWCQn6m"}
    ]
    return (
        <div className="section ffContent">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={4}>
                        <h3 className="mb-5">More from Forefront</h3>
                    </Col>      
                </Row>
                <Row>
                    {
                        ffContents.map((content, key) => 
                            <Col key={key} md={4}>
                                <div className="mb-3">
                                    <h5 className="mb-3">{content.title}</h5>
                                    <a href={content.link} target="_blank" rel="noopener noreferrer">
                                        <Button color="" className="ff-content-btn mb-3">{content.linkText}</Button>
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