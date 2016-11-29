
# Ember Outside Click

Outside click component for Ember. Clean and simple.

[See the demo][1].

## Install

```bash
$ ember install ember-outside-click
```

## Use

#### Block form

```hbs
{{#outside-click onOutsideClick=(action 'hide')}}
  <a href="#" onclick={{action 'toggle'}}>Dropdown</a>

  {{#if open}}
    <ul>
      <li>foo</li>
      <li>bar</li>
      <li>baz</li>
    </ul>
  {{/if}}
{{/outside-click}}
```

#### Subclass

[See the demo code][3].

#### Excluding classes

To exclude classes from the outside click behaviour, add the `excludedClasses`
property to the component.

```hbs
{{#outside-click excludedClasses=(array 'excluded-class' 'special-toolbar')}}
  ...
{{/outside-click}}
```

[See the demo code][3] to exclude classes via subclassing.

## Test

As explained by <strong>[@runspired][2]</strong>, jQuery events are somewhat
inconsistent. So ember-outside-click uses native DOM methods instead.

If you find yourself having trouble with jQuery's `trigger`, you should make
and call a `triggerMouseEvent` test helper.

```js
// tests/helpers/trigger-mouse-event.js
export default function triggerMouseEvent(node, eventType) {
  const event = document.createEvent('MouseEvents')
  event.initEvent(eventType, true, true)
  node.dispatchEvent(event)
}

// tests/integration/components/drop-down/component-test.js
test('click outside', function(assert) {
  const el = this.$()[0]
  triggerMouseEvent(el, 'mousedown')
  triggerMouseEvent(el, 'mouseup')
  assert.ok(clickedOutside)
})
```

---

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

> GitHub [@nucleartide](https://github.com/nucleartide) &nbsp;&middot;&nbsp;
> Twitter [@nucleartide](https://twitter.com/nucleartide)

[1]: http://nucleartide.github.io/ember-outside-click
[2]: http://blog.runspired.com/2016/01/27/the-real-reason-to-avoid-jquery/#mistake4usingoratleastnotunderstandingjqueryeventing
[3]: https://github.com/nucleartide/ember-outside-click/tree/master/tests/dummy/app/components/drop-down

