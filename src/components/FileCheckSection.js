import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterBar from './FilterBar';
import NewTable from './NewTable';

class FileCheckSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            effectiveDate: new Date()
        };

        this.handleEffectiveDateChange = this.handleEffectiveDateChange.bind(this);
    }

    handleEffectiveDateChange(effectiveDate) {
        this.setState({
            effectiveDate: effectiveDate
        });
    }

    render() {
        const data = this.props.data;

        return (
            <Container>
                <Row>
                    <Col><FilterBar effectiveDate={this.state.effectiveDate} onEffectiveDateChange={this.handleEffectiveDateChange} /></Col>
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