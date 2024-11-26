import React from "react";
import CPNA from "./CPNA";

function CPNCenterl() {
    return (
        <div className="CPNCenterl">
            <CPNA 
                content="Đây là nội dung được truyền từ component cha"
            />
        </div>
    )
};

export default CPNCenterl;
