import React from 'react';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import * as pageData from './data';

const { page6 } = pageData;

const children = page6.block.map((src, i) => (
  <Col key={i.toString()} md={8} sm={12} style={{ background: `url(${src}) no-repeat center` }} />
));
export default function Page6(props) {
  return (
    <div className="page-wrapper page6" {...props}>
      <div className="page">
        <i key="i" />
        <h1 key="title">{page6.title}</h1>
        <OverPack playScale="0.3">
          <QueueAnim type="bottom" leaveReverse component={Row} key="row">
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}
