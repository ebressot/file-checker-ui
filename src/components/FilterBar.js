import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import DateSelector from './DateSelector';

class FilterBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleEffectiveDateChange = this.handleEffectiveDateChange.bind(this);
  }

  handleEffectiveDateChange(effectiveDate) {
    this.props.onEffectiveDateChange(effectiveDate);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="file">
          <Form.Label>File</Form.Label>
          <Form.Control as="select">
            <option value="scd.securities">Simcorp Dimension/Securities</option>
          </Form.Control>
        </Form.Group>
        <DateSelector effectiveDate={this.props.effectiveDate} onEffectiveDateChange={this.handleEffectiveDateChange} />
      </Form>
    )
  }
}
FilterBar.propTypes = {
  effectiveDate: PropTypes.object.isRequired,
  onEffectiveDateChange: PropTypes.func.isRequired
};

export default FilterBar;