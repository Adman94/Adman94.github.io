import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Content from '../components/Content';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Hero from '../components/Hero'
import React, { Component } from 'react';

export default class ContactPage extends Component {
  state = {
    senderEmail: '',
    feedback: '',
    formSubmitted: false,
    disabled: false,
    emailSent: null
  };

  handleCancel = this.handleCancel.bind(this);
  handleChange = this.handleChange.bind(this);
  handleEmailChange = this.handleEmailChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);

//   static sender = 'sender@example.com';

  handleCancel() {
    this.setState({
      senderEmail: '',
      feedback: ''
    });
  }

  handleChange(event) {
    this.setState({
        feedback: event.target.value
    });
  }
  handleEmailChange(event) {
      this.setState({
        senderEmail: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_USERID: user,
    } = this.props.env;

    this.sendFeedback(
      template,
      this.state.senderEmail,
      receiverEmail,
      this.state.feedback,
      user
    );

    this.setState({
      formSubmitted: true,
      disabled: true,
      emailSent: true
    });
  }

 // Note: this is using default_service, which will map to whatever
 // default email provider you've set in your EmailJS account.
  sendFeedback(templateId, senderEmail, receiverEmail, feedback, user) {
    window.emailjs
      .send('default_service', templateId, {
          senderEmail,
          receiverEmail,
          feedback
        },
        user
      )
      .then(res => {
        this.setState({
          formEmailSent: true
        });
      })
      // Handle errors here however you like
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  }

  render() {
    return (
        <div>
        <Jumbotron className="mt-5 bg-transparent jumbotron-fluid">
          <Container fluid={true}>
                <Hero 
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                    text={this.props.text}
            />
            <Content>
              <Form onSubmit={this.handleSubmit}>
                      <Form.Group>
                          <Form.Label htmlFor="email">Email</Form.Label>
                          <Form.Control id="sender" name="sender" placeholder="email@example.com" type="email" value={this.state.senderEmail} onChange={this.handleEmailChange} />
                      </Form.Group>

                      <Form.Group>
                          <Form.Label htmlFor="feedback">Feedback</Form.Label>
                          <Form.Control id="feedback" name="feedback" placeholder="Let's catch up!" as="textarea"rows="3" value={this.state.feedback} onChange={this.handleChange} />
                      </Form.Group>
                      <div className="btn-group">
                        <Button 
                          className="d-inline-block" 
                          variant="outline-danger" 
                          onClick={this.handleCancel}>
                        Cancel
                        </Button>
                      </div>
                      <div className="btn-group">
                        <Button 
                          disabled={this.state.disabled}
                          type="submit" 
                          className="d-inline-block ml-5" 
                          variant="outline-success"
                        >
                          Submit
                          </Button>
                      </div>
                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                  </Form>         
            </Content>
          </Container>
        </Jumbotron>            
        </div>
    );
  }
}

ContactPage.propTypes = {
  env: PropTypes.object.isRequired
};