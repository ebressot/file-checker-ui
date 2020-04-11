import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'
import NewRecord from './NewRecord';

class NewTable extends React.Component {
    render() {
        const records = this.props.records;
        const firstRecord = records[0];
        const titles = [];
        const rows = [];

        Object.entries(firstRecord).forEach(([key]) => {
            if (key !== 'key') {
                titles.push(
                    <th key={key}>{key}</th>
                );
            }
        });

        records.forEach(record => {
            rows.push(
                <NewRecord
                    record={record}
                    key={record.key} />
            );
        });
        
        return (
            <Table striped bordered hover size="sm" variant="dark">
                <thead>
                    <tr key='title'>{titles}</tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        )
    }
}
NewTable.propTypes = {
    records: PropTypes.array.isRequired
};

export default NewTable;