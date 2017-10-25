
var carArray;

var fillCarCombo = (function () {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Action to be performed when the document is read;
            carArray = JSON.parse(xhttp.responseText);
            console.log(xhttp.status);
            console.log(xhttp.statusText);

            // Add cars to combo
            var carCombo = document.getElementById('carDropDown');
            var arrLen = carArray.length;

            for (var j = 0; j < arrLen; j++) {

                var opt = carArray[j];
                var elem = document.createElement("option");
                elem.textContent = opt.license + ', ' + opt.descr;
                elem.value =  opt.license;

                carCombo.appendChild(elem)
            }
        }
    };

    xhttp.open('GET', 'http://www.rantakallio.fi/fillherup/fillingapi.php?action=get_cars');
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();

})();