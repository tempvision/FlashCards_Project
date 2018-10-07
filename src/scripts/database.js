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
};
export default flashCardsSets;
