import React, { useState } from "react";

const ImgOverlayForm = (props) => {
  const { stickerImage, setStickerImage } = useState();
  const { size, setSize } = useState();
  const { position, setPosition } = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full border border-black rounded-md p-2">
      <h2 className="text-xl font-semibold m-2">Add Image Overlay</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Sticker Image (PNG)
          </label>
          <input
            type="file"
            accept=".png"
            onChange={(e) => setStickerImage(e.target.files[0])}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="flex m-2 flex-row py-1 px-2 rounded-md">
          <span className="font-bold">Select size :</span>
          <select
            onChange={(e) => setSize(e.target.value)}
            value={size}
            className="m-1 text-center rounded-md text-primary"
          >
            <option value="w-10">Small</option>
            <option value="w-24">Medium</option>
            <option value="w-48">Large</option>
          </select>
        </div>
        <div className="flex m-2 flex-row py-1 px-2 rounded-md">
          <span className="font-bold">Select position :</span>
          <select
            onChange={(e) => setPosition(e.target.value)}
            value={position}
            className="m-1 text-center rounded-md text-primary"
          >
            <option value="flex justify-start">Left</option>
            <option value="flex justify-center">Center</option>
            <option value="flex justify-end">Right</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Add Overlay
        </button>
      </form>
    </div>
  );
};

export default ImgOverlayForm;
