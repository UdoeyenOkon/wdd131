

// button.addEventListener('click', function () {
//     if (input.value.trim() !== '') {
//         const input = document.querySelector('#favchap');
//         const button = document.querySelector('button');
//         const list = document.querySelector('#list');

        
//         const li = document.createElement('li');
//         const deleteButton = document.createElement('button');

//         li.textContent = input.value;
//         deleteButton.textContent = '❌';
//         list.append(li);
//     }
// });

// deleteButton.addEventListener('click', function () {
//     list.removeChild(li);
//     input.focus();
// });

// input.value = '';

// input.focus();




// select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// wait for button clicks
button.addEventListener('click', function () {
    // check if the user entered something
    if (input.value.trim() !== '') {
        // creat list item and give it the value of the input
        const li = document.createElement('li');
        li.textContent = input.value;

        // create a button and add a click event listener
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        // add the button to the list item
        li.appendChild(deleteButton);
        
        // OUTPUT: finally display the completed list item to the unordered list
        list.appendChild(li);
        
        // clear the user input field
        
        input.value = '';
    }
        // focus the user back to the input field
        input.focus();
    });