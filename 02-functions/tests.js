describe ("#add", function () {
    it ("should add two numbers", function () {
        var result = add(5, 2);

        expect(result).toBe(7);

        result = add(-1, 100);

        expect(result).toBe(99);
    });
});

describe ("#totalCost", function () {
    it ("should return the pretax total cost given a quantity of items and individual prices", function () {
        var result = totalCost(5, 5.99);

        expect(result).toBe(29.950000000000003);

        result = totalCost(10, 10.00);

        expect(result).toBe(100.00);
    });
});

describe ("#cardString", function () {
    it ("should return a string representation of a card given a suit and a rank", function () {
        var result = cardString("ace", "spades");

        expect(result).toBe("ace of spades");

        result = cardString("ten", "clubs");

        expect(result).toBe("ten of clubs");
    });
});

describe("#htmlTags", function () {
    describe("#openTag", function () {
        it ("should construct an opening tag with the given tag name", function () {
            expect(openTag("p")).toEqual("<p>");
            expect(openTag("div")).toEqual("<div>");
        });


    });

    describe("#closeTag", function () {
        it ("should construct an closeing tag with the given tag name", function () {
            expect(closeTag("p")).toEqual("</p>");

            expect(closeTag("div")).toEqual("</div>");
        });
    });
});

describe("#toTagString", function () {
    it ("should construct a tagged string with the specified tag and the given content", function () {
        expect(toTagString("p", "hello world!")).toEqual("<p>hello world!</p>");
        expect(toTagString("em", "this is important stuff!")).toEqual("<em>this is important stuff!</em>");
    });
});
