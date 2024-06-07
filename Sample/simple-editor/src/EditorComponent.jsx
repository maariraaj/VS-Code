// src/EditorComponent.js
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const EditorComponent = ({ onSubmit }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleEditorChange = (state) => {
        setEditorState(state);
    };

    const handleSubmit = () => {
        const rawContentState = convertToRaw(editorState.getCurrentContent());
        const htmlContent = draftToHtml(rawContentState);
        onSubmit(htmlContent);
        console.log("rawContentState",rawContentState)
        console.log("htmlContent", htmlContent)
        setEditorState(EditorState.createEmpty());
    };

    return (
        <div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={handleEditorChange}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default EditorComponent;
