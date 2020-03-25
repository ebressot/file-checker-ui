import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterBar from './FilterBar';
import NewTable from './NewTable';

class FileCheckSection extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <Container>
                <Row>
                    <Col><FilterBar /></Col>
                </Row>
                <Row>
                    <Col><h2>New Records</h2></Col>
                </Row>
                <Row>
                    <Col><NewTable records={data.new_records} /></Col>
                </Row>
            </Container>
        )
    }
}
FileCheckSection.propTypes = {
    data: PropTypes.object.isRequired
};

export default FileCheckSection;