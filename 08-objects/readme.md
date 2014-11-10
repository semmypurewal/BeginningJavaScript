### Overview

In the previous two sections, we explored arrays. Just to recap, arrays are
lists of values which we can index using numbers.

Sometimes it's useful to have data stored in structures that are indexed by
strings instead. In JavaScript, these are called _objects_. (Note
that this is slightly different from other languages, where you'll see these
data structures referred to as _dictionaries_ or _maps_.)

One way to think about a JavaScript object is as collection of _keys_ that map
to _values_. You can access and mutate the elements of an object in the same
way that you can access and mutate elements of an array, but instead of using
the numbered index, you use the name of the key.

Objects are good for associating a set of related data with a single variable
and building up custom data types. For instance, suppose we wanted to represent a
card in a card game. Cards have ranks and suits; without objects, we may try
something like this:

    var cardRank = "ace";
    var cardSuit = "spades";

The difficulty is that the two pieces of data aren't related except in the
programmer's mind. This is a recipe for bugs and brittle code. A better
approach is to use objects.

### Defining an Object

We can define a card object like this:

    var card = { "rank": "ace", "suit": "spades" };

Notice that defining one is similar to defining an array, but we use
curly-braces instead of square-brackets. In addition we have to
explicitly specify the key _and_ the value for each entry. We do that
by separating them with colons.

    var person = { "name": "Semmy", "age": 37 };

As is usually the case, there's nothing special about the identifier we use for
the variable name. We can create multiple cards with different variables.

    var anotherCard = { "rank": "two", "suit": "clubs" };

    var anotherPerson = { "name": "Jennifer", "age": 25 };

Here's another example that's similar to one of the examples we saw in the
section on arrays. We'll store a list of greetings, but instead of having the
indices be numbers, we'll have them be the associated language.

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
`greetings` object, the code becomes more readable since we know the language
we're referring to (instead of having to use an arbitrary index).

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
stored. Ordering matters for some sets of data but not others, so whether this
is good or bad depends on the types you are storing.

But like an array, if we try to access an element that doesn't exist we get the
special JavaScript value `undefined` as a result.

    greetings["swahili"];
    //=> undefined

    person["address"];
    //=> undefined

If we use valid JavaScript identifiers (think variable names) for our keys, we
can also use the dot operator to access elements of the array.

    person.name;
    //=> Semmy

    person.age
    //=> 37

    greetings.french;
    //=> bonjour

If we use numbers or invalid JavaScript identifiers for our keys, we'll run into
problems when we try to do this.

    var list = {
        "1": "first",
        "2": "second"
    };

    list["2"];
    //=> second

    list.2;
    //=> Syntax Error: Unexpected Number

### Mutating an Object

Like arrays, we can _mutate_ objects by setting the values with an assignment.

    person.name;
    //=> "Semmy"

    person.name = "Heather";

    person.name;
    //=> Heather

    person.age;
    //=> 37

We can also add new keys and values by using assignments.

    person["hometown"] = "Boston";

    person["hometown"];
    //=> "Boston"

### Using Variables for Keys

With arrays, you can use expressions or variables to index into an array:

    var array = [ "hello", "world", "this", "is", "a", "list" ];

    var lastIndex = array.length - 1;

    array[lastIndex];
    //=> "list"

You can also use expressions and variables to extract values from objects.

    var card = { "rank":"ace", "suit":"spades" };
    var key = "rank";

    card[key];
    //=> "ace"

Note that you have to use the square-bracket notation for this to work. In
other words, you can't do this using the dot-operator to access values by keys
stored in a variable.

    card.key;
    //=> undefined

That's because when you use the dot-operator, the identifier to the right of
the dot is interpreted as a string representing the key. So, here, in this
case, it's looking for a key called "key" instead of the value stored in the
variable. In other words, it's equivalent to this.

    card["key"];
    //=> undefined

### Using Array functions on Objects

Can we use all those wonderful array methods on objects? Not directly. Since
objects contain both keys and values, it's not immediately obvious how
something like `map` would work. Should it map over the keys, or the values, or
both? Should it return an object or an array?

We might think something like this would work:

    // this doesn't work in JavaScript
    card.map(function (key, value) {
        return capitalize(value);
    });
    //=> [ "Ace", "Spades" ]

Many languages allow you to call these types of functions on maps, but
JavaScript doesn't have the ability built in.

On the other hand, you can easily extract the set of keys and the collection of
values as arrays and then operate on them if you wish. To get the keys, you
can use the `Object.keys` function.

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

    values.map(function (value) {
        return capitalize(value);
    });
    //=> [ "Ace", "Spades" ]

We can actually build a more robust solution to doing this by converting a
single object into an array of objects that contain a `key` and a `value`.
Before we do that, let's look at an example of an array of objects.

### Arrays of Objects

In the practice problems of the previous section, we saw that we could have
arrays that contained other arrays (we created the `flatten` function to turn
those into a single-dimensional array). It's just as easy to have arrays of
objects; in fact, arrays of objects are very common in JavaScript.

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


Using the fact that we can build an array of objects, we can access our array
functions with objects in a much clearer way. For example, suppose instead of
having a single object like this:

    var card2 = { "suit": "spades", "rank": "two" };

