import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const TextEditor = () => {
  // Initialize editor state using useState hook
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Handle editor state changes
  const handleEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  return (
    <>
      {/* Editor component */}
      <Editor
        // Pass the editor state
        editorState={editorState}
        // Handle editor state changes
        onEditorStateChange={handleEditorStateChange}
        // CSS classes for the toolbar
        toolbarClassName="position-fixed fixed-top d-flex sticky-top top-0 z-index-50 justify-content-center mx-3 border-0 mb-4 border-bottom-2"
        // CSS classes for the editor
        editorClassName="mt-5 bg-white p-5 border"
        // Inline styles for the editor
        editorStyle={{
          minHeight: "1300px",
          maxWidth: "960px",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "3rem",
          borderWidth: "2px",
          borderColor: "#ccc",
        }}
        // Inline styles for the toolbar
        toolbarStyle={{
          backgroundColor: "#e1e9f7",
          borderRadius: "20px",
          marginTop: "70px",
        }}
      />
    </>
  );
};

export default TextEditor;
