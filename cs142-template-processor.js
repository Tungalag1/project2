class Cs142TemplateProcessor {
  constructor(template) {
    this.template = template;
  }
  fillIn(dictionary) {
    var txt = this.template;
    var x = txt.match(/{{[^{}]*}}/g);
    //console.log(x);
    for (var key in dictionary) {
      var re = new RegExp("\\{\\{" + key + "\\}\\}");
      // console.log(re);
      txt = txt.replace(re, dictionary[key]);
    }
    txt = txt.replace(new RegExp("\\{\\{\\w+\\}\\}", "g"), "");
    console.log(txt);
    return txt;
  }
}

var template =
  "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new Cs142TemplateProcessor(template);

var dictionary = { month: "July", day: "1", year: "2016" };
var str = dateTemplate.fillIn(dictionary);

if (str === "My favorite month is July but not the day 1 or the year 2016");

//Case: property doesn't exist in dictionary
var dictionary2 = { day: "1", year: "2016" };
var str = dateTemplate.fillIn(dictionary2);

isFinite(str === "My favorite month is  but not the day 1 or the year 2016");
