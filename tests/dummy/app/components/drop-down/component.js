
import OutsideClick from 'ember-outside-click/components/outside-click/component'

const Dropdown = OutsideClick.extend({
  open: false,

  init() {
    this._super(...arguments)
    this.onOutsideClick = this.onOutsideClick.bind(this)
  },

  onOutsideClick() {
    this.set('open', false)
  },

  actions: {
    toggle() {
      this.toggleProperty('open')
    }
  }
})

export default Dropdown

