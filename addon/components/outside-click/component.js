
import Ember from 'ember'
import layout from './template'

const {
  K,
  Component
} = Ember

export default Component.extend({
  onOutsideClick: K,

  init() {
    this._super(...arguments)
    this.handleDown = this.handleDown.bind(this)
    this.handleUp = this.handleUp.bind(this)
  },

  layout,
  classNames: ['outside-click'],
  excludedClasses: [],

  didInsertElement() {
    this._super(...arguments)
    document.addEventListener('mousedown', this.handleDown, true)
    document.addEventListener('mouseup', this.handleUp, true)
  },

  willDestroyElement() {
    this._super(...arguments)
    document.removeEventListener('mousedown', this.handleDown, true)
    document.removeEventListener('mouseup', this.handleUp, true)
  },

  isOutside: false,

  handleDown(e) {
    if (this.isDestroyed || this.isDestroying) return

    let isExcluded = this.get('excludedClasses').some((excludedClass) => {
      return ` ${e.target.className} `.indexOf(` ${excludedClass} `) > -1
    });

    if (!this.element.contains(e.target) && !isExcluded) {
      this.set('isOutside', true)
    }
  },

  handleUp(e) {
    if (this.get('isOutside')) this.get('onOutsideClick')(e)
    if (this.isDestroyed || this.isDestroying) return
    this.set('isOutside', false)
  }
})

