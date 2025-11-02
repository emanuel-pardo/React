import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function GenericModal({ show, title = "Confirmación", message = "Realizado con éxito", onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GenericModal;