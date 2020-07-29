## NextJs components hooks error

```js
Error: Invalid hook call. Hooks can only be called inside of the body of a function component.
```

## Reproduce
1. Clone repo
2. `npm`/`yarn` `install`
3. `/hoc` -> this endpoint (page) does not work, throws the previously error
5. `/wrapper` -> this endpoint (page) works

## Description
It throws an error when we use a *Higher Order Component*, but, when we use a component as a wrapper, it works. 
