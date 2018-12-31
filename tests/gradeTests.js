let grades = require('../lib/grades');
let gradeBook = grades.gradeBook;

exports["setUp"] = function(callback) {
    gradeBook.reset();
    callback();
};

exports["Can add new grade"] = function(test) {
    // Arrange
    gradeBook.addGrade(90);
    let expected = 1;

    // Act
    let actual = gradeBook.getGradeCount();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can add multiple new grades"] = function(test) {
    // Arrange
    gradeBook.addGrade(90);
    gradeBook.addGrade(70);
    gradeBook.addGrade(80);
    let expected = 3;

    // Act
    let actual = gradeBook.getGradeCount();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute average grade"] = function(test) {
    // Arrange
    gradeBook.addGrade(90);
    gradeBook.addGrade(70);
    gradeBook.addGrade(80);
    let expected = 80;

    // Act
    let actual = gradeBook.getAverageGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute lowest grade"] = function(test) {
    // Arrange
    gradeBook.addGrade(90);
    gradeBook.addGrade(70);
    gradeBook.addGrade(80);
    let expected = 70;

    // Act
    let actual = gradeBook.getLowestGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute highest grade"] = function(test) {
    // Arrange
    gradeBook.addGrade(90);
    gradeBook.addGrade(70);
    gradeBook.addGrade(80);
    let expected = 90;

    // Act
    let actual = gradeBook.getHighestGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}