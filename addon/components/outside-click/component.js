
import Ember from 'ember'
import layout from './template'

const { K } = Ember

export default Ember.Component.extend({
  layout,
  onOutsideClick: K,

  init() {
    this._super(...arguments)
    this.handleDown = this.handleDown.bind(this)
    this.handleUp = this.handleUp.bind(this)
  },

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
    if (!this.element.contains(e.target)) this.set('isOutside', true)
  },

  handleUp(e) {
    if (this.get('isOutside')) this.get('onOutsideClick')(e)
    if (this.isDestroyed || this.isDestroying) return
    this.set('isOutside', false)
  }
})

