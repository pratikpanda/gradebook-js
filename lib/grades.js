let gradeBook = {
    _grades: [],
    getGradeCount: function() {
        return this._grades.length;
    },
    addGrade: function(grade) {
        this._grades.push(grade);
    },
    getAverageGrade: function() {
        let total = 0;
        for (let index = 0; index < this._grades.length; index++) {
            total += this._grades[index];
        }
        return total / this._grades.length;
    },
    getLowestGrade: function() {
        let lowestGrade = Number.MAX_VALUE;
        for (let index = 0; index < this._grades.length; index++) {
            lowestGrade = Math.min(this._grades[index], lowestGrade);           
        }
        return lowestGrade;
    },
    getHighestGrade: function() {
        let highestGrade = Number.MIN_VALUE;
        for (let index = 0; index < this._grades.length; index++) {
            highestGrade = Math.max(this._grades[index], highestGrade);           
        }
        return highestGrade;
    },
    getLetterGrade: function() {
        let letterGrade = '';
        let averageGrade = this.getAverageGrade();
        if (averageGrade >= 90) {
            letterGrade = 'A';
        }
        else if (averageGrade >= 80) {
            letterGrade = 'B'
        }
        else if (averageGrade >= 70) {
            letterGrade = 'C'
        }
        else if (averageGrade >= 60) {
            letterGrade = 'D'
        }
        else {
            letterGrade = 'F';
        }
        return letterGrade;
    },
    reset: function() {
        this._grades = [];
    }
};

exports.gradeBook = gradeBook;