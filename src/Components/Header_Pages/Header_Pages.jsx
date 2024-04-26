import React, {useState} from "react";
import { IconamoonArrowRight2Light } from "./icons/Arrow";

function Header_Pages() {
    const [name, setName] = useState('')
    return (
        <div className=" dashboard-header  text-lg p-2 pt-4 pb-4 items-center flex gap-2 text-gray-500 sticky z-20 top-0 bg-white pl-8">
            <span className="font-bold text-black ">Doctor </span>{" "}
            <div>
                <IconamoonArrowRight2Light />
            </div>
            <span>{name}</span>
        </div>
    );
};

export default Header_Pages;