we represented the same data as an array of objects like this:

    var cardArray = [
        { "key" : "suit", "value": "spades" },
        { "key" : "rank", "value": "two" }
    ];

Then we can easily use our array functions!

    cardArray.map(function (element) {
        var key = element.key;
        var value = element.value;

        return capitalize(value);
    });
    //=> [ "Spades", "Two" ]

It's cumbersome to represent all our objects in this way, but we can easily
write a function that takes care of this for us! For example:

    Object.keys(card2).reduce(function (arrayRep, key) {
        return arrayRep.concat([ { "key": key, "value": card2[key] } ]);
    }, []);
    //=> [ { "key" : "suit", "value": "spades" }, { "key" : "rank", "value": "two" } ];

We can actually generalize this idea into a single function.

    var toObjectArray = function (obj) {
        return Object.keys(obj).reduce(function (arrayRep, key) {
            return arrayRep.concat([ { "key":key, "value": obj[key] } ]);
        }, []);
    };

And this gives us access to our array functions on objects now!

    var person = { "name": "semmy", "age": 37 };

    toObjectArray(person).filter(function (entry) {
        return typeof entry.value === 'string' && entry.value[0] === "s";
    }).map(function (entry) {
        return entry.value;
    });
    //=> [ "semmy" ]

### Nested Objects

In previous sections, we've been modeling tweets as strings that are less than
140 characters. It turns out that a tweet is a lot more than just a string --
it also includes a lot of _metadata_ including a timestamp, geographic
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

Tweet objects are complex; they even contain sub-objects. For instance, you can
extract the user object from the tweet to get information about the user.

    tweet.user.name;
    //=> "Semmy Purewal"

    tweet.user.screen_name;
    //=> "semmypurewal"

And you can assign these sub-objects to new variables.

    var user = tweet.user;

    user.followers_count;
    //=> 483

Creating nested object literals isn't much different than creating normal
object literals -- it's just that the values are occasionally objects
themselves.

    var tweet = {
        "text": " this is an awesome tweet!",
        "created_at": "Mon Oct 20 14:06:17 +0000 2014",
        "source": "<a href="http://twitter.com" rel="nofollow">Twitter Web Client</a>",
        "user": {
            "name": "Semmy Purewal",
            "screen_name": "semmypurewal",
            "followers_count": 483
        }
    };

Similarly, objects can contain nested arrays. For example, suppose we wanted to
create a user object that had a list of tweets associated with that user.

    var user = {
        "name": "Semmy Purewal",
        "screen_name": "semmypurewal",
        "tweets": [
            "this is a tweet.",
            "this is another tweet!"
        ]
    };

When you access the element that is an array, you can use all the normal array
methods on it.

    user.tweets.forEach(function (tweet) {
        console.log(tweet);
    };
    //=> this is a tweet.
    //=> this is another tweet!


### Checking Object Types

It turns out we can use the `typeof` operator to do a type check against an
object:

    typeof {};
    //=> object

But we'll often want to confirm that the object has the expected structure. In
those cases, we might check a little deeper to confirm that it contains all the
expected properties.

    // let's assume tweet has a text string and screen_name for now
    var isTweet = function (tweet) {
        return typeof tweet === "object" &&
           typeof tweet.text === "string" &&
           tweet.text.length <= 140 &&
           typeof tweet.screen_name === "string" &&
           Object.keys(tweet).length === 2;
    }

In this example, we confirm that the `tweet` variable is pointing to a value
with the following properties.

1. The argument (tweet) is an object
2. The tweet object has a text property which is a string
3. The text property's length is no more than 140 characters
4. The tweet object has a screen_name property that is a string
5. The tweet object only has 2 properties

### Practice

For this set of questions, open up the file called `cards.html` in Chrome, then
open the developer console. There should be a variable defined called
`cards`. You can confirm this by typing it at the console.

    cards;
    //=> Array[5000]

This contains 5000 card objects, randomly generated by a function that you'll
write a little later. Interact with the console and answer the following
questions.

1. Which suit appears the most frequently?

2. Which rank appears the most frequently?

3. How many times does the ace of spades appear? What about the two of clubs?

4. Can you think of a way to determine which card appears the most frequently?
Obviously, you can repeat the process above for all 52 combinations, but is
there an automated way you can do it? By the end of all of the subsequent
exercises, you should be able to do this using a single function.

For the next set of questions, open up the file `tweets.html` in Chrome, then
open the developer console. There should be a variable defined called
`tweets`. You can confirm this by typing it at the console.

    tweets;
    //=> Array[500]

This is an array that contains a random sample of 500 tweets from the afternoon
of Sunday, October 26, 2014. Using our favorite array methods (`map`, `filter`,
`reduce`, `some`, and `every` methods) answer the following questions.

5. Create an array that only contains only the tweet texts that contain the word
"awesome" (upper or lower case). How many tweets are in the array?

6. How many of the tweets contains URLs in them? (You can just look for "http:"
as a substring).

7. How many of the tweets are associated with users who have underscores ("_")
in their screen name?

8. What is the screen name of the user with the most followers?

9. The "statuses_count" property of a user object contains the number of tweets
that the user has tweeted. How many users have tweeted exactly 1 tweet? What are
their screen names?

10. What is the average number of followers among those users associated with
tweets that contain "lol" (case insensitive)?

