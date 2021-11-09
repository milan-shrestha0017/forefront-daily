import { Container, Row, Col } from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'

const List = () => {
    const ffList = [
        { image : "images/ens.png", title : "$ENS Governance Tokens Claim Now Open", link : "https://twitter.com/ensdomains/status/1457862602239926274" },
        { image : "images/cyber.png", title : "A Declaration of Interdependence of Cyberspace", link : "https://twitter.com/verses_xyz/status/1457872988045336581"},
        { image : "images/bankless.png", title : "Coinbase Brian Armstrong on Bankless Podcast", link : "https://shows.banklesshq.com/p/-90-brian-armstrong-and-the-future"},
        { image : "images/bau.png", title : "The BauDAO Building DAO", link : "https://cope.mirror.xyz/OxCfl2K4TJX-LJrkn9FElUFNrXaLiBQOvbZmfp9itZA" },
        { image : "images/curare.png", title : "A Curation Framework for DAOs", link : "https://jo7.mirror.xyz/ordGOgzoZclKwXN656O6_jC3wXM-FK8A0r8JfcC1d10"},
        { image : "images/nyc.png", title : "CityCoins coming to NYC", link : "https://twitter.com/mineCityCoins/status/1457728138155229187" }
    ] 

    return (
        <div className="section">
            <Container className="text-center">
                <Row className="justify-content-center">
                    <Col md={8}>
                        <div className="text-center mb-5">
                            <h4 className="list-title font-weight-normal text-dark">
                                Some of the best bits of news and articles we picked for you to be updated with web3 world
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
                                    <Image src={"/" + list.image} width={300} height={250} alt="" />
                                </div>
                                <h5 className="text-dark font-weight-normal pt-1 mb-3">{list.title}</h5>
                                {/* <a href={list.link} target="_blank" rel="noopener noreferrer" className="btn btn-success">Read article</a> */}
                                <Link href={list.link}>
                                    <a className="btn btn-success">Read article</a>
                                </Link>
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