### Overview

In the previous two sections, we explored arrays. Arrays can be thought of as
several pieces of data stored in a single structure that are indexed by numbers.

Believe it or not, sometimes it's useful to have data stored in structures that
are indexed by things that aren't numbers. These are often referred to as
_dictionaries_ or _maps_. In JavaScript, these data structures are (almost)
equivalent to JavaScript _objects_.

An object is just a collection of _keys_ that map to _values_. You can access
and mutate the elements of an object in the same way that you can access and
mutate elements of an array, but instead of using the numbered index, you use
the name of the key.

### Defining an Object

Objects are good for associating a set of related data with a single variable
and building up custom data types. For instance, suppose we wanted to write a
card game. Cards have ranks and suits. Without objects, we may try something
like this:

    var cardRank = "ace";
    var cardSuit = "spades";

The difficulty is that the two pieces of data aren't related except in the
programmer's mind. This is a recipe for bugs and brittle code. A better approach
is to use objects. We can define one like this.

    var card = { "rank":"ace", "suit":"spades" };

Notice that defining one is similar to defining an array, but we use
curly-braces instead of square-brackets. In addition have to explicitly specify
the key _and_ the value for each entry. We do that by separating them with
colons.

    var person = { "name":"Semmy", "age":37 };

Here's another example that's similar to one of the examples we saw in the
section on arrays. We'll store a list of greetings, but instead of having the
indices be numbers, we'll actually have them be the associated language.

    var greetings = {
        "spanish" : "hola",
        "hawaiian": "aloha",
        "english" : "hello",
        "french"  : "bonjour",
        "german"  : "hallo"
    };

Note that since whitespace doesn't matter in JavaScript, we can put each entry
on a different line to make our code more readable.

### Accessing Elements of an Object

Like arrays, we can use the square-bracket operator and a key to access the data
stored in an object.

    person["name"];
    //=> "Semmy"

    card["suit"];
    //=> "spades"

The advantage here over arrays should be clear. For example, when we use the
`greeting` object, the code becomes more readable since we know the language
we're referring to (instead of connecting the language with an arbitrary index).

    // here greetings is an object, and the semantics of the code is clear
    greetings["spanish"];
    //=> "hola"

    greetings["german"];
    //=> "hallo"

    // here greetings is an array, and things aren't as clear
    greetings[0];
    //=> "hola"

    greetings[4];
    //=> "hallo"

The trade-off is that there is no concrete ordering of the values in an object,
unlike an array where there is a clear sense of the order that the data is
stored. But like an array, if we try to access an element that doesn't exist we
get the special JavaScript value `undefined` as a result.

    greetings["swahili"];
    //=> undefined

    person["address"];
    //=> undefined

If we use valid JavaScript identifiers (think variable names) for our keys, we
can also use JavaScript's dot operator to access elements of the array.

    person.name;
    //=> Semmy

    person.age
    //=> 37

    greetings.french;
    //=> bonjour

But if we use numbers or invalid JavaScript identifiers for our keys,
we'll run into problems when we try to do this.

    var list = { "1":"first", "2":"second" }

    list["2"];
    //=> second

    list.2;
    //=> Syntax Error: Unexpected Number

### Mutating an Object

Like arrays, we can _mutate_ objects by setting updating the values.

    person.name = "Heather";

    person.name;
    //=> Heather

    person.age;
    //=> 37

We can also add new keys and values by using assignments.

    person["hometown"] = "Boston";

    console.log(person["hometown"]);
    //=> "Boston"

### Using Variables for Keys

With arrays, you can use expressions or variables to index into an array:

    var array = [ "hello", "world", "this", "is", "a", "list" ];
    var lastIndex = array.length - 1;
    array[lastIndex];
    //=> "list"

You can also use variables or expressions to extract values from objects. For
example:

    var card = { "rank":"ace", "suit":"spades" };
    var key = "rank";

    card[key];
    //=> "ace"

Note that you have to use the square-bracket notation for this to work. In other
words, you can't do this using the dot-operator to access values by keys stored
in a variable.

    card.key;
    //=> undefined

That's because when you use the dot-operator, the identifier to the right of the
dot is the actualy key. So, here, in this case, it's looking for a key called
"key" instead of the value stored in the variable.

### Using Array functions on Objects

Can we use all those wonderful array methods on objects? Not directly. Since
objects contain both keys and values, it's not clear how those functions would
work. But you can easily extract the set of keys and the collection of values
as arrays and then operate on them if you wish.

To get the keys, you have to use the `Object.keys` function.

    var card = { "rank":"ace", "suit":"spades" };
    var keys = Object.keys(card);

    keys;
    //=> [ "rank", "suit" ]

    keys[0];
    //=> "rank"

How can you get the values? You can combine the `map` function with the
`Object.keys` function!

    var values = Object.keys(card).map(function (key) {
        return card[key];
    });

    values;
    //=> [ "ace", "spades" ];

    values[1];
    //=> "spades"

### Arrays of Objects

In the practice problems of the previous section, we saw that we could have
arrays that contained other arrays (we created the `flatten` function to turn
those into a single-dimensional array). It's just as easy to have arrays of
objects, and -- in fact -- arrays of objects are very commonly used.

An array of objects allows us to store a collection of data that might be more
complex than simply numbers or strings. For example, we could represent a card
hand using an array of card objects:

    var hand = [
        { "rank":"ace",   "suit":"spades" },
        { "rank":"five",  "suit":"clubs" },
        { "rank":"ten",   "suit":"diamonds" },
        { "rank":"queen", "suit":"clubs" },
        { "rank":"five",  "suit":"hearts" }
    ];

### More Examples

In previous sections, we've been looking at tweets as strings that are less than
140 characters. It turns out that a tweet is a lot more than just a string -- it
also includes a lot of _meta-data_ including a timestamp, geographic
information, and the number of times the tweet has been retweeted, among many
other things. So if we get a real tweet back from Twitter, it might look
something like this:

    // assume getTweet returns a tweet object
    var tweet = getTweet();
    tweet.text;
    //=> "this is an awesome tweet!"

    tweet.created_at;
    //=> "Mon Oct 20 14:06:17 +0000 2014"

    tweet.source;
    //=> "<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>"

Tweet objects are complex, because they even contain sub-objects. For instance,
you can extract the user object from the tweet to get information about the
user.

    tweet.user.name;
    //=> "Semmy Purewal"

    tweet.user.screen_name;
    //=> "semmypurewal"

And you can assign these sub-objects to new variables.

    var user = tweet.user;

    user.followers_count;
    //=> 483

### Practice