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
  JSBasics: {
    categoryName: 'JS Basics',
    flashCards: [
      {
        question: `(function(){var a = b = 3})();<br>
      console.log('typeof a is ' + typeof a);<br>
      <br><br><b>Expected result is ...</b>`,
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
      <br><br><b>Expected result is ...</b>`,
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
      <br><br><b>Expected result is ...</b>`,
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
      <br><br><b>Expected result is ...</b>`,
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
          <br><br><b>Expected result is ...</b>`,
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
      <br><br><b>Expected result is ...</b>`,
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
      <br><br><b>Expected result is ...</b>`,
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
        <br><br><b>Expected result is ...</b>`,
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
    categoryName: 'DSA Basics',
    flashCards: [
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
            text:
              'Binary search algorithm is logarithmic running-time algorithm',
          },
          {
            rigth: false,
            text:
              'Binary search algorithm has a recursive and iterative implementations',
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
  JSAdvanced: {
    categoryName: 'JS Advanced',
    flashCards: [
      {
        question: `What will the code below output to the console and why?<br>
        (function(){<br>
          var a = b = 3;<br>
        })();<br>
        <br>
        console.log("a defined? " + (typeof a !== 'undefined'));<br>
        console.log("b defined? " + (typeof b !== 'undefined'));<br>
        `,
        longDescription: `Since both a and b are defined within the enclosing scope of the function,<br>
        and since the line they are on begins with the var keyword, most JavaScript developers would <br>
        expect typeof a and typeof b to both be undefined in the above example.<br>

        However, that is not the case. The issue here is that most developers <br>
        incorrectly understand the statement var a = b = 3; to be shorthand for:<br>
        <br>
        var b = 3;<br>
        var a = b;<br>
        But in fact, var a = b = 3; is actually shorthand for:<br>
        <br>
        b = 3;<br>
        var a = b;<br>
        As a result (if you are not using strict mode), the output of the code snippet would be:<br>
        <br>
        a defined? false<br>
        b defined? true<br>
        But how can b be defined outside of the scope of the enclosing function? <br>
        Well, since the statement var a = b = 3; is shorthand for the statements b = 3; and var a = b;<br>
        b ends up being a global variable (since it is not preceded by the var keyword) <br>
        and is therefore still in scope even outside of the enclosing function.`,
        answers: [
          {
            rigth: true,
            text: `a defined? false<br>
                   b defined? true`,
          },
          {
            rigth: false,
            text: `a defined? false<br>
            b defined? false`,
          },
          {
            rigth: false,
            text: `a defined? true<br>
            b defined? true`,
          },
          {
            rigth: false,
            text: `a defined? true<br>
            b defined? false`,
          },
        ],
      },
      {
        question: `In what order will the numbers 1-4 be logged to the console when the code below is executed?<br>
        (function() {<br>
          console.log(1); <br>
          setTimeout(function(){console.log(2)}, 1000); <br>
          setTimeout(function(){console.log(3)}, 0); <br>
          console.log(4);<br>
          })();
       `,
        longDescription: `The values will be logged in the following order:<br>
        1<br>
        4<br>
        3<br>
        2<br>
        Let’s first explain the parts of this that are presumably more obvious:<br>
        <br>
        1 and 4 are displayed first since they are logged by simple calls to console.log() without any delay<br>
        <br>
        2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs <br>
        (i.e., 1 second) whereas 3 is being logged after a delay of 0 msecs.<br>
        OK, fine. But if 3 is being logged after a delay of 0 msecs, <br>
        doesn’t that mean that it is being logged right away? And, if so, <br>
        shouldn’t it be logged before 4, since 4 is being logged by a later line of code?<br>
        The answer has to do with properly understanding JavaScript events and timing.<br>      
        The browser has an event loop which checks the event queue and processes pending events.<br>
         For example, if an event happens in the background (e.g., a script onload event) <br>
        while the browser is busy (e.g., processing an onclick), <br>
        the event gets appended to the queue. When the onclick handler is complete, <br>
        the queue is checked and the event is then handled (e.g., the onload script is executed).<br>
        Similarly, setTimeout() also puts execution of its referenced function into the event queue if the browser is busy.<br>
        
        When a value of zero is passed as the second argument to setTimeout(), <br>
        it attempts to execute the specified function “as soon as possible”. <br>
        Specifically, execution of the function is placed on the event queue to occur on the next timer tick. <br>
        Note, though, that this is not immediate; the function is not executed until the next tick. <br>
        That’s why in the above example, the call to console.log(4) occurs before the call to console.log(3)<br>
         (since the call to console.log(3) is invoked via setTimeout, so it is slightly delayed).`,
        answers: [
          {
            rigth: true,
            text: `1 4 3 2`,
          },
          {
            rigth: false,
            text: `1 3 2 4`,
          },
          {
            rigth: false,
            text: `1 2 3 4`,
          },
          {
            rigth: false,
            text: `2 3 4 1`,
          },
        ],
      },
      {
        question: `What is the output out of the following code?<br>
        var a={},<br>
         b={key:'b'},<br>
         c={key:'c'},<br>
        a[b]=123;<br>
         a[c]=456;<br>
         <br>
console.log(a[b]);
        `,
        longDescription: `The output of this code will be 456 (not 123).

        The reason for this is as follows: When setting an object property, <br>
        JavaScript will implicitly stringify the parameter value. <br>
        In this case, since b and c are both objects, they will both be converted to "[object Object]". <br>
        As a result, a[b] anda[c] are both equivalent to a["[object Object]"] and can be used interchangeably. <br>
        Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b].`,
        answers: [
          {
            rigth: true,
            text: '456',
          },
          {
            rigth: false,
            text: '123',
          },
          {
            rigth: false,
            text: 'undefined',
          },
          {
            rigth: false,
            text: 'null',
          },
        ],
      },
      {
        question: `How do you make a deep clone of an object in JS?`,
        longDescription: `var obj = {a: 1 ,b: 2}<br>
        var objclone = Object.assign({},obj);<br>
        Now the value of objclone is {a: 1 ,b: 2} but points to a different object than obj.    <br>   
        Note the potential pitfall, though: Object.clone() will just do a shallow copy, not a deep copy.<br>
         This means that nested objects aren’t copied.`,
        answers: [
          {
            rigth: true,
            text: `const objclone = Object.assign({},obj);`,
          },
          {
            rigth: false,
            text: 'const objclone = obj;',
          },
          {
            rigth: false,
            text: 'const objclone = Object.clone(obj);',
          },
          {
            rigth: false,
            text: 'const objclone = Object.slice(obj);',
          },
          {
            rigth: false,
            text: 'const objclone = {...obj};',
          },
        ],
      },
    ],
  },
};
export default flashCardsSets;
