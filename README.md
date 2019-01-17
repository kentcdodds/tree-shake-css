# tree-shake CSS

You'll notice that `app1.js` is only importing `a` from `./lib` which is a file
that imports both `a` and `b`. So the end result is the css for both a and b
even though we're only using stuff from `a`.

I know why this is happening. I'm not asking for an explanation. I'm just trying
to come up with the best way (from the user of the `lib` module) to only include
the css for the exports that are being used.

Notice that in `app3.js` we're importing only the module we want. That's fine.
I'm trying to see if there's another way to do this...

I'm thinking a babel plugin is probably the best.
