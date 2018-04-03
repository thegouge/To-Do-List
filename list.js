var listBody = document.getElementsByTagName('li');
listBody = listBody.filter(function(item){
    return item.parentElement.tagName != 'a' || item.class != 'dropdown';
});
var close = [];

// closing button adding function
function closeButton(item) {
    var span = document.createElement('span');
    span.setAttribute('class', 'close');
    span.innerHTML = '&times;'
    item.appendChild(span);
    close.push(span);
}

// adds functionality to close buttons
function closeFunction(item) {
    item.onclick = function () {
        this.parentElement.style.display = "none";
    }
}

// toggles the 'done' class when you click an item
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('done');
    }
}, false);

// add new item to the list
function addItem() {
    var input = document.getElementById('input').value;

    if (input === '') {
        window.alert('No Item to add!');
    } else {
        var list = document.getElementById('list');
        var newItem = document.createElement('li');
        newItem.innerHTML = input;

        closeButton(newItem);
        closeFunction(close[close.length - 1]);

        list.appendChild(newItem);
    }

    document.getElementById('input').value = '';
}

// initialize the current list
for (var i = 0; i < listBody.length; i++) {
    closeButton(listBody[i]);
    closeFunction(close[i]);
}