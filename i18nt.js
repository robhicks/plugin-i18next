/*
  i18next text translation plugin.
  Assumes i18next is loaded globally and is configured.
*/
exports.translate = function(load) {
  if (!window.i18next || !window.i18next.t) throw new Error('i18next not loaded');
  var source = load.source;
  var pattern = /t\(.+\)/g;
  var keys = [];
  var match;
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
}
