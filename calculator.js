let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            input.value = '0';
        } else if (e.target.innerHTML === 'DEL') {
            string = string.slice(0, -1); 
            input.value = string || '0';
        } else {
            if (input.value === '0') {
                input.value = '';
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
