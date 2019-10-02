import React from "react"
import bgimg from "../imgs/bgimag.jpg"
import { Row, Col } from "react-bootstrap";
const Header = () => {
    return (
        <header className="Header">
        <img src={bgimg} alt='bgimg'/>
                <Row>
                    <Col className="header-title text-center"><p> Fridge Hack</p></Col>
                </Row>
                <Row>
                <Col className="header-text text-center"><p> Make delicious meals using ingredients you already have in the kitchen.</p></Col>
                </Row>
        </header>
    )
}

export default Header