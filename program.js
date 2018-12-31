let gradeBook = require('./lib/grades').gradeBook;
for (let index = 2; index < process.argv.length; index++) {
    gradeBook.addGrade(parseInt(process.argv[index]));
}
console.log('Average Grade: ' + gradeBook.getAverageGrade());
console.log('Highest Grade: ' + gradeBook.getHighestGrade());
console.log('Lowest Grade: ' + gradeBook.getLowestGrade());
console.log('Letter Grade: ' + gradeBook.getLetterGrade());