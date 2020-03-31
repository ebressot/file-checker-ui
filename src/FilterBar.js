import React from 'react';
import Form from 'react-bootstrap/Form';
import DateSelector from './DateSelector';

class FilterBar extends React.Component {
    render() {
        return (
          <Form>
            <Form.Group controlId="file">
              <Form.Label>File</Form.Label>
              <Form.Control as="select">
                <option value="scd.securities">Simcorp Dimension/Securities</option>
              </Form.Control>
            </Form.Group>
            <DateSelector />
          </Form>
        )
    }
}

export default FilterBar;