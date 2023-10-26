import { useState } from 'react';
import people from './data';
function App() {
  const [person, setPerson] = useState(0);
  const { id, name, job, image, text } = people[person];
  return (
    <>
      <main>
        <div className="reviews-container">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
