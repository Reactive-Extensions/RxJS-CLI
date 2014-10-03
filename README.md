RxJS-CLI v0.0.3-pre
===================

Custom builds makes it easy to create lightweight versions of the [Reactive Extensions for JavaScript \(RxJS\)](https://github.com/Reactive-Extensions/RxJS).  No need to worry about which files are required, just pick the operators you want and we'll handle the dpendencies for you!  This way you can make RxJS as small as you wish, only taking the operators you wish to use!  Note that this build system requires RxJS version 2.3.12+.

## Installation ##

The [Rx CLI](https://www.npmjs.org/package/rx-cli) should be installed globally to allow you to use the `rx` command. 

Using [npm](http://npmjs.org):

```bash
{sudo} npm i -g rx-cli
rx -h
```

## Documentation ##

To get started, there are two main ways of specifying which operators you would like:
- Methods option
- File option

### Method List

To specify which methods you wish to include, you can use the following command where you comma separate the operators using either the `--methods` option or `-m` shortcut.
```bash
rx -m select,selectmany,where,takeuntil,fromevent
rx --methods select,selectmany,where,takeuntil,fromevent
```

### File Option

Instead of listing which files you would like, you could also use the file option using the `--file` option or `-f` shortcut.  The file must look like the following example.  We have provided an `all.js` file which includes all the methods that RxJS provides.

```js
// methods.js
module.exports = {
  operators: [
    'select',
    'selectmany',
    'where',
    'takeuntil',
    'fromevent'
  ]
};
```

Once the file has been defined, then you can use it to create your custom RxJS build:
```bash
rx -f methods.js
rx --file methods.js
```

### Lite Builds

Another common feature is to have a lite build.  This reduces some of the capabilities of RxJS, for example, removing `Rx.Observer.checked` as well as the `CatchScheduler`.  Use this when you don't need this functionality.

```bash
rx -l -m select,selectmany,where,takeuntil,fromevent
rx --lite --methods select,selectmany,where,takeuntil,fromevent
```

### Compatibility Builds

If you need to support older browsers, you'll want to use the compatibility option.  This polyfills behavior to ensure that RxJS works on browsers I6+, Firefox 3+, etc.  

```bash
rx -c -m select,selectmany,where,takeuntil,fromevent
rx --compat --methods select,selectmany,where,takeuntil,fromevent
```

### Other Options

Other options are supported, such as:
- `--version`      - Displays the version number
- `-h`, `--help`   - Displays help information
- `-s`, `--silent` - Skips status updates to the console

### Contributing

We're always looking for contributors, especially in the following areas:
- SourceMaps
- More fine grained operators

## License ##

Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License"); you
may not use this file except in compliance with the License. You may
obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing permissions
and limitations under the License.
