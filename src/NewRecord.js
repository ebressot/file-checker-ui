import React from 'react';
import PropTypes from 'prop-types';

class NewRecord extends React.Component {
    render() {
        const record = this.props.record;
        const fields = [];

        Object.entries(record).forEach(([key, value]) => {
            if (key !== 'key') {
                fields.push(
                    <td key={key}>{value}</td>
                );
            }
        });
        
        return (
            <tr key={record.key}>{fields}</tr>
        )
    }
}
NewRecord.propTypes = {
    record: PropTypes.object.isRequired
};

export default NewRecord;