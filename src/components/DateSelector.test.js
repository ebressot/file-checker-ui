import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Form from 'react-bootstrap/Form';
import DateSelector from './DateSelector';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders day, month and year", () => {
    act(() => {
      render(
      <Form>
          <DateSelector />
      </Form>
      , container
      );
    });
    expect(parseInt(document.getElementById("effectiveDateDay").value)).toBe(new Date().getDate());
    expect(parseInt(document.getElementById("effectiveDateMonth").value)).toBe(new Date().getMonth() + 1);
    expect(parseInt(document.getElementById("effectiveDateYear").value)).toBe(new Date().getFullYear());
  });
  