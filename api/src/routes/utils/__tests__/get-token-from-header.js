// Things to know:
// - `test` is a global function from Jest:
//   `test(messageString, testerFunction)`
//   Learn more here: https://facebook.github.io/jest/docs/api.html#testname-fn
// - `expect` is a global function from Jest
//   which allows you to make assertsions. For
//   example:
//     `expect(1).toBe(1)`
//   Learn more here: https://facebook.github.io/jest/docs/expect.html
//
// Write unit tests for getTokenFromHeader.
// See `api/src/routes/utils/get-token-from-header.js`
// to see how this function has been implemented and
// how it's intended to be used. Write at least two unit
// tests to ensure that that use case is always supported.
import getTokenFromHeader from '../get-token-from-header'

test.skip('this is the title of your test', () => {
  // this is where you put your test code. Write code that will
  // throw an error if getTokenFromHeader has a bug. The `expect`
  // global is a utility that makes writting such assertions easier,
  // but you can do it however you like.
})

test('getTokenFromHeader returns a token if a token is in header', () => {
  const req = tokenReq('Token Blah.Blah.Blah')
  const token = getTokenFromHeader(req)
  expect(token).toBe('Blah.Blah.Blah')
})

test('getTokenFromHeader returns null if no token in header', () => {
  const req = tokenReq()
  const token = getTokenFromHeader(req)
  expect(token).toBeNull()
})

function tokenReq(req) {
  return { headers: 
    { authorization: req }
  }
}
//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=API%20Unit&em=luke.fiji@gmail.com
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
});
