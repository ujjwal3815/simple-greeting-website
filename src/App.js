import React from 'react';
import './style.css';

let currDate = new Date();
currDate = currDate.getHours();
let greeting = ' ';
const cssStyle = {};

if (currDate >= 1 && currDate < 12) {
  greeting = 'Good Morning ';
  cssStyle.color = 'dodgerblue';
} else if (currDate >= 12 && currDate < 19) {
  greeting = 'Good Afternoon';
  cssStyle.color = 'Orange';
} else {
  greeting = 'Good Night';
  cssStyle.color = 'red';
}

const App = () => {
  return (
    <>
      <div>
        <h1>
          Hello Sir ,<span style={cssStyle}> {greeting}</span>
        </h1>
      </div>
    </>
  );
};

export default App;
