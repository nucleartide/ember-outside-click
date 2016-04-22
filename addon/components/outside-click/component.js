
import Ember from 'ember'
import layout from './template'
import PropTypeMixin, { PropTypes } from 'ember-prop-types'

const { K } = Ember

export default Ember.Component.extend(PropTypeMixin, {
  layout,

  propTypes: {
    onOutsideClick: PropTypes.func
  },

  getDefaultProps() {
    return { onOutsideClick: K }
  },

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
    const el = this.$()[0];
    if (!el.contains(e.target)) this.set('isOutside', true)
  },

  handleUp(e) {
    if (this.get('isOutside')) this.get('onOutsideClick')(e)
    this.set('isOutside', false)
  }
})

