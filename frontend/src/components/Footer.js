import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='py-3'>
                        <img className="footer-logo" alt="" src="/Images/LogoBlanco.png"/>
                    </Col>
                    <Col className='text-center py-3'>
                        <span className="align-middle">Menu aviso de privacidad</span>   
                    </Col>
                    <Col className='text-center py-3'>
                        suscribete news letter
                    </Col>
                    <Col className='footer-social-icons py-3'>
                        <p>info@studiomaisonco.com</p>
                        <i className="fab fa-whatsapp"></i>
                        <i className="fab fa-pinterest"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
