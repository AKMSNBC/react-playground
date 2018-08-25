import React, {Component} from 'react';
import Logo from './Logo';

class DisplayGamePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {style: {},
                  x: -50,
                  y: -60,
                  reactLogoClass: 'rotate-clockwise'};
    this.reactLogoClick = this.reactLogoClick.bind(this);
    this.move = this.move.bind(this);
  }

  reactLogoClick() {
    this.props.onAddScore();
  }

  getTransitionTime(num) {
    return Math.floor(num / 200) + 1;
  }

  getRandomValue(num) {
    return Math.floor(Math.random() * num);
  }

  move() {
    let {x, y, reactLogoClass} = this.state;
    const {innerWidth, innerHeight} = window;

    /*
      Calculate random translations for svg
    */
      const prevX = x;
      const prevY = y;
      if (Math.floor(Math.random() * 2)) {
        x = x < (innerWidth / 2) ? innerWidth - 100 : -50;
        y = this.getRandomValue(innerHeight - 200);

      } else{
        x = this.getRandomValue(innerWidth - 100);
        y = y < (innerHeight / 2) ? innerHeight - 200 : -60;
      }
      const diffX = Math.abs(x - prevX);
      const diffY = Math.abs(y - prevY);

    /*
      Calculate transition time based on diffX/diffY translation.
      Even out image speed and timeout setting for responsive screen sizes.
    */
    let transitionTime = this.getTransitionTime(diffX);
    if (diffX < diffY) {
      transitionTime = this.getTransitionTime(diffY);
    }

    const style = {
      transition: `${transitionTime}s linear`,
      transform: `translate(${x}px, ${y}px)`
    };

    reactLogoClass = reactLogoClass === 'rotate-clockwise'? 'rotate-counter-clockwise' : 'rotate-clockwise';

    this.setState({style, x, y, reactLogoClass});
    this.timerId = setTimeout(this.move, transitionTime * 1000);
  }

  componentDidMount() {
    this.timerId = setTimeout(this.move, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  render() {
    const { reactLogoClass, style } = this.state;
    return (
      <div className="game-panel">
        <div style={style}>
          <Logo height="200px" width="200px" id="react-logo" className={reactLogoClass} onClick={this.reactLogoClick}/>
        </div>
      </div>
    )
  }
}

export default DisplayGamePanel;
