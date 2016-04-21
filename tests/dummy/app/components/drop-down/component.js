
import Ember from 'ember'
import layout from './template'

export default Ember.Component.extend({
  layout,
  open: false,
  classNames: ['Dropdown'],

  actions: {
    toggle() {
      this.toggleProperty('open')
    },

    hide() {
      this.set('open', false)
    }
  }
})

