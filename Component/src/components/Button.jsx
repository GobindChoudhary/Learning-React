import React from "react";

function Button({style,onClick,lable}) {
return(
    <button onClick={onClick} style={style}>
        {lable}
    </button>
)
}
export default Button;