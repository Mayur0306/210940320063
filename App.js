import axios from "axios";
import { useState } from "react";

export default function App() {
    return(

        <div className="container-fluid">
            {" "}
            <Mycomponent />
        </div>
    );
}
function Mycomponent(){
    const headerApp = "My Chat App";
    const studentname = "Mayur";
    const studentId = "63";
    const[inputchat, setinputchat] = useState("");
    const handleinput = (e) =>{
        const newvalue = e.target.value;
        setinputchat(newvalue);
    };
    const sendmessege = () => {};

    return(
        <div>
            <div className="row bg-secondary p-3">
                <div classname = "col fs-1 ">{headerApp}</div>
                {/* <div classname = "col fs-4 ">
                    {studentName}{studentId}
                </div> */}
        </div>
            
        <div className="row mt-2">
            <div className= "col-10" p-2 h-50>
            <input 
                type="text"
                name=""
                id=""
                placeholder="Lets Chat Here..."
                className="form-control w-100 p-3 rounded-pill"
                onChange={handleinput}
            />
            </div>
            <div className="col-2 p-2">
                <input 
                type="button" 
                value="send"
                className="form-control w-100 p-3 rounded-pill " 
                />
            </div>
        </div>
       
    </div>
)};