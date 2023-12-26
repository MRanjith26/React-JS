const fullName = (user) => user.firstName + " " + user.lastName;
const user = { firstName: "Rahul", lastName: "Sharma" };
const className = "greeting";
const rootElement = document.getElementById("root");
const element = (
  <div>
    <h1 className={className}>Hello {fullName(user)}</h1>
    <p>Good to see you here</p>
  </div>
);
ReactDOM.render(element, rootElement);
