/**
 * The 'pre' function that is executed before the HTML is rendered
 * @param context The current context of processing pipeline
 * @param context.content The content
 */
function pre(context) {
  context.content.time = `${new Date()}`;
  context.content.random = `${100 + Math.random()}`;
}

module.exports.pre = pre;
