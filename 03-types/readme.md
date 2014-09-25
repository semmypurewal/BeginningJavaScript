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

As you can see, the results can seem unexpected, and this can lead to bugs in
JavaScript programs.

### The typeof function

The most basic way to test to see the type of a value in JavaScript is to use
the `typeof` function.

    typeof(5);
    //=> number

    typeof("5");
    //=> string

The `typeof` function is one of several unique functions in JavaScript that
don't require parentheses to call them. In other words, you'll more frequently
see `typeof` used like this.

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
type.

The most-commonly used built-in operators are the usual arithmetic operators.

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

### String Types and Built-In Methods

Strings are a little more interesting than numbers, because they have built in
operations called _methods_ that generate new values (often strings) by applying
functions to the current string. We access string methods using the dot
operator.

    "HELLO WORLD!".toLowerCase();
    //=> hello world!

    "hello world!".toUpperCase();
    //=> HELLO WORLD!

You can also check to see if a string contains a certain substring by using the
`indexOf` method. This method returns the index of the substring, or -1 if the
substring does not appear.

    var sentence = "this is a long sentence";
    sentence.indexOf("sentence");
    //=> 15

    sentence.indexOf("this");
    //=> 0

    sentence.indexOf("short");
    //=> -1

You can also extract a string representing a single character at a given index
using the `charAt` method.

    sentence.charAt(6);
    //=> i

    sentence.charAt(0);
    //=> s

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
    var value = "hello";
    typeof value === "number" || typeof value === "string";
    //=> false


### Creating Functions to Test Types

One thing that we've already seen is that function arguments can take on any
type, which can lead to unexpected results. One of the things we'd like to do is
make sure our function arguments are of the correct type. To do this, we can
create simple _predicate_ functions that test the type of a given value, or a
value stored in a variable.

A predicate function is a function that simply returns true or false. For
example, consider the following function.

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

