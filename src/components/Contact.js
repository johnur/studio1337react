import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../style/Contact.scss';
import maksu from '../img/maksu.png';
import fb from '../img/blackFB.png';
import ig from '../img/blackIG.png';

const Contact = () => {

    return (
        <div>
            <Container>
            <Row>
                <Col md="4">
                    <img className='maksu' src={maksu} />
                </Col>
                <Col md="4">
                    <iframe className='kartta' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.4248916376066!2d24.920512616016314!3d60.17369918196225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a311abbb06b%3A0x37e473b4e858b017!2sStudio%201337!5e0!3m2!1sfi!2sfi!4v1585210173341!5m2!1sfi!2sfi"></iframe>
                </Col>
                <Col md="4">
                    <div className='footerteksti'>
                        <p>Puh: +358 400 153 176 <br />
                    Runeberginkatu 33 <br />
                    Helsinki, 00100 <br />
                    studio1337hki@gmail.com
                    </p>
                        <div className='footerlogot'>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/studio1337/">
                                <img alt="instagram page" src={ig} />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/studio1337FIN/">
                                <img alt="facebook page" src={fb} />
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
            </Container>
            <div className="copyrightText">
                &copy; {new Date().getFullYear()} Studio 1337
             </div>
        </div>
    );
}

export default Contact;