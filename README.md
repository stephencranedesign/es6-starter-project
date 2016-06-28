# es6-starter-project
base project that integrates babel / rollup to get unit testing with mocha out of the box

I had some trouble trying to get rollup and babel and mocha to all come together so this repo is more or less a place to start.

This package comes with a build / test command you can use with npm run. 

Build will create a umd version of the module in the dist file.
test will call build and then run mocha on that umd package.

This way you can create es6 modules and ship/test modules that run in the browser.
