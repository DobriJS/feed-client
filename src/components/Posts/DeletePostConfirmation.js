import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeletePostConfirmation = ({
  showModal,
  hideDeleteModalHandler,
  confirmDeleteModalHandler,
  loading
}) => {
  return (
    <>
      <Modal show={showModal} onHide={hideDeleteModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are sure to delete this item</Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={hideDeleteModalHandler}>
            Close
          </Button>
          <Button variant='danger' onClick={confirmDeleteModalHandler} disabled={loading}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePostConfirmation;
