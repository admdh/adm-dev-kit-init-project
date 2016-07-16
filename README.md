# ADM DEV KIT INIT PROJECT
ADM DEV KIT INIT PROJECT help tool for initializing [ADM DEV KIT](https://github.com/admdh/adm-dev-kit) project.  

## Quick Guide
#### About
ADM DEV KIT INIT PROJECT is a small command line tool that focused to help initialize [ADM DEV KIT](https://github.com/admdh/adm-dev-kit) project.  
It will generate all necessary files and dependencies required to run [ADM DEV KIT](https://github.com/admdh/adm-dev-kit).  
New project can be initialized automatically and manual.

#### Requirements
```
node.js 6.0.0 or later 
```

#### Installation
Install ADM DEV KIT INIT PROJECT globaly:
```
npm i -g adm-dev-kit-init-project
```
#### Usage
Navigate to empty project's folder and run:
```
adm
```
#### Install npm and jspm packages
```
npm i
jspm i
```

#### Run project
```
npm start
```

#### Default Project Structure
```
src/
  | - _layouts/
    | - _main.pug
  | - index/
    | - hello-world/
      | - _hello-world.css 
      | - _hello-world.js 
      | - _hello-world.pug 
    | - _css-variables.css 
    | - index.pug
 views/
 .eslintrc
 .stylelintrc
 gulpfile.js
 package.json
 server.js
```
