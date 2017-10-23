export default arrayify
// Here's where you'll write arrayify. Look at
// `api/src/routes/utils/arrayify.js` for instructions.

function arrayify(arr = []) {
  return Array.isArray(arr) ? arr : [arr]
}
