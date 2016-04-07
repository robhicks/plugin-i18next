"use strict";
/*
  i18next text translation plugin.
  Assumes i18next is configured and available for import.
*/
exports.translate = function(load) {
  return System.import('i18next').then(i18next => {
    let source = load.source;
    let pattern = /t\(.+\)/g;
    let keys = [];
    let match;
    while((match = pattern.exec(source)) !== null) {
      keys.push({name: match[0], translation: i18next.t(match[0].replace('t(','').replace(')',''))});
    }

    keys.forEach(key => {
      source = source.replace(key.name, key.translation);
    })

    if (System.transpiler === false || true) {
      load.metadata.format = 'amd';
      return 'def' + 'ine(function() {\nreturn ' + JSON.stringify(source) + ';\n});';
    }

    // disabled pending rollout of https://github.com/systemjs/builder/commit/13ed8f896ab2df733252f75d8ed770c2d9e11862
    load.metadata.format = 'esm';
    return 'export default ' + JSON.stringify(source) + ';';
  })

}
