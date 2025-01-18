import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { render } from 'react-dom';

const OffCanvasExample = ({ name, placement, ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement={placement} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      <OffCanvasExample key="start" placement="start" name="start" />
      <OffCanvasExample key="end" placement="end" name="end" />
      <OffCanvasExample key="top" placement="top" name="top" />
      <OffCanvasExample key="bottom" placement="bottom" name="bottom" />
    </>
  );
}

render(<Example />, document.getElementById('root'));
