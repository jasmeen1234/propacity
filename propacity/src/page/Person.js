// Person.js
import React, { useState } from 'react';
import axios from 'axios';

const Person = ({ person }) => {
  const [details, setDetails] = useState(null);

  const fetchDetails = () => {
    axios.get(person.url)
      .then(response => setDetails(response.data))
      .catch(error => console.error('Error fetching person details:', error));
  };

  return (
    <div className="person" onClick={fetchDetails}>
      <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg/225px-Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg'} alt={person.name} />
      <p>{person.name}</p>
      {details && (
        <div className="person-details">
          <p>Birthdate: {details.birth_year}</p>
          <p>Species: {details.species}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default Person;
