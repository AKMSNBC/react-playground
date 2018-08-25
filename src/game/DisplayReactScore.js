import React from 'react';
import Logo from './Logo';

const DisplayReactScore = (props) => {
  const {score = 0} = props;
  const label = 'Score: ';
  const displayScoreList = [];

  for (let i = 0; i < score; i += 1) {
    const reactScore = <Logo key={i.toString()} className="react-score" width="30px" height="18px"/>
    displayScoreList.push(reactScore);
  }

  return (
    <div className="display-react-score">
      <h2>
        {label}
        {displayScoreList}
      </h2>
    </div>
  );
}

export default DisplayReactScore;
