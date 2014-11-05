### Overview

Computer programming is largely about storing and manipulating individual pieces
of information, called _data_. _Variables_ are names we can assign to data so
that we are able to read or manipulate them later on. To get started, let's
learn how to create a variable in JavaScript.

### Declaring Variables

The first step in creating a variable is to _declare_ it. Declaring a variable
lets the JavaScript interpreter know what name we're going to use to refer to
it. It's important to pick names which are meaningful to us as programmers, so
that our programs are easy to understand.

For example, if we want to declare a variable that will represent the suit of
a playing card, we might call it `suit`. Let's declare a variable named `suit`:

    // declare a variable named "suit"
    var suit;

To declare a variable in JavaScript, we use the `var` keyword followed by the
_identifier_ we want to use; in this case, `suit`. We'll use letters and
occasionally numbers to create our identifiers, although JavaScript won't let
us use a number as the first character in an identifier.

    // this identifier is fine
    var card1;

    // this identifier is not allowed, because it starts with a number
    var 1card;
    //=> SyntaxError: Unexpected token ILLEGAL

### Defining Variables

Once we've declared a variable, the next step is _define_ it; that is, to assign
it a _value_. To do that, we'll use the assignment operator, written `=`.
Continuing our example, let's store the _string_ "spades" in the `suit`
variable:

    suit = "spades";

An assignment statement takes the _value_ on the right-hand side of
the `=` symbol, and stores it in the variable on the left-hand
side. If we refer to the variable `suit` in our program after we
assign it a value, we'll get its associated value.

If we print the variable, we'll see it's associated value:

    console.log(suit);
    //=> spades

### Declaring and defining variables at the same time.

It's sometimes easiest to give a variable a value at the same time as we declare
it. We can combine the process in a single line. For example, if we were writing
a program to post to Twitter, we might create a variable to store the tweet that
we want to post.

    // declare and define a variable called tweet
    var tweet = "oh how i love twitter";

    console.log(tweet);
    //=> oh how i love twitter

### Manipulating Values via Variables

Once we have some variables that store values, we can use those variables to
construct new values. For example, we can create a variable that stores a value
that represents a card.

    // create a card by concatenating the suit and the rank
    var card = rank + " of " + suit;

    console.log(card);
    //=> ace of spades

In this example, we've used the _concatenation_ operator for strings, `+`, to
construct a new string by gluing other strings together. First, `rank + " of "`
constructs the string value `"ace of "`, which is concatenated with `suit` to
create the value `"ace of spades"`, which we store in the `card` variable.

Similarly, we may want to tweet at someone.

    var tweep = "@semmypurewal";
    var comment = "hey your book sucks!"
    var tweet = tweep + ": " + comment;
    console.log(tweet);
    //=> @semmypurewal: hey your book sucks!


Most of the time, programming involves manipulating values (and frequently for
us, tweets and cards) in this way.

### Non-String Variables

Variables can store things other than strings. They can also store numbers, for
instance.

    var age = 8;

Notice that number values don't have quotes around them, but we can still
concatenate them with strings to construct new strings.

    var message = "You're only " + age + "? You shouldn't be using Facebook.";
    console.log(message);
    //=> You're only 8? You shouldn't be using Facebook.

Unlike strings, however, we can do mathematical stuff on numbers. Let's figure
out how much tax we owe on buying a burrito.

    var burritoPrice = 5.99;
    var taxRate = 0.09;

You'll see that our `burritoPrice` and `taxRate` variable names have multiple
words. In that situation, we format them using _camel case_ which means we make
the first letter of the first word lowercase, and the first letter of each
subsequent word uppercase. (It's supposed to look like a camel.)

We can create a new variable that stores the tax, which is just the result of
multiplying the `burritoPrice` and the `taxRate`.

    var tax = burritoPrice * taxRate;
    console.log(tax);
    //=> 0.5391

In this example, we've used the multiplication operator, `*`. To get the total
cost, we can add `burritoPrice` together with `tax` using the addition operator,
`+`.

    var totalCost = burritoPrice + tax;
    console.log(burritoPrice);
    //=> 6.529100000000001

Notice that long string of zeroes and the 1 at the end. This is a
result of how JavaScript deals with numbers (all numbers are _floating
point_ numbers). We'll learn how to round off the long trailing
decimal in an upcoming section.

Also, notice that the addition operator uses the same symbol as the
concatenation operator. We'll come back to that.

### Reassigning Variables

The value stored inside a variable can be changed after it's defined.

    var twitterUser = "@twitter_user1";
    var greeting = "hello, ";

    var tweet = greeting + twitterUser;
    console.log(tweet);
    //=> hello, @twitter_user1

    twitterUser = "@another_tweep";
    tweet = greeting + twitterUser;
    console.log(greeting);
    //=> hello, @another_tweep

You can even update a variable to store a new value that depends on its old
value! For example, we can add 1 to whatever value is stored in `count`.

    var count = 10;
    console.log(count);
    //=> 10

    count = count + 1;
    console.log(count);
    //=> 11

    count = count + 10;
    console.log(count);
    //=> 21

It's worth keeping this in mind -- it's easy to reuse variables! The downside of
this is that frequently re-assigning variables in your program can lead to bugs
in your program, because it makes it more difficult to keep track of what values
you've put where.

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

7. In the last example, we ended up with a long decimal number. We'd
like to round it off, but we don't know how to do that. The _Mozilla
Developer Network_ has excellent JavaScript documentation, and there
is a special _function_ called `Math.round` that will help us do
that. It would be worthwhile for you to read the documentation on this
function [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
If you're feeling very brave, give it a try! You can round dollar amounts to two
decimal places by first multiplying by 100, then rounding the nearest integer,
then dividing by 100. You can divide by using the `/` operator.

8. You may have seen HTML in the past, but in case you haven't, a paragraph tag
in HTML looks like this:

        <p>This is a paragraph!</p>

    The first tag, `<p>` is an opening tag, and the last tag, `</p>` is a closing
tag. Create a variable that stores the value "This is a paragraph!" and then use
it to construct a new value that represents this snippet of HTML by
concatenating an opening `<p>` tag to the front, and a closing `</p>` tag to the
back.

9. Consider the following sequence of variable assignments.

        var tweet = "hello world!";
        var count = 0;

        count = count + 10;
        tweet = tweet + count;

        // what is the value of tweet and count now?

        count = count * 10;
        tweet = count + tweet;

        // what is the value of tweet and count now?

        count = count * 100;
        tweet = tweet + ". this is another sentence.";

        // what is the value of tweet and count now?
