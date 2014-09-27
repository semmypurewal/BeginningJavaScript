### Overview

In the previous section we learned about boolean types and boolean
expressions. These fundamental ideas are common throughout all programming
languages -- they give us the ability to control what code gets executed
depending on certain conditions.

To do this, we'll introduce a new basic structure -- `if` statements.

### `if` statements

An `if` statement is pretty straight-forward -- it accepts a boolean expression,
and a set of code. It executes the code only if the boolean expression evaluates
to `true`.

    var num = 105;

    if (num > 100) {
        console.log("the number is bigger than 100");
    }
    console.log("finished!");

    //=> the number is bigger than 100
    //=> finished!

In this case, the value stored in `num` is bigger than 100, so both logging
statements are executed. Similarly, if the boolean expression evaluates to
`false` the code-block will be skipped over.

    var num = 99;

    if (num > 100) {
        console.log("the number is bigger than 100");
    }
    console.log("finished!");

    //=> finished!

Since the value stored in `num` is not bigger than 100 (it's 99), it skips over
the `if` statements associated code block and just executes the final log
statement.

### `else` clauses in `if` statements

Conditional expressions with `if` statements also allow you to include an `else`
clause, which executes only if the boolean expression evaluates to `false`.

    var anotherNum = 95;

    if (anotherNum > 100) {
        console.log("the number is bigger than 100");
    } else {
        console.log("the number is not bigger than 100");
    }

    console.log("finished!");

    //=> the number is not bigger than 100
    //=> finished!

In this case, the value stored in `anotherNum` is 95. Since that's not greater
than 100 the conditional expression only executes the code block associated with
the `else` clause.

### Writing robust functions

One thing that if statements allow us to do is to issue errors in cases where
inputs to a function don't meet our expectations. For example, recall our
`addThree` function from earlier.

    var addThree = function (a, b, c) {
        return a + b + c;
    }

This function works as expected if the parameters are numbers, but is completely
unexpected if the parameters are other values.

    addThree(1, 2, 3);
    //=> 6

    addThree(1, 2, "hello");
    //=> 3hello

    addThree("hello", 1, 2);
    //=> hello12

While this may not seem like such an issue on the surface, the results of
function calls are often passed to other functions, whose results are passed to
other functions, and so on. When this happens and one of the functions is
operating on arguments that lead to undefined behavior, our entire program can
become unstable.

Therefore it's a good idea to not allow that to happen. JavaScript has an
operator called `throw` which allows us to terminate the program to let the
programmer (or a user) know that it has entered an unexpected state.

    var addThree = function (a, b, c) {
        if (!isNumber(a) || !isNumber(b) || !isNumber(c)) {
            throw "the arguments to addThree must be numbers!"
        }
        return a + b + c;
    }

Now our function is a bit more robust and won't propogate invalid results
throughout our program.

    addThree(1, 2, 3);
    //=> 6

    addThree(1, 2, "hello");
    //=> the arguments to addThree must be numbers!

    addThree("hello", 1, 2);
    //=> the arguments to addThree must be numbers!

### Practice