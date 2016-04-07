i18next Translation Plugin for SystemJS
=======================================

A SystemJS plugin that performs translations [i18next](http://i18next.com/) on text when it is loaded. The resulting translated text is loaded from the file into the variable as a string.

Installing
----------

i1inext must be installed. Babel transpilation is also required. See the config.js file in the root of the project.

For installing with jspm, run `jspm install i18nt`.

Basic Use
---------

```javascript
import myTranslatedText from './mytext.html!i18nt';
```

See index.html and test.html for more information.
