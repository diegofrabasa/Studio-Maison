import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col className='text-right py-0 header-social-icons'>
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-left py-3'>
                        <img className="header-logo" alt="" src="/Images/LogoMenu.png"/>
                    </Col>
                    <Col className='text-right py-3'>
                        <span className='align-middle'>Iniciar sesión</span>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
