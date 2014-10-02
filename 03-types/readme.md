### Overview

In the previous section we saw that the `+` operator can mean one of two things
depending on the type of the value stored in a variable. In the case that the
value is a string, it concatenates the two values.

    var suit = "spades";
    var rank = "ace";

    var card = rank + " of " + suit;
    console.log(card);
    //=> ace of spades

If the values are numbers, it adds them.

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

    toTagString(5, "this is an invalid tag");
    //=> <5>this is a div</5>


Programmers often write functions in JavaScript without considering what happens
when the arguments contain values of unexpected types. This makes the functions
exhibit undefined behavior, which can lead to bugs in more complex JavaScript
programs.

### The typeof operator

The most basic way to test to see the type of a value in JavaScript is to use
the `typeof` operator.

    typeof 5;
    //=> number

    typeof "5"
    //=> string

We can also use `typeof` to see the types of the results of our `addThree`
function.

    typeof addThree(5, 2, 10);
    //=> "number"

    typeof addThree(5, 10, "Hello");
    //=> "string"

It turns out that whenever we add a string to a number, the result is a string
-- the number is _coerced_ into a string during the computation.

### Number Types and Arithmetic Expressions

It's pretty essential that we understand basic operations that we can apply to
the specific built-in JavaScript types. It's easiest to start with the `number`
type, because you'll recognize most of the operations from a standard calculator.

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

The remainder operator may seem less useful, but it turns out that it's pretty
frequently used. Here's some examples of it:

    7 % 5;
    //=> 2, because 5 goes into 7 once with a remainder of 2

    25 % 5;
    //=> 0, because 5 evenly divides 25

    24 % 5;
    //=> 4, because 5 goes into 24 4 times with a remainder of 2

In future sections, we'll use the remainder operator to test divisibility of
numbers (and check for primality).

### Extending the number operations with Math

Beyond the basic arithmetic operations, we can do most other operations that a
scientific calculator can do. We'll find the extended operators inside the
`Math` object, and we access them using the dot operator. For example, we can
easily compute 2 to the third power by using the `pow` method.

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
1. That means that by multiplying by 10, you'll end up with a number between 0
and 10. Taking the `Math.floor` of that number will give you a whole number.

### String Types and Built-In Methods

Strings are a little more interesting than numbers, because they have built in
operations called _methods_ that generate new values (often strings) by applying
functions to the current string. We access string methods using the dot
operator.

    "HELLO WORLD!".toLowerCase();
    //=> hello world!

    "hello world!".toUpperCase();
    //=> HELLO WORLD!

We can also apply methods to string values stored in variables.

    var greeting = "hello there!";

You can also check to see if a string contains a certain substring by using the
`indexOf` method. This method returns the index of the substring, or -1 if the
substring does not appear.

    var tweet = "LOL, this is my tweet on twitter but not really";
    tweet.indexOf("tweet");
    //=> 16

    tweet.indexOf("this");
    //=> 5

    tweet.indexOf("facebook");
    //=> -1

You can also extract a string representing a single character at a given index
using the `charAt` method.

    tweet.charAt(6);
    //=> h

    tweet.charAt(0);
    //=> L

You can also grab a substring out of a string. For example:

    tweet.substring(0, 3);
    //=> LOL

    tweet.substring(16,21);
    //=> tweet

