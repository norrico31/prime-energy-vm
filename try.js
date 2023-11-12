import React from 'react';

const renderNames = (dataArray, index = 0) => {
  if (index === dataArray.length) {
    return null;
  }

  const item = dataArray[index];

  return (
    <div key={index}>
      {item.name}
      {item.children && renderNames(item.children)}
      {renderNames(dataArray, index + 1)}
    </div>
  );
};

const NameList = ({ data }) => {
  return <div>{renderNames(data)}</div>;
};

const App = () => {
  const arr = [
    {
      name: 'gerald',
      age: 30
    },
    {
      name: 'norrico',
      age: 25
    },
    {
      name: 'okkotsu',
      age: 31
    },
    {
      name: 'gojo',
      age: 22
    },
    {
      name: 'ryomen',
      age: 10
    },
  ];

  return (
    <div>
      <h1>Names List</h1>
      <NameList data={arr} />
    </div>
  );
};

export default App;