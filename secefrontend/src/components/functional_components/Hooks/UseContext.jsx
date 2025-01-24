import Invigilator from "../ContextCompoents/Invigilator";
import {createContext} from "react";
export const ThemeProvider=createContext();
const UseContext = () => {
return(
    <div>
        <ThemeProvider.Provider value={{sgpa:9.5,cgpa:8.0}}>
        <h1>
            This is a Example of Usecontext Hook which is an alternative for the Props Drilling </h1>
            <h2>Students are Writing their Exams</h2>
            <Invigilator/>
            </ThemeProvider.Provider>
    </div>
)
}
export default UseContext;
