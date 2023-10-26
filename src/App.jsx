import people from './data';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
function App() {
  const [person, setPerson] = useState(0);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setPerson((old) => {
      const newIndex = old + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setPerson((old) => {
      const newIndex = old - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    const randomIndex = Math.floor(Math.random() * people.length);
    return setPerson(
      randomIndex === person ? checkNumber(randomIndex + 1) : randomIndex
    );
  };

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
            <button type="button" className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button type="button" className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button type="button" className="suprise-btn" onClick={randomPerson}>
            suprise me
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
