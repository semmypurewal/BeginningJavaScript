### Overview

In the first section we saw that the `+` operator can mean one of two things,
depending on the type of its arguments. If one of its arguments is a string, it
concatenates the two values:

    var suit = "spades";
    var rank = "ace";

    var card = rank + " of " + suit;
    console.log(card);
    //=> ace of spades

If they're both numbers, it adds them together:

    var num1 = 500;
    var num2 = 101;
    var sum = num1 + num2;
    console.log(sum);
    //=> 601

If we mix and match the types, sometimes the results can be unexpected. For
example, in the last section we saw a function called `addThree` that accepted
three arguments and added them together. But what happens when we send something
other than numbers into the function?

    addThree(5, 2, 10);
    //=> 17

    addThree("Hello", " World", "!");
    //=> Hello World!

What happens when we mix and match?

    addThree("Hello", 5, 10);
    //=> Hello510

    addThree(5, 10, "Hello");
    //=> 15Hello

    addThree("5", 10, "Hello");
    //=> 510Hello

We can also see this problem exhibited in one of our functions from the last
practice section. Our `toTagString` function expects a string.

    toTagString("div", "this is a div");
    //=> <div>this is a div</div>

What if, instead of a tag name, we send in an invalid tag?

    // 'dv' is not a valid HTML tag, the user probably misspelled div
    toTagString("dv", "this is an invalid tag");
    //=> <dv>this is an invalid tag</dv>

Or worse, what if the user sends in a number?

    toTagString(5, "this is a number what are you doing?");
    //=> <5>this is a number what are you doing?</5>

Programmers often write functions in JavaScript without considering what happens
when the arguments contain values of unexpected types. This can lead to bugs in
even simple JavaScript programs. Let's see what we can do to avoid this.

### The typeof operator

The most basic way to test to see the type of a value in JavaScript is to use
the `typeof` operator.

    typeof 5;
    //=> "number"

    typeof "5"
    //=> "string"

Similarly, functions have their own types.

    typeof addThree
    //=> "function"

Neat! We can use `typeof` to see the types of the results of our `addThree`
function.

    typeof addThree(5, 2, 10);
    //=> "number"

    typeof addThree(5, 10, "Hello");
    //=> "string"

We've seen that whenever we add a string to a number, the result is a string --
we say that the number is _coerced_ into a string by the `+` operator.

### Number Types and Arithmetic Expressions

It's pretty important that we understand the basic operations we can apply to
JavaScript's built in types. It's easiest to start with the `number` type,
because you'll recognize most of the operations from a standard calculator.

The most-commonly used built-in operators for numbers are the (mostly) familiar
arithmetic operators.

| Operator | Meaning  |
| :------: | :------- |
|    +     | addition |
|    -     | subtraction |
|    *     | multiplication |
|    /     | division |
|    %     | remainder |


    var result = 5 + 10 * 2;
    //=> 25

The operations follow the standard precedence rules you learn in elementary
school: multiplication and division take place prior to addition or
subtraction. You can also apply parentheses to force precedence.

    24 / 6 + 2
    //=> 6, because 24 / 6 is 4, and adding 2 is 6

    24 / (6 + 2);
    //=> 3, because the addition happens first, so 24 / 8 is 3

The remainder operator may seem less useful at first glance, but it turns out
to do some pretty interesting things. Here's some examples of it:

    7 % 5;
    //=> 2, because 5 goes into 7 once with a remainder of 2

    25 % 5;
    //=> 0, because 5 evenly divides 25

    24 % 5;
    //=> 4, because 5 goes into 24 4 times with a remainder of 2

    100 % 5.99
    //=> 4.159999999999997, the change you'll get back buying as many super
    //                      burritos as you can with $100

In future sections, we'll use the remainder operator to test divisibility of
numbers. We'll also use it to check whether numbers are prime!

### Extending the number operations with Math

