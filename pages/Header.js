import { Container, Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <Navbar className="" light expand="md">
            <Container>
                <NavbarBrand className="brand-name">Forefront Daily</NavbarBrand>
                <h3 className="brand-name-tag">Your daily dose of crypto news</h3>
                <div className="header-text">
                    <p className="">Forefront Team brings you the best curated resources from the latest happenings in the crypto, web3 and DAO world.</p>
                    <p className="">Enjoy the contents and happy reading.</p>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header;