You can also get the length of the string, but the `length` property is not a
method, so you don't have to use the parenthesis.

    tweet.length
    //=> 47

    tweet.substring(tweet.indexOf("tweet", tweet.length);
    //=> "tweet on twitter but not really"

And, on top of that, you can always chain method calls.

    tweet.substring(25,32).toUpperCase();
    //=> TWITTER

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

Usually, however, a boolean value is the result of a boolean expression. The
expressions can be built up using some of the simple comparison operations that
you learned in elementary

    5 < 7;   // is less than
    //=> true

    5 > 7;  // is greater than
    //=> false

    5 <= 5;  // is less than or equal to
    //=> true

We can even use these comparison operators on strings. But in this case, the
comparison is done alphanumerically.

    "aardvark" < "zebra";
    //=> true

    "aardvark" < "Zebra";
    //=> false, because upper-case letters come first

    "A" < "a";
    //=> false, see?

    "a" < "aa";
    //=> true

There are 5 basic ordering operations which evaluate to booleans. We can use
these evaluate properties of ordered types (like numbers and strings).

| Operator | Meaning  |
| :------: | :------- |
|    <     | less than |
|    <=    | less than or equal to |
|    >     | greater than |
|    >=    | greater than or equal to |
|    ===   | strict equal to |
|    !==   ! strict not-equal to |


    "aardvark" === "aardvark";
    //=> true

    "aardvark" !== "AArdvark".toLowerCase();
    //=> false

Likewise, once we have boolean values, or expressions that evaluate to boolean
values, we can use several boolean operators to build up more complex
expressions. For example, maybe we want to know if a number is bigger than 0 and
smaller than 18.

    var age = 25;
    age > 0 && age < 18;
    //=> false

    var age = 12;
    age > 0 && age < 18;
    //=> true

The `&&` operator represents the logical "and". This returns true if both the
left expression and the right expression return true. Similarly, we could use
`||` to test the logical or. In this example, we're checking to see if the type
is a number or a string.

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

1. Using the Chrome JavaScript console, practice with the `typeof`
operator. What are the types of the following values?

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

3. [ a complicated computation involving addition, subtraction, multiplication, division ]

4. Write a function called isDivisibleBy3 which returns `true` if a number is
divisible by 3, and `false` otherwise.

5. Write a function that converts a Celsius temperature to Fahrenheit,
and vice-versa. To convert from Celsius to Fahrenheit, you multiply
the celsius value by 9 and then divide by 5. Then you add 32. To
convert the other way, you subtract 32, and then multiply by
9. Finally, you divide by 5. The division operator in JavaScript is
`/`.

6. Write a function that accepts a number and returns a random whole number
between 0 and that number. For example:

    rand(10);
    //=> 5

    rand(10);
    //=> 9

    rand(1000);
    //=> 561

    rand(1000);
    //=> 236

7. Write a function that accepts two numbers representing a range and returns a
random whole number between those two numbers.

8. The standard card suits are clubs, diamonds, hearts and spades. Write a
function called isSuit that accepts a string and returns true if the input
string is a suit, and false otherwise. Consider making a more robust function
that will allow the case to be arbitrary, meaning "HEARTS", "hearts", and
"hEaRtS" all return `true`. You can use the `toLowerCase` or `toUpperCase`
string methods to achieve this.

    isSuit("hearts");
    //=> true

    isSuit("HEARTS");
    //=> true

    isSuit("coins");
    //=> false

9. The valid ranks for a card are two, three, four, five, six, seven, eight,
nine, ten, jack, queen, king and ace. Write a function called `isRank` that
accepts a string and returns true if it is a card rank.

    isRank("jack");
    //=> true

    isRank("Queen");
    //=> true

    isRank("one");
    //=> false

10. Using the previous two functions, write a function called isCard that accepts
two arguments, a suit and a rank, and returns true if they are valid for a card,
and false otherwise.

11. Write a function that accepts a string representation of an HTML element (it
can't have nested HTML elements) and returns the string contained inside. For
example:

    getHTMLText("<p>this is some text in a paragraph</p>");
    //=> this is some text

    getHTMLText("<li>this is a list item</li>");
    //=> this is a list item

12. Write a function that determines if a string represents an HTML element. This
means it has to start with an opening HTML tag and end with a closing HTML tag.

    isHTMLElement("<p>this is a paragraph</p>");
    //=> true

    isHTMLElement("this is a tweet!");
    //=> false

    isHTMLElement("<p>this is NOT an paragraph</div>");
    //=> false

    isHTMLElement("<li>this is an HTML list element</li>");
    //=> true

It may help in this case to look up the `lastIndexOf` method on the string
objects.
