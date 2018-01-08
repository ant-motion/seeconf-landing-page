import React from 'react';

function ood() {
  return (new Date()).getTime() >= (new Date('2018/01/07 06:00:00')).getTime();
}

const data = {
  button: ood() ? '直播已结束' : '01.06 线上同步直播', // 立即报名
  code: '支付宝扫码报名',
  url: 'https://render.alipay.com/p/w/seeconftwa/www/enrol.html',
  pre_url: 'https://render-pre.alipay.com/p/w/seeconftwa/www/enrol.html',
  schemeUrl: 'https://ds.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender.alipay.com%252Fp%252Fw%252Fseeconftwa%252Fwww%252Fenrol.html%253F__webview_options__%253D',
  pre_schemeUrl: 'https://ds.alipay.com/?scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000067%26url%3Dhttps%253A%252F%252Frender-pre.alipay.com%252Fp%252Fw%252Fseeconftwa%252Fwww%252Fenrol.html%253F__webview_options__%253D',
  banner: {
    enName: [
      <span key="1">Seeking Experience & Engineering </span>,
      <span className="mobile-hide" key="2">Conference</span>,
    ],
    title: '首届蚂蚁金服体验科技大会',
    cnName: '探索极致用户体验与最佳工程实践',
    time: `${ood() ? '大会已结束' : '报名已截止'}，非常感谢你的关注`, // 2018.01.06  ／  中国  ·  杭州
  },
  page1: {
    title: '特邀嘉宾',
    coming: '更多重量级大咖，敬请期待',
    row: [
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/cwTbPCIZjulrwvwEkUhh.jpg', name: '胡喜(阿玺)', post: '蚂蚁金服 副总裁' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/DXoDyCKYjbyDvJuzKBHX.png', name: '刘平川(rank)', post: '美团 高级技术总监 业务负责人' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/piumyrtFBPEsVoiCMdmj.png', name: '林建锋(sofish)', post: '饿了么 大前端部门负责人' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/yGhGYYMpjSTXQvEyuOne.png', name: '贺师俊(hax)', post: '百姓网 资深前端架构师' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/sKMURYAmOmTyHuGHyqNk.png', name: '张克军(kejun)', post: '豆瓣 资深前端工程师' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/GwoUxWfYSluTQVRmpKri.png', name: '石玉磊(佩玉)', post: '钉钉 资深技术专家' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/iruQsZNououMqfkKvUxe.jpg', name: '梁山鹰(隼飞)', post: '支付宝 UED 负责人' },
      { src: 'https://gw.alipayobjects.com/zos/rmsportal/HwKTQOSxbYuwYQIqeczd.jpg', name: '王保平(玉伯)', post: '蚂蚁金服 体验技术部负责人' },
    ],
  },
  page2: {
    title: '会议日程',
    timeline: [
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/yTerVovhhMYlkxlnURee.png',
        name: '阿玺',
        post: '蚂蚁金服 副总裁',
        time: '09:00 - 09:15',
        title: '开幕致辞',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/PXFHfSohCXGugBiDIkPM.png',
        name: '它山',
        post: 'Ant Design 负责人',
        time: '09:15 - 10:00',
        title: '蚂蚁中台设计体系 —— Ant Design 3.0 背后的故事',
        content: '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/CrwqjiOQEaxkkMwEWHQe.png',
        name: '不四',
        post: 'Node 技术专家',
        time: '10:00 - 10:45',
        title: 'Developer Experience First —— Techless Web Application 的理念与实践',
        content: '从 Node.js 前后端分层，到 BFF（Backend for Frontend）的出现，我们一直在思考和探索如何让前端以及全栈开发者获得更好的研发体验与更高的研发效率。该主题将会介绍什么是 TWA 和基于 TWA 的思想在 H5 App 研发领域中的实践。',
      },
      {
        double: true,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/XHzBBKPCuSLeQFnDpvCN.png',
        name: '好修 & 景夫',
        post: '蚂蚁互动图形负责人 ／ 图形技术高级专家',
        time: '10:45 - 11:30',
        title: '惊艳的互联网互动体验 —— AntG',
        content: 'WebGL 标准逐渐在运行环境成熟，现在是时候使用它做一些互联网体验新突破了。蚂蚁金服通过蚂蚁庄园，花呗等业务沉淀了一些基于 web 的图形使用经验，推出基于 web 的 3D 引擎框架 R3。尽情期待。',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/SlFgHDtOTLzccvFrQHLg.png',
        time: '11:30 - 13:00',
        title: '午间休息',
      },
      {
        double: true,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/LkDgGYeNlYYYbYzfKYmV.png',
        name: '万塘路 18 号 & 996 乐队',
        time: '13:00 - 13:30',
        title: '乐队演唱',
        content: '午间也精彩，万塘路 18 号 & 996 乐队带你嗨',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/bagJvnBSYRDJREgJKczH.png',
        name: '白龙',
        post: '交互设计专家',
        time: '13:30 - 14:15',
        title: 'TECH 模型：企业级中后台产品体验度量探索',
        content: '中后台系统效率为先，如何系统地衡量用户使用复杂中后台过程中的体验问题，优化和提高效率？我们正在实践。',
      },
      {
        double: true,
        src: 'https://gw.alipayobjects.com/zos/rmsportal/tINOFjoTzINvxvOYxiXH.png',
        name: '绝云 & 御术',
        post: '可视化技术专家 ／ 蚂蚁数据可视化负责人',
        time: '14:15 - 15:00',
        title: 'AntV，返璞归真幻化万千可视化表达',
        content: '如何满足场景越来越多样、定制越来越复杂、专业度要求越来越高的数据可视化需求？返璞归真，我们在探索以更加简单易用的方式提供无限定制的可能性，并尝试在此基础上构建出一整套专业的数据可视化解决方案去应对现在与未来的挑战。',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/gyXRmcMtNArapfoJAhPe.png',
        name: '青栀',
        post: '前端技术专家',
        time: '15:00 - 15:45',
        title: '蚂蚁开发者工具，服务蚂蚁生态的移动研发 IDE',
        content: '随着 Atom，VSCode 等编辑器的兴起，用前端技术开发一个桌面 IDE 逐渐成为了一个触手可及的领域，在该主题中，除了介绍蚂蚁开发者工具的功能与定位，也会跟大家聊一聊背后的实现。',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/eyvRgBxKVyxGhQIlpQLN.png',
        name: '林外',
        post: '交互设计专家',
        time: '15:45 - 16:30',
        title: '轻推转型之门：Ant Design Pro 在企业级产品的探索',
        content: '这曾是用户体验不曾到达的处女地！我们通过打造统一 UI 基础设施来解放生产力，让设计者的创造力专注于最需要的地方，从而使企业级产品的体验提升成为可能。',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/IMHgQpmVegFfmcypDdex.png',
        name: '玉伯',
        post: '蚂蚁体验技术负责人',
        time: '16:30 - 16:45',
        title: '从前端技术到体验科技，暨蚂蚁体验云起航',
        content: '体验云究竟是什么？她从哪里来？要到哪里去？具备哪些核心功能？有着怎样的发展故事？该主题将尝试以故事的形式，讲述体验云的初心与发展历程，以及重点介绍体验云可以带给用户什么服务。',
      },
      {
        src: 'https://gw.alipayobjects.com/zos/rmsportal/aubGAlwegfmYFMaqjHJz.png',
        time: '16:45 - 17:15',
        title: '圆桌 —— 体验科技的发展及未来',
      },
    ],
  },
  page4: {
    title: '丰富的特色展台',
    content: '特色展台包括 Ant Design 、AntV、AntG、Egg 等明星产品，更有产品专家',
    content2: '现场问诊，为你答疑解难',
  },
  page3: {
    title: '大会地址',
    content: '蚂蚁 Z 空间  浙江省杭州市西湖区西溪路556号',
  },
  page5: {
    title: '探索 · 看见',
  },
  page6: {
    title: '赞助商',
    block: [
      'https://gw.alipayobjects.com/zos/rmsportal/TFicUVisNHTOEeMYXuQF.svg', /* 知几基因 */
      'https://gw.alipayobjects.com/zos/rmsportal/hkLGkrlCEkGZeMQlnEkD.svg', /* 云凤蝶 */
      'https://gw.alipayobjects.com/zos/rmsportal/bqyPRSZmhvrsfJrBvASi.svg', /* 图灵 */
      'https://gw.alipayobjects.com/zos/rmsportal/UcsyszzOabdCYDkoPPnM.svg', /* 彩虹心愿 */
      'https://gw.alipayobjects.com/zos/rmsportal/kRBeaICGexAmVjqBEqgw.svg', /* Broadview */
      'https://gw.alipayobjects.com/zos/rmsportal/ftBIiyJcCHpHEioRvPsV.svg', /* 天猫精灵 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/shccivlkqhhTiveGIbGf.png', /* 知几基因 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/pwEEAfsqMfvIxMXdrHal.png', /* 云凤蝶 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/VYcbssnWgkrPdIuCuePC.png', /* 图灵 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/nAqbXOvjFNgZfFOIuIZx.png', /* 彩虹心愿 */
      // 'https://gw.alipayobjects.com/zos/rmsportal/hFdquOcmEcuLcHzYGKXS.png', /* Broadview */
      // 'https://gw.alipayobjects.com/zos/rmsportal/eDqDArYKxFMFbTrSrveb.png', /* 天猫精灵 */
    ],
  },
  footer: {
    name: 'Copyright ©  蚂蚁金融服务集团',
    logoName: '蚂蚁金服体验科技大会',
  },
};

export default data;

// image 预加载，避逸出不了图;
const div = document.createElement('div');
div.style.display = 'none';
document.body.appendChild(div);
function loadImage(src) {
  const img = new Image();
  img.src = src;
  div.appendChild(img);
}
let imageArray = [];

function mapImage(d) {
  d.forEach((item) => {
    item.forEach((c) => {
      imageArray.push(c.src);
    });
  });
}
mapImage([data.page1.row, data.page2.timeline]);
imageArray = imageArray.concat(data.page6.block, 'https://gw.alipayobjects.com/zos/rmsportal/CPGuYZxqYoqLAeBUknUd.png');
imageArray.forEach((src) => {
  loadImage(src);
});
