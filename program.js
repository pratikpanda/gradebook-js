let gradeBook = require('./lib/grades').gradeBook;
let express = require('express');
let app = express();
app.get("/addGrades", function(req, res) {
    let grades = req.query.grades.split(",");
    grades.forEach(grade => {
        gradeBook.addGrade(parseInt(grade));
    });
    res.send("Your grades have been successfully added to the gradebook.");
});
app.get("/averageGrade", function(req, res) {
    let averageGrade = gradeBook.getAverageGrade();
    res.send("Your average grade is: " + averageGrade);
});
app.get("/highestGrade", function(req, res) {
    let highestGrade = gradeBook.getHighestGrade();
    res.send("Your highest grade is: " + highestGrade);
});
app.get("/lowestGrade", function(req, res) {
    let lowestGrade = gradeBook.getLowestGrade();
    res.send("Your lowest grade is: " + lowestGrade);
});
app.get("/letterGrade", function(req, res) {
    let letterGrade = gradeBook.getLetterGrade();
    res.send("Your letter grade is: " + letterGrade);
});
app.get("/gradeCount", function(req, res) {
    let gradeCount = gradeBook.getGradeCount();
    res.send("The number of grades in gradebook is: " + gradeCount);
});
app.listen(3000);
console.log("Gradebook server is ready and listening at port [3000].");