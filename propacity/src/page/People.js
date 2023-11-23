// PeoplePage.js
import React from 'react';
import axios from 'axios';
import Person from './Person';

const People = () => {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    
      .then(response => setPeople(response.data.results))
      .catch(error => console.error('Error fetching people:', error));
      
  }, []);

  return (
    <div className="people-page">
        <div>hey learner</div>
      {people.map(person => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  );
};

export default People;
