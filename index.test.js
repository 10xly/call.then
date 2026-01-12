const assert = require("assert")
const call = require("./index")

describe("call.then", () => {
  it("should successfully call .then on a native promise", () => {
    const promise = Promise.resolve("success")
    const fn = (val) => val
    const result = call.then(promise, fn)
    
    assert.strictEqual(typeof result, "object")
    assert.strictEqual(typeof result.then, "function")
  })

  it("should successfully call .then on a thenable (Promises/A+ compatible)", () => {
    const thenable = {
      then: function (onFulfilled) {
        return onFulfilled("thenable")
      }
    }
    const fn = (val) => val
    const result = call.then(thenable, fn)

    assert.strictEqual(result, "thenable")
  })

  it("should throw a TypeError if the first argument is not a promise or thenable", () => {
    const invalidInputs = [
      null,
      undefined,
      "string",
      123,
      {},
      []
    ]

    invalidInputs.forEach((input) => {
      assert.throws(() => {
        call.then(input, () => {})
      }, {
        name: "TypeError",
        message: "callDotThen expects a promise or something that looks like a promises-a+ promise"
      })
    })
  })

  it("should correctly handle the callback function argument", (done) => {
    const promise = Promise.resolve("test-value")
    
    call.then(promise, (value) => {
      try {
        assert.strictEqual(value, "test-value")
        done()
      } catch (err) {
        done(err)
      }
    })
  })
})