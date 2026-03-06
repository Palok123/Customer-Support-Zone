1. What is JSX, and why is it used? <br>
 ans: JSX stands for JavaScript XML. It is a syntax used mainly in React to write HTML-like code inside JavaScript. we used jsx in React to write HTML-like UI code inside JavaScript, making code easier to read, write, and manage. 
 <br><br>
 2. What is the difference between State and Props?<br>
 ans: props: Props are used to pass data from a parent component to a child component.
i.Props are read-only (cannot be changed by the child).
ii.They are used for communication between components.
states:
State is used to store data inside a component that can change over time.
i.State is mutable (can change).
ii.When state changes, the component re-renders.
<br><br>
3. What is the useState hook, and how does it work?<br>
ans: useState is a React hook that lets a component remember and update values (state).
Whenever the state changes, React re-renders the component to update the UI.
<br><br>
4. How can you share state between components in React?<br>
ans : In React, state can be shared between components using several common methods. The most common one is lifting state up.Lifting state up means moving the state to the closest common parent component and passing it to child components using props.
<br><br>
5. How is event handling done in React?<br>
ans: In React, events are written in camelCase and you pass a function as the event handler.

Example:

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
