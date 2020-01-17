# react-loading-skeleton

> React Loading Skeleton Library

[![NPM](https://img.shields.io/npm/v/@wadehrarshpreet/react-loading-skeleton.svg)](https://www.npmjs.com/package/@wadehrarshpreet/react-loading-skeleton) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @wadehrarshpreet/react-loading-skeleton

or

yarn add @wadehrarshpreet/react-loading-skeleton
```

## Usage

```jsx
import React from 'react'

import Skeleton from '@wadehrarshpreet/react-loading-skeleton'

const Loader = ({count = 5}) => <Skeleton count={count}/>; // Five-line loading skeleton;

export default Loader;
```

## Theming

Using a `<SkeletonTheme>` component, you can easily change the colors of all
skeleton components below it in the React hierarchy:

```javascript
import Skeleton, { SkeletonTheme } from "@wadehrarshpreet/react-loading-skeleton";

<SkeletonTheme color="#202020" highlightColor="#444">
  <p>
    <Skeleton count={3} />
  </p>
</SkeletonTheme>;
```


## Demo
[Checkout Demo](https://wadehrarshpreet.github.io/react-loading-skeleton/)


## Duration

```javascript
<Skeleton duration={2} />
```

`duration`: Number, defaults to 1.2

Duration is how long it takes do one cycle of the skeleton animation.

## Width

`width`: Number | String | null, defaults to null

```javascript
<Skeleton width={100} />
```

Width of the skeleton. Useful when the skeleton is inside an inline element with
no width of its own.

## Height

`Height`: Number | String | null, defaults to null

```javascript
<Skeleton height={100} />
```

Height of the skeleton. Useful when you don't want to adapt the skeleton to a text element but for instance
a card. Also needed for the prop `circle` (see below).

## Circle

`Circle`: Boolean | false, defaults to false

```javascript
<Skeleton circle={true} height={50} width={50} />
```

Prop for making the skeleton look like a circle, for when you are creating a user card with a profile picture for instance.

