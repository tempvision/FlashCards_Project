let returnFucntion;

const apiParse = function(apiData) {
    let questions = apiData;
    if (questions.response_code === 1) {
        return 'Error in receiving the data from the api';
    }
    questions = questions.results;
    questions = questions.reduce((newArray, question) => {
        const answers = [{
            right: true,
            text: question.correct_answer,
        }];
        question.incorrect_answers.map((answer) => {
            answers.push({
                right: false,
                text: answer,
            });
        });
        newArray.push({
            question: question.question,
            answers,
        });
        return newArray;
    }, []);
  returnFucntion(questions);
};

const onResult = (func) => {
    returnFucntion = func;
};

const apiGet = function(questionsAmount, difficulty) {
    // questions amount <50, difficulty: any, easy, medium, hard

    let requestURL = 'https://opentdb.com/api.php?category=18';

    requestURL += `&amount=${questionsAmount}`;
    if (difficulty !== 'any') {
        requestURL += `&difficulty=${difficulty}`;
    }


    fetch(requestURL)
    .then((results)=>results.json())
    .then((result)=>apiParse(result));
};

export default { apiGet, onResult };
