const Maths = require('./Maths');
const requestAnimFrame = require('./requestAnimFrame');

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
