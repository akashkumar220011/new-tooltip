/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";


const Tooltip = () => {
    const [position, setPosition] = useState('top')
  const [hovered, setHovered] = useState(false);

  const getTooltipPosition = () => {
    switch (position) {
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      default:
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
    }
  };

  const getArrow = () => {
    switch (position) {
      case "top":
        return (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-800"></div>
          </div>
        );
      case "bottom":
        return (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800"></div>
          </div>
        );
      case "left":
        return (
          <div className="absolute left-full top-1/2 transform -translate-y-1/2">
            <div className="w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-gray-800"></div>
          </div>
        );
      case "right":
        return (
          <div className="absolute right-full top-1/2 transform -translate-y-1/2">
            <div className="w-0 h-0 border-t-8 border-b-8 border-r-8 border-t-transparent border-b-transparent border-r-gray-800"></div>
          </div>
        );
      default:
        return null;
    }
  };

  const handlePositionChange = (newPosition) => {
    setPosition(newPosition);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-gray-100">
      {/* Position Buttons */}
      <div className="flex space-x-4">
        {["top", "bottom", "left", "right"].map((pos) => (
          <button
            key={pos}
            onClick={() => handlePositionChange(pos)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 capitalize"
          >
            {pos}
          </button>
        ))}
      </div>

      {/* Tooltip and Hover Button */}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered && (
          <div
            className={`absolute ${getTooltipPosition()} bg-gray-800 text-white text-sm rounded py-2 px-4 shadow-lg transition-opacity duration-300`}
          >
            {getArrow()}
            Thanks for hovering!
          </div>
        )}
        <div className="px-6 py-3 underline decoration-dashed text-black rounded-lg ">
          Hover Me!
        </div>
      </div>
    </div>
  )
}

export default Tooltip