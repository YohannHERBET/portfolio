import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import emailjs from 'emailjs-com';
import {
  Container,
  Form,
  Button,
  Col,
} from 'react-bootstrap';

const ContactForm = () => {
  const [info, setInfo] = useState(false);
  const [messageInfo, setMessageInfo] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    object: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_27y7r8k', 'template_dhnwowh', e.target, 'G-267E6MBSHMtIPFf')
      .then(() => {
        setMessageInfo('Votre message a bien été envoyé.');
        setInfo(true);
      })
      .catch(() => {
        setMessageInfo('Une erreur est survenue, veuillez réessayer.');
        setInfo(true);
      });
    setFormState({
      name: '',
      email: '',
      object: '',
      message: '',
    });
  };

  return (
    <Container className="contact-form-container" style={{ marginTop: '100px' }}>
      <div className="anchor" id="contact" />
      <h1 className="mb-4 text-center">Contactez-moi</h1>
      <Form onSubmit={handleSubmit} className="d-flex align-items-center flex-column w-100">
        <Form.Group controlId="name" as={Col} xs="12" md="8" lg="6" className="mb-3">
          <Form.Label>Nom :</Form.Label>
          <Form.Control type="text" name="name" value={formState.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="email" as={Col} xs="12" md="8" lg="6" className="mb-3">
          <Form.Label>Email :</Form.Label>
          <Form.Control type="email" name="email" value={formState.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="object" as={Col} xs="12" md="8" lg="6" className="mb-3">
          <Form.Label>Objet :</Form.Label>
          <Form.Control type="text" name="object" value={formState.object} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="message" as={Col} xs="12" md="8" lg="6">
          <Form.Label>Message :</Form.Label>
          <Form.Control as="textarea" name="message" value={formState.message} onChange={handleChange} required />
        </Form.Group>
        {info && (
          <Form.Text className={`mt-3 ${messageInfo === 'Votre message a bien été envoyé.' ? 'asSuccess' : 'asError'}`}>
            { messageInfo }
          </Form.Text>
        )}
        <Button
          type="submit"
          className="form-button mt-4"
          style={{
            background: 'linear-gradient(90deg, #3D4B64 0%, #8598ce 50%, #3D4B64 100%)',
            border: 'none',
          }}
        >
          Envoyer
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
