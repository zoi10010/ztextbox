"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ZTextBox = props => {
  return /*#__PURE__*/_react.default.createElement("textbox", {
    className: "btn btn--".concat(props.kind, " CTA"),
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  });
};

var _default = ZTextBox;
exports.default = _default;