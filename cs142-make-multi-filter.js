function cs142MakeMultiFilter(originalArray) {
  var currrentArray = originalArray;
  function arrayFilterer(filterCriteria, callback) {
    function arrayFiltererCriteria(currrentArray) {
      if (typeof filterCriteria !== "function") {
        return currrentArray;
      }
      currrentArray = currrentArray.filter(filterCriteria);
      if (typeof callback === "function") {
        callback.call(originalArray, currrentArray);
      }
      return arrayFilterer;
    }
  }
  return arrayFilterer;
}
