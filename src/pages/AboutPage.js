import React from 'react';
import Hero from '../components/Hero'
import Content from '../components/Content'
function AboutPage(props) {
    return (
        <div>
            <Hero 
            title={props.title}
            subTitle={props.subTitle}
            text={props.text}
            />
            <Content>
            <p>
                Hello, my name is Adeeb Rahman. I'm a recent graduate and aspiring to pursue a career in full stack software engineering. I've had experience working with React, Next JS, Node JS, Express JS, MongoDB, MySQL, etc. and looking forward to learn more and more new technologies in the years to come.</p>
            <p>
                I'm always in the pursuit of new ideas to develop and contribute to the world for the future. I hope to start my own business as I grow my portfolio, so that I can help others and create job opportunities.
            </p>
            <p>
                My latest project is create an expense tracking application that would be simple enough for people who find technology to be quite challenging. I'm taking the approach of using React Native along with Google Firebase, but would also like to try out Flutter for future cross platform mobile application development.
            </p>
            <p>
                When I'm not coding or building tech stuff, I'd play the guitar or play soccer.
            </p>
            <p>
                Thanks for reading!
            </p>
            </Content>
        </div>
    )
}

export default AboutPage