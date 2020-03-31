import React from 'react';
import Form from 'react-bootstrap/Form';

class DateSelector extends React.Component {
    render() {
        return (
            <Form.Row>
              <Form.Group controlId="effectiveDateDay" className="left-column">
                <Form.Label>Effective Date</Form.Label>
                <Form.Control as="select">
                  <option value="30">30</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="effectiveDateMonth" className="middle-column">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control as="select">
                  <option value="03">March</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="effectiveDateYear" className="right-column">
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control as="select">
                  <option value="2020">2020</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
        )
    }
}

export default DateSelector;