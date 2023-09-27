import React, { useState } from "react";
import EditOverlay from "./EditOverlay";

const OverlayList = (props) => {
  const { allOverlays, onSelect } = props;
  const { size, setSize } = useState();
  const { position, setPosition } = useState();
  // console.log(props.selectedOverlay);

  const EditDataHandler = (e) => {
    e.preventDefault();
    console.log("EditDataHandler");
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    console.log("deleteDataHandler");
  };
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Overlay List</h2>
      <ul>
        {allOverlays[0].text.map((overlay, i) => (
          <li
            key={i}
            onClick={() => {
              onSelect(overlay);
            }}
            className="cursor-pointer flex justify-between items-center font-bold mb-2 p-2 rounded-lg bg-white hover:bg-gray-300"
          >
            {overlay.text}
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
        ))}
        {allOverlays[0].image.map((overlay, i) => (
          // console.log(overlay.src)
          <li
            key={i}
            onClick={() => {
              onSelect(overlay);
            }}
            className="cursor-pointer flex justify-between items-center mb-2 p-2 rounded-lg bg-white hover:bg-gray-300"
          >
            <img src={overlay.src} alt="Image Overlay" />
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
        ))}
      </ul>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {props.selectedOverlay.text && (
            <h3 className="font-bold text-xl">{`TEXT : ${props.selectedOverlay.text}`}</h3>
          )}
          {props.selectedOverlay.src && (
            <p className="font-bold text-xl w-full">
              IMAGE :
              <img
                src={props.selectedOverlay.src}
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
                <option value="right-0">Left</option>
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
