# jQuery Toggle Switch

This plugin converts regular, boring checkbox elements into user-friendly, stylish toggle switches. Toggle switches are popular UI widgets and bring a lot to the overall experience of your users.

----

### 1. Installation:

This plugin requires only the jQuery library (version 1.7+) to run. You should download the latest release from the `src` folder, and include the Javascript and CSS files within your project, after jQuery has been included.  Once you have downloaded the core files from the master branch, you should include them using the following code:

    <link rel="stylesheet" href="path/to/jquery.toggleswitch.css" />
    <script type="text/javascript" src="path/to/jquery.toggleswitch.js"></script>

----

### 2. Usage:

Initialising the plugin is easy, simply select the target `<input type="checkbox" />` and all the `toggleSwitch()` function. The following snippet will create a new toggle switch for the `#my-toggle` checkbox (notice that we wrap the initialisation code inside jQuery's DOMReady function):

    <input type="checkbox" id="my-toggle" />
    <script type="text/javascript">
    $(function() {
        $('#my-toggle').toggleSwitch();
     });
    </script>

Options can be passed into the constructor function as an object. The following options are currently supported:

**`bindLabel`**: (default: `true`)<br />
Boolean indicating whether the input element's `<label>` should also toggle the switch. Only used if a matching `<label for="">` element exists.

**`className`**: (default: `'jq-toggle-switch'`)<br />
String containing the CSS class name to be used for the toggle switch container element.

**`theme`**: (default: `'default'`)<br />
String indicating the theme to be used for the toggle switch. Accepted values are as follows:

- `default`
- `square`
- `outline`
- `square-outline`

`size`: (default: `'medium'`)
String indicating the size of the toggle switch. Accepted values are as follows:

- `small`
- `medium`
- `large`
- `xlarge`

----

### 3. Functions

Once initialised, a number of functions are available for the generated toggle switch. These functions should be called using the `toggleSwitch()` function, and passing the function name as a string into the first argument, and the specified value (if applicable) as the second argument.

For example, to check the toggle switch (initialised on `<input type="checkbox" id="my-toggle" />`), the following code should be used:

    $('#my-toggle').toggleSwitch('check');

The following functions are available:

**`check`**:<br />
Check the toggle switch (and corresponding `<input />` element).

**`uncheck`**:<br />
Uncheck the toggle switch (and corresponding `<input />` element).

**`toggle`**:<br />
Toggles the switch (i.e. checked > unchecked and unchecked > checked), and the corresponding `<input />` element.

**`checked`**:<br />
Checks to see if the toggle switch is currently checked. Returns `true` if so, otherwise `false`.

**`setSize`**:<br />
Set the size of the toggle switch. Size should be passed as a second parameter to the function, i.e.: 

    $('#my-toggle').toggleSwitch('setSize', 'xlarge');

**`setTheme`**:<br />
Set the theme used for the toggle switch. The theme name should be passed as a second parameter, i.e.:

    $('#my-toggle').toggleSwitch('setTheme', 'outline');
    
**`destroy`**:<br />
Destory the toggle switch. This function will restore the default `<input type="checkbox" />`

---

### 4. Requirements:

The library works with jQuery 1.7.0+. All major browsers have been tested without problem. The library is not compatible with jQuery < 1.7.

----

### 5. License:


Licensed under the MIT License:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
