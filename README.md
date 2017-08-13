[![Build Status](https://travis-ci.org/ydeshayes/react-avatar-stack.svg?branch=master)](https://travis-ci.org/ydeshayes/react-avatar-stack)

WIP, demo coming soon !

[Example](https://github.com/ydeshayes/react-avatar-stack/blob/master/images/example.png)

# react-avatar-stack component for ReactJS

ReactJS component that will stack the child that you pass to it and add `+n` placeholder to it.

## Installation

```
  npm install react-avatar-stack
```

## Getting started


```jsx
<AvatarStack>
 <div>Avatar1</div>
 <div>Avatar2</div>
</AvatarStack>
```
### Props:

* onNumberLeftClick: function -> (), When the user click on the `+n` icon

* nextOverlapPrevious: boolean, default `true`.
The avatar on the right will overlap the one on the left

* avatarSize: number, default `32`, the size of the one child.

* maxAvatarNumber: number, default `9`, the max children number you want to show before adding a `+n`.

* numberLeftBackgroundColor: string, `+n` background color

* numberLeftColor: string, `+n` text color

## Development

* `npm run build` - produces production version
* `npm run dev` - produces development version
* `npm test` - run the tests
