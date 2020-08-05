import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="pt-5 mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="px-5" md={3} sm={12}>
                    Adeeb Rahman
                    </Col>
                    <Col className="px-5" md={3} sm={12}>
                        This site was made by Adeeb.
                    </Col>
                    <Col className="d-flex" md={3} sm={12}>
                            Copyright &copy; 2020 All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>               
    )
}

export default Footer