Beyond the basic arithmetic operations, we can do most other operations that a
scientific calculator can do. The extended operators live inside the `Math`
object as functions, and we access them using the dot operator (more on this
later). For example, we can easily compute 2 to the third power by using the
`pow` function.

    Math.pow(2, 3);
    //=> 8

We can also round our numbers that have long trailing decimals.

    2/3
    //=> 0.6666666666666666

    Math.round(2/3);
    //=> 1

Similarly, you can use `Math.floor` and `Math.ceil` (for ceiling) to find the
nearest whole number above or below a given number.

    var longDecimal = 3.1415926535897;

    Math.round(longDecimal);
    //=> 3, since it's less than 3.5

    Math.floor(longDecimal);
    //=> 3, since it's the biggest whole number below

    Math.ceil(longDecimal);
    //=> 4, since it's the smallest whole number above

You can find the largest and the smallest value in a set of numbers.

    Math.max(7, 2, 10, 5);
    //=> 10

    Math.max(7, 2, 10, 5);
    //=> 2

Or you can easily generate a random number between 0 and 1. This is useful when
performing simulations.

    Math.random();
    //=> 0.23129316372796893

Why doesn't `Math.random` return a whole number? It turns out by using the other
operations, you can easily do this. For example, suppose we want to generate a
random number between 0 and 9. We can start by multiplying the result by 10.

     var rand = Math.random();
     //=> sets rand to 0.475040664896369

     rand * 10;
     //=> 4.75040664896369

     Math.floor(rand * 10);
     //=> 4

Notice that the smallest number `Math.random` generates is 0 and the largest is
just smaller than 1. That means that by multiplying by 10, you'll end up with a
number between 0 and 10. Taking the `Math.floor` of that number will give you a
whole number between 0 and 9.

### String Types and Built-In Methods

Strings are a little more interesting than numbers, because they have built in
operations called _methods_ that generate new values (often strings) by applying
functions to the current string. We access string methods using the dot
operator.

    "Hello World!".toLowerCase();
    //=> hello world!

    "Hello World!".toUpperCase();
    //=> HELLO WORLD!

We can also apply methods to string values stored in variables.

    var greeting = "hello there!";
    greeting.toUpperCase();
    //=> HELLO THERE!

You can also check to see if a string contains another string by using the
`indexOf` method. This method returns the _index_ of the substring (starting at
0 for the first position), or -1 if the substring does not appear.

    var tweet = "LOL, this is my tweet on twitter but not really";
    tweet.indexOf("LOL");
    //=> 0

    tweet.indexOf("OL");
    //=> 1

    tweet.indexOf("tweet");
    //=> 16

    tweet.indexOf("this");
    //=> 5

    tweet.indexOf("facebook");
    //=> -1

You can also grab a slice out of a string. For example:

    tweet.slice(0, 3);
    //=> LOL

    tweet.slice(16,21);
    //=> tweet

You can get the length of the string, but the `length` property is not a
method, so you shouldn't use the parentheses.

    tweet.length
    //=> 47

    tweet.slice(tweet.indexOf("tweet", tweet.length));
    //=> "tweet on twitter but not really"

And, on top of that, you can always chain method calls.

    tweet.slice(25,32).toUpperCase();
    //=> TWITTER

We'll also occasionally want to extract individual characters from a string. We
can do this by providing an index as the input to the `charAt` method.

    tweet.charAt(6);
    //=> h

    // notice that the indices start at 0
    tweet.charAt(0);
    //=> L

The `charAt` method is convenient because it also allows us to use a variable
for the index.

    var index = 10;
    tweet.charAt(index);
    //=> i

And we can always get the very last character, regardless of the length of the
string, by combining `charAt` with the `length` property.

    var strValue = "hello world!";
    // notice the index is the length minus 1, since the indices start at 0
    strValue.charAt(strValue.length - 1);
    //=> !

### Boolean Types and Boolean Expressions

