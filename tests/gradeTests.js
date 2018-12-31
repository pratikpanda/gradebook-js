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

exports["Can compute letter grade of A"] = function(test) {
    // Arrange
    gradeBook.addGrade(100);
    gradeBook.addGrade(90);
    let expected = 'A';

    // Act
    let actual = gradeBook.getLetterGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute letter grade of B"] = function(test) {
    // Arrange
    gradeBook.addGrade(82);
    gradeBook.addGrade(86);
    let expected = 'B';

    // Act
    let actual = gradeBook.getLetterGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute letter grade of C"] = function(test) {
    // Arrange
    gradeBook.addGrade(74);
    gradeBook.addGrade(75);
    let expected = 'C';

    // Act
    let actual = gradeBook.getLetterGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute letter grade of D"] = function(test) {
    // Arrange
    gradeBook.addGrade(65);
    gradeBook.addGrade(68);
    let expected = 'D';

    // Act
    let actual = gradeBook.getLetterGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}

exports["Can compute letter grade of F"] = function(test) {
    // Arrange
    gradeBook.addGrade(42);
    gradeBook.addGrade(57);
    let expected = 'F';

    // Act
    let actual = gradeBook.getLetterGrade();

    // Assert
    test.equals(expected, actual);

    test.done();
}