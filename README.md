# grunt-csv-concat

> Grunt plugin to concat CSV files in a given folder

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-csv-concat-ext --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-csv-concat-ext');
```

## The "csv_concat" task

### Overview
In your project's Gruntfile, add a section named `csv_concat` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  csv_concat: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.delimiter
Type: `String`
Default value: `','`

What are the columns delimited by?

#### options.src
Type: `String`
Default value: `''`

Source directory where the csv files are

#### options.dest
Type: `String`
Default value: `''`

Destination file where the concatd CSVs are placed into

#### options.addPrefixToKey
Type: `Boolean`
Default value: `false`

Generate a prefix for the keys from the folder structure and the file name?

### Usage Examples

```js
grunt.initConfig({
  csv_concat: {
    options: {
      delimiter: '|',
      src: __dirname + '/test/fixtures',
      ignore: 'ignore.csv',
      dest: __dirname + '/test/tmp/final.csv'
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

