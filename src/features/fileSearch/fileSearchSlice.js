import { createSlice } from '@reduxjs/toolkit';
import { fileList } from './fileList';
import { results } from './scd_securities.20200331';

const fileSearchSlice = createSlice({
  name: 'fileSearch',
  initialState: {
    files: fileList,
    selectedFile: "na",
    effectiveDate: new Date().toDateString(),
    fileChecked: false,
    results: null
  },
  reducers: {
    selectFile: (state, action) => {
      state.fileChecked = false;
      state.selectedFile = action.payload;
    },
    updateEffectiveDate: (state, action) => {
      state.fileChecked = false;
      state.effectiveDate = action.payload;
    },
    fetchResults: state => {
      state.fileChecked = (state.selectedFile !== "na");

      if (state.fileChecked) {
        state.results = results;
      }
    }
  }
});

export const { selectFile, updateEffectiveDate, fetchResults } = fileSearchSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectFiles = state => state.fileSearch.files;
export const selectSelectedFile = state => state.fileSearch.selectedFile;
export const selectEffectiveDate = state => new Date(state.fileSearch.effectiveDate);
export const selectFileChecked = state => state.fileSearch.fileChecked;
export const selectResults = state => state.fileSearch.results;

export default fileSearchSlice.reducer;
