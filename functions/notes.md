### Overview

In the previous section, I mentioned that programming is largely about
storing and manipulating data. While variables are primarily related
to _storing_ data, _functions_ are primarily about manipulating data.

In the most basic scenario, we'll want to perform some operations over
and over again, but we'll want to use different values for the
operation. For example, suppose we wanted to write a program that
calculated the price of many different items.

    var itemOnePrice = 4.99;
    var itemTwoPrice = 3.10;
    var itemThreePrice = 2100.00;

Now in order to compute the taxes on all three of these items, we
might end up with something like this.

    var itemOneTax =  itemOnePrice * taxRate;
    var itemOneTotal = itemOnePrice + itemOneTax;

    var itemTwoTax =  itemTwoPrice * taxRate;
    var itemTwoTotal = itemTwoPrice + itemTwoTax;

    var itemThreeTax =  itemThreePrice * taxRate;
    var itemThreeTotal = itemThreePrice + itemThreeTax;

This is a problem. Since we essentially have to copy the formula three
times, it's more likely that we'll make a mistake. Wouldn't it be
better if we could just do something like this?

    var itemOneTotal = totalWithTax(taxRate, itemOnePrice);
    var itemTwoTotal = totalWithTax(taxRate, itemTwoPrice);
    var itemThree = totalWithTax(taxRate, itemThreePrice);

This is an example of a _function_. The function call `totalWithTax`
takes the place of the formula.

### Defining a Function

A _function_ is simply a collection of code that has a well-defined
input and a well-defined output. We can store a function in a
variable, just like we can store other values in a variable.

    var totalWithTax = function (rate, price) {
        var tax = price * rate;
        return price + tax;
    };

In this example, `rate` and `price` are variable placeholders for the
_inputs_ to the function, while the `return` statement represents the
_output_ of the function.

### Calling a Function

We _call_ a function by using the variable name associated with it,
followed by the actual inputs in parentheses, separated by
commas.

    totalWithTax(0.09, 5.99);
    //=> 6.52910000000000001

The inputs can be values, or they can be variables that store
values. For example, if we have the variables `itemOnePrice` and
`taxRate` that we stored above, we can call `totalWithTax` like
this.

    totalWithTax(taxRate, itemOnePrice);
    //=> 5.4391

We can also store the value in a variable, which we can then use
later.

    var total = totalWithTax(0.09, 99.99);
    console.log(total);
    //=> 108.9891

### Variable Scope

Notice that we declare and define a variable called _tax_ inside the
function. That variable is hidden from the outside world, and only
available to the function.

For example, even though we declare and define the `tax` variable
inside the function, we can't access it later in our program, unless
we create a new variable called `tax`.

### Another Example

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

### A String Example

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
