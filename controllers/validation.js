exports.creationValidation = data => {
  var result = { passed: true, msg: "validation ok" };

  if (!data.firstname) {
    result.passed = false;
    result.msg = "fisrt name can not be empty";
  }
  if (!data.lastname) {
    result.passed = false;
    result.msg = "last name can not be empty";
  }

  return result;
};
