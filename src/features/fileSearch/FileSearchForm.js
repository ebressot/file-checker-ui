import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import DateSelector from '../../components/DateSelector';

function FileOptions(props) {
  const files = props.files;
  // Create option for each file.
  const fileOptions = files.map((file) => {
    const fileId = file.sourceId + '.' + file.feedId;
    const fileName = file.sourceName + '/' + file.feedName;
    return <option key={fileId} value={fileId}>{fileName}</option>;
  });

  return fileOptions;
}

class FileSearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectedFileChange = this.handleSelectedFileChange.bind(this);
    this.handleEffectiveDateChange = this.handleEffectiveDateChange.bind(this);
    this.handleFileSearchSubmit = this.handleFileSearchSubmit.bind(this);
  }

  handleSelectedFileChange(e) {
    this.props.onSelectedFileChange(e.target.value);
  }

  handleEffectiveDateChange(effectiveDate) {
    this.props.onEffectiveDateChange(effectiveDate.toDateString());
  }

  handleFileSearchSubmit(e) {
    this.props.onFileSearchSubmit(e);
  }

  render() {
    return (
      <Form onSubmit={this.handleFileSearchSubmit}>
        <Form.Group controlId="file">
          <Form.Label>File</Form.Label>
          <Form.Control as="select" value={this.props.selectedFile} onChange={this.handleSelectedFileChange}>
            <option key="na" value="na">&nbsp;</option>
            <FileOptions files={this.props.files} />
          </Form.Control>
        </Form.Group>
        <DateSelector effectiveDate={this.props.effectiveDate} onEffectiveDateChange={this.handleEffectiveDateChange} />
        <Button variant="dark" type="submit">
          Check
        </Button>
      </Form>
    )
  }
}
FileSearchForm.propTypes = {
  files: PropTypes.array.isRequired,
  selectedFile: PropTypes.string.isRequired,
  effectiveDate: PropTypes.object.isRequired,
  onSelectedFileChange: PropTypes.func.isRequired,
  onEffectiveDateChange: PropTypes.func.isRequired,
  onFileSearchSubmit: PropTypes.func.isRequired
};

export default FileSearchForm;