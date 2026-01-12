const isThenable = require("is-promise")
const isPromise = require("p-is-promise")
const or = require("es-logical-or-operator")
const not = require("es-logical-not-operator")
const $TypeError = require("es-error-intrinsics/TypeError")
const construct = require("construct-new")
const just = require("basic-functions")
const ar = require("as-array")
const apply = require("uncurry-x")(require("function.apply-x"))

const call = (module.exports = {
  then: function callDotThen(promise, fn) {
    if (not(or(isPromise(promise), isThenable(promise)))) {
      return just.throw(
        construct({
          target: $TypeError,
          args: ar(
            "callDotThen expects a promise or something that looks like a promises-a+ promise"
          )
        })
      )
    }
    const then = promise.then
    return apply(then, promise, ar(fn))
  }
})

call.then.toString()