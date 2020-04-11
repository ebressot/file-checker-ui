/* eslint-env jest */
import React from 'react';
import { render } from '@testing-library/react';
import { results } from '../fileSearch/scd_securities.20200331';

import FileDetails from './FileDetails';

test("FileDetails shows instructions by default", () => {
    const form = render(
        <FileDetails selectedFile={"na"}
            fileChecked={false}
            results={null} />
    );
    const message = form.getByRole("heading");

    expect(message.innerHTML).toBe("Select file and click Check");
});

test("FileDetails shows instructions if file is missing", () => {
    const form = render(
        <FileDetails selectedFile={"na"}
            fileChecked={true}
            results={null} />
    );
    const message = form.getByRole("heading");

    expect(message.innerHTML).toBe("Select file and click Check");
});

test("FileDetails shows empty results if file not found", () => {
    const form = render(
        <FileDetails selectedFile={"scd.transactions"}
            fileChecked={true}
            results={null} />
    );
    const message = form.getByRole("heading");

    expect(message.innerHTML).toBe("No such file found for effective date");
});

test("FileDetails shows results if file is found", () => {
    const form = render(
        <FileDetails selectedFile={"scd.securities"}
            fileChecked={true}
            results={results} />
    );
    const message = form.getByRole("heading");

    expect(message.innerHTML).toBe("New Records");
});
