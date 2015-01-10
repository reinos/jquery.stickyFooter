# jquery.stickyfooter [![Build Status](https://api.travis-ci.org/reinos/jquery.stickyFooter.png?branch=master)](https://travis-ci.org/reinos/jquery.stickyFooter)

**jquery.stickyFooter** is a jQuery plugin that convert elements to be sticky.

With stickyFooter applied, all kind of element can be converted to be sticky in many ways. It takes also responsive desing in account.

## Installation

* [npm](http://npmjs.org/)

```bash
npm install jquery.eqHeight
```

* [Bower](http://bower.io)

```bash
bower install jquery.stickyFooter
```

* [Download](https://github.com/reinos/jquery.stickyFooter/archive/master.zip)

### Put stickyFooter in your page

Please note that you have to include stickyFooter after jQuery.

```html
<script src="http://code.jquery.com/jquery.min.js"></script>

<!-- put stickyFooter after jQuery -->
<script src="jquery.stickyfooter.js"></script>
```

### Use stickyFooter in your page

Using stickyFooter is simple.
You have to specify a CSS3 selector for element.

Say your HTML looks like this:

```html
<div id="footer">
    
</div>
```

A simple stickyFooter setup for the above HTML would be:

```html
<script>
$(document).ready(function() {
    $("#footer").stickyfooter();
});
</script>
```

#### Options

##### removeNegativMargin
Remove any negativ margin if present

```javascript
$("#footer").eqHeight({
    removeNegativMargin: true
});
```

##### css
Apply extra CSS to the footer

```javascript
$("#footer").eqHeight({
    css: {
		height: 400,
		width: 1200,
		background: "#000"
	}
});
```

##### executeWhen
Simple condition whether the plugin has to be execute or not 

```javascript
$("#footer").eqHeight({
    executeWhen: function (){
    	return $(window).width() > 500; //only execute when the screen resolution is greater then 500px
	}
});
```