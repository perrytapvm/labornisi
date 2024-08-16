function Hh(a, b, c) {
  var d = false;
  var e = cb; // Initial context value
  var f = b.contextType; // The type of context the component uses
  
  if (typeof f === "object" && f !== null) {
    f = qa(f); // Get the context
  } else {
    // Otherwise, get the default context value
    e = ea(b) ? qb : J.current;
    d = b.contextTypes;
    if (d !== null && d !== undefined) {
      f = (d !== null && d !== undefined) ? ... // Continue processing context types
    }
  }
}
