### Overview

JavaScript is an incredibly popular language that remains poorly understood by
many of the people who use it. This is largely because it can easily be picked
up in the context of a specific project without learning it from the ground up.

Personally, I don't think this is a bad thing. In fact, one of my favorite
things about JavaScript as a language is the fact that it's forgiving, it's
accessible, and -- at least in my experience -- JavaScript programmers come from
a tremendously diverse set of backgrounds. In my mind, JavaScript is the
'great-equalizer' in the computer programming world, and it is my hope that this
will help to solve the diversity problem that has plagued the software
development world for years.

On the other hand, JavaScript stands in stark contrast to languages like Java,
C++ and Python which are widely taught to beginning programmers in Computer
Science curricula around the United States. Because of the fact that there
proliferation of ground-up training programs for these languages, there is a
base-line of knowledge that can be expected. This is absolutely not true of
JavaScript.

And while there are plenty of resources for the new JavaScript programmer, the
vast majority of them are contextualized to a specific use-case (DOM
manipulation or Node.js for example). Adding to the confusion is the fact that
many of creators of these materials invent their own 'best-practices,'
abstractions, and non-standard APIs.

This set of material is designed to fill the gap. It takes much of the material
taught in a first-semester programming class in a Computer Science curriculum
and recasts it in the JavaScript world. Due to the functional, class-less and
weakly typed nature of JavaScript, this requires some re-thinking and
reorganization of some of these fundamental concepts. But, at the end of the
day, this material represents my view of the base-line knowledge that every
JavaScript programmer should have.

In that spirit, it focuses exclusively on the language, and not on any specific
application. While we'll have the opportunity to use and manipulate HTML strings
in our examples, we won't demonstrate any DOM APIs, or Node.js, or any other
special libraries.

### Audience

There are two audiences for this set of material. The primary audience is people
who have some experience with computers, but have never actually written a
computer program. The ideal member of this audience is comfortable with using a
keyboard and mouse, navigating files on their computer, and using a
web-browser. They also are comfortable with basic arithmetic (the order of
operations, for example).

The second audience is JavaScript programmers who may have learned programming
in the context of client-side scripting or on-the-job, but are intersted in a
deeper understanding of JavaScript as as a language, perhaps preparing
themselves for further study. This audience will likely breeze through some of
the sections, but may find some of the best-practice suggestions, along with
some of the material in later sections to be unfamiliar.

### What will we learn?

The material includes variable declarations and definitions, function
definitions, types, conditional statements, loops (with a focus on `for`-loops),
arrays, built-in array methods, and objects (*not* OOP -- objects as maps).

### What will we not learn?

We'll leave JS OOP as an intermediate topic. Also, we will not cover any
specific use-case for JavaScript. That means we won't talk about the DOM and
client-side web development, Node.js and server-side development, nor will we
discuss robots.

On occasion, we'll use HTML and Twitter data in our examples, but for the most
part we won't be interacting with any APIs external to JavaScript.

### Getting The Most Out of this Material

You'll get the most out of this material if you follow along and type in all the
examples with me. I've created a file in each directory called "notes" that you
can use to type in code and run the code in your browser.

### Where to get Help

You can tweet at me (@semmypurewal) or e-mail me (me@semmy.me) with
questions. You can also use the "Issues" feature of our Github repository if you
think your question might be relevant to others.

In our Github repository there is also a branch called solutions. You can access
it by clicking the _branch_ drop-down menu above the code browser on
Github. This branch contains solutions to all of the tested practice problems.

### Getting the Examples

Download the examples from our Github repository. The github repository can be
found [here](https://github.com/semmypurewal/BeginningJavaScript). On the
right-hand side, you'll see a button that says "Download ZIP." Download that
file and unzip it somewhere on your hard-drive that you can easily access (your
Desktop, pearhaps?).

You can also download the .zip file through [this direct link](https://github.com/semmypurewal/BeginningJavaScript/archive/master.zip).

### Working with the Browser and an Editor

We'll work with the Chrome browser. You can download it for free
[here](http://www.google.com/chrome).

#### about:blank and the JavaScript console

Open up the browser and type `about:blank` into the address bar.

You can access the JavaScript console by going to

    View->Developer->JavaScript Console

in the application menu.

Type `console.log("hello world");` at the prompt. You'll see "hello world"
printed out.

#### Sublime Text

You'll need a text editor that will help you interact with the text files. I
recommend using Sublime Text 3. You can get a free evaluation copy of it to use
[here](http://www.sublimetext.com). Download it and install it.

#### Using `notes.js` and `notes.html`

Open up `notes.js` in your text editor and `notes.html` in your browser. If you
open up the JavaScript console, you should see `hello world!`. That's coming
from the `notes.js` file.

You can edit the `notes.js` file and reload the browser to see your updated code
run.

#### Basics

##### `console.log`

##### Comments

##### Semi-Colons

##### Expressions
