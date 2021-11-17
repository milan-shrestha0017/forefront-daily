import { Container, Row, Col, Button } from 'reactstrap'
import Image from 'next/image'

import ffDailyImage from '../public/images/ff-daily.png'

const List = () => {
    const ffList = [
        { title : "$ENS Governance Tokens Claim Now Open", link : "https://twitter.com/ensdomains/status/1457862602239926274" },
        { title : "A Declaration of Interdependence of Cyberspace", link : "https://twitter.com/verses_xyz/status/1457872988045336581"},
        { title : "Coinbase Brian Armstrong on Bankless Podcast", link : "https://shows.banklesshq.com/p/-90-brian-armstrong-and-the-future"},
        { title : "The BauDAO Building DAO", link : "https://cope.mirror.xyz/OxCfl2K4TJX-LJrkn9FElUFNrXaLiBQOvbZmfp9itZA" },
        { title : "A Curation Framework for DAOs", link : "https://jo7.mirror.xyz/ordGOgzoZclKwXN656O6_jC3wXM-FK8A0r8JfcC1d10"},
        { title : "CityCoins coming to NYC", link : "https://twitter.com/mineCityCoins/status/1457728138155229187" },
        { title : "The BauDAO Building DAO", link : "https://cope.mirror.xyz/OxCfl2K4TJX-LJrkn9FElUFNrXaLiBQOvbZmfp9itZA" },
        { title : "A Curation Framework for DAOs", link : "https://jo7.mirror.xyz/ordGOgzoZclKwXN656O6_jC3wXM-FK8A0r8JfcC1d10"},
        { title : "CityCoins coming to NYC", link : "https://twitter.com/mineCityCoins/status/1457728138155229187" }
    ] 

    return (
        <div className="section">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="text-center">
                            <h4 className="list-title font-weight-normal">
                                Some of the best bits of news and articles we picked for you
                            </h4>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        ffList.map((list, key) => 
                            <Col key={key} md={4}>
                                <div className="post-box">
                                    <div className="mb-3">
                                        <Image src={ffDailyImage} width={175} height={175} alt="FF Daily Logo" />
                                    </div>
                                    <h5 className="link-title font-weight-bold pt-1 mb-3">{list.title}</h5>
                                    <a href={list.link} target="_blank" rel="noopener noreferrer"><Button color="success" block>Read article</Button></a>
                                </div>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default List