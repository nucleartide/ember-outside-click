
import OutsideClick from 'ember-outside-click/components/outside-click/component'

export default OutsideClick.extend({
  open: false,
  classNames: ['Dropdown'],

  init() {
    this._super(...arguments)
    this.onOutsideClick = this.onOutsideClick.bind(this)
  },

  onOutsideClick() {
    this.set('open', false)
  },

  actions: {
    toggle() { return this.toggle(...arguments) }
  },

  toggle() {
    this.toggleProperty('open')
  }
})

