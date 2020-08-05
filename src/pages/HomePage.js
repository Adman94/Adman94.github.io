import React from 'react';
import Hero from '../components/Hero'
import Carousel from "../components/Carousel";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
function HomePage(props) {
    return (
        <div>
        <Jumbotron className="mt-5 bg-transparent jumbotron-fluid">
            <Container fluid={true}>
                <Hero 
                title={props.title}
                subTitle={props.subTitle}
                text={props.text}
                />
                <Carousel />
            </Container>
        </Jumbotron>
        </div>
        
    )
}

export default HomePage