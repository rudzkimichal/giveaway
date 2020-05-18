
import React from 'react';

const item = {
  groupDescription: 'W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.',
  header: 'item header',
  subheader: 'item subheader',
  description: 'item description'
}

const ListItem = () => {
  return (
    <>
      <div className='list-item-container'>
        <div>
          <p>{item.header}</p>
          <p>{item.subheader}</p>
        </div>
        <div>{item.description}</div>
      </div>
      <div className='line-bottom' />
    </>
  );
}

const List = () => {
  return (
    <div className='list-container'>
      <p>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają
        i czego potrzebują.
      </p>
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}

export default List;