The last important basic type in JavaScript is the _Boolean_ type. There are
exactly two boolean values -- `true` and `false`.

    var isACard = true;
    console.log(isACard);
    //=> true

    var isANumber = false;
    console.log(isANumber);
    //=> false

    typeof isANumber;
    //=> boolean

Usually, a boolean value is the result of a boolean expression. The expressions
can be built up using JavaScript's built in comparison operations.

    5 < 7;   // is less than
    //=> true

    5 > 7;  // is greater than
    //=> false

    5 <= 5;  // is less than or equal to
    //=> true

We can even use these comparison operators on strings. We need to be careful,
because the ordering isn't always straightforward at first. For example, we'll
see that uppercase letters always come before lowercase letters.

    "aardvark" < "zebra";
    //=> true

    "aardvark" < "Zebra";
    //=> false, because upper-case letters come first

    "A" < "a";
    //=> false, see?

    "a" < "aa";
    //=> true

There are 5 basic comparison operators which evaluate to booleans. We can use
these operators to ask things about ordered types like numbers and strings.

| Operator | Meaning  |
| :------: | :------- |
|    <     | less than |
|    <=    | less than or equal to |
|    >     | greater than |
|    >=    | greater than or equal to |
|    ===   | strict equal to |
|    !==   | strict not-equal to |

    "aardvark" === "aardvark";
    //=> true

    "aardvark" !== "AArdvark".toLowerCase();
    //=> false

    "a" < "a"
    //=> false

    "a" <= "a"
    //=> true

Once we have boolean values, or expressions that evaluate to boolean values, we
can use several boolean operators to build up more complex expressions. For
example, let's say we want to know if a number is bigger than 0 and smaller
than 18.

    var age = 25;
    age > 0 && age < 18;
    //=> false

    var age = 12;
    age > 0 && age < 18;
    //=> true

The `&&` operator represents the logical "and". This returns true if both the
expression on its left and expression on its right return true. Similarly, we
can use the logical "or" operator, `||`. In this example, we're checking to see
if the type is a number or a string.

    var value = 5;
    typeof value === "number" || typeof value === "string";
    //=> true

    var value = "hello";
    typeof value === "number" || typeof value === "string";
    //=> true

    var value = false;
    typeof value === "number" || typeof value === "string";
    //=> false


We can also flip the results by using the `!` (not) operator.

    var value = "hello";
    !(typeof value === "number" || typeof value === "string");
    //=> false

    var value = true;
    !(typeof value === "number" || typeof value === "string");
    //=> true

### Creating Functions to Test Types

One thing that we've already seen is that function arguments can take on any
type, which can lead to unexpected results. One of the things we'd like to do is
make sure our function arguments are of the correct type. To do this, we can
create simple functions that test the type of a given value, or a value stored
in a variable. These functions return either `true` if the input has the
property, and false otherwise.

    var isNumber = function (n) {
        return typeof n === "number;
    }

    isNumber(5);
    //=> true

    isNumber("5");
    //=> false

    isNumber(true);
    //=> false

Our type-testing functions can actually be more complex than a simple call to
`typeof`. For example, suppose we wanted to know if a value was a positve
number. We can combine the function we wrote before with another test via a
boolean expression.

    var isPositiveNumber = function (n) {
        return isNumber(n) && n > 0;
    }

    isPositiveNumber(0);
    //=> false

    isPositiveNumber(10);
    //=> true

    isPositiveNumber("hello");
    //=> false

In the practice section, we'll write several functions like this that utilize
all the techniques learned in this section.

### Practice

1. Using the Chrome JavaScript console, practice with the `typeof` operator.
What are the types of the following values?

    typeof true;

    typeof "true";

    typeof 1;

    typeof "1";

    typeof "one";


2. Using the Chrome JavaScript console, practice with string methods. If you
type a string and then the dot operator, and then wait a moment, you'll see that
Chrome's auto-complete box will appear. You can use the up and down arrows to
cycle through all the methods available on the string object. Apply a few of
those methods and see if you can understand what they do.

The remainder of the practice problems can be found in the `practice.js` file.
