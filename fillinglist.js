var fillingArray;

function GetFillings(license) {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            // Action to be performed when the document is read;
            fillingArray = JSON.parse(xhttp.responseText);
            console.log(xhttp.status);
            console.log(xhttp.statusText);

            // Add fillings to table
            var fillDiv = document.getElementById('fillDiv');
            fillDiv.innerHTML='';

            var arrLen = fillingArray.length;

            // Create table and header row
            var tbl = document.createElement('table');
            tbl.className= 'fillTable';

            var tr = document.createElement('tr');

            var th = document.createElement('th');
            th.textContent = 'Date';

            th.className='tLeft mdc-typography--subheading2 th';
            tr.appendChild(th);

            th = document.createElement('th');
            th.textContent='Amount';
            th.className='tRight mdc-typography--subheading2 th';
            tr.appendChild(th);

            th = document.createElement('th');
            th.textContent='Price';
            th.className='tRight mdc-typography--subheading2 th';
            tr.appendChild(th);

            th = document.createElement('th');
            th.textContent='Mileage';
            th.className='tRight mdc-typography--subheading2 th';
            tr.appendChild(th);

            tbl.appendChild(tr);

            for (var j = 0; j < arrLen; j++) {

                var opt = fillingArray[j];

                tr = document.createElement('tr');

                var dateStr = '';
                dateStr = opt.date.substring(opt.date.length - 2, opt.date.length) + ".";
                dateStr += opt.date.substring(opt.date.length - 5, opt.date.length - 3) + ".";
                dateStr += opt.date.substring(0,4);

                // Date
                var td = document.createElement('td');
                td.textContent=dateStr;
                td.className='tLeft mdc-typography--subheading2';
                tr.appendChild(td);

                // Amount
                td = document.createElement('td');
                td.textContent= opt.amount;
                td.className='tRight mdc-typography--subheading2';
                tr.appendChild(td);

                // Price
                td = document.createElement('td');
                td.textContent= opt.price;
                td.className='tRight mdc-typography--subheading2';
                tr.appendChild(td);

                // Mileage
                td = document.createElement('td');
                td.textContent= opt.mileage;
                td.className='tRight mdc-typography--subheading2';
                tr.appendChild(td);

                tbl.appendChild(tr);

//                div.textContent = dateStr;
//                var span = document.createElement('span');

                //               span.style.float='right';
                //               span.textContent = signStr + Number(transAction.amount).toFixed(2) + 'e';
                //               div.appendChild(span);
//                fillList.appendChild(div);
            }
            fillDiv.appendChild(tbl);
        }

    };

    var url = 'http://www.rantakallio.fi/fillherup/fillingapi.php?action=get_fillings_with_ids&id=' + license;

    xhttp.open('GET', url);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
};

function ShowFillingDiv(show) {

    var fillDiv = document.getElementById('fillDiv');

    if (show) {
        fillDiv.style.display = 'block';
    }
    else {
        fillDiv.style.display = 'none';
    }
};

