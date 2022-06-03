// select everything
const form = document.querySelector('.links');
// select the input box
const linkInput = document.querySelector('.linkInput');
// select the <ul>
const linkList = document.getElementById('links');

// array which stores every links
let links = [];

// add an eventListener on form, and listen for submit event
form.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addLink(linkInput.value);
});

// function to add link
function addLink(item) {
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, name
    const link = {
      id: Date.now(),
      name: item,
    };

    // then add it to links array
    links.push(link);
    addToLocalStorage(links); // then store it in localStorage

    // finally clear the input box value
    linkInput.value = '';
  }
}

// function to render given todos to screen
function renderLinks(links) {
  // clear everything inside <ul>
  linkList.innerHTML = '';

  // run through each item inside links
  links.forEach(function(item) {
    // make a <li> element and fill it
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);

    li.innerHTML = item.name + `<button class="delete-button">X</button>`;
    // finally add the <li> to the <ul>
    linkList.append(li);
  });

}

// function to add links to local storage
function addToLocalStorage(links) {
  // conver the array to string then store it.
  localStorage.setItem('links', JSON.stringify(links));
  // render them to screen
  renderLinks(links);
}

// function helps to get everything from local storage
function getFromLocalStorage() {
  const reference = localStorage.getItem('links');
  // if reference exists
  if (reference) {
    // converts back to array and store it in links array
    links = JSON.parse(reference);
    renderLinks(links);
  }
}

// deletes a link from links array, then updates localstorage and renders updated list to screen
function deleteLink(id) {
  // filters out the <li> with the id and updates the todos array
  links = links.filter(function(item) {
    // use != not !==, because here types are different. One is number and other is string
    return item.id != id;
  });

  // update the localStorage
  addToLocalStorage(links);
}

// initially get everything from localStorage
getFromLocalStorage();

linkList.addEventListener('click', function(event) {
// check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteLink(event.target.parentElement.getAttribute('data-key'));
  }
});

function addGroup(){
    let linkGroup = document.createElement("textarea");
    linkGroup.style.height = 100;
    linkGroup.appendChild(linkList);
}