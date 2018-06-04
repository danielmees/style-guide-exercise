# style-guide-exercise

### Quick Start

* Run 'npm install' in order to install Packages.
* Run 'npm run start' to see the outcome at http://localhost:3000.
* Run 'npm run test' to show the unit test result.

### Code Structure

* src/index.js --- starting Js file.
* src/App.js --- rendering pallet color buttons and the main page.
  * src/components/Button.js, Card.js, RadioButtons.js, TextBox.js --- generating low level components.
  * src/constants/ColorPallet.js --- storing color pallet information as JSON.  
* test/dom.js, helpers.js --- test helpers.
* test/test.spec.js --- unit test file.
