import people from './data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function App() {
  const [person, setPerson] = useState(0);
  const { id, name, job, image, text } = people[person];
  return (
    <>
      <main>
        <div className="reviews-container">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="person-name">{name}</h4>
          <h3 className="person-job">{job}</h3>
          <p className="text">{text}</p>
          <div className="btn-container">
            <button type="button" className="prev-btn">
              <FaChevronLeft />
            </button>
            <button type="button" className="next-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
