### Overview

Computer programming is largely about storing and manipulating data, where data
is just individual pieces of information. The most basic way to store individual
pieces of information in any programming language is in variables.

Before we use a variable we have to _declare_ and _define_ it. Declaring a
variable involves telling the interpreter how we're going to refer to it.

### Declaring Variables

For example, if we want to declare a variable that will represent the suit of a
playing card, we may want to call it `suit` and we would declare it like this.

    // declare a variable called suit
    var suit;

All we need to do is use the `var` keyword followed by the _identifier_ we'll
use to represent it. We'll use letters and occasionally numbers in our
identifiers, although we can't use a number as the first character in an
identifier.

    // this is okay
    var card1;

    // this is not okay
    var 1card;
    //=> SyntaxError: Unexpected token ILLEGAL

### Defining Variables

Once we've declared a variable, we'll want to assign in a _value_. To do that,
we use the `=` operator. For example, if we want to store the _string_ "spades"
in the `suit` variable, we would type this:

    suit = "spades";

An assignment statement takes the _value_ on the right-hand side of the `=`
symbol, and stores it in the variable on the left-hand side.

If we print the variable, we'll see it's associated value instead of the
variable name.

    console.log(suit);
    //=> spades

(We'll learn more about _strings_ in the upcoming sections, but for now you can
think of them as a set of characters delimited by quotes.)

### Declaring and defining variables at the same time.

It's sometimes easiest to give a variable a value at the same time as we declare
it. We can combine the process in a single line.

    // declare and define a variable called suit
    var rank = "ace";

    console.log(rank);
    //=> ace

### Manipulating Values via Variables

Once we have some variables that store values, we can use those variables to
construct new values. For example, we can create a variable that stores a value
that represents a card.

    // create a card by concatenating the suit and the rank
    var card = rank + " of " + suit;

    console.log(card);
    //=> ace of spades

In this example, we've used the `+` operator for strings to construct a new
string that is the concatenation of three strings: the value stored in `rank`,
the string value ` of ` and the value stored in `suit`.

Much of what we'll be doing is manipulating values in this way.

### Non-String Variables

Variables can store things other than strings. They can also store numbers, for
instance.

    var price = 5.99;
    var taxRate = 0.09;

You'll see that our `taxRate` variable has multiple words. When that's the
situation, we use _Camel Case_ which basically means we make the first letter
lowercase, and the first letter of each subsequent word uppercase.

We can create a new variable that stores the tax, which is just the product of
the `price` and the `taxRate`.

    var tax = price * taxRate;
    console.log(tax);
    //=> 0.5391

In this example, we've used the `*` operator which represents multiplication.

We can now calculate the total cost.

    var totalCost = price + tax;
    console.log(price);
    //=> 6.52910000000000001

The reason that the decimal is so long is a quirk of the way JavaScript stores
numbers. We'll defer a discussion on that for now.

### Practice

1. What happens when you print out the value of a variable that you have
declared but you didn't define?

2. Identifiers have some pretty specific rules in JavaScript. Experiment with
declaring variables using various symbols other than letters and numbers and see
when you get a Syntax Error.

3. Declare and define a variable that stores your name. Using that variable,
construct a new variable that represents a greeting by concatentating "Hello" in
front of your name. For example, we'd want to store the value "Hello Semmy" in a
variable, where "Semmy" is stored in another variable.

4. Using just the name variable from the previous question, create a more
complex greeting that looks like "Hello, Semmy!" and store that in a variable.

5. Create a variable that represents a worker's hourly wage. Create another
variable that represents the number of hours a worker has worked. Store values
in both of those variables, and create a variable that stores the total wage
based on the number of hours worked and the hourly wage.

6. We've seen that variables can store strings and numbers. We've also seen that
when we have two strings the `+` operator means _concatenation_, whereas when we
have two number variables it represents _addition_. What happens when we mix and
match number and string variables? Give it a try and do your best to explain
what you see.

7. In the last example, we ended up with a long decimal number. It might be
worthwhile to round it off, but we don't know how to do that. The _Mozilla
Developer Network_ has excellent JavaScript documentation, and there is a
special _function_ called `Math.round` that will help us do that. It would be
worthwhile for you to read the documentation on this function here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

If you're feeling very brave, give it a try! You can round dollar amounts to two
decimal places by first multiplying by 100, then rounding the nearest integer,
then dividing by 100.