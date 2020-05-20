
import React, {useState, useEffect} from 'react';
import Divider from '../../Divider';
import List from './List';

const Help = () => {

  const [data, setData] = useState(null);
  const [currentType, setCurrentType] = useState('Fundacjom');

  useEffect(() => {
    fetch('http://localhost:3000/foundations')
    .then(resp => resp.json())
    .then(resp => setData(resp))
    .catch(error => console.log('Error fetching data: ', error));
  }, []);

  const getType = () => data?.find(data => data.name === currentType);

  const handleType = (e) => setCurrentType(e.target.id);

  return (

    <div id='help'>
      <h2>Komu pomagamy?</h2>
      <Divider />
      <div className='help-menu'>
        <span id='Fundacjom' onClick={handleType} >Fundacjom</span>
        <span id='Organizacjom' onClick={handleType} >Organizacjom pozarządowym</span>
        <span id='Lokalnym zbiórkom' onClick={handleType} >Lokalnym zbiórkom</span>
      </div>
      <List items={getType()?.items} type={handleType} description={getType()?.desc}/>
    </div>
  );
}

export default Help;
