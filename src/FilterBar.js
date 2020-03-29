import React from 'react';
import Form from 'react-bootstrap/Form';

class FilterBar extends React.Component {
    render() {
        return (
          <Form>
            <Form.Group controlId="source">
              <Form.Label>Source</Form.Label>
              <Form.Control as="select">
                <option value="scd">Simcorp Dimension</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="feed">
              <Form.Label>Feed</Form.Label>
              <Form.Control as="select">
                <option value="securities">Securities</option>
              </Form.Control>
            </Form.Group>
            <Form.Row>
              <Form.Group controlId="effectiveDateDay" className="left-column">
                <Form.Label>Effective Date</Form.Label>
                <Form.Control as="select">
                  <option value="28">28</option>
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
          </Form>
        )
    }
}

export default FilterBar;