import { useState } from "react";
import Button from "react-bootstrap/Button";
import TextEditor from "./TextEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

const Editor = () => {
  // State to manage the username of the document
  const [username, setUsername] = useState("Untitled Document");

  // Event handler for input change
  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      {/* Header section */}
      <header className="sticky-top d-flex justify-content-between align-items-center px-3 py-1 pb-1 bg-light">
        <span style={{ cursor: "pointer" }}>
          <FontAwesomeIcon
            icon={faFileLines}
            style={{ color: "#4285f4" }}
            size="3x"
          />
        </span>
        <div className="flex-grow-1 px-2">
          <div
            className="my-1"
            style={{ display: "inline-block", width: "fit-content" }}
          >
            {/* Input field for the document's username */}
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
              className="form-control border-0 py-0 border-hover-blue focus-border-blue bg-light"
            />
          </div>
          {/* Icons for various actions */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="20"
            height="20"
            fill="#333"
            className="pb-1 mx-1"
            style={{ cursor: "pointer" }}
          >
            <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="20"
            height="20"
            fill="#333"
            className="pb-1 mx-1"
            style={{ cursor: "pointer" }}
          >
            <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            width="20"
            height="20"
            fill="#333"
            className="pb-1 mx-1"
            style={{ cursor: "pointer" }}
          >
            <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
          </svg>
          <div
            className="d-flex align-items-center overflow-auto text-small ml-1 text-secondary"
            style={{ cursor: "pointer", fontSize: "14px" }}
          >
            <p className="options mx-2">File</p>
            <p className="options mx-2">Edit</p>
            <p className="options mx-2">View</p>
            <p className="options mx-2">Insert</p>
            <p className="options mx-2">Format</p>
            <p className="options mx-2">Tools</p>
            <p className="options mx-2">Add-ons</p>
            <p className="options mx-2">Help</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="25"
          height="25"
          fill="#333"
          className="mx-2"
          style={{ cursor: "pointer" }}
        >
          <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="25"
          height="25"
          fill="#333"
          className="mx-2"
          style={{ cursor: "pointer" }}
        >
          <path d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          width="25"
          height="25"
          fill="#333"
          className="mx-2"
          style={{ cursor: "pointer" }}
        >
          <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
        </svg>
        <Button
          variant="primary"
          style={{
            background: "#bad7ff",
            borderRadius: "20px",
            width: "100px",
          }}
          className="hover:bg-primary d-inline-flex border-0 text-dark align-items-center h-10 d-flex justify-content-center align-items-center mx-4"
        >
          <FontAwesomeIcon icon={faLock} style={{ color: "#000" }} />
          <span className="mx-1">Share</span>
        </Button>
        <div
          className="rounded-circle bg-dark p-2 m-2 text-light d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
        >
          {" "}
          P{" "}
        </div>
      </header>
      {/* Text editor component */}
      <TextEditor />
    </>
  );
}

export default Editor;
