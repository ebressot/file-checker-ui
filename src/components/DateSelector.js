import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

import './DateSelector.css';

function getDayOfMonth(year, month, day) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return (day > daysInMonth) ? daysInMonth : day;
}

function DayOptions(props) {
  const date = props.date;
  // List days in month.
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const daysList = [...Array(daysInMonth).keys()].map(x => ++x);
  // Create option for each day in month.
  const dayOptions = daysList.map((day) => {
    const dayText = ((day < 10) ? "0" : "") + day;
    return <option key={day} value={dayText}>{day}</option>;
  });

  return dayOptions;
}

function MonthOptions() {
  // List months.
  const monthsIntList = [...Array(12).keys()];
  // Translate to month name.
  const monthsList = monthsIntList.map((monthInt) => {
    const firstDayOfMonth = new Date(2000, monthInt, 1);
    return firstDayOfMonth.toLocaleDateString(undefined, { month: 'long' });
  });
  // Create option for each month.
  const monthOptions = monthsList.map((monthName, key) => {
    const monthText = ((key < 9) ? "0" : "") + (key + 1);
    return <option key={key + 1} value={monthText}>{monthName}</option>;
  });

  return monthOptions;
}

function YearOptions() {
  // List years.
  const firstYear = 2000;
  const currentYearInt = new Date().getFullYear() - firstYear;
  const yearsIntList = [...Array(currentYearInt + 1).keys()];
  const yearsList = yearsIntList.map((year) => year + firstYear);
  // Create option for each year.
  const yearOptions = yearsList.map((year) =>
    <option key={year} value={year}>{year}</option>
  );

  return yearOptions;
}

class DateSelector extends React.Component {
  constructor(props) {
    super(props);

    this.handleEffectiveDateDayChange = this.handleEffectiveDateDayChange.bind(this);
    this.handleEffectiveDateMonthChange = this.handleEffectiveDateMonthChange.bind(this);
    this.handleEffectiveDateYearChange = this.handleEffectiveDateYearChange.bind(this);
  }

  handleEffectiveDateDayChange(e) {
    const date = this.props.effectiveDate;
    const effectiveDate = new Date(date.getFullYear(), date.getMonth(), e.target.value);
    this.props.onEffectiveDateChange(effectiveDate);
  }

  handleEffectiveDateMonthChange(e) {
    const date = this.props.effectiveDate;
    const effectiveDate = new Date(date.getFullYear(), parseInt(e.target.value) - 1, getDayOfMonth(date.getFullYear(), parseInt(e.target.value) - 1, date.getDate()));
    this.props.onEffectiveDateChange(effectiveDate);
  }

  handleEffectiveDateYearChange(e) {
    const date = this.props.effectiveDate;
    const effectiveDate = new Date(e.target.value, date.getMonth(), getDayOfMonth(e.target.value, date.getMonth(), date.getDate()));
    this.props.onEffectiveDateChange(effectiveDate);
  }

  render() {
    const date = this.props.effectiveDate;
    const day = date.getDate();
    const dayText = ((day < 10) ? "0" : "") + day;
    const month = date.getMonth();
    const monthText = ((month < 9) ? "0" : "") + (month + 1);

    return (
      <Form.Row>
        <Form.Group controlId="effectiveDateDay" className="left-column">
          <Form.Label>Effective Date</Form.Label>
          <Form.Control as="select" onChange={this.handleEffectiveDateDayChange} value={dayText}>
            <DayOptions date={date} />
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="effectiveDateMonth" className="middle-column">
          <Form.Label>&nbsp;</Form.Label>
          <Form.Control as="select" onChange={this.handleEffectiveDateMonthChange} value={monthText}>
            <MonthOptions />
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="effectiveDateYear" className="right-column">
          <Form.Label>&nbsp;</Form.Label>
          <Form.Control as="select" onChange={this.handleEffectiveDateYearChange} value={date.getFullYear()}>
            <YearOptions />
          </Form.Control>
        </Form.Group>
      </Form.Row>
    )
  }
}
DateSelector.propTypes = {
  effectiveDate: PropTypes.object.isRequired,
  onEffectiveDateChange: PropTypes.func.isRequired
};

export default DateSelector;