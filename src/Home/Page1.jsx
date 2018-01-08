import React from 'react';
import { Row, Col } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import * as pageData from './data';

const { page1 } = pageData;

export default function Page1(props) {
  const children = page1.row.map((data, i) => (
    <Col sm={{ span: 4, offset: i % 4 ? 2 : 1 }} xs={{ span: 24, offset: 0 }} key={i.toString()} >
      <div className="image-wrapper">
        <img src={data.src} />
      </div>
      <h2>{data.name}</h2>
      <p>{data.post}</p>
    </Col>
  ));
  return (
    <div className="page-wrapper page1" {...props} >
      <div className="page">
        <i />
        <h1>{page1.title}</h1>
        <OverPack playScale="0.3">
          <QueueAnim
            type="bottom"
            component={Row}
            leaveReverse
            className="content-wrapper"
            key="img"
          >
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}
