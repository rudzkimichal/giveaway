
import React, {useState, useEffect} from 'react';

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

    </>
  );
}

const List = ({items, description, type}) => {

  const itemsPerPage = 3;
  const pagesCount = Math.ceil(items?.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [type]);

  const getPageNumbers = () => {
    let pageNumbers = [];
    if(pagesCount > 1) {
      for(let i = 1; i <= pagesCount; i++)
      pageNumbers.push(i);
    }

    return pageNumbers;
  }

  const getCurrentItems = () => {
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentItems = items?.slice(firstIndex, lastIndex);

    return currentItems;
  }

  return (
    <div className='list-container'>
      <p>{description}</p>
      {getCurrentItems()?.map((item,index) =>
        <React.Fragment key={item.header}>
          <ListItem item={item} />
          {index === items.length - 1 ? null : <div className='line-bottom' />}
        </React.Fragment>
      )}
      <div className='pages-container'>
        {pagesCount > 1 ? getPageNumbers().map(page => <span onClick={() => setCurrentPage(page)} id={page} key={page}>{page}</span>) : null}
      </div>
    </div>
  );
}

export default List;
