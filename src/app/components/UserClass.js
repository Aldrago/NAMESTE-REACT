import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="user-card">
        <h3>Name : {name}</h3>
        <h3>localtion: Gurgaon</h3>
        <h3>address: ak@yy</h3>
      </div>
    );
  }
}

export default UserClass;
