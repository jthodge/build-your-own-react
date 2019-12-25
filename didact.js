// define a React element using JSX
// JSX → JS via built tools e.g. Babel
// 1. replace the code inside tags with a call to createElement
// 2. pass the tag name, props, and children as params to createElement
const element = <h1 title="top-header">Hello world</h1>;
// grab a node from the DOM
const container = document.getElementById("root");
// render the React element in the container
ReactDOM.render(element, container);
