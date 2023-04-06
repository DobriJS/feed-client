import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeletePostConfirmation = ({
  showModal,
  hideDeleteModalHandler,
  title,
  body,
  confirmDeleteModalHandler,
  status
}) => {
  return (
    <>
      <Modal show={showModal} onHide={() => hideDeleteModalHandler()}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={() => hideDeleteModalHandler()}>
            Close
          </Button>
          <Button
            variant='danger'
            onClick={() => confirmDeleteModalHandler()}
            disabled={status === 'pending'}
          >
            {status === 'pending' ? 'Deleting...' : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletePostConfirmation;
