let input = document.getElementById('item');
let buttons = Array.from(document.getElementsByClassName('btn'));
let inputValue = '';


    buttons.map(button => { 
    button.addEventListener('click',(e) => {
    // console.log('clicked');
    // console.log(e);
     //console.log(e.target);
     console.log(e.target.innerText);

        switch(e.target.innerText){
            case 'C':
                input.innerText = '';
                break;
            case '=':
                try {
                    input.innerText = eval(input.innerText);
                }
                catch {
                    input.innerText = 'Error';
                }
                 
                 break;
            default:
                 input.innerText += e.target.innerText; 
        }

   });
});


