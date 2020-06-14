

const resultComments = [
    {
        id: 1,
        question: "You have failed the Badger",
        answer_a: "Scope is the object that `this` refers to. Context is the environment that the function is written in.",
        answer_b: "Scope refers to the availability of variables while running. The object within which the function runs is the context. ",
        answer_c: "Scope refers to the receiver of a function. Context refers to the variables that are available in that scope.",
        answer_d: "Scope refers to the ability of a function to modify elements outside of its definition. The context is the JavaScript engine that runs the code.",
        correct_answer: "b",
    },

    {
        id: 2,
        question: "In React, every time the render method in a react component is called...",
        answer_a: "every DOM element on the entire page will be re-painted",
        answer_b: "every DOM element referenced by the React component will be re-painted.",
        answer_c: "only DOM elements with updated content will be re-painted",
        answer_d: "DOM elements with updated content and any DOM elements refernced by the React component will be re-painted.",
        correct_answer: "c",
    },

    {
        id: 3,
        question: "Which is true for the React lifecycle method componentDidUpdate?",
        answer_a: "It is only called on initial render.",
        answer_b: "It is called immediately after updating occurs, but is not called on the initial render.",
        answer_c: "It is called immediately after updating occurs, including the initial render.",
        answer_d: "It can be used to prevent a component from mounting.",
        correct_answer: "b",
    },

    {
        id: 4,
        question: "What is a Closure in JavaScript?",
        answer_a: "A collection of all the variables in scope at the time of creation of the function.",
        answer_b: "A collection of all the variables in the context at the time of creation of the function.",
        answer_c: "Any function within another function.",
        answer_d: "A different way of describing a callback.",
        correct_answer: "a",
    },

    {
        id: 5,
        question: "What are the primitive data types in JavaScript?",
        answer_a: "String, Number, Boolean, NaN, Object, null, Symbol",
        answer_b: "String, Number, Boolean, undefined, Object, null, Symbol",
        answer_c: "String, Number, Boolean, undefined, null, Symbol",
        answer_d: "String, Number, Boolean, undefined, Object, Symbol",
        correct_answer: "c",
    },

    {
        id: 6,
        question: "What is the difference between Attributes and Property in JavaScript?",
        answer_a: "An Property provides more details about an element like id, type, value etc, whereas the Attribute is the value assigned to the Property like type='text' or value='name'.",
        answer_b: "An Attribute provides more details about an element like id, type, value etc, whereas the Property is the value assigned to the Attrubute like type='text' or value='name'",
        answer_c: "A Property is any value that belongs to an object, and an Attribute describes it.",
        answer_d: "Unlike Attritbutes, in general a standard HTML Property automatically becomes a property of DOM objects.",
        correct_answer: "b",
    },

    {
        id: 7,
        question: "Which of the below are four ways an HTML element can be accessed by JavaScript code?",
        answer_a: "getElementById, getElementsByClassName, queryTagName, querySelector",
        answer_b: "getElementById, getElementsByClassName, getElementsByTagName, querySelector",
        answer_c: "getElementById, getElementByClassName, getElementByTag, querySelector",
        answer_d: "getElementById, getElementByClassName, getElementByTagName, querySelector",
        correct_answer: "b",
    },

    {
        id: 8,
        question: "What is the difference between window & document in JavaScript?",
        answer_a: "While window is a global object which holds variables, functions, history,and location, the document comes under the window and can be considered as the property of the window.",
        answer_b: "Document and window both are global objects but document is called at runtime.",
        answer_c: "While document is a global object which holds variables, functions, history,and location, the window comes under the document and can be considered as the property of the document.",
        answer_d: "The window hold variables and functions whereas the document holds history and location of an object.",
        correct_answer: "a",
    },

    {
        id: 9,
        question: "In JavaScript, what is the difference in how primitive and object types are passed in functions?",
        answer_a: "Primitives are passed by value and objects are passed by reference.",
        answer_b: "There is no difference in how they are passed.",
        answer_c: "Objects are passed by value and primitive data types are passed by reference.",
        answer_d: "Primitives can only be passed by value whereas objects can be passed by value or by reference.",
        correct_answer: "a",
    },

    {
        id: 10,
        question: "Which of the following is not true about 'strict mode' in JavaScript?",
        answer_a: "It can be enabled by adding “use strict” at the beginning of a file, a program, or a function.",
        answer_b: "It enforces strict limits on the number of variables you can use in any given file.",
        answer_c: "It enables better error-checking into JavaScript code.",
        answer_d: "You cannot use implicitly declared variables or add a property to an object that is not extensible.",
        correct_answer: "b",
    },

    {
        id: 11,
        question: "What is the difference between Call and Apply in JavaScript?",
        answer_a: "Apply creates a copy of the function and sets the this keyword.",
        answer_b: "Call accepts an array of arguments while Apply accepts comma-separated values.",
        answer_c: "Apply accepts accepts an array of arguments instead of comma separated values.",
        answer_d: "Call creates a copy of the function and sets the this keyword.",
        correct_answer: "c",
    },

    {
        id: 12,
        question: "In JavaScript, what is the difference between event.preventDefault() and event.stopPropagation() methods?",
        answer_a: "event.preventDefault() can only be used with controlled components.",
        answer_b: "They are the same.",
        answer_c: "The event.stopPropagation() method prevents the default behavior of an element. The event.preventDefault() method stops the propogation of an event in the bubbling or capturing phase.",
        answer_d: "The event.preventDefault() method prevents the default behavior of an element. The event.stopPropagation() method stops the propogation of an event in the bubbling or capturing phase.",
        correct_answer: "d",
    },


];


function createQuestionSet(questions) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let questionSet = [];
    let questionsLength = questionsLibrary.length;
    while (questionSet.length < 5) {
        let randNum = getRandomInt(questionsLength);

        if (!questionSet.includes(questionsLibrary[randNum])) {
            questionSet.push(questionsLibrary[randNum]);
        }
    }
    return questionSet;
}


export const questionSet = createQuestionSet(questionsLibrary);

