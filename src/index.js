import Keyboard from "./js/Keyboard.js";
// import './styles/main.css';

const keyboard = new Keyboard();

keyboard.init()

// const setLocalStorage = () => localStorage.setItem('lang', keyboard.getLang());

// const getLocalStorage = () => {
//     if (localStorage.getItem('lang')) {
//         keyboard.init();
//         keyboard.setLang(localStorage.getItem('lang'));
//     } else {
//         setLocalStorage();
//         getLocalStorage();
//     }
// };

// window.addEventListener('load', getLocalStorage);
// window.addEventListener('beforeunload', setLocalStorage);
