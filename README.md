# TimeDecimal

Convert formatted time (HH:MM:SS) to decimal values

https://matronator.github.io/TimeDecimal/

## Instalation

### NPM

https://www.npmjs.com/package/time-decimal

```
npm i time-decimal
```

### Browser

Download `time-decimal.js` or `time-decimal.min.js` from `dist` folder and include in your html file

```html
<script src="path/to/folder/time-decimal.min.js"></script>

<script src="path/to/folder/time-decimal.min.js"></script>
```

## Usage

### NPM

```javascript
import * as tdec from "time-decimal";

// How many hours/minutes/seconds is 11:45:30

let hours = 11;
let minutes = 45;
let seconds = 30;

// hours - if minutes and seconds are not provided, their default value is 0
tdec.calculateHours(hours, minutes, seconds); // returns 11.758333

// minutes - if hours and seconds are not provided, their default value is 0
tdec.calculateMinutes(hours, minutes, seconds); // returns 705.5

// seconds - if minutes and hours are not provided, their default value is 0
tdec.calculateSeconds(hours, minutes, seconds); // returns 42330
```

### Browser

```javascript

let hours = 11;
let minutes = 45;
let seconds = 30;

// hours
calculateHours(hours, minutes, seconds); // returns 11.758333

// minutes
calculateMinutes(hours, minutes, seconds); // returns 705.5

// seconds
calculateSeconds(hours, minutes, seconds); // returns 42330
```

## License

MIT License

Copyright (c) 2020 Matronator

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
