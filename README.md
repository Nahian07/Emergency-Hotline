1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : 1. getElementById : syntax - document.getElementById("idName"), Selects one element with the exact ID, ID must be unique.
2. getElementsByClassName : syntax - document.getElementsByClassName("className"), Selects all elements with the given class name, It iterate for using all class together
3. querySelector / querySelectorAll : syntax - document.querySelector("selector") / document.querySelectorAll("selector"), Use CSS classes.

2. How do you create and insert a new element into the DOM?
Ans : // Create new element
const newElement = document.createElement("a");
newElement.textContent = "I am a new paragraph!";
newElement.classList.add("text-green-500");

// Select parent and append
const parent = document.getElementById("parentContainer");
parent.appendChild(newElement);

3. What is Event Bubbling and how does it work?
Ans : Event Bubbling is a phase in the DOM event flow where an event starts from the target element and then propagates up to its parent elements all the way to the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans : Event Delegation is a technique where instead of attaching event listeners to multiple child elements individually, you attach a single event listener to a parent element and use event bubbling to handle events on its children.
It's useful because - The parent “delegates” the handling of events to its children.
                      Works because events bubble up from child → parent.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : 1. preventDefault() : Stops the default action of an element from happening.
                            It does not stop event bubbling.
   
      2. stopPropagation() : Stops the event from bubbling (or capturing) further in the DOM.
                             It does not prevent the default action.

         visit site : https://nahian07.github.io/Emergency-Hotline/
