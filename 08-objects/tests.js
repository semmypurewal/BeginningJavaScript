describe("#isUser", function () {
    it ("should return true if the argument is a user object, false otherwise", function () {
        expect(isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" })).toBe(true);
        expect(isUser({ "name":"Firstname Lastname", "screen_name":"user" })).toBe(true);
        expect(isUser("semmypurewal")).toBe(false);
        expect(isUser({ "age": 37, "name":"Semmy Purewal", "screen_name":"semmypurewal" })).toBe(false);
    });
});

describe("#userToDiv", function () {
    it ("should convert a user object into an HTML div", function () {
        var user = { "name":"Semmy Purewal", "screen_name":"semmypurewal" };
        expect(userToDiv(user)).toEqual("<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2></div>");

        var obama = { "name":"Barack Obama", "screen_name":"BarackObama"};
        expect(userToDiv(obama)).toEqual("<div><h1>Barack Obama</h1><h2>BarackObama</h2></div>");
    });

    it ("should throw an error if the argument is not a user object", function () {
        expect(function () {
            userToDiv({});
        }).toThrow();

        expect(function () {
            userToDiv({ "name":"failing test", "screen_name":"failingtest", "age": 50 });
        }).toThrow();
    });
});

describe("#userWithTweetsToDiv", function () {
    it ("should convert a user object with tweets into an HTML string", function () {
        var example = {
            "name": "Semmy Purewal",
            "screen_name":"semmypurewal",
            "tweets": [
                "this is a tweet.",
                "this is another tweet!"
            ]
        };

        expect(userWithTweetsToDiv(example)).
            toEqual("<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2><ul><li>this is a tweet.</li><li>this is another tweet!</li></ul></div>");
    });
});

describe("#frequencies", function () {
    it ("should return an object that contains the frequencies of each word in the array", function () {
        expect(frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]))
            .toEqual({ "hello" : 3, "world" : 2, "goodbye": 1, "thing" : 1 });

        expect(frequencies([])).toEqual({});

        expect(frequencies([ "hello", "world" ])).toEqual({ "hello" : 1, "world" : 1 });
    });
});
