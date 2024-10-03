import React, { useState, useRef } from "react";
import { useDrag } from '@use-gesture/react';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiOutlineZoomIn, AiOutlineZoomOut, AiOutlineFullscreen } from "react-icons/ai";
import Logo from "../../assets/Images/Logo";


const DesignPreviewSlider = () => {
    
  const [currentDesign, setCurrentDesign] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 }); // For drag movement
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const containerRef = useRef(null); // Reference to the main container

  const designs = [
    "https://lipsum.app/random/1600x900", // Replace with your image URLs
    "https://lipsum.app/random/1600x900", // Replace with your image URLs
    "https://lipsum.app/random/1600x900", // Replace with your image URLs
  ];

  const handlePrev = () => {
    setCurrentDesign((prev) => (prev === 0 ? designs.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentDesign((prev) => (prev === designs.length - 1 ? 0 : prev + 1));
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 3)); // Max zoom level 3x for more detail
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 1)); // Min zoom level 1x (original size)
  };

  // Drag functionality with more responsive movement
  const bind = useDrag(({ movement: [mx, my], memo = position }) => {
    if (zoomLevel > 1) {
      const imageWidth = imageSize.width * zoomLevel;
      const imageHeight = imageSize.height * zoomLevel;

      const boundX = (imageWidth - containerSize.width) / 2;
      const boundY = (imageHeight - containerSize.height) / 2;

      // Move image more responsively based on drag distance and zoom level
      const newX = Math.max(Math.min(memo.x + mx * zoomLevel, boundX), -boundX);
      const newY = Math.max(Math.min(memo.y + my * zoomLevel, boundY), -boundY);

      setPosition({ x: newX, y: newY });
      return { x: newX, y: newY };
    }
    return memo;
  });

  // Update container and image size
  const handleImageLoad = (e) => {
    const { width, height } = e.target;
    setImageSize({ width, height });

    const container = e.target.parentNode;
    const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();
    setContainerSize({ width: containerWidth, height: containerHeight });
  };

  // Fullscreen functionality
  const enterFullScreen = () => {
    if (containerRef.current.requestFullscreen) {
      containerRef.current.requestFullscreen();
    } else if (containerRef.current.mozRequestFullScreen) { /* Firefox */
      containerRef.current.mozRequestFullScreen();
    } else if (containerRef.current.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      containerRef.current.webkitRequestFullscreen();
    } else if (containerRef.current.msRequestFullscreen) { /* IE/Edge */
      containerRef.current.msRequestFullscreen();
    }
  };

  return (
    <div ref={containerRef} className="relative w-2/3 mx-auto h-auto p-4">
      {/* Previous/Next Buttons */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrev}
          className="text-gray-600 p-2 hover:bg-gray-200 rounded-full"
        >
          <FiChevronLeft size={24} />
        </button>
        <select
          value={currentDesign}
          onChange={(e) => setCurrentDesign(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          {designs.map((design, index) => (
            <option key={index} value={index}>
              Design {index + 1}
            </option>
          ))}
        </select>
        <button
          onClick={handleNext}
          className="text-gray-600 p-2 hover:bg-gray-200 rounded-full"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Design Preview Area with Zoom and Drag */}
      <div className="relative overflow-hidden border rounded-lg h-[500px]">
        <div
          {...bind()} // Attach drag handler
          className={`flex ${zoomLevel > 1 ? "cursor-grab" : "cursor-auto"} transition-transform duration-300`}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoomLevel})`,
          }}
        >
          <img

            src={designs[currentDesign]}
            alt={`Design ${currentDesign + 1}`}
            className="w-full h-auto object-cover"
            onLoad={handleImageLoad}
          />
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          <button
            onClick={zoomIn}
            className="p-2 bg-white shadow rounded-md hover:bg-gray-100"
          >
            <AiOutlineZoomIn size={20} />
          </button>
          <button
            onClick={zoomOut}
            className="p-2 bg-white shadow rounded-md hover:bg-gray-100"
          >
            <AiOutlineZoomOut size={20} />
          </button>
          <button
            onClick={enterFullScreen}
            className="p-2 bg-white shadow rounded-md hover:bg-gray-100"
          >
            <AiOutlineFullscreen size={20} />
          </button>
        </div>
      </div>

      {/* Design info */}
      <div className="mt-2 text-gray-600">
        <span>Wonderlist.design · Design {currentDesign + 1}</span>
        <span className="ml-4">Edited 8 days ago</span>
      </div>
    </div>
  );
};

export default DesignPreviewSlider;
