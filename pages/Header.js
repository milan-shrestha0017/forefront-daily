import { Container, Navbar, NavbarBrand } from 'reactstrap';

const Header = () => {
    return (
        <Navbar className="text-center" light expand="md">
            <Container>
                <NavbarBrand className="logo">Forefront Daily</NavbarBrand>
                <h4 className="header-text">Your daily dose of crypto news</h4>
            </Container>
        </Navbar>
    )
}

export default Header;