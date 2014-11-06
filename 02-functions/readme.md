### Overview

In the previous section, I mentioned that programming is largely about storing
and manipulating data. While variables are primarily related to _storing_ data,
_functions_ are primarily about manipulating data.

In the most basic scenario, we'll want to perform some operations over and over
again, but we'll want to use different values for the operation. For example,
suppose we wanted to write a program that calculated the price of many different
items.

    var itemOnePrice = 4.99;
    var itemTwoPrice = 3.10;
    var itemThreePrice = 2100.00;

Now in order to compute the taxes on all three of these items, we might end up
with something like this.

    var itemOneTax =  itemOnePrice * taxRate;
    var itemOneTotal = itemOnePrice + itemOneTax;

    var itemTwoTax =  itemTwoPrice * taxRate;
    var itemTwoTotal = itemTwoPrice + itemTwoTax;

    var itemThreeTax =  itemThreePrice * taxRate;
    var itemThreeTotal = itemThreePrice + itemThreeTax;

This is a problem. Since we essentially have to copy the formula three times,
it's more likely that we'll make a mistake. Wouldn't it be better if we could
just do something like this?

    var itemOneTotal = totalWithTax(taxRate, itemOnePrice);
    var itemTwoTotal = totalWithTax(taxRate, itemTwoPrice);
    var itemThree = totalWithTax(taxRate, itemThreePrice);

This is an example of a _function_. The function call `totalWithTax` takes the
place of the formula.

We often want to do this when dealing with client-side web development. For
instance, in the last section, we saw that we may want to build an HTML element
given its text content.

    var textContent = "this is the text content in a paragraph element";
    var paragraph = "<p>" + content + "</p>";

But wouldn't it be great if we could simply do something like this?

    var paragraph = toParagraphString(textContent);
    console.log(paragraph);
    //=> <p>this is the text content in a paragraph element</p>

Even better, what if we could generalize this for an arbitrary HTML tag?

    var listItem = toTagString("li", "list item 1");
    console.log(listItem);
    //=> <li>list item 1</li>

Packaging operations that are frequently used as functions makes this possible.

### Defining a Function

A _function_ is simply a collection of code that has a well-defined input and a
well-defined output. We can store a function in a variable, just like we can
store other values in a variable. In fact, JavaScript functions largely behave
like any other type of value, which will become important later on.

    var totalWithTax = function (rate, price) {
        var tax = price * rate;
        return price + tax;
    };

In this example, `rate` and `price` are variable placeholders for the _inputs_
to the function. The _inputs_ are often referred to as the function's
_arguments_ or _parameters_. We'll use these terms interchangably. The _output_
of the function is specified by the return statement.

As another example, we can define the function that creates a paragraph tag
string. The input to the function is the content string, and the output is the
content delimited by the paragraph tags.

    var toParagraphString(content) {
        var taggedString = "<p>" + content + "</p>";
        return taggedString;
    };

### Calling a Function

We _call_ a function by using the variable name associated with it, followed by
the actual inputs in parentheses, separated by commas.

    totalWithTax(0.09, 5.99);
    //=> 6.52910000000000001

The inputs can be values, or they can be variables that store values. For
example, if we have the variables `itemOnePrice` and `taxRate` that we stored
above, we can call `totalWithTax` like this.

    totalWithTax(taxRate, itemOnePrice);
    //=> 5.4391

We can also store the value in a variable, which we can then use later.

    var total = totalWithTax(0.09, 99.99);
    console.log(total);
    //=> 108.9891

Likewise, we can call the `toParagraphString` function in a similar fashion.

    var paragraph = toParagraphString("hello world!");
    console.log(paragraph);
    //=> <p>hello world!</p>

### Variable Scope

Notice that we declare and define a variable called `taggedString` inside the
function. That variable is hidden from the outside world, and only available to
the function. We refer to these as _local variables_.

For example, even though we declare and define the `taggedString` variable
inside the function, we can't access it later in our program outside of the
function, unless we create a new variable called `taggedString`.

Furthermore, we need to make sure that our local variables don't have the same
name as any of our function arguments.

    var add = function (x, y) {
        var x = 100;  // we lose the argument x
        console.log(x);

        return x + y;
    }

    add (10, 20);
    //=> 100
    //=> 120

JavaScript allows this without so much as a warning, so you'll need to be
vigilant and not allow this to happen!

### Example with Numbers

Here's another example of a function that adds three numbers.

    var addThree = function (firstNum, secondNum, thirdNum) {
        return firstNum + secondNum + thirdNum;
    }

Now we can call it using values.

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

1. Using Chrome's JavaScript console, write a function that takes a rank and a
suit as input, and returns a string representation of a card. Use it to print
out a few cards with various suits and ranks.

2. We described a function called `addThree` that accepts three numbers and
returns their sum. Write that function again in the Chrome console. What happens
when you call that function with strings instead of numbers? What happens if
some of the values are numbers and some are strings?  Try various approaches and
explain what is happening.

The remainder of the practice problems can be found in the `practice.js` file.



