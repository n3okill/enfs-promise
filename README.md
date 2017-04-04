[![Build Status](https://travis-ci.org/n3okill/enfs-promise.svg)](https://travis-ci.org/n3okill/enfs-promise)
[![AppVeyor status](https://ci.appveyor.com/api/projects/status/gex59qy31438c93d?svg=true)](https://ci.appveyor.com/project/n3okill/enfs-promise)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f845cc3a721f4f30b63e432eb00fc07e)](https://www.codacy.com/app/n3okill/enfs-promise)
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=64PYTCDH5UNZ6)

[![NPM](https://nodei.co/npm/enfs-promise.png)](https://nodei.co/npm/enfs-promise/)

enfs-promise
============
Module that add methods and patches to node fs module with promises
 
**enfs** stands for [E]asy [N]ode [fs]

Description
-----------
This module will add many methods to node fs module.
This is just the main module that will join many 
modules of the family of enfs, making it easier to use many of
the methods present in each module.


Modules
-------
  - [enfspatch-promise](https://www.npmjs.com/package/enfspatch-promise)
  - [enfsaddins-promise](https://www.npmjs.com/package/enfsaddins-promise)
  - [enfslist-promise](https://www.npmjs.com/package/enfslist-promise)
  - [enfsfind-promise](https://www.npmjs.com/package/enfsfind-promise)
  - [enfsmkdirp-promise](https://www.npmjs.com/package/enfsmkdirp-promise)
  - [enfsensure-promise](https://www.npmjs.com/package/enfsensure-promise)
  - [enfscopy-promise](https://www.npmjs.com/package/enfscopy-promise)
  - [enfsmove-promise](https://www.npmjs.com/package/enfsmove-promise)
  - [enfscompare-promise](https://www.npmjs.com/package/enfscompare-promise)


Methods Added
-------------
  * emptyDir
  * emptyDirSync

  
Usage
-----
`enfs` is a drop-in replacement for native `fs` module, you just need to include
it instead of the native module.

Use this
```js
    const enfs = require("enfs-promise");
```

instead of

```js
    const fs = require("fs"); //You don't need to do this anymore
```

and all the methods from native fs module are available

Errors
------
All the methods follows the node culture.
- Async: Every async method returns an Error in the first callback parameter
- Sync: Every sync method throws an Error.


Additional Methods
------------------
- [emptyDir](#emptydir)
- [emptyDirSync](#emptydirsync)
- [emptyDirP](#emptyDirP)
- [remove](#remove)
- [removeSync](#removesync)
- [removeP](#removeP)




### emptyDir
  - **emptyDir(path, callback)**

> Remove all items from the directory this method use [rimraf](https://www.npmjs.com/package/rimraf), 
then you can pass wildcards to the path like you do in rimraf


```js
    enfs.emptyDir("/path/to/empty", function(err){
        if(!err) {
            console.log("Directory is empty");
        }
    });
```


### emptyDirSync
  - **emptyDirSync(path)**

> Remove all items from the directory this method use [rimraf.sync](https://www.npmjs.com/package/rimraf), 
then you can pass wildcards to the path like you do in rimraf


```js
    enfs.emptyDirSync("/path/to/empty");
    console.log("Directory is empty");
```

### emptyDirP
  - **emptyDirP(path)**

> Remove all items from the directory this method use [rimraf](https://www.npmjs.com/package/rimraf), 
then you can pass wildcards to the path like you do in rimraf


```js
    enfs.emptyDir("/path/to/empty").then(function(){
        console.log("Directory is empty");
    });
```



### remove
  - **remove(path, callback)**

> Remove an item from the file system this method use [rimraf](https://www.npmjs.com/package/rimraf), 
then you can pass wildcards to the path like you do in rimraf


```js
    enfs.remove("/path/to/empty", function(err){
        if(!err) {
            console.log("Path was deleted.");
        }
    });
```


### removeSync
  - **removeSync(path)**

> Remove an item from the file system this method use [rimraf.sync](https://www.npmjs.com/package/rimraf), 
then you can pass wildcards to the path like you do in rimraf


```js
    enfs.removeSync("/path/to/empty");
    console.log("Item deleted.");
```

### removeP
  - **removeP(path)**

> Remove an item from the file system this method use [rimraf](https://www.npmjs.com/package/rimraf), 
then you can pass wildcards to the path like you do in rimraf


```js
    enfs.remove("/path/to/empty").then(function(){
        console.log("Item deleted.");
    });
```

Additional methods from sub-modules
--------------------------
  - [enfspatch](https://www.npmjs.com/package/enfspatch)
    * [exists](https://www.npmjs.com/package/enfspatch#exists) - `enfs.exists`
    * [existsSync](https://www.npmjs.com/package/enfspatch#exists) - `enfs.existsSync`
    * [existAccess](https://www.npmjs.com/package/enfspatch#existaccess) - `enfs.existAccess`
    * [existAccessSync](https://www.npmjs.com/package/enfspatch#existaccess) - `enfs.existAccessSync`
    * [existStat](https://www.npmjs.com/package/enfspatch#existstat) - `enfs.existStat`
    * [existLStat](https://www.npmjs.com/package/enfspatch#existlstat) - `enfs.existLStat`
    * [existFStat](https://www.npmjs.com/package/enfspatch#existfstat) - `enfs.existFStat`
    * [existStatSync](https://www.npmjs.com/package/enfspatch#existstat) - `enfs.existStatSync`
    * [existLStatSync](https://www.npmjs.com/package/enfspatch#existlstat) - `enfs.existLStatSync`
    * [existFStatSync](https://www.npmjs.com/package/enfspatch#existfstat) - `enfs.existFStatSync`
  - [enfslist](https://www.npmjs.com/package/enfslist)
    * [list](https://www.npmjs.com/package/enfslist#list) - `enfs.list`
    * [listSync](https://www.npmjs.com/package/enfslist#listsync) - `enfs.listSync`
  - [enfsfind](https://www.npmjs.com/package/enfsfind)
    * [find](https://www.npmjs.com/package/enfsfind#find) - `enfs.find`
    * [findSync](https://www.npmjs.com/package/enfsfind#findsync) - `enfs.findSync`
  - [enfsmkdirp](https://www.npmjs.com/package/enfsmkdirp)
    * [mkdirp](https://www.npmjs.com/package/enfsmkdirp#mkdirp) - `enfs.mkdirp`
    * [mkdirpSync](https://www.npmjs.com/package/enfsmkdirp#mkdirpsync) - `enfs.mkdirpSync`
  - [enfsensure](https://www.npmjs.com/package/enfsensure)
    * [ensureFile](https://www.npmjs.com/package/enfsensure#ensurefile) - `enfs.ensureFile`
    * [ensureFileSync](https://www.npmjs.com/package/enfsensure#ensurefile) - `enfs.ensureFileSync`
    * [ensureDir](https://www.npmjs.com/package/enfsensure#ensuredir) - `enfs.ensureDir`
    * [ensureDirSync](https://www.npmjs.com/package/enfsensure#ensuredir) - `enfs.ensureDirSync`
    * [ensureLink](https://www.npmjs.com/package/enfsensure#ensurelink) - `enfs.ensureLink`
    * [ensureLinkSync](https://www.npmjs.com/package/enfsensure#ensurelink) - `enfs.ensureLinkSync`
    * [ensureSymlink](https://www.npmjs.com/package/enfsensure#ensuresymlink) - `enfs.ensureSymlink`
    * [ensureSymlinkSync](https://www.npmjs.com/package/enfsensure#ensuresymlink) - `enfs.ensureSymlinkSync`
  - [enfscopy](https://www.npmjs.com/package/enfscopy)
    * [copy](https://www.npmjs.com/package/enfscopy#copy) - `enfs.copy`
    * [copySync](https://www.npmjs.com/package/enfscopy#copysync) - `enfs.copySync`
  - [enfsmove](https://www.npmjs.com/package/enfsmove)
    * [move](https://www.npmjs.com/package/enfsmove#move) - `enfs.move`
    * [moveSync](https://www.npmjs.com/package/enfsmove#movesync) - `enfs.moveSync`
  - [enfscompare](https://www.npmjs.com/package/enfscompare)
    * [compareFiles](https://www.npmjs.com/package/enfscompare#files) - `enfs.compareFiles`
    * [compareFilesSync](https://www.npmjs.com/package/enfscompare#filessync) - `enfs.compareFilesSync`
    * [compareFilesHash](https://www.npmjs.com/package/enfscompare#filesHash) - `enfs.compareFilesHash`
    * [compareFilesHashSync](https://www.npmjs.com/package/enfscompare#filesHashSync) - `enfs.compareFilesHashSync`
    * [compareDir](https://www.npmjs.com/package/enfscompare#dir) - `enfs.compareDir`
    * [compareDirSync](https://www.npmjs.com/package/enfscompare#dirSync) - `enfs.compareDirSync`
    * [compareDirHash](https://www.npmjs.com/package/enfscompare#dirHash) - `enfs.compareDirHash`
    * [compareDirHashSync](https://www.npmjs.com/package/enfscompare#dirHashSync) - `enfs.compareDirHashSync`

* Promises
  - [enfspatch-promise](https://www.npmjs.com/package/enfspatch-promise)
    * [existsP](https://www.npmjs.com/package/enfspatch-promise#existsP) - `enfs.existsP`
    * [existAccessP](https://www.npmjs.com/package/enfspatch-promise#existaccessP) - `enfs.existAccessP`
    * [existStatP](https://www.npmjs.com/package/enfspatch-promise#existstatP) - `enfs.existStatP`
    * [existLStatP](https://www.npmjs.com/package/enfspatch-promise#existlstatP) - `enfs.existLStatP`
    * [existFStatP](https://www.npmjs.com/package/enfspatch-promise#existfstatP) - `enfs.existFStatP`
  - [enfslist-promise](https://www.npmjs.com/package/enfslist-promise)
    * [listP](https://www.npmjs.com/package/enfslist-promise#listP) - `enfs.listP`
  - [enfsfind-promise](https://www.npmjs.com/package/enfsfind-promise)
    * [findP](https://www.npmjs.com/package/enfsfind-promise#findP) - `enfs.findP`
  - [enfsmkdirp-promise](https://www.npmjs.com/package/enfsmkdirp-promise)
    * [mkdirpP](https://www.npmjs.com/package/enfsmkdirp-promise#mkdirpP) - `enfs.mkdirpP`
  - [enfsensure-promise](https://www.npmjs.com/package/enfsensure-promise)
    * [ensureFileP](https://www.npmjs.com/package/enfsensure-promise#ensurefileP) - `enfs.ensureFileP`
    * [ensureDirP](https://www.npmjs.com/package/enfsensure-promise#ensuredirP) - `enfs.ensureDirP`
    * [ensureLinkP](https://www.npmjs.com/package/enfsensure-promise#ensurelinkP) - `enfs.ensureLinkP`
    * [ensureSymlinkP](https://www.npmjs.com/package/enfsensure-promise#ensuresymlinkP) - `enfs.ensureSymlinkP`
  - [enfscopy-promise](https://www.npmjs.com/package/enfscopy-promise)
    * [copyP](https://www.npmjs.com/package/enfscopy-promise#copyP) - `enfs.copyP`
  - [enfsmove-promise](https://www.npmjs.com/package/enfsmove-promise)
    * [moveP](https://www.npmjs.com/package/enfsmove-promise#moveP) - `enfs.moveP`
  - [enfscompare-promise](https://www.npmjs.com/package/enfscompare-promise)
    * [compareFilesP](https://www.npmjs.com/package/enfscompare-promise#filesP) - `enfs.compareFilesP`
    * [compareFilesHashP](https://www.npmjs.com/package/enfscompare-promise#filesHashP) - `enfs.compareFilesHashP`
    * [compareDirP](https://www.npmjs.com/package/enfscompare-promise#dirP) - `enfs.compareDirP`
    * [compareDirHashP](https://www.npmjs.com/package/enfscompare-promise#dirHashP) - `enfs.compareDirHashP`


License
-------

Creative Commons Attribution 4.0 International License

Copyright (c) 2016 Joao Parreira <joaofrparreira@gmail.com> [GitHub](https://github.com/n3okill)

This work is licensed under the Creative Commons Attribution 4.0 International License. 
To view a copy of this license, visit [CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/).


