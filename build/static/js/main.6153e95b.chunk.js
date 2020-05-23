(this["webpackJsonpHoneyBadger-Institute"]=this["webpackJsonpHoneyBadger-Institute"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/quiz-badger-logo.736301b8.png"},,function(e,t,n){e.exports=n(14)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(3),o=n.n(s),i=(n(11),n(5)),c=n(4),l=n.n(c);function d(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:l.a,alt:"Honey Badger Institute Logo",className:"logo"}))}function u(e){return r.a.createElement("h2",{className:"progress-header"},"Question ",e.current," of ",e.total)}var h=Object(a.createContext)();function w(){var e=Object(a.useContext)(h).state,t=e.currentQuestion,n=e.questions[t];return r.a.createElement("h1",{className:"question-text"},n.question)}function b(e){var t=["answer"];return e.selected&&t.push("selected"),r.a.createElement("button",{value:e.letter,className:t.join(" "),onClick:function(t){e.dispatch({type:"SET_CURRENT_ANSWER",currentAnswer:t.target.value}),e.dispatch({type:"SET_ERROR",error:""})}},r.a.createElement("span",{className:"letter"},e.letter,". ",e.answer))}function m(){var e=Object(a.useContext)(h),t=e.state,n=e.dispatch,s=t.currentAnswer,o=t.currentQuestion,i=t.questions[o];return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{letter:"a",answer:i.answer_a,dispatch:n,selected:"a"===s}),r.a.createElement(b,{letter:"b",answer:i.answer_b,dispatch:n,selected:"b"===s}),r.a.createElement(b,{letter:"c",answer:i.answer_c,dispatch:n,selected:"c"===s}),r.a.createElement(b,{letter:"d",answer:i.answer_d,dispatch:n,selected:"d"===s}))}n(12),n(13);var p=n(1);function f(e,t){switch(t.type){case"SET_CURRENT_ANSWER":return Object(p.a)({},e,{currentAnswer:t.currentAnswer});case"SET_CURRENT_QUESTION":return Object(p.a)({},e,{currentQuestion:t.currentQuestion});case"SET_ERROR":return Object(p.a)({},e,{error:t.error});case"SET_SHOW_RESULTS":return Object(p.a)({},e,{showResults:t.showResults});case"SET_ANSWERS":return Object(p.a)({},e,{answers:t.answers});case"RESET_QUIZ":return Object(p.a)({},e,{answers:[],currentQuestion:0,currentAnswer:"",showResults:!1,error:""});default:return e}}function _(){var e=[{id:6,question:"In React, every time the render method in a react component is called, ________.",answer_a:"every DOM element on the entire page will be re-painted",answer_b:"every DOM element referenced by the React component will be re-painted.",answer_c:"only DOM elements with updated content will be re-painted",answer_d:"DOM elements with updated content and any DOM elements refernced by the React component will be re-painted.",correct_answer:"c"},{id:7,question:"Which is true for the React lifecycle methold componentDidUpdate?",answer_a:"It can prevent a component from mounting.",answer_b:"It is called immediately after updating occurs, but is not called on the initial render.",answer_c:"It is called immediately after updating occurs, including the initial render.",answer_d:"It can be used to prevent a component from mounting.",correct_answer:"b"},{id:8,question:"What is a Closure in JavaScript?",answer_a:"A collection of all the variables in scope at the time of creation of the function.",answer_b:"A collection of all the variables in the context at the time of creation of the function.",answer_c:"Any function within another function.",answer_d:"A different way of describing a callback.",correct_answer:"a"},{id:9,question:"What are the primitive data types in JavaScript?",answer_a:"String, Number, Boolean, NaN, Object, null, Symbol",answer_b:"String, Number, Boolean, undefined, Object, null, Symbol",answer_c:"String, Number, Boolean, undefined, null, Symbol",answer_d:"String, Number, Boolean, undefined, Object, Symbol",correct_answer:"c"},{id:10,question:"What is the difference between Attributes and Property in JavaScript?",answer_a:"An Property provides more details about an element like id, type, value etc, whereas the Attribute is the value assigned to the Property like type='text' or value='name'.",answer_b:"An Attribute provides more details about an element like id, type, value etc, whereas the Property is the value assigned to the Attrubute like type='text' or value='name'",answer_c:"A Property is any value that belongs to an object, and an Attribute describes it.",answer_d:"Unline Attritbutes, in general a standard HTML Property automatically becomes a property of DOM objects.",correct_answer:"b"},{id:11,question:"Which of the below are four ways an HTML element can be accessed by JavaScript code?",answer_a:"getElementById, getElementsByClassName, queryTagName, querySelector",answer_b:"getElementById, getElementsByClassName, getElementsByTagName, querySelector",answer_c:"getElementById, getElementByClassName, getElementByTag, querySelector",answer_d:"getElementById, getElementByClassName, getElementByTagName, querySelector",correct_answer:"b"},{id:12,question:"What is the difference between window & document in JavaScript?",answer_a:"While window is a global object which holds variables, functions, history,and location, the document comes under the window and can be considered as the property of the window.",answer_b:"Document and window both are global objects but document is called at runtime.",answer_c:"While document is a global object which holds variables, functions, history,and location, the window comes under the document and can be considered as the property of the document.",answer_d:"The window hold variables and functions whereas the document holds history and location of an object.",correct_answer:"a"},{id:13,question:"In JavaScript, what is the difference in how primitive and object types are passed in functions?",answer_a:"Primitives are passed by value and objects are passed by reference.",answer_b:"There is no difference in how they are passed.",answer_c:"Objects are passed by value and primitive data types are passed by reference.",answer_d:"Primitives can only be passed by value whereas objects can be passed by value or by reference.",correct_answer:"a"},{id:14,question:"Which of the following is not true about 'strict mode' in JavaScript?",answer_a:"It can be enabled by adding \u201cuse strict\u201d at the beginning of a file, a program, or a function.",answer_b:"It enforces strict limits on the number of variables you can use in any given file.",answer_c:"It enables better error-checking into JavaScript code.",answer_d:"You cannot use implicitly declared variables or add a property to an object that is not extensible.",correct_answer:"b"},{id:15,question:"What is the difference between Call and Apply in JavaScript?",answer_a:"Apply creates a copy of the function and sets the this keyword.",answer_b:"Call accepts an array of arguments while Apply accepts comma-separated values.",answer_c:"Apply accepts accepts an array of arguments instead of comma separated values.",answer_d:"Call creates a copy of the function and sets the this keyword.",correct_answer:"c"},{id:16,question:"In JavaScript, what is the difference between event.preventDefault() and event.stopPropagation() methods?",answer_a:"event.preventDefault() can only be used with controlled components.",answer_b:"They are the same.",answer_c:"The event.stopPropagation() method prevents the default behavior of an element. The event.preventDefault() method stops the propogation of an event in the bubbling or capturing phase.",answer_d:"The event.preventDefault() method prevents the default behavior of an element. The event.stopPropagation() method stops the propogation of an event in the bubbling or capturing phase.",correct_answer:"d"},{id:17,question:"In JavaScript, what is event.currentTarget?",answer_a:"It is the element on which the event occurred or the element that triggered the event.",answer_b:"It is the element on which we attach the event handler explicitly.",answer_c:"It is the element event that is handled during the current event loop.",answer_d:"It is the parent element of the elment where the event occurred.",correct_answer:"b"},{id:18,question:"Whis of these statements about var, let and const are not true?",answer_a:"var declarations are globally scoped or function scoped while letand const are block scoped.",answer_b:"var variables can be updated by value and re-declared within their scopes, but let variables cannot be re-declared. const variables can neither be updated nor re-declared.",answer_c:"All three of these keywords are hoisted to the top of their scope and are initialized with undefined.",answer_d:"While var and let can be declared without being initialized, const must be initialized during declaration.",correct_answer:"c"},{id:19,question:"Which of the following statements about ES6 Promise objects are true?",answer_a:"Promises allow the writing of asynchronous JavaScript code in a linear manner.",answer_b:"Promises prevent asynchronous functions from executing and transforms them into synchronous functions.",answer_c:"Promises create a private scope around a function, preventing it from making changes to surround variables.",answer_d:" Promises create the need for deeply nested callbacks for asynchronous operations.",correct_answer:"a"},{id:20,question:"Which of the following is not a reserved work in JavaScript?",answer_a:"const",answer_b:"type of",answer_c:"void",answer_d:"class",correct_answer:"b"},{id:21,question:"What is the difference between function declaration and function expression?",answer_a:"Function expressions load only when the interpreter reaches that line of code, while function declarations are hoisted to the top of other code.",answer_b:"Function declarations are not hoisted to the top of other code while expressions are.",answer_c:"Unlike function expressions, function declarations retain a copy of the local variables from the scope where they were defined.",answer_d:"Function declarations and function expressions are the same.",correct_answer:"a"},{id:1,question:"Which statement about Hooks is not true?",answer_a:"Hooks are 100% backwards-compatible and can be used side by side with classes",answer_b:"Hooks are still in beta and not available yet",answer_c:"Hooks are completely opt-in, there's no need to rewrite existing code",answer_d:"All of the above",correct_answer:"b"},{id:2,question:"Which one is not a Hook?",answer_a:"useState()",answer_b:"useConst()",answer_c:"useReducer()",answer_d:"All of the above",correct_answer:"b"},{id:3,question:"What Hook should be used for data fetching?",answer_a:"useDataFetching()",answer_b:"useApi()",answer_c:"useEffect()",answer_d:"useRequest()",correct_answer:"c"},{id:4,question:"What does bind do in JavaScript?",answer_a:"Bind is a method for connecting two strings",answer_b:"Bind is similar to the call method but accepts an array of arguments instead of comma separated values.",answer_c:"The bind method sets the this inside the function and immediately executes that function.",answer_d:"The bind method creates a new function and sets the this keyword to the specified object.",correct_answer:"d"},{id:5,question:"When running a JavaScript function, what is the difference between scope and context?",answer_a:"Scope is the object that `this` refers to. Context is the environment that the function is written in.",answer_b:"Scope refers to the availability of variables while running. The object within which the function runs is the context. ",answer_c:"Scope refers to the receiver of a function. Context refers to the variables that are available in that scope.",answer_d:"Scope refers to the ability of a function to modify elements outside of its definition. The context is the JavaScript engine that runs the code.",correct_answer:"b"}];var t=e,n={questions:t,currentQuestion:0,currentAnswer:"",answers:[],showResults:!1,error:""},s=Object(a.useReducer)(f,n),o=Object(i.a)(s,2),c=o[0],l=o[1],b=c.currentQuestion,p=c.currentAnswer,_=c.answers,y=c.showResults,v=c.error,g=t[b];return y?r.a.createElement("div",{className:"container results"},r.a.createElement("h2",null,"Results"),r.a.createElement("ul",null,_.map((function(e){var n=t.find((function(t){return t.id===e.questionId}));return r.a.createElement("div",{key:n.id},n.question," | ",function(e,t){return e.correct_answer===t.answer?r.a.createElement("span",{className:"correct"},"Guessed Correctly"):r.a.createElement("span",{className:"failed"},"Utter Failure")}(n,e))}))),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){l({type:"RESET_QUIZ"})}},"Restart")):r.a.createElement(h.Provider,{value:{state:c,dispatch:l}},r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement(u,{total:t.length,current:b+1}),r.a.createElement(w,null),function(){if(v)return r.a.createElement("div",{className:"error"}," ")}(),r.a.createElement(m,null),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){var e={questionId:g.id,answer:p};p?(_.push(e),l({type:"SET_ANSWERS",answers:_}),l({type:"SET_CURRENT_ANSWER",currentAnswer:""}),b+1<t.length?l({type:"SET_CURRENT_QUESTION",currentQuestion:b+1}):l({type:"SET_SHOW_RESULTS",showResults:!0})):l({type:"SET_ERROR",error:"Select an option, dagnabbit!"})}},"Confirm and continue")))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.6153e95b.chunk.js.map