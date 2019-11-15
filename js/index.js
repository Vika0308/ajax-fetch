document.querySelector('.page-loaded').innerText = new Date().toLocaleTimeString();

document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHtml);

function getAjaxHtml() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'client-data.html', true);
    xhr.send();
}

function fetchHtml() {
    fetch('client-data.html')
        .then( response => response.text() )
        .then( html =>  document.querySelector('.html-placeholder').innerHTML = html );
}

document.querySelector('.get-ajax-json').addEventListener('click', getAjaxJson);

function getAjaxJson() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const clientData = JSON.parse(xhr.responseText);
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.account-balance').innerText = clientData.balance;
        }
    }
    xhr.open('get', 'client-data.json', true);
    xhr.send();
}


document.querySelector('.fetch-html').addEventListener('click', fetchHtml);

function fetchJson() {
    fetch('client-data.json')
        .then( response => response.json() )
        .then( clientData =>  {
            document.querySelector('.client-name').innerText = clientData.name;
            document.querySelector('.account-balance').innerText = clientData.balance;
        } );
}