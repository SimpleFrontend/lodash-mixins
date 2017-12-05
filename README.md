# Just Another LoDash Mixins

Some missing features in LoDash that I find useful.

## Installation

```shell
npm install just-another-lodash-mixins --save
```

## Array manipulation

### \_.clearArray

Clear the items inside of an array.

```javascript
const { _ } = require('lodash-mixins');
//ES2015
import { _ } from 'lodash-mixins';

const a = [1, 2, 3, 4];
const b = _.clearArray(a); // both a and b are []
```
