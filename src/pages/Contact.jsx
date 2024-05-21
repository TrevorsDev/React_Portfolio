import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helpers';
import { useState } from 'react';
export default function Contact() {
  const [formState, setFormState] = useState({
    email: "",
    name: "",
    message: "",
  });
  const { email, name, message } = formState;
  const [emailValid, setEmailValid] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const handleMsgClear = () => {
    setTimeout(() => {
      setUserMessage("");
      setEmailValid("");
    }, 2500);
  };
  const handleInputChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    if (e.target.name === "email") {
      if (!validateEmail(e.target.value)) {
        setEmailValid("Invalid email");
      } else {
        setEmailValid("");
      }
    } else {
      if (!e.target.value.length) {
        setUserMessage("Required field");
      } else {
        setUserMessage("");
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserMessage("Email sent!");
    setFormState({
      email: "",
      name: "",
      message: "",
    });
    handleMsgClear();
  };
  return (
    <div>
      <h1>Contact Page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onBlur={handleValidation} value={name} onChange={handleInputChange} type="text" placeholder="Write your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

          {emailValid && <div className="text-red-500">{emailValid}</div>}
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onBlur={handleValidation} value={email} onChange={handleInputChange} type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your message here</Form.Label>
          <Form.Control name="message" onBlur={handleValidation} value={message} onChange={handleInputChange} as="textarea" rows={3} />
        </Form.Group>
        {userMessage && (
          <div className="error">
            <p className={userMessage === "Email sent!" ? "text-green-500" : "text-red-500"}>{userMessage}</p>
          </div>
        )}
        <Button onClick={handleFormSubmit} disabled={!(email && name && message && !emailValid && !userMessage)} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
