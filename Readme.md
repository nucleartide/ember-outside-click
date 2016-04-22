
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

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)

---

> GitHub [@nucleartide](https://github.com/nucleartide) &nbsp;&middot;&nbsp;
> Twitter [@nucleartide](https://twitter.com/nucleartide)

[1]: http://nucleartide.github.io/ember-outside-click

