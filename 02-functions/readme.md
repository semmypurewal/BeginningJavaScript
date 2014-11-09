### Overview

In the previous section, we learned that programming is about storing and
manipulating data. _Variables_ are our main method of storing data; we're able
to read their values and write new ones. To combine a number of these reads and
writes into more complex operations, we can use _functions_.

Let's go back to our example in Chapter 1, and pretend we want to calculate the
tax we'd have to pay on a bunch of different kinds of burritos.

    var burritoPrice = 4.99;
    var superBurritoPrice = 5.99;
    var gigaBurritoPrice = 27.99;

Now in order to compute the taxes on all three of these items, we might end up
writing something like this:

    var burritoTax =  burritoPrice * taxRate;
    var burritoTotal = burritoPrice + burritoTax;

    var superBurritoTax =  superBurritoPrice * taxRate;
    var superBurritoTotal = superBurritoPrice + superBurritoTax;

    var gigaBurritoTax =  gigaBurritoPrice * taxRate;
    var gigaBurritoTotal = gigaBurritoPrice + gigaBurritoTax;

This is a problem. Since we have to copy the formula three times, it's more
likely that we'll make a mistake. Plus, if we change it, we'll have to change
it in all three places. _Functions_ give us a way to repeat an operation
without having to type it all out again:

    var burritoTotal = totalWithTax(taxRate, burritoPrice);
    var superBurritoTotal = totalWithTax(taxRate, superBurritoPrice);
    var gigaBurritoTotal = totalWithTax(taxRate, gigaBurritoPrice);

The function call `totalWithTax` takes the place of the formula, and performs
exactly the same actions.

One of the many places this is useful is when dealing with client-side web
development. For instance, in the last section, we saw that we might want to
build an HTML element given its text content.

    var textContent = "this is the text content in a paragraph element";
    var paragraph = "<p>" + content + "</p>";

Wouldn't it be great if we could simply do something like this?

    var paragraph = makeHtmlParagraph(textContent);
    console.log(paragraph);
    //=> <p>this is the text content in a paragraph element</p>

Even better, what if we could generalize this for an arbitrary HTML tag?

    var listItem = makeHtmlElement("li", "list item 1");
    console.log(listItem);
    //=> <li>list item 1</li>

Packaging frequently performed operations into functions makes this possible.

### Defining a Function

A _function_ is a collection of code which accepts a number of inputs and
produces a single output. We can store a function in a variable, just like we
can store other values in a variable. In fact, JavaScript functions largely
behave like any other value, which will become important later on.

    var totalWithTax = function (rate, price) {
        var tax = price * rate;
        return price + tax;
    };

In this example, `rate` and `price` are variable placeholders for the _inputs_
to the function, while the `return` statement writes a value to the _output_ of
the function.

Using what we've just learned, we can define a function which builds an HTML
paragraph element. The input to the function is the content string, and the
output is the content surrounded by HTML paragraph tags.

    var makeHtmlParagraph = function (content) {
        var taggedString = "<p>" + content + "</p>";
        return taggedString;
    };

### Calling a Function

We _call_ a function by using the variable name associated with it, followed by
the actual inputs in parentheses, separated by commas.

    totalWithTax(0.09, 5.99);
    //=> 6.52910000000000001

The inputs can be values, or they can be variables that store values. For
example, since we have the variables `burritoPrice` and `taxRate` from earlier,
we can call `totalWithTax` like this:

    totalWithTax(taxRate, burritoPrice);
    //=> 5.4391

We can also store the value in a variable, which we can use later.

    var total = totalWithTax(0.09, 99.99);
    console.log(total);
    //=> 108.9891

Likewise, we can keep the result of our `makeHtmlParagraph` function around.

    var paragraph = makeHtmlParagraph("hello world!");
    console.log(paragraph);
    //=> <p>hello world!</p>

### Variable Scope

Notice that we declare and define a variable called `taggedString` inside the
`makeHtmlParagraph` function. Our `taggedString` variable is hidden from the
outside world, and is only available for reading or writing inside that
function. We call variables like this _local variables_.

It's important to make sure that our local variables don't have the same name
as any of our function arguments. The reason we have to check is that
JavaScript allows this without so much as a warning! If we accidentally use the
same name, we could accidentally overwrite the value in one of our input
variables, which can result in all kinds of nasty things:

    var add = function (x, y) {
        var x = 100;  // we lose the argument x
        console.log(x);
        return x + y;
    }

    var result = add (10, 20);
    //=> 100
    console.log(result);
    //=> 120

### Example with Numbers

Here's another example of a function that adds three numbers. Notice that we
can use the return statement with some number values directly, instead of
having to create a variable:

    var addThree = function (firstNum, secondNum, thirdNum) {
        return firstNum + secondNum + thirdNum;
    }

We can call it using values, as well:

    addThree(5, 10, 15);
    //=> 30

Or we can define some variables and call it with the variables.

    var numOne = 10;
    var numTwo = 5000;
    var numThree = 10000;
    var result = addThree(numOne, numTwo, numThree);
    console.log(result);
    //=> 15010

### Example with Strings

In the previous section, we built a greeting string.

    var name = "Semmy";
    var greeting = "Hello, " + name + "!";
    console.log(greeting);
    //=> Hello, Semmy!

Let's build a function so that this works for _any_ name!

    var greet = function (name) {
        return "Hello, " + name + "!";
    }

    console.log(greet("Semmy"));
    //=> Hello, Semmy!

    console.log(greet("JavaScript"));
    //=> Hello, JavaScript!

### Practice

1. Using [Chrome's JavaScript
console](https://developer.chrome.com/devtools/docs/console), write a
function that takes a rank and a suit as input, and returns a string
representation of a card. Use it to print out a few cards with various suits
and ranks.

2. We described a function called `addThree` that accepts three numbers and
returns their sum. Write that function again in the Chrome console. What
happens when you call that function with strings instead of numbers? What
happens if some of the values are numbers and some are strings? Try various
approaches and explain what is happening.

The remainder of the practice problems can be found in the `practice.js` file.



