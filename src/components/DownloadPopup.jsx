import React from "react";
import {Link} from "gatsby";
import {Modal, Button, ListGroup} from "react-bootstrap";

export default function DownloadPopup(props) {
  return (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {props.data.pageTitle}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ListGroup variant="flush">
        {
          props.data.files
            ?.map(download => (
              <Link href={download.localFile.publicURL} download={download.name}>
                <ListGroup.Item>{download.name}</ListGroup.Item>
              </Link>
            ))
        }
      </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>);
}
