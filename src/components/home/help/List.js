
import React from 'react';

const ListItem = ({item}) => {

  return (
    <>
      <div className='list-item-container'>
        <div>
          <p>{item.header}</p>
          <p>{item.subheader}</p>
        </div>
        <div>{item.desc}</div>
      </div>
      <div className='line-bottom' />
    </>
  );
}

const List = ({items}) => {

  return (
    <div className='list-container'>
      {items?.map(item => <ListItem key={item.header} item={item} />)}
      console.log(items);
    </div>
  );
}

export default List;
