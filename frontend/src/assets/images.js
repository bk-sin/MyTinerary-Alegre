var map = {
  "./argentina.jpg": 72,
  "./india.jpg": 73,
  "./indonesia.jpg": 74,
  "./italy.jpg": 75,
  "./japan.jpg": 76,
  "./mexico.jpeg": 77,
  "./russia.jpg": 78,
  "./spain.jpg": 79,
  "./sudafrica.png": 80,
  "./tailandia.jpg": 81,
  "./vietnam.jpg": 82,
  "./usa.jpg": 83,
}

function webpackContext(req) {
  var id = webpackContextResolve(req)
  return require.cache(id)
}
function webpackContextResolve(req) {
  if (!require.cache.o(map, req)) {
    var e = new Error("Cannot find module '" + req + "'")
    e.code = "MODULE_NOT_FOUND"
    throw e
  }
  return map[req]
}
webpackContext.keys = function webpackContextKeys() {
  return Object.keys(map)
}
webpackContext.resolve = webpackContextResolve
module.exports = webpackContext
webpackContext.id = 71
