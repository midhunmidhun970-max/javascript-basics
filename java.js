var head1 = document.getElementById('head1');


head1.style.textAlign = 'center';
head1.style.color = 'green';
head1.textContent = 'heading changed';

var group = document.getElementById('grp1');

group.innerHTML = `<p>I am DOM</p>`;
group.style.color = 'green';

var list = document.getElementsByClassName('lichild');

list[0].textContent = 'pineapple';

list[0].style.color = 'black';
list[1].style.color = 'black';

list[0].style.backgroundColor = 'lightblue';
list[1].style.backgroundColor = 'blue';
list[2].style.backgroundColor = 'red';

var par=document.getElementsByTagName('p');
par[1].style.fontfamily='calibri';
par[2].style.color='green';

// var query1=document.querySelector('input[type=date]');
var query1=document.querySelector('.lichild');
query1.style.backgroundColor='lightblue'

