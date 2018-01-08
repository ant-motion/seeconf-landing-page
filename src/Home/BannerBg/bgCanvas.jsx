import { shapeData, lineData } from './data';
import { C, drawChildren, tweenFunctions } from './util';

export default class bgCanvas {
  width = window.innerWidth;
  height = 872;
  dpr = window.devicePixelRatio;
  constructor(canvas) {
    this.canvas = canvas;
    this.stage = new C.Stage(canvas);
    C.Ticker.setFPS(30);
    C.Ticker.useRAF = true;
    C.Ticker.addEventListener('tick', this.stage);
    C.Touch.enable(this.stage, true);
    this.box = new C.Container();
    this.stage.addChild(this.box);
    this.resize();
    window.addEventListener('resize', this.resize);
    this.mX = -this.width / 2;
    this.my = -this.height / 2;
    this.init();
  }

  resize = () => {
    this.width = window.innerWidth;
    this.height = document.getElementById('banner').offsetHeight;
    this.dpr = window.devicePixelRatio;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.box.scaleX = this.dpr;
    this.box.scaleY = this.dpr;
    this.box.x = (this.width * this.dpr) / 2;
    this.box.y = (this.height * this.dpr) / 2;
  }

  init = () => {
    this.grapGroup = new C.Container();
    shapeData.reverse().forEach((item) => {
      const group = new C.Container();
      group.name = item.name;
      group.maxR = item.maxR;
      group.x = 0;
      group.y = 0;
      group.scaleX = 0;
      group.scaleY = 0;
      group.tx = item.x;
      group.ty = item.y;
      group.vx = 0;
      group.vy = 0;
      group.randomY = 30;// Math.random() * 50 + 30;
      group.mouseTime = 0;
      this.grapGroup.addChild(group);
      const children = item.children.map(drawChildren);
      group.addChild(...children);
    });
    this.lineGroup = new C.Container();
    lineData.forEach((a, i) => {
      const line = new C.Shape();
      line.name = `line${i}`;
      this.lineGroup.addChild(line);
    });
    this.box.addChild(this.lineGroup, this.grapGroup);
    C.Ticker.addEventListener('tick', this.appearAnim);
    C.Ticker.addEventListener('tick', this.mouseAnimate);
    C.Ticker.addEventListener('tick', this.drawLine);
  }

  appearAnim = (r) => {
    this.startTime = this.startTime || r.timeStamp - 32;
    const time = r.timeStamp - this.startTime;
    this.grapGroup.children.forEach((child, i) => {
      const delay = i * 50;
      if (time > delay && time - delay <= 550) {
        const scale = tweenFunctions.easeOutBack(time - delay, 0, 1, 550);
        const x = tweenFunctions.easeOutBack(time - delay, 0, child.tx, 550);
        const y = tweenFunctions.easeOutBack(time - delay, 0, child.ty, 550);
        child.scaleX = scale;
        child.scaleY = scale;
        child.x = x;
        child.y = y;
      } else if (time - delay > 550) {
        child.appearEnd = true;
        child.scaleX = 1;
        child.scaleY = 1;
        child.x = child.tx;
        child.y = child.ty;
        if (i === this.grapGroup.children.length - 1) {
          C.Ticker.removeEventListener('tick', this.appearAnim);
          this.stage.addEventListener('stagemousemove', this.mouseMove);
        }
      }
    });
  }

  getDist = (x1, y1, x2, y2) => {
    const dx = (x1 - x2);
    const dy = (y1 - y2);
    return Math.sqrt(dx * dx + dy * dy);
  }

  mouseMove = (e) => {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|Windows Phone)/i)) {
      return;
    }
    this.mX = (e.stageX - this.box.x) / this.dpr;
    this.mY = (e.stageY - this.box.y) / this.dpr;
  }

  mouseAnimate = (e) => {
    this.grapGroup.children.forEach((child) => {
      const dist = this.getDist(child.x, child.y, this.mX, this.mY);
      const tDist = this.getDist(child.tx, child.ty, this.mX, this.mY);
      const r = child.maxR + 100;

      let x = child.tx;
      let y = child.ty;
      if (dist <= r) {
        x = child.x + Math.random() * ((child.x - this.mX) * 2);
        y = child.y + Math.random() * ((child.y - this.mY) * 2);
        child.isMouseOver = true;
        child.interrupt = e.timeStamp;
      } else if (tDist > r && child.appearEnd || !tDist) {
        // 自浮状态
        if (child.isMouseOver) {
          child.isOutStart = true;
        }
        if (!child.isOutStart) {
          if (child.y - child.ty >= child.randomY) {
            child.isRe = true;
          } else if (child.y - child.ty <= -child.randomY) {
            child.isRe = false;
          }
          y = child.isRe ? child.y - Math.random() * 5 : child.y + Math.random() * 5;
        }
      }
      child.vx += (child.x - x) - child.vx * 0.1;
      child.x -= child.vx / 80;
      child.vy += (child.y - y) - child.vy * 0.1;
      child.y -= child.vy / 80;
      if (child.isMouseOver && child.isOutStart) {
        child.mouseTime++;
        if (child.mouseTime > 1000 / 16.7) {
          child.mouseTime = 0;
          child.isMouseOver = false;
          child.isOutStart = false;
        }
      }
    });
  }

  drawLine = () => {
    lineData.forEach((item, i) => {
      const start = this.grapGroup.getChildByName(item.start);
      const to = this.grapGroup.getChildByName(item.to);
      const line = this.lineGroup.getChildByName(`line${i}`);
      const g = line.graphics;
      g.c().ss(item.stroke).s(item.color)
        .mt(start.x, start.y)
        .lt(to.x, to.y)
        .es();
    });
  }
}
