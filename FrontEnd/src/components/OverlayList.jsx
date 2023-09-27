import React, { useState } from "react";
import axios from "axios";

const OverlayList = (props) => {
  const { allOverlays, onSelect } = props;
  const [size, setSize] = useState(props.selectedOverlay.size || "text-md");
  const [position, setPosition] = useState(
    props.selectedOverlay.position || "text-center"
  );
  // console.log(props.selectedOverlay);

  const EditDataHandler = (e) => {
    e.preventDefault();
    // console.log("EditDataHandler", size, position, props.selectedOverlay._id);

    const newData = {
      size: size,
      position: position,
    };

    axios
      .put(
        `http://localhost:4000/edit/edit-text/${props.selectedOverlay._id}`,
        newData
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error editing overlays:", error);
      });
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log("deleteDataHandler", props.selectedOverlay._id);

    axios
      .delete(
        `http://localhost:4000/delete/delete-data/${props.selectedOverlay._id}`
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Overlay List</h2>
      <ul>
        {allOverlays.map((overlay, i) => (
          <>
            {overlay.contentType === "text" && (
              <li
                key={i}
                onClick={() => {
                  onSelect(overlay);
                }}
                className="cursor-pointer flex justify-between items-center font-bold mb-2 p-2 rounded-lg bg-white hover:bg-gray-300"
              >
                {overlay.content}
                <div>
                  <button
                    className="btn mx-2"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error text-white mx-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )}

            {overlay.contentType === "image" && (
              <li
                key={i}
                onClick={() => {
                  onSelect(overlay);
                }}
                className="cursor-pointer flex justify-between items-center mb-2 p-2 rounded-lg bg-white hover:bg-gray-300"
              >
                <img src={overlay.content} alt="Image Overlay" />
                <div>
                  <button
                    className="btn mx-2"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-error text-white mx-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {props.selectedOverlay.contentType === "text" && (
            <h3 className="font-bold text-xl">{`TEXT : ${props.selectedOverlay.content}`}</h3>
          )}
          {props.selectedOverlay.contentType === "image" && (
            <p className="font-bold text-xl w-full">
              IMAGE :
              <img
                src={props.selectedOverlay.content}
                alt="Image Overlay"
                className="w-1/2 mx-auto"
              />
            </p>
          )}
          <form onSubmit={EditDataHandler}>
            <div className="flex m-2 flex-row py-1 px-2 rounded-md">
              <span className="font-bold">Select size :</span>
              <select
                onChange={(e) => setSize(e.target.value)}
                value={size}
                className="m-1 text-center rounded-md text-primary"
              >
                <option value="text-sm">Small</option>
                <option value="text-md">Medium</option>
                <option value="text-lg">Large</option>
              </select>
            </div>
            <div className="flex m-2 flex-row py-1 px-2 rounded-md">
              <span className="font-bold">Select position :</span>
              <select
                onChange={(e) => setPosition(e.target.value)}
                value={position}
                className="m-1 text-center rounded-md text-primary"
              >
                <option value="text-left">Left</option>
                <option value="text-center">Center</option>
                <option value="text-right">Right</option>
              </select>
            </div>
            <button type="submit" className="btn btn-sm">
              Update
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default OverlayList;
