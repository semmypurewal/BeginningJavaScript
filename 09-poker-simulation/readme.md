### Poker Overview

Poker is a game that is played with a deck of cards and is based on the idea
that certain patterns of five-card hands appear less frequently than others.

The simplest pattern is a _pair_ of ranks. In this case, your hand has two cards
with the same rank. In the JavaScript object world, that would look something
like this.

    var pair = [
        {"suit":"clubs","rank":"four"},
        {"suit":"spades","rank":"nine"},
        {"suit":"diamonds","rank":"four"},
        {"suit":"spades","rank":"ace"},
        {"suit":"clubs","rank":"queen"}
    ];

Here, you'll see that the rank `four` appears twice. Slightly more interesting
is a hand that has two pairs.

    var twoPair = [
        {"suit":"clubs","rank":"four"},
        {"suit":"spades","rank":"nine"},
        {"suit":"diamonds","rank":"four"},
        {"suit":"spades","rank":"ace"},
        {"suit":"clubs","rank":"nine"}
    ];

If you deal a five card hand from a shuffled deck, it is mor likely that you'll
get a pair than two pairs. Therefore, in the game of poker, we say a hand with
two pairs _beats_ a hand with a pair.

The next hand that will occur with some frequency is called _three of a
kind_. This is similar to a pair, but it has _three_ of the same rank.

    var threeOfAKind = [
        {"suit":"hearts","rank":"four"},
        {"suit":"spades","rank":"nine"},
        {"suit":"diamonds","rank":"four"},
        {"suit":"spades","rank":"ace"},
        {"suit":"clubs","rank":"four"}
    ];

A hand with three of a kind is less frequent than a hand with two pairs, so
three of a kind beats two pair.

You might intuitively think that _four of a kind_ would be a poker hand, and
you'd be correct. But it's not the next pattern that occurs in the ordering of
poker hands. The next one is a _straight_, which means all five cards include
sequential ranks. So a straight might look like this.

    var straight1 = [
        {"suit":"clubs","rank":"four"},
        {"suit":"spades","rank":"two"},
        {"suit":"diamonds","rank":"five"},
        {"suit":"spades","rank":"three"},
        {"suit":"clubs","rank":"six"}
    ];

You'll see the ranks include "two", "three", "four", "five" and "six." It
doesn't matter if they are ordered in the hand or not, because you're allowed to
shift them around.

What's interesting in the straight scenario is that an "ace" can count as either
the highest card or the lowest card. So both of these are also valid straights.

    var straight2 = [
        {"suit":"clubs","rank":"four"},
        {"suit":"spades","rank":"two"},
        {"suit":"diamonds","rank":"five"},
        {"suit":"spades","rank":"three"},
        {"suit":"clubs","rank":"ace"}
    ];

    var straight3 = [
        {"suit":"hearts","rank":"ten"},
        {"suit":"clubs","rank":"jack"},
        {"suit":"diamonds","rank":"queen"},
        {"suit":"hearts","rank":"king"},
        {"suit":"spades","rank":"ace"}
    ];

So in `straight2` we have the "ace" representing the lowest rank (or "one" in
this case) whereas in `straight3` we have the "ace" representing the highest
rank.

Some of the patterns don't have anything to do with ranks at all! The _flush_ is
the next poker hand in the ordering. It just means that all of the cards in the
hand have the same suit.

    var flush = [
        {"suit":"diamonds","rank":"four"},
        {"suit":"diamonds","rank":"ace"},
        {"suit":"diamonds","rank":"two"},
        {"suit":"diamonds","rank":"queen"},
        {"suit":"diamonds","rank":"six"}
    ];

After that, we have the _full house_ which just means the hand has a pair of
ranks and a three of a kind of another rank.

    var fullHouse = [
        {"suit":"hearts","rank":"four"},
        {"suit":"spades","rank":"nine"},
        {"suit":"diamonds","rank":"four"},
        {"suit":"diamonds","rank":"nine"},
        {"suit":"clubs","rank":"four"}
    ];

In this example, we have a pair of fours and three nines. Next comes _four of a
kind_ which we mentioned earlier.

    var fourOfAKind = [
        {"suit":"hearts","rank":"four"},
        {"suit":"spades","rank":"four"},
        {"suit":"diamonds","rank":"four"},
        {"suit":"diamonds","rank":"nine"},
        {"suit":"clubs","rank":"four"}
    ];

And the remainder are combinations of previous poker hands. You can have a
straight and a flush at the same time. It's appropriately named a _straight
flush_.

    var straightFlush = [
        {"suit":"hearts","rank":"four"},
        {"suit":"hearts","rank":"three"},
        {"suit":"hearts","rank":"two"},
        {"suit":"hearts","rank":"five"},
        {"suit":"hearts","rank":"six"}
    ];

And last, but not least, the rarest poker hand of all is a straight flush with
an ace as the highest card.

    var royalFlush = [
        {"suit":"hearts","rank":"ten"},
        {"suit":"hearts","rank":"jack"},
        {"suit":"hearts","rank":"queen"},
        {"suit":"hearts","rank":"king"},
        {"suit":"hearts","rank":"ace"}
    ];

Of course, there's always the possibility that a hand contains none of the
patterns specified above. In that case we refer to the hand as a "high card"
hand, since if two players have no patterns, the highest card is used to
determine the winner.

    var highCard = [
        {"suit":"clubs","rank":"four"},
        {"suit":"spades","rank":"nine"},
        {"suit":"diamonds","rank":"three"},
        {"suit":"spades","rank":"ace"},
        {"suit":"clubs","rank":"queen"}
    ];

### Poker Simulation

Hopefully, you're asking yourself why the poker hand patterns are ordered the
way they are. For some of the patterns it's probably intuitive -- a three of a
kind _contains_ a pair, so it seems natural that a three of a kind occurs less
frequently.

For others, it's not so intuitive. For example, why is it that a full house
beats a flush, and not the other way around?

There are two ways to answer this question. The first is to use compute the
probabilities of each hand and then use those to define the ordering. If we were
learning statistics, I would show you that approach.

The other approach is to write a computer program that deals thousands of random
hands, and keep a count of the number of time each rank appears. If our
simulation is correct, it should convince us of the ordering.

We'll finish out our JavaScript journey by doing exactly that. We'll start by
defining the card type (as we've roughly done previously) and then building up
the hand types from there. In `practice.js`, you'll implement each function and
confirm that it passes the tests.

To make this a little more manageable, the `contains[Hand]` functions, don't
need to verify that the hand _only_ contains the specified pattern. For example,
`containsPair` should return `true` if the hand is a pair, or a full-house, or a
three-of-a-kind, or a four-of-a-kind, since all of those hands have a pair in
them somewhere.

At the end, you'll implement the `highestRank` function which will return a
string representation of the highest rank that a hand has. This will then allow
us to build the simulation.

In the simulation itself, you'll call the `dealHand` function 1000 (or 10,000 or
100,000) times and use that to create the hands. You'll also calculate the
frequency of each hand, and -- finally -- print those frequencies out to the
console. You should be able to use code from previous sections to do this, but I
recommend you write everything from scratch so you can practice writing new
code.

Good luck!
