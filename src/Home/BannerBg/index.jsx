import React from 'react';
import BgCanvas from './bgCanvas';

export default class BannerBg extends React.PureComponent {
  componentDidMount() {
    new BgCanvas(this.canvas);
  }
  render() {
    return (
      <div className="banner-bg" id="banner">
        <canvas
          ref={(c) => {
            this.canvas = c;
          }}
        />
      </div>);
  }
}
