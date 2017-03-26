I'm trying to separate some shared components to separate npm module but when I interact with a `Link` that is sourced from the separated module the following error is thrown:

```
(unknown) Uncaught Error: No router instance found.
You should only use "next/router" inside the client side of your app.


    at throwIfNoRouter (eval at evalScript (http://localhost:4444/_next/-/main.js:10697:3), <anonymous>:8717:11)
    at Object.SingletonRouter.(anonymous function) [as push] (eval at evalScript (http://localhost:4444/_next/-/main.js:10697:3), <anonymous>:8698:5)
    at Link.linkClicked (eval at evalScript (http://localhost:4444/_next/-/main.js:10697:3), <anonymous>:11304:37)
    at Object.module.exports.ReactErrorUtils.invokeGuardedCallback (http://localhost:4444/_next/-/main.js:11963:16)
    at executeDispatch (http://localhost:4444/_next/-/main.js:11492:21)
    at Object.executeDispatchesInOrder (http://localhost:4444/_next/-/main.js:11515:5)
    at executeDispatchesAndRelease (http://localhost:4444/_next/-/main.js:5647:22)
    at executeDispatchesAndReleaseTopLevel (http://localhost:4444/_next/-/main.js:5658:10)
    at Array.forEach (native)
    at forEachAccumulated (http://localhost:4444/_next/-/main.js:16051:9)
```

I've been unable to figure out why `SingletonRouter.router` is `undefined` [here](https://github.com/zeit/next.js/blob/master/lib/router/index.js#L52) even though it seems like `createRouter` is getting invoked [here](https://github.com/zeit/next.js/blob/master/client/index.js#L35).

You can see this in action following these steps

```
rm -rf /tmp/next-link-issue
cd /tmp
git clone https://github.com/possibilities/next-link-issue.git

cd next-link-issue/dependency
npm install
npm run build
npm link

cd ../app
npm install
npm link next-link-issue-dependency
npm run dev
```

Now if you click on one of the links you'll see the above error in the console. I imagine the solution for this is something in the configuration of my module either in terms of `babel` or something else is flawed with the way I'm packaging it. Thanks in advance for any help troubleshooting this!
