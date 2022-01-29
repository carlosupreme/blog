
import Header from "./Header.js";
import Main from "./Main.js";
import ScrollUpBtn from "./ScrollUpBtn.js";
import Sidebar from "./Sidebar.js";

const $root = document.getElementById("root");

export default function App() {
  $root.appendChild(Header());
  $root.appendChild(Sidebar());
  $root.appendChild(Main());
  $root.appendChild(ScrollUpBtn()); 
}
