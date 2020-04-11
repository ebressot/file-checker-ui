import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewTable from './NewTable';

class FileDetails extends React.Component {
    render() {
        if (!this.props.fileChecked || this.props.selectedFile === "na") {
            return (
                <div>
                    <h2>Select file and click Check</h2>
                </div>
            );
        }
        if (this.props.results == null) {
            return (
                <Container>
                    <Row>
                        <Col><h2>No such file found for effective date</h2></Col>
                    </Row>
                </Container>
            );
        }

        return (
            <Container>
                <Row>
                    <Col><h2>New Records</h2></Col>
                </Row>
                <Row>
                    <Col><NewTable records={this.props.results.new_records} /></Col>
                </Row>
            </Container>
        );
    }
}
FileDetails.propTypes = {
    selectedFile: PropTypes.string.isRequired,
    fileChecked: PropTypes.bool.isRequired,
    results: PropTypes.object
};

export default FileDetails;