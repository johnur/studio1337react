import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../style/Us.scss';


const Price = () => {
    return (
        <div>
            <Container className="hinnasto">
                <h2 className='nimi' style={{ textAlign: 'center'}}>Hinnasto</h2>
                <Row>
                    <Col sm='1' />
                    <Col sm='4' >
                        <h4 style={{ marginLeft: '30px', marginRight: '30px', textAlign: 'center' }}>VOLYYMIRIPSET</h4>
                        <p>
                            Volyymiripsien laitto <b>109.00 € (2.5h)</b><br />
                            Volyymien huolto 5 vko 85.00 € (2h 15min) <br />
                            Volyymien huolto 4 vko 75.00 € (2h)<br />
                            Volyymien huolto 3 vko 60.00 € (1.5h)<br />
                            Volyymien pikahuolto 40.00 € (45min)<br />
                        </p>
                    </Col>
                    <Col sm='2' />
                    <Col sm='4'>
                        <h4 style={{ marginLeft: '30px', marginRight: '30px', textAlign: 'center' }}>KLASSISET RIPSET</h4>
                        <p>
                            Klassisten ripsien laitto 80.00 € (2h) <br />
                                    Klassisten huolto 5 vko 70.00 € (1h 45min)<br />
                                    Klassisten huolto 4 vko 60.00 € (1.5h)<br />
                                    Klassisten huolto 3 vko 50.00 € (1h)<br />
                                    Klassisten pikahuolto 40.00 € (45min)<br />
                        </p>
                    </Col>
                    <Col sm='1' />
                </Row>
            </Container>
            <iframe style={{ marginTop: '70px'}} width="100%" height="1200px" frameBorder="0" src="https://timma.fi/reservation/studio1337oy"></iframe>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/2.8.3/iframeResizer.min.js"></script>
            <script type="text/javascript">iFrameResize({});</script>
        </div>

    );
}

export default Price;
