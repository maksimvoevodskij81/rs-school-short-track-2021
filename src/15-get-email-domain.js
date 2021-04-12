/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let dom = email.split('@').pop().toString();
  if (dom.startsWith('.')) {
    dom = dom.slice(0, 1);
  }
  return dom;
}

module.exports = getEmailDomain;
