import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './ContactForm.css';
import GenericModal from "../GenericModal/GenericModal";

function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    identificacion: "",
    celular: "",
    mensaje: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setFormData({ nombre: "", email: "", identificacion: "", celular: "", mensaje: "" });

  };

  return (
    <>
      {showModal && (
        <GenericModal show={showModal} title="Contacto" message="Tu consulta se envió exitosamente" onClose={() => setShowModal(false)} />
      )}
      <Form onSubmit={handleSubmit} className="p-4 bg-dark rounded shadow-sm contact-form">
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="ejemplo@correo.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formIdentificacion">
          <Form.Control
            type="text"
            name="identificacion"
            placeholder="CUIT-CUIL-DNI"
            value={formData.identificacion}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCelular">
          <Form.Control
            type="tel"
            name="celular"
            placeholder="+5491112345678"
            value={formData.celular}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMensaje">
          <Form.Control
            as="textarea"
            name="mensaje"
            rows={4}
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="light" type="submit" className="px-4">
            Enviar consulta
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ContactForm;