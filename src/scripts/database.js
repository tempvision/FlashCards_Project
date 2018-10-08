// const question = {
//   question: "string with a question text",
//   longDescription: "string with a Long Description text ",
//   answers: [
//     {
//       rigth: "true/false",
//       text: "string with a answer text"
//     },
//     {
//       rigth: "true/false",
//       text: "string with a answer text"
//     }
//   ]
// };

// const flashCardsSets = {
//   flashCardsSetName: {
//     categoryName: 'category name',
//     flashCards: [question, question],
//   },
// };

const flashCardsSets = {
  jsBasics: {
    categoryName: 'JS Basics',
    flashCards: [
      {
        question: `(function(){var a = b = 3})();<br>
      console.log('typeof a is ' + typeof a);<br>
      <b>Expected result is ...</b>`,
        longDescription: `var a = b = 3; is shorthand for the statements
      b = 3; and var a = b;
      b ends up being a global variable
      (since it is not preceded by the var keyword)
      and is therefore still in scope
      even outside of the enclosing function.`,
        answers: [
          {
            rigth: true,
            text: 'undefined',
          },
          {
            rigth: false,
            text: 'object',
          },
          {
            rigth: false,
            text: 'number',
          },
          {
            rigth: false,
            text: 'string',
          },
        ],
      },
      {
        question: `(function(){var a = b = 3;})();<br>
      console.log('typeof b is ' + typeof b);<br>
      <b>Expected result is ...</b>`,
        longDescription: `var a = b = 3; is shorthand for the statements
      b = 3; and var a = b;
      b ends up being a global variable
      (since it is not preceded by the var keyword)
      and is therefore still in scope
      even outside of the enclosing function.`,
        answers: [
          {
            rigth: false,
            text: 'undefined',
          },
          {
            rigth: false,
            text: 'object',
          },
          {
            rigth: true,
            text: 'number',
          },
          {
            rigth: false,
            text: 'string',
          },
        ],
      },
      {
        question: `'use strict';<br>(function(){var a = b = 3;})();<br>
      console.log('typeof b is ' + typeof b);<br>
      <b>Expected result is ...</b>`,
        longDescription: `In strict mode, the statement var a = b = 3;
      will generate a runtime error of ReferenceError: b is not defined`,
        answers: [
          {
            rigth: false,
            text: 'undefined',
          },
          {
            rigth: false,
            text: 'object',
          },
          {
            rigth: false,
            text: 'number',
          },
          {
            rigth: false,
            text: 'string',
          },
          {
            rigth: true,
            text: 'ReferenceError: b is not defined',
          },
        ],
      },
      {
        question: `console.log(['alex', 'sam'] + ['jon', 'mary']);<br>
      <b>Expected result is ...</b>`,
        longDescription:
          'Arrays are represented as strings which are then added together.',
        answers: [
          {
            rigth: true,
            text: 'alex,samjon,mary',
          },
          {
            rigth: false,
            text: 'alex,sam jon,mary',
          },
          {
            rigth: false,
            text: 'alex,sam,jon,mary',
          },
          {
            rigth: false,
            text: 'NaN',
          },
          {
            rigth: false,
            text: `['alex', 'sam', 'jon', 'mary']`,
          },
          {
            rigth: false,
            text: 'undefined',
          },
          {
            rigth: false,
            text: `['alex', 'sam', ['jon', 'mary']]`,
          },
        ],
      },
      {
        question: `const a = 100;<br>
          const b = 'Telerik';<br>
          const c = false;<br>
          console.log(a || b);<br>
          <b>Expected result is ...</b>`,
        longDescription: `When you use the || operator,
          if the first value casts to true you will get that value returned.
          Otherwise, you will always get the second one.`,
        answers: [
          {
            rigth: true,
            text: '100',
          },
          {
            rigth: false,
            text: 'a',
          },
          {
            rigth: false,
            text: 'Telerik',
          },
          {
            rigth: false,
            text: 'true',
          },
          {
            rigth: false,
            text: 'false',
          },
          {
            rigth: false,
            text: 'b',
          },
          {
            rigth: false,
            text: 'c',
          },
        ],
      },
      {
        question: `const a = 100;<br>
      const b = 'Telerik';<br>
      const c = null;\nconsole.log(a && b);<br>
      <b>Expected result is ...</b>`,
        longDescription: `When you use the && operator 
      you will always get the second value
      if they are both coerced to true. If the first one casts to false
      then you will get it’s value returned.`,
        answers: [
          {
            rigth: false,
            text: '100',
          },
          {
            rigth: false,
            text: 'a',
          },
          {
            rigth: true,
            text: 'Telerik',
          },
          {
            rigth: false,
            text: 'true',
          },
          {
            rigth: false,
            text: 'false',
          },
          {
            rigth: false,
            text: 'b',
          },
        ],
      },
      {
        question: `console.log(15 + 3 + 'number');<br>
      <b>Expected result is ...</b>`,
        longDescription: `Expression 15 + 3 is evaluated first.
      No need for coercion at all, since both operands are numbers.
      On the second step, expression 18 + 'number' is evaluated,
      and since one operand is a string, it triggers a string conversion.`,
        answers: [
          {
            rigth: false,
            text: '153number',
          },
          {
            rigth: false,
            text: 'NaN',
          },
          {
            rigth: true,
            text: '18number',
          },
          {
            rigth: false,
            text: '18',
          },
        ],
      },
      {
        question: `console.log('number' + 15 + 3);<br>
        <b>Expected result is ...</b>`,
        longDescription: `Operator + has left-to-right associativity,
      so expression 'number' + 15 runs first.
      Since one operand is a string,
      + operator triggers string conversion for the number 15.
      On the second step expression 'number15' + 3 is evaluated similarly.`,
        answers: [
          {
            rigth: false,
            text: 'number18',
          },
          {
            rigth: false,
            text: 'NaN',
          },
          {
            rigth: true,
            text: 'number153',
          },
          {
            rigth: false,
            text: 'number 18',
          },
          {
            rigth: false,
            text: 'number 153',
          },
        ],
      },
    ],
  },
  DSABasics: {
    categoryName: 'DSABasics',
    flashcards: [
      {
        question: `Which one of the following is incorrect: `,
        longDescription: `It is a search algorithm that finds the position of a target value within a sorted array. 
     Binary search runs in logarithmic time in the worst case, making O(log n) comparisons.`,
        answers: [
          {
            rigth: true,
            text: 'Binary search algorithm can be used over objects',
          },
          {
            rigth: false,
            text: 'Binary search algorithm can be used over sorted arrays',
          },
          {
            rigth: false,
            text: 'Binary search algorithm is logarithmic running-time algorithm',
          },
          {
            rigth: false,
            text: 'Binary search algorithm has a recursive and iterative implementations',
          },
          {
            rigth: false,
            text: 'Binary search algorithm can be used over unsorted array',
            // You can use it but it is most likely to miss the element you are looking for
          },
          {
            rigth: false,
            text: 'Binary seach algorithm is not a sorting algorithm',
          },
        ],
      },
      {
        question: `Recursion is: `,
        longDescription: `Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem.`,
        answers: [
          {
            rigth: true,
            text: 'A method of solving smaller instances of the same problem',
          },
          {
            rigth: false,
            text: 'A sorting algorithm',
          },
          {
            rigth: false,
            text: 'A type of graph',
          },
          {
            rigth: false,
            text: 'The only method for solving problems',
          },
          {
            rigth: false,
            text: 'Collection of elements',
            // You can use it but it is most likely to miss the element you are looking for
          },
        ],
      },
      {
        question: `Arrays can be accessed by index with the following time complexity:`,
        longDescription: `Arrays can be accessed by index with complexity of Θ(1) because the index n of an array points to the n+1-th element in the array (using zero-based indexing).`,
        answers: [
          {
            rigth: true,
            text: 'Θ(1)',
          },
          {
            rigth: false,
            text: 'Θ(n)',
          },
          {
            rigth: false,
            text: 'Θ(log(n))',
          },
          {
            rigth: false,
            text: 'Θ(n*n)',
          },
          {
            rigth: false,
            text: 'None of the above',
            // You can use it but it is most likely to miss the element you are looking for
          },
        ],
      },

    ],
  },
};
export default flashCardsSets;
