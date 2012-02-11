function block_out() {
	document.body.innerHTML = "Sorry this web page uses non free javascript. It has been blocked out for your safety. Please see <a href='http://www.gnu.org/licenses/javascript-labels.html'> Web Labels </a> for how to be safe and free."
}

if(!document.querySelector('a[rel="jslicense"]')) { 
	block_out();
} 

