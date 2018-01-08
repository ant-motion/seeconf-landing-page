import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import TweenOne from 'rc-tween-one';
import BannerBg from './BannerBg';
import * as pageData from './data';

const { banner, button } = pageData;

const yAnim = {
  y: 30, opacity: 0, type: 'from', ease: 'easeOutCubic', duration: 300,
};

export default class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    // showModal: PropTypes.func,
  };
  static defaultProps = {
    className: 'banner',
  }
  state = {
    // showBg: false,
  }
  onEnd = () => {
    /* this.setState({
      showBg: true,
    }); */
  }
  getTextToRender = (text, delay) => {
    const textArray = text.split('');
    return textArray.map((t, i) => (
      <TweenOne
        key={i.toString()}
        component="span"
        animation={{
          y: 60, opacity: 0, type: 'from', ease: 'easeOutQuint', delay: delay + (i * 50), duration: 450,
        }}
      >
        {t === ' ' ? <span>&nbsp;</span> : t}
      </TweenOne>
    ));
  }
  render() {
    const {
      className, isMobile, // showModal,
    } = this.props;
    const titleChild = this.getTextToRender(isMobile ? 'SEE Conf' : banner.title, 600);
    return (
      <div className={className}>
        <BannerBg />
        <div className={`${className}-content`} >
          <TweenOne component="p" animation={{ ...yAnim, delay: 500 }} title="EXPERIENCE & ENGINEERING" className="en-name">
            {isMobile ? banner.title : banner.enName}
          </TweenOne>
          <TweenOne component="h1" animation={{ ...yAnim, delay: 600 }}>
            {titleChild}
          </TweenOne>
          <TweenOne component="p" animation={{ ...yAnim, delay: 700 }} className="cn-name">
            {banner.cnName}
          </TweenOne>
          <TweenOne animation={{ ...yAnim, delay: 800 }} className="extra" key="text">
            {banner.time}
          </TweenOne>
          <TweenOne animation={[{ ...yAnim, delay: 900, pointerEvents: 'none' }, { pointerEvents: '', duration: 0 }]} className="home-button" key="home-button">
            <Button type="primary">
              {/* button onClick={showModal} */}
              <a>{button}</a>
            </Button>
          </TweenOne>
        </div>
      </div>
    );
  }
}
