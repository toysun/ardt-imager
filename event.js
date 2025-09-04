var _0x919d = [
  "utils",
  "exports",
  "_target",
  "querySelector",
  "updateEventListener",
  "loaded",
  "undefined",
  "styleParser",
  "eventName",
  "registerComponent",
  "entity",
  "_event",
  "Component\x20attempted\x20to\x20register\x20before\x20AFRAME\x20was\x20available.",
  "eventHandler",
  "sceneEl",
  "addEventListener",
  "event-set",
  "data",
  "removeEventListener"
];
(function(_0x4aa461, _0x44eeac) {
  var _0x919d09 = function(_0x83bb9f) {
    while (--_0x83bb9f) {
      _0x4aa461["push"](_0x4aa461["shift"]());
    }
  };
  _0x919d09(++_0x44eeac);
})(_0x919d, 0x15d);
var _0x83bb = function(_0x4aa461, _0x44eeac) {
  _0x4aa461 = _0x4aa461 - 0x1b0;
  var _0x919d09 = _0x919d[_0x4aa461];
  return _0x919d09;
};
(function(_0x56b536) {
  var _0x45ae25 = {};
  function _0x345cd2(_0x1d9be8) {
    var _0x51b682 = _0x83bb;
    if (_0x45ae25[_0x1d9be8]) return _0x45ae25[_0x1d9be8][_0x51b682(0x1bd)];
    var _0x1f3b4f = (_0x45ae25[_0x1d9be8] = {
      exports: {},
      id: _0x1d9be8,
      loaded: ![]
    });
    return (
      _0x56b536[_0x1d9be8]["call"](
        _0x1f3b4f[_0x51b682(0x1bd)],
        _0x1f3b4f,
        _0x1f3b4f[_0x51b682(0x1bd)],
        _0x345cd2
      ),
      (_0x1f3b4f[_0x51b682(0x1c1)] = !![]),
      _0x1f3b4f[_0x51b682(0x1bd)]
    );
  }
  return (
    (_0x345cd2["m"] = _0x56b536),
    (_0x345cd2["c"] = _0x45ae25),
    (_0x345cd2["p"] = ""),
    _0x345cd2(0x0)
  );
})([
  function(_0x65b8e8, _0x36d610) {
    var _0x570b21 = _0x83bb,
      _0x1e7c37 = AFRAME[_0x570b21(0x1bc)][_0x570b21(0x1b0)];
    if (typeof AFRAME === _0x570b21(0x1c2)) throw new Error(_0x570b21(0x1b5));
    AFRAME[_0x570b21(0x1b2)](_0x570b21(0x1b9), {
      schema: {
        default: "",
        parse: function(_0x1e5c99) {
          return _0x1e7c37["parse"](_0x1e5c99);
        }
      },
      multiple: !![],
      init: function() {
        var _0x36cba1 = _0x570b21;
        (this[_0x36cba1(0x1b6)] = null), (this["eventName"] = null);
      },
      update: function(_0x1dc3df) {
        var _0x299bc8 = _0x570b21;
        this[_0x299bc8(0x1bb)](),
          this[_0x299bc8(0x1c0)](),
          this["addEventListener"]();
      },
      remove: function() {
        var _0x1572a1 = _0x570b21;
        this[_0x1572a1(0x1bb)]();
      },
      pause: function() {
        var _0x3a8f12 = _0x570b21;
        this[_0x3a8f12(0x1bb)]();
      },
      play: function() {
        var _0x3dd098 = _0x570b21;
        this[_0x3dd098(0x1b8)]();
      },
      updateEventListener: function() {
        var _0x394c1d = _0x570b21,
          _0x1bdbbc = this[_0x394c1d(0x1ba)],
          _0x26924b = this["el"],
          _0x3a12dd,
          _0x52689c,
          _0x4c228b;
        (_0x3a12dd = _0x1bdbbc[_0x394c1d(0x1b4)] || this["id"]),
          (_0x52689c = _0x1bdbbc[_0x394c1d(0x1be)]),
          (_0x4c228b = _0x52689c
            ? _0x26924b[_0x394c1d(0x1b7)][_0x394c1d(0x1bf)](_0x52689c)
            : _0x26924b),
          (this["eventName"] = _0x3a12dd);
        const _0x18781f = () => {
          var _0xa154d = _0x394c1d,
            _0x472275;
          for (_0x472275 in _0x1bdbbc) {
            if (_0x472275 === _0xa154d(0x1b4) || _0x472275 === "_target")
              continue;
            AFRAME[_0xa154d(0x1bc)][_0xa154d(0x1b3)]["setComponentProperty"][
              "call"
            ](this, _0x4c228b, _0x472275, _0x1bdbbc[_0x472275]);
          }
        };
        !isNaN(_0x1bdbbc["_delay"])
          ? (this[_0x394c1d(0x1b6)] = () => {
              setTimeout(_0x18781f, parseFloat(_0x1bdbbc["_delay"]));
            })
          : (this["eventHandler"] = _0x18781f);
      },
      addEventListener: function() {
        var _0x4e527e = _0x570b21;
        this["el"][_0x4e527e(0x1b8)](this["eventName"], this[_0x4e527e(0x1b6)]);
      },
      removeEventListener: function() {
        var _0x356a46 = _0x570b21;
        this["el"]["removeEventListener"](
          this[_0x356a46(0x1b1)],
          this["eventHandler"]
        );
      }
    });
  }
]);
