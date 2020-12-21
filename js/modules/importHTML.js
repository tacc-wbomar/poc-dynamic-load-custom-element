/**
 * Clone markup from an endpoint into a specific element
 * @param {tring} markupUrl - The URL at which to fetch the markup
 * @returns {Promise<string>} Promise that returns markup if resolved
 */
export function fromURL(markupUrl) {
  if (markupUrl) {
    return fetch(markupUrl).then((response) => {
      const markup = response.text();
      return markup;
    }).catch(err => {
      console.error(err);
    });
  } else {
    return Promise.reject(new Error('No `markupUrl` provided'));
  }
}
