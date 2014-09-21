What happens when you print out the value of a variable that you have
declared but you didn't define?

Identifiers have some pretty specific rules in JavaScript. Experiment
with declaring variables using various symbols other than letters and
numbers and see when you get a Syntax Error.

Declare and define a variable that stores your name. Using that
variable, construct a new variable that represents a greeting by
concatentating "Hello" in front of your name. For example, we'd want
to store the value "Hello Semmy" in a variable, where "Semmy" is
stored in another variable.

Using just the name variable from the previous question, create a more
complex greeting that looks like "Hello, Semmy!" and store that in a
variable.

Create a variable that represents a worker's hourly wage. Create
another variable that represents the number of hours a worker has
worked. Store values in both of those variables, and create a variable
that stores the total wage based on the number of hours worked and the
hourly wage.

We've seen that variables can store strings and numbers. We've also
seen that when we have two strings the `+` operator means
_concatenation_, whereas when we have two number variables it
represents _addition_. What happens when we mix and match number and
string variables? Give it a try and do your best to explain what you
see.

In the last example, we ended up with a long decimal number. It might
be worthwhile to round it off, but we don't know how to do that. The
_Mozilla Developer Network_ has excellent JavaScript documentation,
and there is a special _function_ called `Math.round` that will help
us do that. It would be worthwhile for you to read the documentation
on this function here:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

You don't have to actually use it unless you're brave, but it's a good
idea to get in the habit of reading documentation as early as possible.