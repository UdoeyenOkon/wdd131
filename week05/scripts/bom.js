

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




// // select elements from the DOM
// const input = document.querySelector('#favchap');
// const button = document.querySelector('button');
// const list = document.querySelector('#list');

// // wait for button clicks
// button.addEventListener('click', function () {
//     // check if the user entered something
//     if (input.value.trim() !== '') {
//         // creat list item and give it the value of the input
//         const li = document.createElement('li');
//         li.textContent = input.value;

//         // create a button and add a click event listener
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = '❌';

//         deleteButton.addEventListener('click', function () {
//             list.removeChild(li);
//             input.focus();
//         });

//         // add the button to the list item
//         li.appendChild(deleteButton);

//         // OUTPUT: finally display the completed list item to the unordered list
//         list.appendChild(li);

//         // clear the user input field

//         input.value = '';
//     }
//     // focus the user back to the input field
//     input.focus();
// });

// select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');



let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function () {
    if (input.value.trim() !== '') { // make sure the input is not empty
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value); // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
});

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
};

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;  // note the use of the displayList parameter 'item'
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(item);  // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus(); // set the focus back to the input
    });

    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
};









