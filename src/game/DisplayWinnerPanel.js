import React, {Component} from 'react';
import Logo from './Logo';

class DisplayWinnerPanel extends Component {
  constructor(props) {
    super(props);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handleResetClick() {
    this.props.onResetGame();
  }

  render() {
    return (
      <div className="display-winner-panel">
        <div className="winner-msg center">
          <h1>
            Winner!!!
            Winner!!!
            Winner!!!
          </h1>
          <div>
            <Logo width="200px" height="150px"/>
            <Logo width="200px" height="150px"/>
            <Logo width="200px" height="150px"/>
          </div>
          <h1>
            Please click Play Again to start another game.
          </h1>
          <button onClick={this.handleResetClick}>
            Play Again.
          </button>
        </div>
      </div>
    );
  }
}

export default DisplayWinnerPanel;
