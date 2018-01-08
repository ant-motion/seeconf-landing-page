import React from 'react';
import { Modal } from 'antd';
import Element from 'rc-scroll-anim/lib/ScrollElement';
import qrcode from 'qrcode-js';
import DocumentTitle from 'react-document-title';
import { enquireScreen } from 'enquire-js';
import Header from './Header';
import Banner from './Banner';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Footer from './Footer';
import './static/style';
import * as pageData from './data';

const { code, url, schemeUrl } = pageData;

let isMobile = false;
enquireScreen((b) => {
  isMobile = b;
});


class Home extends React.PureComponent {
  state = {
    isMobile,
    noTop: true,
    visible: false,
  };
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({
        isMobile: b,
      });
    });
  }

  onChange = ({ mode }) => {
    // 只判断 screen0 就可以了。。
    this.setState({ noTop: mode === 'enter' });
  }
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  showModal = () => {
    if (this.state.isMobile) {
      window.location.href = schemeUrl;
    } else {
      this.setState({
        visible: true,
      });
    }
  }
  render() {
    const codeBase64 = qrcode.toDataURL(url, 7);
    const { noTop, visible } = this.state;
    return (
      [
        <Header key="nav" noTop={noTop} isMobile={this.state.isMobile} />,
        <Element key="banner" id="screen0" onChange={this.onChange}>
          <Banner key="banner" showModal={this.showModal} isMobile={this.state.isMobile} />
        </Element>,
        <Page1 id="screen1" key="page1" />,
        <Page2 id="screen2" key="page2" isMobile={this.state.isMobile} />,
        <Page3 id="screen3" key="page3" isMobile={this.state.isMobile} />,
        <Page4 key="page4" isMobile={this.state.isMobile} />,
        <Page5 key="page5" isMobile={this.state.isMobile} showModal={this.showModal} />,
        <Page6 id="screen4" key="page6" />,
        <Footer key="footer" isMobile={this.state.isMobile} />,
        <Modal
          title={null}
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
          width={400}
          className="qrcode-modal"
          wrapClassName="vertical-center-modal"
          key="modal"
        >
          <p><img src={codeBase64} /></p>
          <p>{code}</p>
        </Modal>,
        <DocumentTitle title="SEE Conf · 蚂蚁金服体验科技大会" key="title" />,
      ]
    );
  }
}
export default Home;
