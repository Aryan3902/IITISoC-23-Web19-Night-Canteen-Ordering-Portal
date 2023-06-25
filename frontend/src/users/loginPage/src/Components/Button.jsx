import React from "react";

function Button(props) {
    return(
        <button className={"button "+props.status} >{props.identity}</button>
    );
}
export default Button;