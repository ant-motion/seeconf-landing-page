import React from 'react';
import * as pageData from './data';

const { page3 } = pageData;

export default class Page3 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: props.isMobile,
    };
  }

  onClick = () => {
    window.open('http://gaode.com/place/B0FFH3KPBX');
  }

  markerEnter = () => {
    this.setState({
      showInfo: true,
    });
  }

  markerLeave = () => {
    this.setState({
      showInfo: false,
    });
  }

  render() {
    return (
      <div className="page-wrapper page3" id={this.props.id}>
        <div className="page">
          <svg
            width="40px"
            height="87px"
            viewBox="0 0 40 87"
            onMouseEnter={this.markerEnter}
            onMouseLeave={this.markerLeave}
            onClick={this.onClick}
            onTouchEnd={this.onClick}
            className="icon"
          >
            <defs>
              <linearGradient x1="50.1677096%" y1="0%" x2="50.1677081%" y2="99.3512847%" id="linearGradient-1">
                <stop style={{ stopColor: '#05CBFF', stopOpacity: 0.8 }} offset="0%" />
                <stop style={{ stopColor: '#1E5AFF', stopOpacity: 1 }} offset="100%" />
              </linearGradient>
            </defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="Group-18" transform="translate(0, 30)">
                <ellipse id="shadow" fill="#D8D8D8" cx="20" cy="54" rx="12" ry="3" />
                <path
                  d="M4.51568798,32.5504392 C1.69336201,29.1139158 0,24.7206907 0,19.9332791 C0,8.92443306 8.954305,0 20,0 C31.045695,0 40,8.92443306 40,19.9332791 C40,24.7392742 38.2934661,29.1480165 35.4513945,32.590415 L21.6312496,52.1565161 C20.9939927,53.0587231 19.7460107,53.2735077 18.8438037,52.6362508 C18.6577382,52.504827 18.4954928,52.3425816 18.364069,52.1565161 L4.51568798,32.5504392 Z M19.9976593,30.9904926 C26.1334383,30.9904926 31.10747,26.0324742 31.10747,19.9164486 C31.10747,13.800423 26.1334383,8.84240463 19.9976593,8.84240463 C13.8618802,8.84240463 8.88784857,13.800423 8.88784857,19.9164486 C8.88784857,26.0324742 13.8618802,30.9904926 19.9976593,30.9904926 Z"
                  id="point-map"
                  fill="url(#linearGradient-1)"
                />
              </g>
            </g>
          </svg>
          {this.state.showInfo && (
            <div className="map-tip">
              <h2>{page3.title}</h2>
              <p>{page3.content}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
