function Cs142TemplateProcessor(template) {
  this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function (dictionary) {
  var str = this.template;
  var regExp = /{{[^}}]*}}/g;
  var temp = str.match(regExp); // stringee match hiine tgeed  replace hiine
  for (var key in dictionary) {
    var re = new RegExp("\\{\\{" + key + "\\}\\}");
    str = str.replace(re, dictionary[key]);
  }
  str = str.replace(new RegExp("\\{\\{\\w+\\}\\}", "g"), "");
  console.log(str);
  return str;
};
