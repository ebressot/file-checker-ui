/* eslint-env jest */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { fileList } from './fileList';

import FileSearchForm from './FileSearchForm';

test("FileSearchForm changes selected file from empty to value", () => {
    const files = fileList;
    const selectedFile = "na";
    const effectiveDate = new Date();
    const onSelectedFileChange = jest.fn();
    const onEffectiveDateChange = jest.fn();
    const onFileSearchSubmit = jest.fn();
    const form = render(
        <FileSearchForm files={files}
            selectedFile={selectedFile}
            effectiveDate={effectiveDate}
            onSelectedFileChange={onSelectedFileChange}
            onEffectiveDateChange={onEffectiveDateChange}
            onFileSearchSubmit={onFileSearchSubmit} />
    );
    const fileSelect = form.getByLabelText("File");

    expect(fileSelect.value).toBe("na");

    fireEvent.change(fileSelect, { target: { value: "scd.securities" } });
    expect(onSelectedFileChange).toHaveBeenCalledWith("scd.securities");
});
