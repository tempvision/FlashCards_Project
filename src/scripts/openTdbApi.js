let returnFucntion;

const apiParse = function(apiData) {
  let questions = apiData;
  questions = questions.results;
  questions = questions.reduce((newArray, question) => {
    const answers = [
      {
        right: true,
        text: question.correct_answer,
      },
    ];
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

const apiGet = function(questionsAmount, difficulty, type) {
  // questions amount <50, difficulty: any, easy, medium, hard,
  // type: multiple, boolean, any

  let requestURL = 'https://opentdb.com/api.php?category=18';
  if (type === 'boolean' || type === 'multiple') {
    requestURL += `$type=${type}`;
  }
  requestURL += `&amount=${questionsAmount}`;
  if (difficulty !== 'any') {
    requestURL += `&difficulty=${difficulty}`;
  }

  fetch(requestURL)
    .then((results) => results.json())
    .then((result) => apiParse(result))
    .catch((error) => console.log(error));
};

export default { apiGet, onResult };
