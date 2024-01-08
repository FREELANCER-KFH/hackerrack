function getGrade(score) {
    const gradeScoreMap = {
        'A': 30,
        'B': 25,
        'C': 20,
        'D': 15,
        'E': 10,
        'F': 5
    };

    if (score < 0 || score > 30) {
        return 'Invalid score! The score has to be between 0 and 30.'
    } else {
        for (let grade in gradeScoreMap) {
            if (score >= gradeScoreMap[grade] -4) {
                return grade;
            }
        }
    }
    return 'F';
}

getGrade(11) // D