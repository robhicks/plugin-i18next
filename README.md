i18next Translation Plugin for SystemJS
=======================================

A SystemJS plugin that performs translations [i18next](http://i18next.com/) on text when it is loaded. The resulting translated text is loaded from the file into the variable as a string.

Installing
---

For SystemJS use, locate `i18next.js` in the application, and then locate it with map configuration:

```javascript
System.config({
  map: {
    text: 'path/to/i18next.js'
  }
});
```

For installing with jspm, run `jspm install i18next`.

Basic Use
---

```javascript
import myTranslatedText from './mytext.html!i18next';
```
