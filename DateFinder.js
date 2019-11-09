var date = new Date();
var next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
var days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June', 'July','August','September','October','November','December'];

function format(d) {
    return d.getDate() + ' ' + days[d.getDay()] + ', ' + months[d.getMonth() ] + ' ' + d.getFullYear();
}

document.getElementById('r').innerHTML  = 'Today is ' + format(date) + '<br>';

for (i = 0; i < 52; i++) {
    next = new Date(next.getFullYear(), next.getMonth(), next.getDate() + 7);
    document.getElementById('r').innerHTML += 'Next week is ' + format(next) + '<br>';
}
