
ENOSPC

https://stackoverflow.com/questions/22475849/node-js-error-enospc/32600959

https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers

```
code: 'ENOSPC',
  errno: 'ENOSPC',
  syscall: 'watch /***.jsonp',
  filename: '/***.jsonp' }
{ Error: watch /***.jsonp ENOSPC
    at _errnoException (util.js:992:11)
    at FSWatcher.start (fs.js:1382:19)
    at Object.fs.watch (fs.js:1408:11)
    at createFsWatchInstance (/home/bmsdave/.nvm/versions/node/v8.11.3/lib/node_modules/ndb/node_modules/chokidar/lib/nodefs-handler.js:37:15)
    at setFsWatchListener (/home/bmsdave/.nvm/versions/node/v8.11.3/lib/node_modules/ndb/node_modules/chokidar/lib/nodefs-handler.js:80:15)
    at FSWatcher.NodeFsHandler._watchWithNodeFs (/home/bmsdave/.nvm/versions/node/v8.11.3/lib/node_modules/ndb/node_modules/chokidar/lib/nodefs-handler.js:232:14)
    at FSWatcher.NodeFsHandler._handleFile (/home/bmsdave/.nvm/versions/node/v8.11.3/lib/node_modules/ndb/node_modules/chokidar/lib/nodefs-handler.js:259:21)
    at FSWatcher.<anonymous> (/home/bmsdave/.nvm/versions/node/v8.11.3/lib/node_modules/ndb/node_modules/chokidar/lib/nodefs-handler.js:480:21)
    at FSReqWrap.oncomplete (fs.js:153:5)

```
