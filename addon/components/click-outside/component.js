
import Ember from 'ember'
import layout from './template'
import PropTypeMixin, { PropTypes } from 'ember-prop-types'

const { K } = Ember

export default Ember.Component.extend(PropTypeMixin, {
  layout,

  propTypes: {
    onClickOutside: PropTypes.func
  },

  getDefaultProps() {
    return { onClickOutside: K }
  },

  init() {
    this._super(...arguments)
    this.handle = this.handle.bind(this)
  },

  didInsertElement() {
    this._super(...arguments)
    document.addEventListener('click', this.handle, true)
  },

  willDestroyElement() {
    this._super(...arguments)
    document.removeEventListener('click', this.handle, true)
  },

  handle(e) {
    const el = this.$()[0];
    if (!el.contains(e.target)) this.get('onClickOutside')(e)
  }
})

