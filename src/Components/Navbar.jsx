import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../img/logo-social.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbarcustom'>
       <Container
            fluid
            className='p-2' 
            style={{
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                }}>
             <Container>
                <Row>
                    <Col>
                        <div 
                        className='logo'
                        style={{display:'flex',justifyContent:'space-between'}}
                        >
                            <h3>Knowledge <span style={{color:'red'}}>Cafe</span></h3>
                            <img style={{width:'100px'}} src={logo} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
       </Container>
       </div>
    );
};

export default Navbar;