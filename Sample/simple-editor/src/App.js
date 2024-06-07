// src/App.js
import React, { useState } from 'react';
import EditorComponent from './EditorComponent';
import { EditorState, convertFromHTML, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const App = () => {
  const [submittedData, setSubmittedData] = useState([]);

  const handleEditorSubmit = (data) => {
    setSubmittedData([...submittedData, data]);
  };

  return (
    <div className="App">
      <h1>React Draft WYSIWYG Example</h1>
      <EditorComponent onSubmit={handleEditorSubmit} />
      <div>
        {submittedData.map((data, index) => {
          const blocksFromHTML = convertFromHTML(data);
          const contentState = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap
          );
          const editorState = EditorState.createWithContent(contentState);

          return (
            <div key={index} style={{ margin: '20px 0' }}>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                readOnly
                toolbarHidden
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
