function createContent(content) {
	var done = document.getElementById("content")
	if (done.children.length > 5) {
		done.removeChild(done.lastChild)
	}
	var create = document.createElement('p')
	create.innerHTML = content
	done.appendChild(create)

}

$('document').ready(function() {
	$('#content').append('<img src="restaurant.jpg"> </img>')
	.append('<p><h1> Welcome to my restaurant! </h1></p>')
	.append('<nav> <a id="Home" </a> Home <a id="Contact"> Contact </a> <a id="Menu"> Menu </a></nav> ')
	// $('Home').onclick(createContent(Home, "Hello from home element"))
	// $('Contact').click(createContent(Contact, "Hello from Contact element"))
	$('#Menu').click(function() {
		createContent("Hello from Menu navigation element")
	})
	$('#Home').click(function() {
		createContent("Hello from Home navigation element")
	})
	$('#Contact').click(function() {
		createContent("Hello from Contact navigation element")
	})
})