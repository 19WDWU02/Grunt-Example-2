# Grunt Example 2

### Documentation

Visit the [gruntjs.com](https://gruntjs.com/) website for the offical documentation

## Before you start
Read through both the Getting Started and the Configuring Tasks section in the Offical Grunt JS Documentation.
* [Getting Started](https://gruntjs.com/getting-started)  
* [Configuring Tasks](https://gruntjs.com/configuring-tasks)  

## Installation
To install everything needed for this project you need to have a stable version of Node JS and NPM installed on your computer or server.

### Install Grunt CLI
You also need to include the grunt cli on your computer or server. (remember you only need to install this once)
```sh
$ npm install -g grunt-cli

```
### Clone and Install the project
```sh
$ git clone https://github.com/19WDWU02/Grunt-Example-2.git
$ cd Grunt-Example-2
$ npm install
```

## Running Grunt Tasks
This project currently only has one grunt task include which is the JSHint.  
To run this task you have to call 
```sh
$ grunt checkJS
```
This will validate the script.js file within the js folder

## Adding New Grunt Tasks
Visit the [Offical GitHub](https://github.com/gruntjs) account to find the grunt task you would like to include.  
Go through the ReadMe to find out if there are any dependancies you need, as well as to see if there are any options which aren't included on the readme.

## Task
Prepare a project to be able to use these grunt tasks.
There doesn’t need to be a font end so you don’t need to include an index.html
- [Watch](https://github.com/gruntjs/grunt-contrib-watch)
- [Validating CSS](https://github.com/gruntjs/grunt-contrib-csslint)
- [Minifying CSS](https://github.com/gruntjs/grunt-contrib-cssmin)
- [Validating JS](https://github.com/gruntjs/grunt-contrib-jshint)
- [Minifying JS](https://github.com/gruntjs/grunt-contrib-uglify/tree/harmony) (we have to use the harmony branch if we want to minify ES6 code)  
**BONUS**
- [Compiling SASS](https://github.com/gruntjs/grunt-contrib-sass)


What should happen is that we should turn on the watch tasks which will then start to look for changes in specific files.  
When we save a css file, it should first validate it, and then minify it.  
When we save a js file, it should first validate it, and then minify it.

For the bonus tasks, when we save a .scss file, it should first compile it into css, then validate, then minify
