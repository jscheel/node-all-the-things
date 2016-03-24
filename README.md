# All The Things!

Update: It looks like @cameroncooper [has submitted a PR](https://github.com/tjmehta/is-positive-integer/pull/3) to remove dependencies in [is-positive-integer](https://github.com/tjmehta/is-positive-integer), and @tjmehta has merged it. Good work folks!

---

## Original

The Node.js community has lost its collective mind. Recently, [Azer Koçulu unpublished all of his npm pakages](https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c#.rzddam2ki) due to concerns over npm and their willingness to change control of a package over a legal branding dispute. While there are legitimate concerns with npm's actions, this repo is simply a response to the house of cards falling down after @azer removed a frequently used package for [left-padding strings](https://github.com/azer/left-pad).

While sticking to DRY principles is typically good practice, Node has taken it to the extreme. To illustrate the problem, this script will list all of the dependencies (dev and regular) of a seemingly-simple function: "is this number a positive integer." This is not mean to be a slight against [the package in question](https://github.com/tjmehta/is-positive-integer), so please don't get upset @tjmehta :)

# Usage
```bash
$ npm install --save all-the-things
$ ./node_modules/.bin/all-the-things
```

# Why Is This a Package?
Because this is Node. Come on son, get with the picture.

# License
[The Unlicense](https://github.com/jscheel/node-all-the-things/blob/master/UNLICENSE)
