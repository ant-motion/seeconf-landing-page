import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import * as pageData from './data';

export default function Page4(props) {
  const { isMobile } = props;
  return (
    <OverPack className="page-wrapper page4" playScale="0.3">
      <QueueAnim type="bottom" leaveReverse className="page title" key="page">
        <i key="i" />
        <h1 key="h1">
          {pageData.page4.title}
        </h1>
        <p key="p1" style={{ lineHeight: '24px' }}>{pageData.page4.content}{isMobile && pageData.page4.content2}</p>
        {!isMobile && <p key="p2">{pageData.page4.content2}</p>}
      </QueueAnim>
    </OverPack>
  );
}
