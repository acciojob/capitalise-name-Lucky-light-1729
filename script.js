//your JS code here. If required.
const input = document.getElementById('fname');
input.addEventListener('blur', function() 
{
	this.value = this.value.toUpperCase();
});