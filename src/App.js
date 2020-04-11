import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  selectFiles,
  selectSelectedFile,
  selectEffectiveDate,
  selectFileChecked,
  selectResults,
  selectFile,
  updateEffectiveDate,
  fetchResults
} from './features/fileSearch/fileSearchSlice';
import FileSearchForm from './features/fileSearch/FileSearchForm';
import FileDetails from './features/fileDetails/FileDetails';


function App() {
  const dispatch = useDispatch();

  const files = useSelector(selectFiles);
  const selectedFile = useSelector(selectSelectedFile);
  const effectiveDate = useSelector(selectEffectiveDate);
  const fileChecked = useSelector(selectFileChecked);
  const results = useSelector(selectResults);

  const handleSelectedFileChange = (selectedFile) => {
    dispatch(selectFile(selectedFile));
  }

  const handleEffectiveDateChange = (effectiveDate) => {
    dispatch(updateEffectiveDate(effectiveDate));
  }

  const handleFileSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchResults());
  }

  return (
    <Container>
      <Row>
        <Col>
          <FileSearchForm files={files}
            selectedFile={selectedFile}
            effectiveDate={effectiveDate}
            onSelectedFileChange={handleSelectedFileChange}
            onEffectiveDateChange={handleEffectiveDateChange}
            onFileSearchSubmit={handleFileSearchSubmit} />
        </Col>
      </Row>
      <Row>
        <Col>
          <FileDetails selectedFile={selectedFile}
            fileChecked={fileChecked}
            results={results} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
