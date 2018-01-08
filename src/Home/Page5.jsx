import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import * as pageData from './data';

export default function Page5(props) {
  return (
    <OverPack className="page-wrapper page5" id={props.id}>
      <QueueAnim type="bottom" leaveReverse key="page" className="page">
        <i key="i" />
        <h1 key="title">会议直播</h1>
        <p key="p">所有演讲内容将经整理后，陆续发布在<a target="blank" href="https://zhuanlan.zhihu.com/xtech">蚂蚁金服体验科技知乎专栏</a>，非常你的关注</p>
        <div key="button" style={{ textAlign: 'center' }}>
          <div key="button" className="home-button">
            <a disabled className="ant-btn">{pageData.button}</a>
          </div>
        </div>
      </QueueAnim>
    </OverPack>
  );
}
