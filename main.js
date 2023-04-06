// Website Project
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //  Variables
  let input1 = document.getElementById("in1").value.toLowerCase();
  let input2 = document.getElementById("in2").value.toLowerCase();
  let input3 = document.getElementById("in3").value.toLowerCase();
  let input4 = document.getElementById("in4").value.toLowerCase();
  let input5 = document.getElementById("in5").value.toLowerCase();
  let input6 = document.getElementById("in6").value.toLowerCase();
  let input7 = document.getElementById("in7").value.toLowerCase();

  let input11 = document.getElementById("in1");
  let input22 = document.getElementById("in2");
  let input33 = document.getElementById("in3");
  let input44 = document.getElementById("in4");
  let input55 = document.getElementById("in5");
  let input66 = document.getElementById("in6");
  let input77 = document.getElementById("in7");

  let output1 = document.getElementById("span1");
  let output2 = document.getElementById("span2");
  let output3 = document.getElementById("span3");
  let output4 = document.getElementById("span4");
  let output5 = document.getElementById("span5");
  let output6 = document.getElementById("span6");
  let output7 = document.getElementById("span7");

  let numcorrect = 0;

  //   Question 1
  if (input1 === "panfry") {
    output1.innerHTML = `<h3>Correct</h3>`;
    output1.style.color = "green";
    input11.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output1.innerHTML = `<h3>Incorrect</h3>`;
    output1.style.color = "red";
    input11.style.borderColor = "red";
  }
  // Question 2
  if (input2 === "ovens") {
    output2.innerHTML = `<h3>Correct</h3>`;
    output2.style.color = "green";
    input22.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output2.innerHTML = `<h3>Incorrect</h3>`;
    output2.style.color = "red";
    input22.style.borderColor = "red";
  }
  // Queston 3
  if (input3 === "74.75" || input3 === "$74.75") {
    output3.innerHTML = `<h3>Correct</h3>`;
    output3.style.color = "green";
    input33.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output3.innerHTML = `<h3>Incorrect</h3>`;
    output3.style.color = "red";
    input33.style.borderColor = "red";
  }
  // Question 4
  if (input4 === "appetizers" || input4 === "apps") {
    output4.innerHTML = `<h3>Correct</h3>`;
    output4.style.color = "green";
    input44.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output4.innerHTML = `<h3>Incorrect</h3>`;
    output4.style.color = "red";
    input44.style.borderColor = "red";
  }
  // Question 5
  if (
    input5 === "ovens and entrees" ||
    input5 === "entrees and ovens" ||
    input5 === "ovens and entrées" ||
    input5 === "entrées and ovens"
  ) {
    output5.innerHTML = `<h3>Correct</h3>`;
    output5.style.color = "green";
    input55.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output5.innerHTML = `<h3>Incorrect</h3>`;
    output5.style.color = "red";
    input55.style.borderColor = "red";
  }
  // Question 6
  if (input6 === "yolonda") {
    output6.innerHTML = `<h3>Correct</h3>`;
    output6.style.color = "green";
    input66.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output6.innerHTML = `<h3>Incorrect</h3>`;
    output6.style.color = "red";
    input66.style.borderColor = "red";
  }
  // Question 7
  if (input7 === "dani") {
    output7.innerHTML = `<h3>Correct</h3>`;
    output7.style.color = "green";
    input77.style.borderColor = "green";
    numcorrect = numcorrect + 1;
  } else {
    output7.innerHTML = `<h3>Incorrect</h3>`;
    output7.style.color = "red";
    input77.style.borderColor = "red";
  }
  // Result Calculation
  let totalpercent = (numcorrect / 7) * 100;
  document.getElementById("totalcorrect").innerHTML = numcorrect;
  document.getElementById("totalpercent").innerHTML = Math.round(totalpercent);
}
