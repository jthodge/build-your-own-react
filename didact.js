// define a React element using JSX
// const element = <h1 title="top-header">Hello world</h1>;

// JSX → JS via built tools e.g. Babel
// 1. replace the code inside tags with a call to createElement
// 2. pass the tag name, props, and children as params to createElement
// const element = React.createElement(
//   "h1",
//   { title: "top-header" },
//   "Hello world"
// );

// createElement builds an object (and performs validations) from the given params
const element = {
  type: "h1",
  props: {
    title: "top-header",
    children: "Hello world"
  }
};
// an element is an object with two properties: type and props
// (more: https://github.com/facebook/react/blob/f4cc45ce962adc9f307690e1d5cfa28a288418eb/packages/react/src/ReactElement.js#L111)
// type: string specifying type of DOM node to create; tagName param passed to document.createElemtn
// props: object containing key-value pairs for JSX attributes; contains special property children
// children: string || array

// grab a node from the DOM
const container = document.getElementById("root");
// render the React element in the container
ReactDOM.render(element, container);
