var _0x4392 = [
  "vec3\x20tColor\x20=\x20texture2D(\x20texture,\x20vUv\x20).rgb;",
  "transparent",
  "vertexShader",
  "fragmentShader",
  "vec4\x20mvPosition\x20=\x20modelViewMatrix\x20*\x20vec4(\x20position,\x201.0\x20);",
  "vUv\x20=\x20uv;",
  "float\x20a\x20=\x20(length(tColor\x20-\x20color)\x20-\x200.5)\x20*\x207.0;",
  "chromakey",
  "gl_FragColor\x20=\x20vec4(tColor,\x20a);",
  "uniform\x20vec3\x20color;",
  "uniform\x20sampler2D\x20texture;",
  "Component\x20attempted\x20to\x20register\x20before\x20AFRAME\x20was\x20available.",
  "color",
  "void\x20main(void)",
  "registerShader",
  "undefined",
  "varying\x20vec2\x20vUv;",
  "vec3",
  "uniform",
  "exports",
  "join",
  "LinearFilter",
  "map",
  "material",
  "VideoTexture",
  "loaded",
  "minFilter",
  "ShaderMaterial"
];
(function(_0x5a4991, _0x1a0973) {
  var _0x439253 = function(_0x71cfa1) {
    while (--_0x71cfa1) {
      _0x5a4991["push"](_0x5a4991["shift"]());
    }
  };
  _0x439253(++_0x1a0973);
})(_0x4392, 0x183);
var _0x71cf = function(_0x5a4991, _0x1a0973) {
  _0x5a4991 = _0x5a4991 - 0x87;
  var _0x439253 = _0x4392[_0x5a4991];
  return _0x439253;
};
!(function(_0x23a8a5) {
  function _0x5cc08c(_0x29b1dc) {
    var _0x345af9 = _0x71cf;
    if (_0x4daf47[_0x29b1dc]) return _0x4daf47[_0x29b1dc][_0x345af9(0x9f)];
    var _0x421d12 = (_0x4daf47[_0x29b1dc] = {
      exports: {},
      id: _0x29b1dc,
      loaded: !0x1
    });
    return (
      _0x23a8a5[_0x29b1dc]["call"](
        _0x421d12[_0x345af9(0x9f)],
        _0x421d12,
        _0x421d12[_0x345af9(0x9f)],
        _0x5cc08c
      ),
      (_0x421d12[_0x345af9(0x89)] = !0x0),
      _0x421d12[_0x345af9(0x9f)]
    );
  }
  var _0x4daf47 = {};
  return (
    (_0x5cc08c["m"] = _0x23a8a5),
    (_0x5cc08c["c"] = _0x4daf47),
    (_0x5cc08c["p"] = ""),
    _0x5cc08c(0x0)
  );
})([
  function(_0x5cbaf5, _0x4d97e9) {
    var _0x281bd2 = _0x71cf;
    if (_0x281bd2(0x9b) == typeof AFRAME) throw new Error(_0x281bd2(0x97));
    AFRAME[_0x281bd2(0x9a)](_0x281bd2(0x93), {
      schema: {
        src: { type: _0x281bd2(0xa2) },
        color: {
          default: { x: 0.1, y: 0.9, z: 0.2 },
          type: _0x281bd2(0x9d),
          is: _0x281bd2(0x9e)
        },
        transparent: { default: !0x0, is: _0x281bd2(0x9e) }
      },
      init: function(_0x1698ec) {
        var _0x38a739 = _0x281bd2,
          _0x30b34b = new THREE[_0x38a739(0x88)](_0x1698ec["src"]);
        (_0x30b34b[_0x38a739(0x8a)] = THREE[_0x38a739(0xa1)]),
          (this[_0x38a739(0x87)] = new THREE[_0x38a739(0x8b)]({
            uniforms: {
              color: { type: "c", value: _0x1698ec[_0x38a739(0x98)] },
              texture: { type: "t", value: _0x30b34b }
            },
            vertexShader: this[_0x38a739(0x8e)],
            fragmentShader: this[_0x38a739(0x8f)]
          }));
      },
      update: function(_0x52ab35) {
        var _0xa9ad12 = _0x281bd2;
        (this[_0xa9ad12(0x87)][_0xa9ad12(0x98)] = _0x52ab35[_0xa9ad12(0x98)]),
          (this[_0xa9ad12(0x87)]["src"] = _0x52ab35["src"]),
          (this[_0xa9ad12(0x87)]["transparent"] = _0x52ab35[_0xa9ad12(0x8d)]);
      },
      vertexShader: [
        _0x281bd2(0x9c),
        _0x281bd2(0x99),
        "{",
        _0x281bd2(0x91),
        _0x281bd2(0x90),
        "gl_Position\x20=\x20projectionMatrix\x20*\x20mvPosition;",
        "}"
      ]["join"]("\x0a"),
      fragmentShader: [
        _0x281bd2(0x96),
        _0x281bd2(0x95),
        _0x281bd2(0x9c),
        "void\x20main(void)",
        "{",
        _0x281bd2(0x8c),
        _0x281bd2(0x92),
        _0x281bd2(0x94),
        "}"
      ][_0x281bd2(0xa0)]("\x0a")
    });
  }
]);
