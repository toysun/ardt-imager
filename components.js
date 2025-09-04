var _0xa32a = [
  "markerFound",
  "arContext",
  "scannerhandler",
  "intersectObjects",
  "arSessionReady",
  "touchmove",
  "Raycaster",
  "renderer",
  "height",
  "getBoundingClientRect",
  "markerLost",
  "touchstart",
  "[cursor]",
  "top",
  "type",
  "registerComponent",
  "clientX",
  "mousedown",
  "stopPropagation",
  "projectionMatrix",
  "systems",
  "children",
  "bind",
  "addEventListener",
  "#scanner",
  "width",
  "querySelector",
  "object",
  "item",
  "camera",
  "arjs",
  "setFromCamera",
  "hidden",
  "#logo",
  "#marker",
  "copy",
  "emit"
];
(function(_0x4f236f, _0x146a56) {
  var _0xa32a3d = function(_0x403ec6) {
    while (--_0x403ec6) {
      _0x4f236f["push"](_0x4f236f["shift"]());
    }
  };
  _0xa32a3d(++_0x146a56);
})(_0xa32a, 0x115);
var _0x403e = function(_0x4f236f, _0x146a56) {
  _0x4f236f = _0x4f236f - 0x105;
  var _0xa32a3d = _0xa32a[_0x4f236f];
  return _0xa32a3d;
};
var _0x19c069 = _0x403e;
AFRAME[_0x19c069(0x127)]("logohandler", {
  init: function() {
    var _0xe7f10e = _0x19c069;
    const _0x56405d = document["querySelector"](_0xe7f10e(0x115)),
      _0x3cdfc8 = document[_0xe7f10e(0x10d)](_0xe7f10e(0x114));
    _0x56405d["addEventListener"](
      _0xe7f10e(0x118),
      function() {
        var _0xb86d70 = _0xe7f10e;
        _0x3cdfc8[_0xb86d70(0x113)] = ![];
      }[_0xe7f10e(0x109)](this)
    ),
      _0x56405d["addEventListener"](
        _0xe7f10e(0x122),
        function() {
          var _0x155676 = _0xe7f10e;
          _0x3cdfc8[_0x155676(0x113)] = ![];
        }[_0xe7f10e(0x109)](this)
      );
  }
}),
/*  AFRAME[_0x19c069(0x127)](_0x19c069(0x11a), {
    init: function() {
      var _0x8e3db1 = _0x19c069;
      const _0x57746a = document[_0x8e3db1(0x10d)]("#marker"),
        _0x2610bd = document["querySelector"](_0x8e3db1(0x10b));
      _0x57746a[_0x8e3db1(0x10a)](
        _0x8e3db1(0x118),
        function() {
          var _0x170122 = _0x8e3db1;
          _0x2610bd[_0x170122(0x113)] = !![];
        }["bind"](this)
      ),
        _0x57746a[_0x8e3db1(0x10a)](
          "markerLost",
          function() {
            var _0x1b30a9 = _0x8e3db1;
            _0x2610bd[_0x1b30a9(0x113)] = ![];
          }[_0x8e3db1(0x109)](this)
        );
    }
  }),
  */
  
  AFRAME[_0x19c069(0x127)]("ar-session-notifier", {
    init: function() {
      var _0x1ba741 = this["el"]["sceneEl"],
        _0x3d9742 = null,
        _0x5e4e11 = setInterval(function() {
          var _0x17c7a9 = _0x403e;
          _0x3d9742 =
            _0x1ba741[_0x17c7a9(0x107)][_0x17c7a9(0x111)]["_arSession"];
          if (!_0x3d9742) return;
          _0x1ba741[_0x17c7a9(0x117)](_0x17c7a9(0x11c)),
            clearInterval(_0x5e4e11);
        });
    }
  }),
  AFRAME["registerComponent"]("cursor-modifier", {
    init: function() {
      var _0x5355a3 = _0x19c069,
        _0x4a50f7 = this["el"];
      _0x4a50f7["addEventListener"](_0x5355a3(0x11c), function() {
        var _0x541a53 = _0x5355a3,
          _0x309824 =
            _0x4a50f7[_0x541a53(0x107)][_0x541a53(0x111)]["_arSession"],
          _0x37cdcd = new THREE[_0x541a53(0x11e)](),
          _0x3bb8fc = new THREE["Vector2"](),
          _0x1aeb19 = document["querySelector"](_0x541a53(0x124)),
          _0x508cf4 = _0x309824[_0x541a53(0x119)],
          _0x1e0f0b = _0x4a50f7[_0x541a53(0x110)];
        function _0x378a34(_0x398159) {
          var _0x10fd81 = _0x541a53;
          _0x1e0f0b[_0x10fd81(0x106)][_0x10fd81(0x116)](
            _0x508cf4["getProjectionMatrix"]()
          ),
            _0x1e0f0b["projectionMatrixInverse"]["getInverse"](
              _0x1e0f0b["projectionMatrix"]
            );
          var _0x1db786;
          _0x398159[_0x10fd81(0x126)] === _0x10fd81(0x11d) ||
          _0x398159[_0x10fd81(0x126)] === _0x10fd81(0x123)
            ? (_0x1db786 = _0x398159["touches"][_0x10fd81(0x10f)](0x0))
            : (_0x1db786 = _0x398159);
          var _0x6ab5a1 = _0x4a50f7[_0x10fd81(0x11f)]["domElement"][
            _0x10fd81(0x121)
          ]();
          (_0x3bb8fc["x"] =
            ((_0x1db786[_0x10fd81(0x128)] - _0x6ab5a1["left"]) /
              _0x6ab5a1[_0x10fd81(0x10c)]) *
              0x2 -
            0x1),
            (_0x3bb8fc["y"] =
              -(
                (_0x1db786["clientY"] - _0x6ab5a1[_0x10fd81(0x125)]) /
                _0x6ab5a1[_0x10fd81(0x120)]
              ) *
                0x2 +
              0x1),
            _0x37cdcd[_0x10fd81(0x112)](_0x3bb8fc, _0x1e0f0b);
          var _0x4a3458 = _0x37cdcd[_0x10fd81(0x11b)](
            _0x4a50f7["object3D"][_0x10fd81(0x108)],
            !![]
          );
          _0x4a3458["length"] > 0x0 &&
            _0x4a3458[0x0][_0x10fd81(0x10e)]["el"][_0x10fd81(0x117)]("click"),
            _0x398159[_0x10fd81(0x105)]();
        }
        window[_0x541a53(0x10a)](_0x541a53(0x129), _0x378a34, ![]);
      });
    }
  });
