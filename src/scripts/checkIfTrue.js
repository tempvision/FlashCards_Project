

const checkIfTrue = function(id, answers) {
    // check if none of the first three is true
    if (id === 3) {
        let areAllFalse = true;
        answers.forEach((answer) => {
            if (answer.rigth) {
                areAllFalse =false;
            }
        });
        if (areAllFalse) {
            // if all are false, then the answer is true!
            window.sessionStorage.correctAmount++;
        }
        return areAllFalse;
    }
    // check if the answer is true
    if (answers[id].rigth) {
        window.sessionStorage.correctAmount++;
        return true;
    }
    return false;
};

export { checkIfTrue };
