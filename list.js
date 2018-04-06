var listBody = document.getElementsByClassName('item');

var close = [];

console.log(listBody[0]);

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
for(var i = 0; i < listBody.length; i++) {
    listBody[i].addEventListener('click', function() {
        this.classList.toggle('done');
    });
}

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