import 'slick-carousel';
import { svgIcon } from '../_helpers';

class Sliders {
  constructor() {
    this.$slider = $('.js-slider');
    this.$testimonialsSld = $('.testimonials__slider');

    const iconLeft = svgIcon('sld-arr-l');
    const iconRight = svgIcon('sld-arr-r');

    this.defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 800,
      useTransform: true,
      adaptiveHeight: true,
      accessibility: false,
      swipe: true,
      arrows: true,
      prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
      nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
      rows: 0
    };

    this.init();
  }

  init() {
    if (this.$slider.length) this.initSlider();
    if (this.$testimonialsSld.length) this.initTestimonialsSld();
  }

  initSlider() {
    this.$slider.slick($.extend({}, this.defaultOptions));
  }

  initTestimonialsSld() {
    this.$testimonialsSld.slick($.extend({}, this.defaultOptions, {
      slidesToShow: 3,
      infinite: false,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          } }]
    }));
  }
}

export default new Sliders();
