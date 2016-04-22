
# Ember Outside Click

Outside click component for Ember. Clean and simple.

[See the demo][1].

## Install

```bash
$ ember install ember-outside-click
```

## Use

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

## Testing

As explained by <strong>[@runspired][2]</strong>, jQuery events are somewhat
confusing. So ember-outside-click uses native DOM methods instead.

If you find yourself having trouble with jQuery's `trigger`, you should make a
`triggerMouseEvent` test helper and call that instead:

```js
// tests/helpers/trigger-mouse-event.js
export default function triggerMouseEvent(node, eventType) {
  const event = document.createEvent('MouseEvents')
  event.initEvent(eventType, true, true)
  node.dispatchEvent(event)
}

// tests/integration/components/drop-down/component-test.js
test('click outside', function(assert) {
  triggerMouseEvent(this.$()[0], 'mousedown')
  triggerMouseEvent(this.$()[0], 'mouseup')
  return wait().then(_ => assert.ok(clickedOutside))
})
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> GitHub [@nucleartide](https://github.com/nucleartide) &nbsp;&middot;&nbsp;
> Twitter [@nucleartide](https://twitter.com/nucleartide)

[1]: http://nucleartide.github.io/ember-outside-click
[2]: http://blog.runspired.com/2016/01/27/the-real-reason-to-avoid-jquery/#mistake4usingoratleastnotunderstandingjqueryeventing

