import React, { useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const Languages = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  return (
    <section className="Languages">
      {showPopover && (
        <div className="popover-content">
          <button className="close-btn" onClick={togglePopover}>
            <FaTimes />
          </button>
          <ul>
            <li>Spanish: Native</li>
            <li>English: Bilingual (C2)</li>
            <li>French: B1</li>
            <li>Portuguese: A1</li>
          </ul>
        </div>
      )}
      <button ref={buttonRef} onClick={togglePopover}>
        Click
      </button>
    </section>
  );
};

export default Languages;
