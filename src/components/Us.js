import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import iina from '../img/iina.PNG';
import sanni from '../img/sanni.PNG';
import logo from '../img/4.png';
import '../style/Us.scss';
import { Link } from 'react-router-dom';


const Us = () => {
    return (
        <div>
            <Container className="meistä">
                <Row>
                    <Col>
                        <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Meistä</h2>
                        <p style={{ marginLeft: '30px', marginRight: '30px', marginTop: '20px' }}>
                            Tervetuloa Studio 1337:een. Ollaan ripsienpidennyksien edelläkävijöitä vuodesta 2008.
                            Räätälöimme aina pidennykset asiakaskohtaisesti ottaen huomioon silmän muodon, ripsien hyvinvoinnin ja asiakkaan toiveet.
                            Meillä on poikkeuksellisen mukava ja kotoisa ilmapiiri salongissamme. <br />
                            <br />
                            <h2 style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>Päytäntö ja peruutukset</h2>
                            Tulethan ripsihuoltoon puhtailla ripsillä tai käyt pesemässä ennen aikasi alkua ripset studion wc:stä löytyvällä puhdistusaineella.
                            Peruutuksen on tapahduttava viimeistään 48h ennen varattua aikaa. Alle 48h peruutetuista ajoista yrityksellä on oikeus periä 50% palvelun hinnasta. 
                            Peruuttamattomista ajoista veloitamme 100% palvelun hinnasta. Ripsienpidennyksillä on 1 viikon takuu, joka tarkoittaa sitä, että asiakas voi tarvittaessa 
                            tulla veloituksetta korjaukseen 1 viikon sisällä. Takuu koskee vain liikkeessämme tehtyjä pidennyksiä.
                            Varaamalla ajan suostut varausehtoihin. Yhteydenotot puhelimitse <b>0400153176 tai FB, IG</b>.
                        </p>

                    </Col>
                </Row>
            </Container>
            <div className="services-grid">

                <div className="service service3">
                    <h3>Iina</h3>
                    <span><img className='sorsanen' src={iina} /></span>
                    <ul>
                        <p>Iina bla bla bla</p>
                    </ul>
                    <Link to="/iina" className="cta">Iinan portfolio <span className="ti-angle-right"></span></Link>

                </div>

                <div className="service service1">
                    <h3>Sanni</h3>
                    <span><img className='sorsanen' src={sanni} /></span>
                    <ul>
                        <p>Sanni bla bla bla</p>
                    </ul>
                    <Link to="/sanni" className="cta">Sannin portfolio <span className="ti-angle-right"></span></Link>

                </div>

                <div className="service service2">
                    <h3>Elina</h3>
                    <span><img src={iina} className='sorsanen' /></span>
                    <ul>
                        <p>Elina on jo viettänyt 10-vuotta ripsienpidennyksien parissa ja on mm toiminut Ruthie Bellen pääkouluttajana. Hän on tunnettu tarkkuudesta ja täydellisestä työn jäljestä.</p>
                    </ul>
                    <Link to="/elina" className="cta">Elinan portfolio<span className="ti-angle-right"></span></Link>

                </div>

            </div>
        </div>

    );
}

export default Us;
