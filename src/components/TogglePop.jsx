import { useState } from "react";
import {MdKeyboardArrowUp} from 'react-icons/md'
import {MdKeyboardArrowDown} from 'react-icons/md'
import '../styles/TogglePop.css'

const TogglePop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="pop-up">
      <div className="question-box">
        <div className="first-row" onClick={togglePopup}>
          <p className="tittle">Why park a domain name in Parkname?</p>
          <span>
            { isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
          </span>
        </div>
        {isOpen && (
          <div className="popup-text">
            <p>
              Parkname is the leading industry standard for domain name parking and monetization services. We offer a variety of services to help you achieve success.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TogglePop;



