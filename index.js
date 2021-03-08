(async () => {
  String.prototype.replaceWithMask = function (start, end) {
    return this.substr(0, start) + '******' + this.substr(-end, end)
  }
  require('./AutoSignMachine.js').run()
})()
