export const shapeData = [
  {
    name: 'circle',
    x: -135,
    y: -159,
    maxR: 138,
    children: [
      {
        draw: {
          dc: [0, 0, 138],
          f: ['#54A7FC'],
        },
        x: 16,
        y: -31,
        alpha: 0.05,
        blur: { blur: [15, 15, 2], cache: [-138, -138, 276, 276] },
      },
      {
        draw: {
          dc: [0, 0, 138],
          f: ['#024790'],
        },
        x: 4,
        y: 9,
        alpha: 0.18,
        blur: { blur: [15, 15, 2], cache: [-138, -138, 276, 276] },
      },
      {
        draw: {
          dc: [0, 0, 130],
          lf: [['#5BABFF', '#1D69F2'], [0, 1], -15, -70, 70, 157],
        },
        x: 0,
        y: 0,
      },
    ],
  },
  {
    name: 'triangle',
    x: 100,
    y: 120,
    maxR: 106,
    children: [
      {
        draw: {
          drawSvg: ['M55.555553,1.50701044 L106.647004,90 L106.647004,90 C107.199289,90.9565852 106.871539,92.1797661 105.914953,92.7320508 C105.610915,92.9075875 105.266027,93 104.914953,93 L2.73205081,93 L2.73205081,93 C1.62748131,93 0.732050808,92.1045695 0.732050808,91 C0.732050808,90.6489267 0.824463337,90.3040384 1,90 L52.0914513,1.50701044 L52.0914513,1.50701044 C52.6437361,0.550425194 53.8669169,0.222674883 54.8235022,0.774959633 C55.1275406,0.950496297 55.3800163,1.20297202 55.555553,1.50701044 Z'],
          f: ['#1866B5'],
        },
        x: 10,
        y: 10,
        rotation: 15,
        regX: 53,
        regY: 47,
        alpha: 0.55 * 0.25,
        blur: { blur: [6, 6, 2], cache: [0, 0, 107, 93] },
      },
      {
        draw: {
          drawSvg: ['M55.555553,1.50701044 L106.647004,90 L106.647004,90 C107.199289,90.9565852 106.871539,92.1797661 105.914953,92.7320508 C105.610915,92.9075875 105.266027,93 104.914953,93 L2.73205081,93 L2.73205081,93 C1.62748131,93 0.732050808,92.1045695 0.732050808,91 C0.732050808,90.6489267 0.824463337,90.3040384 1,90 L52.0914513,1.50701044 L52.0914513,1.50701044 C52.6437361,0.550425194 53.8669169,0.222674883 54.8235022,0.774959633 C55.1275406,0.950496297 55.3800163,1.20297202 55.555553,1.50701044 Z'],
          lf: [['#4FB7FF', '#2271FF'], [0, 1], 107.65 * 0.4, 93.5 * 0.165, 107.65 * 0.775, 93.5 * 1.103],
        },
        rotation: 15,
        regX: 53,
        regY: 47,
      },
    ],
  },
  {
    name: 'roundRect',
    x: -420,
    y: 0,
    maxR: 112,
    children: [
      {
        draw: {
          rr: [0, 0, 112, 112, 2],
          f: ['#0E50C5'],
        },
        regX: 56,
        regY: 56,
      },
      {
        draw: {
          rr: [0, 0, 116, 116, 2],
          f: ['#3D8DDF'],
        },
        regX: 58,
        regY: 58,
        alpha: 0.25 * 0.65,
        x: -16,
        y: -22,
        blur: { blur: [18, 18, 2], cache: [0, 0, 116, 116] },
      },
      {
        draw: {
          rr: [0, 0, 116, 116, 2],
          f: ['#084788'],
        },
        regX: 58,
        regY: 58,
        alpha: 0.25 * 0.55,
        x: 6,
        y: 8,
        blur: { blur: [18, 18, 2], cache: [0, 0, 116, 116] },
      },
      {
        draw: {
          rr: [0, 0, 112, 112, 2],
          lf: [['#0FC5F5', '#1E5AFF'], [0, 1], 0, 112 * -0.204, 112 * 0.585, 112 * 1.236],
        },
        regX: 56,
        regY: 56,
        alpha: 0.8,
      },
    ],
  },
  {
    name: 'blurCircle',
    x: -294,
    y: 259,
    maxR: 158,
    children: [
      {
        draw: {
          dc: [0, 0, 79],
          f: ['#1164D5'],
        },
      },
      {
        draw: {
          dc: [0, 0, 79],
          f: ['#62ACFC'],
        },
        alpha: 0.65 * 0.45,
        blur: { blur: [4, 4, 2], cache: [-79, -79, 158, 158] },
      },
    ],
  },
  {
    name: 'blurTriangle',
    x: -540,
    y: -217,
    maxR: 92,
    children: [
      {
        draw: {
          drawSvg: ['M46,0L92,79.6743371L0,79.6743371Z'],
          f: ['#0D48BF'],
        },
        regX: 46,
        regY: 40,
        rotation: 8,
        blur: { blur: [4, 4, 2], cache: [0, 0, 92, 80] },
      },
      {
        draw: {
          drawSvg: ['M46,0L92,79.6743371L0,79.6743371Z'],
          lf: [['#4FB7FF', '#2271FF'], [0, 1], 92 * 0.4, 80 * 0.165, 92 * 0.775, 80 * 1.103],
        },
        regX: 46,
        regY: 40,
        rotation: 8,
        alpha: 0.65,
        blur: { blur: [4, 4, 2], cache: [0, 0, 92, 80] },
      },
    ],
  },
  {
    name: 'blurRoundRect',
    x: 400,
    y: -268,
    maxR: 72,
    children: [
      {
        draw: {
          rr: [0, 0, 73, 73, 4],
          f: ['#1373E1'],
        },
        regX: 36,
        regY: 36,
      },
      {
        draw: {
          rr: [0, 0, 73, 73, 4],
          lf: [['#4FB7FF', '#2271FF'], [0, 1], 73 * 0.4, 73 * 0.165, 73 * 0.775, 73 * 1.103],
        },
        regX: 36,
        regY: 36,
        blur: { blur: [2, 2, 3], cache: [0, 0, 73, 73] },
        alpha: 0.6,
      },
    ],
  },
  {
    name: 'minCircle',
    x: 544,
    y: 0,
    maxR: 100,
    children: [
      {
        draw: {
          dc: [0, 0, 50],
          lf: [['#05BFFF', '#1E5AFF'], [0, 1], 50 * -1, 0, 50 * 1.12, 50 * 1.199],
        },
        alpha: 0.8,
      },
    ],
  },
  {
    name: 'bottomCircle',
    x: 21,
    y: 285,
    maxR: 90,
    children: [
      {
        draw: {
          dc: [0, 0, 45],
          f: ['#116ADA'],
        },
      },
      {
        draw: {
          dc: [0, 0, 45],
          lf: [['#5BABFF', '#1D69F2'], [0, 1], -90, -90, 90, 90],
        },
        alpha: 0.35,
      },
    ],
  },
  {
    name: 'blurCircle2',
    x: -310,
    y: -435,
    maxR: 180,
    children: [
      {
        draw: {
          dc: [0, 0, 90],
          f: ['#114FC3'],
        },
      },
      {
        draw: {
          dc: [0, 0, 90],
          f: ['#62ACFC'],
        },
        alpha: 0.65 * 0.25,
        blur: { blur: [4, 4, 2], cache: [-90, -90, 180, 180] },
      },
    ],
  },
];

