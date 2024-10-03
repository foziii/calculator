// function getHistory() {
//   return document.getElementById("history-value").innerText;
// }
// function printHistory(num) {
//   document.getElementById("history-value").innerText = num;
// }
// function getOutput(num) {
//   return (document.getElementById("output-value").innerText = num);
// }
// function printOutput(num) {
//   if (num == "") {
//     document.getElementById("output-value").innerText = num;
//   } else {
//     var output = getoutput();
//     var history = getHistory();
//     if (output != "") {
//       output = reverseNumberFormat(output);
//       history = history + output;
//       if (this.id == "=") {
//         var result = eval(history);
//         printOutput(result);
//         printHistory("");
//       }
//     }
//   }
//   function getFormattedNumber(num) {
//     var n = Number(num);
//     var value = n.toLocaleString("en");
//     return value;
//   }
//   function reverseNumberFormat(num) {
//     return Number(num, replace(/,/g, ""));
//   }
// }

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
      document.getElementById("output-value").innerText = "";
    } else if (this.id == "backspace") {
      // var output = reverseNumberFormat(getoutput()).toString();
      // if (output) {
      //   console.log("here other", this.id);
      // } else {
      // }
      document.getElementById("output-value").innerText = document
        .getElementById("output-value")
        .innerText.slice(0, -1);
    } else {
      const temp = document.getElementById("output-value").innerText;
      let temp2 = true;
      for (var i = 0; i < operator.length; i++) {
        if (temp.endsWith(operator[i].id) || temp.endsWith("*")) temp2 = false;
        console.log(operator[i].id, "  <>  ", temp);
      }

      if (temp2) {
        document.getElementById("output-value").innerText += this.innerText;
      } else {
        document.getElementById("output-value").innerText =
          document.getElementById("output-value").innerText.slice(0, -1) +
          this.innerText;
      }
    }
  });
}

const numbers = document.getElementsByClassName("number");
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    document.getElementById("output-value").innerText += this.innerText;
  });
}

printOutput();
