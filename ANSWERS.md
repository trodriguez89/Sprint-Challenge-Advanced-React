- [ ] Why would you use class component over function components (removing hooks from the question)?
Class components implement logic and state. React lifestyle methods can be used inside class components. An example being componentDidMount.

- [ ] Name three lifecycle methods and their purposes.
Constructor - initializes local state, binds event handler methods to an instance.
componentDidMount - invoked immediately after a component is mounted.
componentDidUpdate - invoked immediately after updating occurs.

- [ ] What is the purpose of a custom hook?
Custom hooks allow you to share and reuse pieces of code. Example is if you are creating multiple forms, you can write a custom hook so you do not have to constantly re-write handleChanges, handleSubmit, setting up state, etc....

- [ ] Why is it important to test our apps?
Helps catch bugs, allows us to trust the code, encourages us to write more testable code. 