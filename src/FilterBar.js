import React from 'react';
import Form from 'react-bootstrap/Form';
import 'rc-datepicker/lib/style.css';
import { DatePickerInput } from 'rc-datepicker';

class FilterBar extends React.Component {
    render() {
        const date = new Date();

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
            <Form.Group controlId="effectiveDate">
              <Form.Label>Effective Date</Form.Label>
              <DatePickerInput value={date} />
            </Form.Group>
          </Form>
        )
    }
}

export default FilterBar;