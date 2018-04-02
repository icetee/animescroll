// easing functions http://goo.gl/5HLl8
class Maths {
  static easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  static easeInCubic(t, b, c, d) {
    const tc = (t /= d) * t * t;
    return b + c * (tc);
  }

  static inOutQuintic(t, b, c, d) {
    const ts = (t /= d) * t;
    const tc = ts * t;

    return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
  }
}

module.exports = Maths;
