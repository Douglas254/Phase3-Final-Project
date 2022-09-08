import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ModalShow = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Create New Post
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            <h3 className="text-center">Create Your New Post</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPostTitle">
              <Form.Label className="form__label">Post Title</Form.Label>
              <Form.Control type="text" placeholder="Enter blog title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicImageLink">
              <Form.Label className="form__label">Image link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Paste your blog image here"
              />
            </Form.Group>
            <Form.Label className="form__label">Story of your post</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write you stories here"
              style={{ height: "200px" }}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" type="submit">
                Post
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalShow;
