const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



button.addEventListener('click', function(){
    if (input.value.trim() !== '') {
        const newList = document.createElement('li');
        const deleteButton = document.createElement('button');

        newList.textContent = input.value;
        deleteButton.textContent = '❌';

        deleteButton.setAttribute('aria-label', `Delete ${input.value} from the list`); 
        deleteButton.addEventListener('click', function(){
            list.removeChild(this.parentElement);
            input.focus();
    });


        newList.append(deleteButton);
        list.append(newList);

        input.value = '';
        input.focus();
    }    
})


