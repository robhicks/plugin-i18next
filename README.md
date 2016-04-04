text
===========

A SystemJS plugin that performs [i18next](http://i18next.com/) translations on text when it is loaded. The resulting text is loaded from the file into the variable as a string.

Installing
---

For SystemJS use, locate `i18ntext.js` in the application, and then locate it with map configuration:

```javascript
System.config({
  map: {
    text: 'path/to/i18ntext.js'
  }
});
```

For installing with jspm, run `jspm install i18ntext`.

Basic Use
---

```javascript
import myTranslatedText from './mytext.html!i18ntext';
```
