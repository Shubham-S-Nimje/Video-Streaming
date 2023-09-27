import React from "react";

const EditOverlay = (props) => {
  console.log(props.data);
  // props.data = (overlay) => {
  //   setSelectedOverlay(overlay);
  // };
  return (
    <>
      {props.textdata && (
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">{props.textdata.text}</h3>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      )}
      {props.imagedata && (
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <img src={props.imagedata.src} alt="Image Overlay" />
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
          </div>
        </dialog>
      )}
    </>
  );
};

export default EditOverlay;
