import React from "react";


const Schedule = (props) => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.11118 9.00013C1.11118 4.65024 4.65011 1.11131 9 1.11131C13.3499 1.11131 16.8888 4.65024 16.8888 9.00013C16.8888 13.35 13.3499 16.889 9 16.889V18C13.9625 18 18 13.9625 18 9C18 4.03746 13.9625 0 9 0C4.03746 0 0 4.03746 0 9L1.11118 9.00013Z" fill="black" />
            <path d="M13.8103 6.47835L8.65169 11.6366L8.05541 11.0404L5.78329 8.76814L6.82781 7.72376L8.72587 9.62183L13.0115 5.33622C11.8015 4.15031 10.4522 3.55566 8.96309 3.55566C5.93575 3.55566 3.48145 6.00984 3.48145 9.03731C3.48145 12.0648 5.93562 14.5189 8.96309 14.5189C11.9906 14.5189 14.4447 12.0648 14.4447 9.03731C14.4447 8.11281 14.2148 7.24232 13.8106 6.47832L13.8103 6.47835Z"
                fill={props.fill} />
        </svg>
    );
};

export default Schedule