import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: null,
      type: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Aldrago");
    const jsonData = await data.json();
    this.setState({login : jsonData.login, type: jsonData.type});
  }

  render() {
    
    return (
      <div>
        <h1>About us</h1>
        <User name={this.state.login} />
        <UserClass name={this.state.type} />
      </div>
    );
  }
}

export default About;
