(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.animeScroll = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = _dereq_('./src');

},{"./src":4}],2:[function(_dereq_,module,exports){
const Maths = _dereq_('./Maths');
const requestAnimFrame = _dereq_('./requestAnimFrame');

class AnimeScroll {
  to(to, duration, callback) {
    this.start = AnimeScroll.position();
    this.change = to - this.start;
    this.currentTime = 0;
    this.increment = 10;
    this.duration = (typeof duration === 'undefined') ? 500 : duration;
    this.cb = callback;

    this.animateScroll();
  }

  animateScroll() {
    this.currentTime += this.increment;

    const val = Maths.easeInOutQuad(this.currentTime, this.start, this.change, this.duration);

    AnimeScroll.move(val);

    if (this.currentTime < this.duration) {
      requestAnimFrame(() => {
        this.animateScroll();
      });
    } else {
      if (typeof this.cb === 'function') this.cb();
    }
  }

  static move(amount) {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  }

  static position() {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  }

  get version() {
    return '1.0.0';
  }
}

module.exports = new AnimeScroll();

},{"./Maths":3,"./requestAnimFrame":5}],3:[function(_dereq_,module,exports){
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

},{}],4:[function(_dereq_,module,exports){
module.exports = _dereq_('./AnimeScroll');

},{"./AnimeScroll":2}],5:[function(_dereq_,module,exports){
const requestAnimFrame = (function() {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();

module.exports = requestAnimFrame;

},{}]},{},[1])(1)
});