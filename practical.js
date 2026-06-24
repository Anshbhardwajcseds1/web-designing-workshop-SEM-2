function calculate() {

    let s1 = Number(document.getElementById("sub1").value);
    let s2 = Number(document.getElementById("sub2").value);
    let s3 = Number(document.getElementById("sub3").value);
    let s4 = Number(document.getElementById("sub4").value);

    let total = s1 + s2 + s3 + s4;
    let percentage = total / 4;

    let grade;

    if (percentage >= 90)
        grade = "A+";
    else if (percentage >= 75)
        grade = "A";
    else if (percentage >= 60)
        grade = "B";
    else if (percentage >= 40)
        grade = "C";
    else
        grade = "F";

    let status = (percentage >= 40) ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "<h3>Report Card</h3>" +
        "Total Marks: " + total + "/400<br>" +
        "Percentage: " + percentage.toFixed(2) + "%<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + status;
}