let getMarks = () => {
  const maths = ~~ document.getElementById("maths").value;
  const english = ~~ document.getElementById("english").value;
  const chemistry = ~~ document.getElementById("chemistry").value;
  const physics = ~~ document.getElementById("physics").value;

  if (maths > 100 || english > 100 || chemistry > 100 || physics > 100) {
    alert("Marks can't be greater than 100");
  } else {
    const totalMarks = 400;
    const MarksObtained = maths + english + chemistry + physics;
    const percentage = (MarksObtained / totalMarks) * 100;
    document.getElementById("percentage").innerHTML = Number.isInteger(
      percentage
    )
      ? percentage
      : percentage.toFixed(1) + "%";
    let grade;
    let message = "Congratulations! you have passed.";
    document.getElementById("pass").innerHTML = message;
    document.getElementById("pass").style.color="green";

    if (
      percentage < 35 ||
      maths < 35 ||
      english < 35 ||
      chemistry < 35 ||
      physics < 35
    ) {
      message = "Sorry! you failed! please try next time.";
      grade = "F";
      document.getElementById("percentage").innerHTML = "Not Available";
       document.getElementById("pass").innerHTML = message;
       document.getElementById("pass").style.color="red";
    } else if (percentage < 60) {
      grade = "B";
    } else if (percentage >= 60 && percentage < 70) {
      grade = "B+";
    } else if (percentage >= 70 && percentage < 90) {
      grade = "A";
    } else {
      grade = "A+";
    }
    document.getElementById("grade").innerHTML = grade;

  }
};

const calculate = document.getElementById("calculate");

document.onkeydown = function () {
  if (window.event.keyCode == "13") {
    getMarks();
  }
};

calculate.addEventListener("click", () => getMarks());
