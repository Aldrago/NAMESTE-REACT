import { useState } from "react";

const User = (props) => {

    return (
        <div className="user-card">
            <h3>Name : {props.name}</h3>
            <h3>localtion: Gurgaon</h3>
            <h3>address: ak@yy</h3>
        </div>
    )
}

export default User;