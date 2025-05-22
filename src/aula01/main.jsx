import { createRoot } from "react-dom/client";
import { App, App1,ListCourseAtive,BookAvailable} from "./App.jsx";

createRoot(document.getElementById('root')).render(
<>
<App1 /> 
<App />
<ListCourseAtive/>
<BookAvailable/>
</>
)