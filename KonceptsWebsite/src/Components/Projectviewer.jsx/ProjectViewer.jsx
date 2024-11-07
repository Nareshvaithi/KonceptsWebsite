import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Project02 from "../../assets/Images/Project02.png";
import Project01 from "../../assets/Images/project1.svg";
import Logo1 from "../../assets/Images/flowimg1.png";
import Logo2 from "../../assets/Images/flowimg2.png";
import Logo3 from "../../assets/Images/flowimg3.png";

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [currentOverlay, setCurrentOverlay] = useState(null); // For website image overlay
  const [currentLogoOverlay, setCurrentLogoOverlay] = useState(null); // For logo overlay
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageType, setImageType] = useState("website"); // Track if it's a website or logo

  // Image URLs array for websites
  const imageUrls = [
    Project01,
    Project02,
  ];

  // Image URLs array for logos
  const logoUrls = [
    Logo1,
    Logo2,
    Logo3,
  ];

  // Define the bounds based on image size
  const imageBounds = [
    [0, 0],  // Top-left corner (latitude, longitude)
    [-2400, 4500] // Bottom-right corner (latitude, longitude)
  ];

  useEffect(() => {
    // Create the map on component mount
    const initialMap = L.map('map', {
      crs: L.CRS.Simple, // Use Simple CRS to display the image in pixels
      minZoom: -2, // Allow zooming out for larger images
      scrollWheelZoom: false, // Disable zoom on mouse scroll
    });

    const mapWidth = 4500;
    const mapHeight = 2400;

    // Set initial view to the center of the image
    const centerCoordinates = [-mapHeight / 2, mapWidth / 2];
    initialMap.setView(centerCoordinates, 1);

    // Set the map
    setMap(initialMap);

    // Initialize with the first image (website by default)
    updateImageOverlay(initialMap, currentIndex, "website");

    return () => {
      initialMap.remove(); // Clean up the map on component unmount
    };
  }, []);

  const updateImageOverlay = (map, index, type) => {
    // Remove existing overlays depending on type
    if (type === "website") {
      // Remove current website overlay
      if (currentOverlay) {
        map.removeLayer(currentOverlay);
      }
      // Add new website overlay
      const overlay = L.imageOverlay(imageUrls[index], imageBounds).addTo(map);
      setCurrentOverlay(overlay);
      setCurrentLogoOverlay(null); // Reset logo overlay if switching to website
    } else if (type === "logo") {
      // Remove current logo overlay
      if (currentLogoOverlay) {
        map.removeLayer(currentLogoOverlay);
      }
      // Add new logo overlay
      const logoOverlay = L.imageOverlay(logoUrls[index], imageBounds).addTo(map);
      setCurrentLogoOverlay(logoOverlay);
      setCurrentOverlay(null); // Reset website overlay if switching to logo
    }

    map.fitBounds(imageBounds); // Fit the map to the new image bounds
  };

  const handleLeftArrowClick = () => {
    const newIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length; // Go to previous image
    setCurrentIndex(newIndex);
    updateImageOverlay(map, newIndex, imageType);
  };

  const handleRightArrowClick = () => {
    const newIndex = (currentIndex + 1) % imageUrls.length; // Go to next image
    setCurrentIndex(newIndex);
    updateImageOverlay(map, newIndex, imageType);
  };

  const handleFullscreen = () => {
    if (map) {
      if (map._container.requestFullscreen) {
        map._container.requestFullscreen();
      } else if (map._container.mozRequestFullScreen) { // Firefox
        map._container.mozRequestFullScreen();
      } else if (map._container.webkitRequestFullscreen) { // Chrome, Safari, Opera
        map._container.webkitRequestFullscreen();
      } else if (map._container.msRequestFullscreen) { // IE/Edge
        map._container.msRequestFullscreen();
      }
    }
  };

  // Dropdown change handler to update the map based on website selection
  const handleImageDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const newIndex = imageUrls.indexOf(selectedValue); // Get the index of the selected image
    if (newIndex !== -1) {
      setImageType("website"); // Set image type to website
      setCurrentIndex(newIndex);
      updateImageOverlay(map, newIndex, "website");
    }
  };

  // Handle logo dropdown change
  const handleLogoDropdownChange = (event) => {
    const selectedValue = event.target.value;
    const newIndex = logoUrls.indexOf(selectedValue); // Get the index of the selected logo
    if (newIndex !== -1) {
      setImageType("logo"); // Set image type to logo
      setCurrentIndex(newIndex); // Update the current selected logo
      updateImageOverlay(map, newIndex, "logo"); // Update the logo overlay
    }
  };

  return (
    <div className="container flex flex-col items-center">
      {/* Dropdown Selector for Websites */}
      <div className="relative z-10 mb-4 mt-2">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
          onChange={handleImageDropdownChange} // Added onChange handler
          value={imageUrls[currentIndex]} // Ensure selected value matches current image
        >
          <option value={Project01}>Website 1</option>
          <option value={Project02}>Website 2</option>
        </select>
      </div>

      {/* Dropdown Selector for Logos */}
      <div className="relative z-10 mb-4 mt-2">
        <select
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none"
          onChange={handleLogoDropdownChange} // Handle logo selection
        >
          <option value={Logo1}>Logo 1</option>
          <option value={Logo2}>Logo 2</option>
          <option value={Logo3}>Logo 3</option>
        </select>
      </div>

      <div className="relative w-full">
        <div id="map" className="h-screen w-full rounded-md overflow-hidden shadow-lg"></div>
        
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20" // Ensure it's above the map
          onClick={handleLeftArrowClick}
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20" // Ensure it's above the map
          onClick={handleRightArrowClick}
        >
          &#10095;
        </button>

        {/* Fullscreen Button */}
        <button
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-20" // Ensure it's above the map
          onClick={handleFullscreen}
        >
          &#x26F6; {/* Fullscreen icon */}
        </button>
      </div>
    </div>
  );
};

export default MapComponent;
