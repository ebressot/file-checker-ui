/* eslint-env jest */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Form from 'react-bootstrap/Form';
import DateSelector from './DateSelector';

test("DateSelector changes day from 31 to 30 when month changes from March to April", () => {
  const onEffectiveDateChange = jest.fn();
  const form = render(
    <Form>
      <DateSelector effectiveDate={new Date(2020, 2, 31)} onEffectiveDateChange={onEffectiveDateChange} />
    </Form>
  );
  const daySelect = form.getByLabelText("Effective Date");
  const monthSelect = form.getByDisplayValue("March");

  expect(daySelect.value).toBe("31");

  fireEvent.change(monthSelect, { target: { value: "04" } });
  expect(onEffectiveDateChange).toHaveBeenCalledWith(new Date(2020, 3, 30));
});

test("DateSelector changes day from 30 to 29 when month changes from April to February in 2020", () => {
  const onEffectiveDateChange = jest.fn();
  const form = render(
    <Form>
      <DateSelector effectiveDate={new Date(2020, 3, 30)} onEffectiveDateChange={onEffectiveDateChange} />
    </Form>
  );
  const daySelect = form.getByLabelText("Effective Date");
  const monthSelect = form.getByDisplayValue("April");

  expect(daySelect.value).toBe("30");

  fireEvent.change(monthSelect, { target: { value: "02" } });
  expect(onEffectiveDateChange).toHaveBeenCalledWith(new Date(2020, 1, 29));
});

test("DateSelector changes day from 29 to 28 when month is February and year changes from 2020 to 2019", () => {
  const onEffectiveDateChange = jest.fn();
  const form = render(
    <Form>
      <DateSelector effectiveDate={new Date(2020, 1, 29)} onEffectiveDateChange={onEffectiveDateChange} />
    </Form>
  );
  const daySelect = form.getByLabelText("Effective Date");
  const yearSelect = form.getByDisplayValue("2020");

  expect(daySelect.value).toBe("29");

  fireEvent.change(yearSelect, { target: { value: "2019" } });
  expect(onEffectiveDateChange).toHaveBeenCalledWith(new Date(2019, 1, 28));
});
