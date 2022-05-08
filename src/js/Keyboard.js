export default class Keyboard {
    constructor() {
        this.elements = {
            main: null,
            textarea: null,
            keysContainer: null,
            keys: [],
            elem: null,
        }


        this.eventsHandlers = {
            oninput: null,
            onclose: null,
        },

            this.properties = {
                value: '',
                isCapsLock: false,
                isShiftPressed: false,
                isCtrlPressed: false,
                isAltPressed: false,
                isLangSwitched: false,
                lang: 'en',
            }
        this.layouts = {
            en: [
                '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del',
                'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
                'leftshift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'uparrow', 'rightshift',
                'leftctrl', 'win', 'leftalt', 'spacebar', 'rightalt', 'leftarrow', 'downarrow', 'rightarrow', 'rightctrl',
            ],
            enShift: [
                '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'backspace',
                'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del',
                'capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter',
                'leftshift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'uparrow', 'rightshift',
                'leftctrl', 'win', 'leftalt', 'spacebar', 'rightalt', 'leftarrow', 'downarrow', 'rightarrow', 'rightctrl',
            ],
            ru: [
                'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
                'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del',
                'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
                'leftshift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'uparrow', 'rightshift',
                'leftctrl', 'win', 'leftalt', 'spacebar', 'rightalt', 'leftarrow', 'downarrow', 'rightarrow', 'rightctrl',
            ],
            ruShift: [
                'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'backspace',
                'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del',
                'capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter',
                'leftshift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'uparrow', 'rightshift',
                'leftctrl', 'win', 'leftalt', 'spacebar', 'rightalt', 'leftarrow', 'downarrow', 'rightarrow', 'rightctrl',
            ],
        };
        this.keyCodes = [
            'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
            'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
            'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
            'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
            'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight',
        ];


    }
    init() {
        this.elements.main = document.createElement('div')
        this.elements.keysContainer = document.createElement('div')

        this.elements.textarea = document.createElement('textarea')
        this.elements.textarea.classList.add('text-input')
        this.elements.textarea.setAttribute('autofocus', 'autofocus')

        this.elements.main.classList.add('keyboard', 'keyboard-hidden')
        this.elements.keysContainer.classList.add('keyboard__keys')
        this.elements.keysContainer.appendChild(this.createKeys())

        const container = document.querySelector('.main-container')

        this.elements.main.appendChild(this.elements.textarea)
        this.elements.main.appendChild(this.elements.keysContainer)

        container.appendChild(this.elements.main)



    }

    createKeys() {
        const fragment = document.createDocumentFragment()
        const keyLayout = this.layouts[this.properties.lang]
        const iconForKey = (iconName) => `<span class="material-icons">${iconName}</span>`;

        keyLayout.forEach(key => {
            const keyElem = document.createElement('button')
            keyElem.setAttribute('type', 'button');
            keyElem.classList.add('key');
            // const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            switch (key) {
                case 'backspace':
                    keyElem.classList.add('wide')
                    keyElem.innerHTML = iconForKey('backspace');

                    // keyElem.addEventListener('click', ()=> {
                    //     this.properties.value = this.properties.value.substring(0,-1)
                    //     this.triggerEvent(oninput)
                    // })
                    break;
                case 'capslock':
                    keyElem.classList.add('wide', 'activalable')
                    keyElem.innerHTML = iconForKey('keyboard_capslock');

                    // keyElem.addEventListener('click', () => {
                    //     this.onCapslock()
                    //     keyElem.classList.add('--active', this.properties.isCapsLock)
                    // })
                    break;
                case 'enter':
                    keyElem.classList.add('wide')
                    keyElem.innerHTML = iconForKey('keyboard_return');

                    // keyElem.addEventListener('click', ()=> {
                    //     this.properties.value += '\n'
                    //     this.triggerEvent(oninput)
                    // })
                    break;
                case 'spacebar':
                    keyElem.classList.add('extra-wide')
                    keyElem.innerHTML = iconForKey('space_bar');

                    // keyElem.addEventListener('click', ()=> {
                    //     this.properties.value += ' '
                    //     this.triggerEvent(oninput)
                    // })
                    break;
                case 'leftctrl':
                case 'rightctrl':
                    keyElem.classList.add('text');
                    keyElem.textContent = 'ctrl';
                    break;
                case 'leftalt':
                case 'rightalt':
                    keyElem.classList.add('text');
                    keyElem.textContent = 'alt';
                    break;
                case 'tab':
                    keyElem.innerHTML = iconForKey('keyboard_tab');
                    break;
                case 'win':
                    keyElem.innerHTML = iconForKey('window');
                    break;
                case 'uparrow':
                    keyElem.innerHTML = iconForKey('keyboard_arrow_up');
                    break;
                case 'leftarrow':
                    keyElem.innerHTML = iconForKey('keyboard_arrow_left');
                    break;
                case 'downarrow':
                    keyElem.innerHTML = iconForKey('keyboard_arrow_down');
                    break;
                case 'rightarrow':
                    keyElem.innerHTML = iconForKey('keyboard_arrow_right');
                    break;
                case 'leftshift':
                case 'rightshift':
                    keyElem.classList.add('wide');
                    keyElem.classList.add('shift');
                    keyElem.innerHTML = iconForKey('publish');
                    break;
                default:
                    keyElem.classList.add('symbol');
                    keyElem.innerHTML = key.toLowerCase();
                    // keyElem.addEventListener('click', () => {
                    //     this.properties.value += this.properties.isCapsLock ? key.toUpperCase() : key.toLowerCase()
                    //     this.triggerEvent(oninput)
                    // })
                    break;
            }

            keyElem.addEventListener('click', (event) => this.mouseClick(event));

            fragment.appendChild(keyElem);
            // if (insertLineBreak) {
            //     fragment.appendChild(document.createElement("br"));
            // }
        })

        return fragment;

    }

    triggerEvent(eventHandler) {
        console.log('event triggered!')
    }

    onCapslock() {
        console.log('Caps!!!')
    }

    open(initialValue, oninput, onclose) {

    }

    close() {

    }
}

// window.addEventListener('DOMContentLoaded', function() {
//     Keyboard.init()
// })