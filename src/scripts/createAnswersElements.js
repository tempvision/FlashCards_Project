import shuffle from './shuffle.js';

const createAnswersElements = function(answers) {
    const answersToOutput = shuffle(answers, 3);    
    const containerToReturn = document.createElement('div');
    const field1 = document.createElement('div');
       field1.innerHTML = answersToOutput[0].text;
       field1.id='ans0';
       containerToReturn.appendChild(field1);
    const field2 = document.createElement('div');
       field2.innerHTML = answersToOutput[1].text;
       field2.id='ans1';
       containerToReturn.appendChild(field2);
    const field3 = document.createElement('div');
       field3.innerHTML = answersToOutput[2].text;
       field3.id='ans2';
       containerToReturn.appendChild(field3);
    const field4 = document.createElement('div');
       field4.innerHTML = 'None of the above';
       field4.id = 'ans3';
       containerToReturn.appendChild(field4);
    return containerToReturn;
};

export { createAnswersElements };
