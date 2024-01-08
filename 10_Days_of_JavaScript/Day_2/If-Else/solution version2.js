function getGrade(score) {
    const gradeDictionary = ['F','E','D','C','B','A']
    const scoreDictionary = [0,5,10,15,20,25,30]
    
    if (score < 0 || score > 30) {
        return 'Invalid score! The score has to be between 0 and 30.'
    } else {
        for (let i = 5; i >= 0; i--) {
            if (score > scoreDictionary[i] && score <= scoreDictionary[i+1]) {
                return gradeDictionary[i]
            }
        }
        return 'F'
    }
}

getGrade(11) // D