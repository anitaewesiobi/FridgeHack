import React from "react";
import { Card, Row, Col} from "react-bootstrap";
import ChefHat from "../imgs/chef.png";

const timeConvert = (n) => {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return (rhours === 0 && rminutes > 0 ? `${rminutes} mins`
        : rhours === 1 && rminutes === 0 ? `${rhours} hr`
            : rminutes === 0 ? `${rhours} hrs`
                : rhours === 1 && rminutes > 0 ? `${rhours} hr & ${rminutes} mins`
                    : `${rhours} hrs & ${rminutes} mins`
    )
}

const Recipe = ({ title, image, difficulty, time, fullRecipe }) => {
    const formattedTime = timeConvert(time)
    return (
            <Card className=" recipe-card mx-auto my-4" style={{ width: '21.5rem' }}>
                <Card.Img src={image} alt={title} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        <Row> 
                        <Col md={3}>                  
                            <p><img className="chefImg" src={ChefHat} alt="icon"/> {difficulty <= 12 ? "  Easy" :  "  Medium" } </p>
                        </Col> 
                        <Col md={5}>
                        <p style={time === 0 ? { display: "none" } : null}><i class="far fa-clock"></i> {formattedTime} </p>
                        </Col> 
                        <Col md={4}>
                            <a className="recipe-button" href={fullRecipe} target="_blank" rel="noopener noreferrer">View</a>
                        </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
    )
}

export default Recipe