export const lineData = [
  {
    start: 'circle', to: 'triangle', stroke: 1.6, color: 'rgba(98, 172, 252, 0.5)',
  },
  {
    start: 'circle', to: 'roundRect', stroke: 1.6, color: 'rgba(98, 172, 252, 0.5)',
  },
  {
    start: 'circle', to: 'blurTriangle', stroke: 1, color: 'rgba(98, 172, 252, 0.25)',
  },
  {
    start: 'circle', to: 'blurRoundRect', stroke: 1, color: 'rgba(98, 172, 252, 0.16)',
  },
  {
    start: 'triangle', to: 'blurRoundRect', stroke: 1.2, color: 'rgba(98, 172, 252, 0.3)',
  },
  {
    start: 'triangle', to: 'minCircle', stroke: 1.2, color: 'rgba(98, 172, 252, 0.3)',
  },
  {
    start: 'triangle', to: 'roundRect', stroke: 1.6, color: 'rgba(98, 172, 252, 0.55)',
  },
  {
    start: 'triangle', to: 'bottomCircle', stroke: 1, color: 'rgba(98, 172, 252, 0.25)',
  },
  {
    start: 'roundRect', to: 'bottomCircle', stroke: 1, color: 'rgba(98, 172, 252, 0.25)',
  },
  {
    start: 'roundRect', to: 'blurTriangle', stroke: 1.2, color: 'rgba(98, 172, 252, 0.3)',
  },
  {
    start: 'roundRect', to: 'blurCircle', stroke: 1, color: 'rgba(98, 172, 252, 0.25)',
  },
  {
    start: 'minCircle', to: 'blurRoundRect', stroke: 1, color: 'rgba(98, 172, 252, 0.18)',
  },
  {
    start: 'blurRoundRect', to: 'blurCircle2', stroke: 1, color: 'rgba(98, 172, 252, 0.15 )',
  },
];
