import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { useNavigate } from 'react-router-dom';
import { setTo, setSubject, setEditorState, sendMail, resetCompose, selectCompose } from '../../store/compose-slice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ComposeMail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { to, subject, editorState, sending, error } = useSelector(selectCompose);

  useEffect(() => {
    if (!editorState) {
      dispatch(setEditorState(EditorState.createEmpty()));
    }
  }, [editorState, dispatch]);

  const handleSend = () => {
    const contentState = editorState.getCurrentContent();
    console.log(contentState)
    const content = convertToRaw(contentState);
    dispatch(sendMail({ to, subject, content })).then(() => {
      dispatch(resetCompose());
      navigate('/');
    });
  };

  const handleCancel = () => {
    dispatch(resetCompose());
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-warning p-4 rounded bg-light" style={{ boxShadow: '0px 0px 20px 0px rgba(255, 193, 7, 0.8)' }}>
            <h1 className="mb-4 text-center">Compose Mail</h1>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="formTo"><strong>To:</strong></label>
                <input
                  type="email"
                  className="form-control"
                  id="formTo"
                  placeholder="Enter email"
                  value={to}
                  onChange={(e) => dispatch(setTo(e.target.value))}
                />
              </div>

              <div className="form-group mb-3">
                <label htmlFor="formSubject"><strong>Subject:</strong></label>
                <input
                  type="text"
                  className="form-control"
                  id="formSubject"
                  placeholder="Enter subject"
                  value={subject}
                  onChange={(e) => dispatch(setSubject(e.target.value))}
                />
              </div>

              <div className="form-group border mb-3">
                <label htmlFor="formContent"><strong>Content:</strong></label>
                <Editor
                  id='formContent'
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={(newState) => dispatch(setEditorState(newState))}
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <button type="button" className="btn btn-primary" onClick={handleSend} disabled={sending}>
                {sending ? 'Sending...' : 'Send'}
              </button>
              <button type="button" className="btn btn-secondary ms-2" onClick={handleCancel}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComposeMail;