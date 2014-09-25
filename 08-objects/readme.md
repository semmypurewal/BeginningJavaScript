### Overview

In the previous two sections, we explored arrays. Arrays can be thought of as
several pieces of data stored in a single structure that are indexed by numbers.

Believe it or not, sometimes it's useful to have data stored in structures that
are indexed by things that aren't numbers. These are often referred to as
_dictionaries_ or _maps_. In JavaScript, these data structures are (almost)
equivalent to JavaScript _objects_. An object is just a collection of _keys_
that map to _values_. You can access and mutate the elements of an object in the
same way that you can access and mutate elements of an array, but instead of
using the numbered index, you use the name of the key.

Defining one is similar to defining an array, but we use curly-braces and have
to specify the key _and_ the value for each entry. We do that by separating them
with semi-colons.

    var person = { "name":"Semmy", "age":37 }

    person["name"];
    //=> Semmy

    person["age"];
    //=> 37

If we use strings for our keys, we can also use JavaScript's dot operator to
access elements of the array.

    person.name;
    //=> Semmy

    person.age
    //=> 37

But if we use numbers for our keys, we'll run into problems when we try to do
this.

    var list = { "1":"first", "2":"second" }

    list[2];
    //=> second

    list.2;
    //=> Syntax Error: Unexpected Number

Like arrays, we can _mutate_ objects by setting updating the values.

    person.name = "John";

    person.name;
    //=> John

    person.age;
    //=> 37


### What are these good for?

Objects are good for associating a set of related data with a single variable
and building up custom data types. For instance, suppose we wanted to write a
card game. Cards have ranks and suits. Without objects, we may try something
like this:

    var cardRank = "ace";
    var cardSuit = "spades";

The difficulty is that the two pieces of data aren't related except in the
programmer's mind. This is a recipe for bugs and brittle code. A better approach
is to use objects:

    var card = { "rank":"ace", "suit":"spades" }

This also allows us to create arrays of cards. For example, we could represent a
card hand using an array of card objects:

    var hand = [
        { "rank":"ace",  "suit":"spades" },
        { "rank":"five", "suit":"clubs" },
        { "rank":"ten",  "suit":"diamonds" },
        { "rank":"queen","suit":"clubs" },
        { "rank":"three","suit":"hearts" }
    ];


### Using Array functions on Objects

### More Examples

### Practice