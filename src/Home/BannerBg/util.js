/* eslint no-return-assign: 0 */
export const C = window.createjs || {};
function getSVGParams(str) {
  const p = str.substring(1).replace(/[\s]+$|^[\s]+/g, '').split(/[\s]+/);
  if (p[0].length === 0) {
    p.shift();
  }
  return p.map(c => parseFloat(c));
}
function drawSvg(pathData) {
  const path = pathData.replace(/,/g, ' ').replace(/-/g, ' -').split(/(?=[a-zA-Z])/);
  path.forEach((str) => {
    const cmd = str[0].toUpperCase();
    const p = getSVGParams(str);
    switch (cmd) {
      case 'M':
        this.mt(...p);
        break;
      case 'L':
        this.lt(...p);
        break;
      case 'C':
        this.bt(...p);
        break;
      case 'Z':
        break;
      default:
        console.log(`不支持: ${cmd}`);
        break;
    }
  });
}
C.Graphics.prototype.drawSvg = drawSvg;

export const drawChildren = (item) => {
  const shape = new C.Shape();
  const g = shape.graphics;
  Object.keys(item).forEach((key) => {
    if (key === 'draw') {
      Object.keys(item[key]).sort((a, b) => {
        if (b.indexOf('f') >= 0) {
          return true;
        }
        return false;
      }).forEach((cKey) => {
        g[cKey](...item[key][cKey]);
      });
      g.ef();
      return;
    }
    if (key === 'blur') {
      const blur = new C.BlurFilter(...item[key].blur);
      shape.filters = [blur];
      const bounds = blur.getBounds();
      const boundArray = [bounds.x, bounds.y, bounds.width, bounds.height];
      const cache = item[key].cache.map((num, i) => (
        num + boundArray[i]
      ));
      shape.cache(...cache);
      return;
    }
    shape[key] = item[key];
  });
  return shape;
};

export const tweenFunctions = {
  easeOutBack(t, b, _c, d, _s) {
    const c = _c - b;
    let s = _s;
    if (s === undefined) {
      s = 1.70158;
    }
    return c * ((t = (t / d) - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
};
