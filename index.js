// Instructions Go Here

export function telephoneCheck(str) {
  let testStr = str;
  let numOnly = str.replace(/[\s-\x28\x29]/g, "");

  if (str.length < 10 || /[^\d\x28\x29-\s]/.test(str)) {
    return false;
  }

  if (/\x28/.test(testStr)) {
    testStr = testStr.replace(/\x28(?=\d{3}\x29)|\x29/g, "");
  }

  if (numOnly.length > 10) {
    if (/^1/.test(numOnly)) {
      testStr = testStr.replace(/^1(?=\s|\x28)\s?/, "");
      numOnly = numOnly.replace(/^1/, "");
      if (numOnly.length > 10) {
        return false;
      }
    } else {
      return false;
    }
  }

  if (/(\d{3})(\s|-)?(\d{3})(\s|-)?(\d{4})/.test(testStr)) {
    if (/(\x28|\x29)|(^-)/.test(testStr)) {
      return false;
    }
    return true;
  }
  return false;
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  output.innerHTML = telephoneCheck(input.value)
    ? "Yes! That's a phone number!"
    : "That is not a phone number!";
});
