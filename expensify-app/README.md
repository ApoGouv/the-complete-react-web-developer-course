**Commands**

We need the following 2 commands -in separate cmds- during development ONLY if babel-cli and live server have been installed globally.

1. `babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`
This will parse our code through babel and compile our JSX and es6 code to proper React dom elements and es2015 (for greater browser compatibility)

and: `babel src/playground/es6-arrow-function-2.js --out-file=public/scripts/app.js --presets=env,react --watch`
for the playground scripts

2. `live-server public`
This will run a server for our app, will live reload on save
