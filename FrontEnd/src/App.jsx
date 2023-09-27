import React, { useState, useEffect } from "react";
import axios from "axios";
import OverlayList from "./components/OverlayList";
import ReactPlayer from "react-player";
import TextOverlayForm from "./components/TextOverlayForm";
import ImgOverlayForm from "./components/ImgOverlayForm";

const overlaysObj = [
  {
    text: [
      {
        text: "hello",
        size: "text-xl",
        position: "right-0",
      },
      {
        text: "hello2",
        size: "text-3xl",
        position: "text-center",
      },
      {
        text: "hello3",
        size: "text-3xl",
        position: "text-right",
      },
    ],
    image: [
      {
        src: "/vite.svg",
        size: "w-48",
        position: "flex justify-start",
      },
      {
        src: "/vite.svg",
        size: "w-24",
        position: "flex justify-center",
      },
      {
        src: "/vite.svg",
        size: "w-24",
        position: "flex justify-end",
      },
    ],
  },
];

function App() {
  const [selectedOverlay, setSelectedOverlay] = useState([]);
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [allOverlays, setAllOverlays] = useState(overlaysObj);

  useEffect(() => {
    if (email !== "") {
      // Only fetch overlays if the user has entered an email
      axios
        .get(`/api/overlays?email=${email}`)
        .then((response) => {
          setAllOverlays(response.data);
        })
        .catch((error) => {
          console.error("Error fetching overlays:", error);
        });
    }
  }, [email]); // Fetch overlays when the email changes

  const handleOverlaySelect = (overlay) => {
    setSelectedOverlay(overlay);
    // console.log(overlay)
  };
  // console.log(selectedOverlay);
  return (
    <div className="bg-gray-200 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Video Overlay App</h1>
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Test URL:
          </label>
          <input
            type="text"
            placeholder="Enter test URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        {url !== "" && (
          <div className="relative">
            <ReactPlayer
              className="z-10"
              url={url}
              playing={true}
              controls={true}
              width="100%"
              height="auto"
            />
            {selectedOverlay && (
              <div
                className={`absolute font-bold top-0 w-full ${selectedOverlay.position} z-20 bg-opacity-50 p-2 text-white`}
              >
                {selectedOverlay.text && (
                  <p className={`${selectedOverlay.size} m-4`}>
                    {selectedOverlay.text}
                  </p>
                )}
                {selectedOverlay.src && (
                  <img
                    src={selectedOverlay.src}
                    className={`${selectedOverlay.size} m-4`}
                    alt="Image Overlay"
                  />
                )}
              </div>
            )}
          </div>
        )}
      </div>
      {url !== "" && (
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <OverlayList
              allOverlays={allOverlays}
              onSelect={handleOverlaySelect}
              selectedOverlay={selectedOverlay}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Selected Overlay</h2>
            <div className="mb-4">
              {selectedOverlay.text ? (
                <p>Name: {selectedOverlay.text}</p>
              ) : (
                <p>No text overlay selected.</p>
              )}
              {selectedOverlay.src ? (
                <img src={selectedOverlay.src} alt="Image Overlay" />
              ) : (
                <p>No image overlay selected.</p>
              )}
            </div>
            <div className="flex justify-between gap-4">
              <TextOverlayForm />
              <ImgOverlayForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
