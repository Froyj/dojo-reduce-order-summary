const assert = require("chai").assert;
const calcOrderSummary = require("../order-summary");

describe("calcOrderSummary", function () {
  describe("type of calcOrderSummary", function () {
    it("should return that tested entity is a function", function () {
      assert.typeOf(calcOrderSummary, "function");
    });
    it("should return an empty object when provided array is empty", function () {
      assert.deepEqual(calcOrderSummary([]), {});
    });
    it("should convert array into an object", function () {
      assert.deepEqual(calcOrderSummary([{ user: "toto", amount: 23 }]), {
        toto: 23,
      });
    });
    it("should return a correct summary", function () {
      assert.deepEqual(
        calcOrderSummary([
          { user: "toto", amount: 23 },
          { user: "Dino", amount: 40 },
        ]),
        {
          toto: 23,
          Dino: 40,
        }
      );
    });
    it("should return a correct summary without duplicates", function () {
      assert.deepEqual(
        calcOrderSummary([
          { user: "Jacques", amount: 50 },
          { user: "Dino", amount: 40 },
          { user: "Yves", amount: 10 },
          { user: "Dino", amount: 20 },
        ]),
        {
          Jacques: 50,
          Dino: 60,
          Yves: 20,
        }
      );
    });
  });
});
