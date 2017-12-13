'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var _jsxFileName = 'C:\\folder\\new\\gol\\components\\Footer.js';

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

var _Grid = require('material-ui/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _colors = require('../helpers/colors');

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var Footer = function Footer(_ref) {
	var classes = _ref.classes,
	    screen = _ref.screen;

	var direction = screen.width < 600 ? 'column' : 'row';
	var align = screen.width < 600 ? 'center' : 'flex-start';
	var push = null;
	var h = 0;

	var setHeight = function setHeight(el) {
		if (el && push) {
			var _push$getBoundingClie = push.getBoundingClientRect(),
			    topPush = _push$getBoundingClie.top,
			    bottomPush = _push$getBoundingClie.bottom;

			var _el$getBoundingClient = el.getBoundingClientRect(),
			    topFooter = _el$getBoundingClient.top,
			    bottomFooter = _el$getBoundingClient.bottom;

			var heightPush = bottomPush - topPush;
			var heightFooter = bottomFooter - topFooter;
			var height = screen.height - Math.floor(heightFooter) - Math.floor(topPush);
			if (height < 0) {
				push.style.height = 0;
			} else {
				push.style.height = height + 'px';
			}
		}
	};
	return _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'wrapper',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 31
		}
	}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, justify: "center", direction: direction, alignItems: align, __source: {
			fileName: _jsxFileName,
			lineNumber: 34
		}
	}, _react2.default.createElement(_Grid2.default, { item: true, xs: true, style: { maxWidth: "160px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 37
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'link',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 39
		}
	}, _react2.default.createElement('a', { href: 'https://github.com/ghajl', target: '_blank', className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 42
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 43
		}
	}, _react2.default.createElement('svg', { style: { width: 24, height: 24 }, className: 'jsx-3047024650' + ' ' + 'icon',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 45
		}
	}, _react2.default.createElement('path', { d: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z', className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 46
		}
	})), _react2.default.createElement('div', {
		className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 49
		}
	}, 'ghajl'))))), _react2.default.createElement(_Grid2.default, { item: true, xs: true, style: { maxWidth: "160px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'link',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 57
		}
	}, _react2.default.createElement('a', { href: 'mailto:michaelknn@gmail.com?subject=Mail from GOL', target: '_blank', className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 60
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 61
		}
	}, _react2.default.createElement('svg', { style: { width: 24, height: 24 }, className: 'jsx-3047024650' + ' ' + 'icon',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 63
		}
	}, _react2.default.createElement('path', { d: 'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z', className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	})), _react2.default.createElement('div', {
		className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 67
		}
	}, 'michaelknn@gmail.com'))))), _react2.default.createElement(_Grid2.default, { item: true, xs: true, style: { maxWidth: "160px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 74
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'link',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 75
		}
	}, _react2.default.createElement('a', { href: 'tel:+972-50-814-9452', className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 78
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-3047024650' + ' ' + 'item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}, _react2.default.createElement('svg', { style: { width: 24, height: 24 }, className: 'jsx-3047024650' + ' ' + 'icon',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 81
		}
	}, _react2.default.createElement('path', { d: 'M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z', className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 82
		}
	})), _react2.default.createElement('div', {
		className: 'jsx-3047024650',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 85
		}
	}, '+972 50 8149452')))))), _react2.default.createElement(_style2.default, {
		styleId: '3047024650',
		css: '.wrapper.jsx-3047024650{margin-top:2em;border-bottom:10px solid ' + _colors.colors.FOOTER_BOTTOM + ';background-color:' + _colors.colors.FOOTER_TOP + ';}.icon.jsx-3047024650{-webkit-transition:.4s;transition:.4s;border-radius:50%;border:1px solid ' + _colors.colors.FOOTER_LINK + ';padding:5px;margin:.5em;}.icon.jsx-3047024650:hover{border-color:' + _colors.colors.FOOTER_LINK_ACTIVE + ';background-color:' + _colors.colors.FOOTER_LINK_ACTIVE + ';fill:' + _colors.colors.FOOTER_LINK_ICON_ACTIVE + ';}a.jsx-3047024650:hover{color:' + _colors.colors.FOOTER_LINK_ACTIVE + ';}a.jsx-3047024650{color:' + _colors.colors.FOOTER_LINK + ';fill:' + _colors.colors.FOOTER_LINK + ';}.item.jsx-3047024650{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:130px;font-size:.9em;}.link.jsx-3047024650{margin:5px 20px 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RmUsQUFHb0IsQUFLQSxBQU8yQixBQU9QLEFBS0EsQUFJdEIsQUFPTyxlQWxDa0MsS0FtQ3ZELGVBZkEsQUFJbUMsR0FuQmhCLElBTzRCLGNBTkEsYUFMQSxBQXdCL0MsS0FHdUIsY0FmWSxjQU50QixZQUNBLENBTmIsT0FZQSxJQUxBLDBCQW9Cb0IsNkZBQ0osZ0JBQ0QsZUFDZiIsImZpbGUiOiJjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBpbmplY3RTaGVldCBmcm9tICdyZWFjdC1qc3MnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnbWF0ZXJpYWwtdWkvc3R5bGVzJztcclxuaW1wb3J0IFN2Z0ljb24gZnJvbSAnbWF0ZXJpYWwtdWkvU3ZnSWNvbic7XHJcbmltcG9ydCBHcmlkIGZyb20gJ21hdGVyaWFsLXVpL0dyaWQnO1xyXG5pbXBvcnQge2NvbG9ycyBhcyBjb2xvcn0gZnJvbSAnLi4vaGVscGVycy9jb2xvcnMnO1xyXG5cclxuXHJcbmNvbnN0IEZvb3RlciA9ICh7Y2xhc3Nlcywgc2NyZWVufSkgPT4ge1xyXG5cdGNvbnN0IGRpcmVjdGlvbiA9IHNjcmVlbi53aWR0aCA8IDYwMCA/ICdjb2x1bW4nIDogJ3Jvdyc7XHJcblx0Y29uc3QgYWxpZ24gPSBzY3JlZW4ud2lkdGggPCA2MDAgPyAnY2VudGVyJyA6ICdmbGV4LXN0YXJ0JztcclxuICAgIGxldCBwdXNoID0gbnVsbDtcclxuICAgIGNvbnN0IGggPSAwO1xyXG4gICAgICAgIFxyXG4gICAgY29uc3Qgc2V0SGVpZ2h0ID0oZWwpID0+IHtcclxuICAgIFx0aWYoZWwgJiYgcHVzaCl7XHJcbiAgICBcdCAgICBcdGxldCB7dG9wOiB0b3BQdXNoLCBib3R0b206IGJvdHRvbVB1c2h9ID0gcHVzaC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIFx0ICAgIFx0bGV0IHt0b3A6IHRvcEZvb3RlciwgYm90dG9tOiBib3R0b21Gb290ZXJ9ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBcdCAgICBcdGxldCBoZWlnaHRQdXNoID0gYm90dG9tUHVzaCAtIHRvcFB1c2g7XHJcbiAgICBcdCAgICBcdGxldCBoZWlnaHRGb290ZXIgPSBib3R0b21Gb290ZXIgLSB0b3BGb290ZXI7XHJcbiAgICBcdCAgICBcdGxldCBoZWlnaHQgPSBzY3JlZW4uaGVpZ2h0IC0gTWF0aC5mbG9vcihoZWlnaHRGb290ZXIpIC0gTWF0aC5mbG9vcih0b3BQdXNoKTtcclxuICAgIFx0ICAgIFx0aWYoaGVpZ2h0IDwgMCl7XHJcbiAgICBcdCAgICBcdFx0cHVzaC5zdHlsZS5oZWlnaHQgPSAwO1xyXG4gICAgXHQgICAgXHR9IGVsc2Uge1xyXG4gICAgXHQgICAgXHRcdHB1c2guc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgIFx0ICAgIFx0fVxyXG4gICAgXHQgICAgfVxyXG4gICAgfVxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQ8R3JpZCBjb250YWluZXIgc3BhY2luZz17MH0ganVzdGlmeT17XCJjZW50ZXJcIn0gZGlyZWN0aW9uPXtkaXJlY3Rpb259IGFsaWduSXRlbXM9e2FsaWdufT5cclxuICAgICAgICAgICAgICAgIFxyXG5cdFx0XHJcblx0XHQ8R3JpZCBpdGVtIHhzIHN0eWxlPXt7bWF4V2lkdGg6XCIxNjBweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ2hhamxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHRcdFx0XHRcclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBzdHlsZT17eyB3aWR0aDogMjQsaGVpZ2h0OiAyNCwgfX0+XHJcblx0XHRcdFx0XHQgICAgPHBhdGggZD1cIk0xMiwyQTEwLDEwIDAgMCwwIDIsMTJDMiwxNi40MiA0Ljg3LDIwLjE3IDguODQsMjEuNUM5LjM0LDIxLjU4IDkuNSwyMS4yNyA5LjUsMjFDOS41LDIwLjc3IDkuNSwyMC4xNCA5LjUsMTkuMzFDNi43MywxOS45MSA2LjE0LDE3Ljk3IDYuMTQsMTcuOTdDNS42OCwxNi44MSA1LjAzLDE2LjUgNS4wMywxNi41QzQuMTIsMTUuODggNS4xLDE1LjkgNS4xLDE1LjlDNi4xLDE1Ljk3IDYuNjMsMTYuOTMgNi42MywxNi45M0M3LjUsMTguNDUgOC45NywxOCA5LjU0LDE3Ljc2QzkuNjMsMTcuMTEgOS44OSwxNi42NyAxMC4xNywxNi40MkM3Ljk1LDE2LjE3IDUuNjIsMTUuMzEgNS42MiwxMS41QzUuNjIsMTAuMzkgNiw5LjUgNi42NSw4Ljc5QzYuNTUsOC41NCA2LjIsNy41IDYuNzUsNi4xNUM2Ljc1LDYuMTUgNy41OSw1Ljg4IDkuNSw3LjE3QzEwLjI5LDYuOTUgMTEuMTUsNi44NCAxMiw2Ljg0QzEyLjg1LDYuODQgMTMuNzEsNi45NSAxNC41LDcuMTdDMTYuNDEsNS44OCAxNy4yNSw2LjE1IDE3LjI1LDYuMTVDMTcuOCw3LjUgMTcuNDUsOC41NCAxNy4zNSw4Ljc5QzE4LDkuNSAxOC4zOCwxMC4zOSAxOC4zOCwxMS41QzE4LjM4LDE1LjMyIDE2LjA0LDE2LjE2IDEzLjgxLDE2LjQxQzE0LjE3LDE2LjcyIDE0LjUsMTcuMzMgMTQuNSwxOC4yNkMxNC41LDE5LjYgMTQuNSwyMC42OCAxNC41LDIxQzE0LjUsMjEuMjcgMTQuNjYsMjEuNTkgMTUuMTcsMjEuNUMxOS4xNCwyMC4xNiAyMiwxNi40MiAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+XHJcblx0XHRcdFx0ICAgIDwvc3ZnPlxyXG5cdFx0XHRcdCAgICBcclxuXHRcdFx0XHRcdDxkaXY+Z2hhamw8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdCAgICBcclxuXHRcdCAgICAgICBcclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHQ8R3JpZCBpdGVtIHhzIHN0eWxlPXt7bWF4V2lkdGg6XCIxNjBweFwifX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxhIGhyZWY9XCJtYWlsdG86bWljaGFlbGtubkBnbWFpbC5jb20/c3ViamVjdD1NYWlsIGZyb20gR09MXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBzdHlsZT17eyB3aWR0aDogMjQsaGVpZ2h0OiAyNCwgfX0+XHJcblx0XHRcdFx0XHQgICAgPHBhdGggZD1cIk0yMCw4TDEyLDEzTDQsOFY2TDEyLDExTDIwLDZNMjAsNEg0QzIuODksNCAyLDQuODkgMiw2VjE4QTIsMiAwIDAsMCA0LDIwSDIwQTIsMiAwIDAsMCAyMiwxOFY2QzIyLDQuODkgMjEuMSw0IDIwLDRaXCIgLz5cclxuXHRcdFx0XHRcdDwvc3ZnPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PGRpdj5taWNoYWVsa25uQGdtYWlsLmNvbTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0dyaWQ+XHJcblx0XHQ8R3JpZCBpdGVtIHhzIHN0eWxlPXt7bWF4V2lkdGg6XCIxNjBweFwifX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGlua1wiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6Kzk3Mi01MC04MTQtOTQ1MlwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG5cclxuXHRcdFx0XHQ8c3ZnIGNsYXNzTmFtZT1cImljb25cIiBzdHlsZT17eyB3aWR0aDogMjQsaGVpZ2h0OiAyNCwgfX0+XHJcblx0XHRcdFx0ICAgIDxwYXRoIGQ9XCJNNi42MiwxMC43OUM4LjA2LDEzLjYyIDEwLjM4LDE1Ljk0IDEzLjIxLDE3LjM4TDE1LjQxLDE1LjE4QzE1LjY5LDE0LjkgMTYuMDgsMTQuODIgMTYuNDMsMTQuOTNDMTcuNTUsMTUuMyAxOC43NSwxNS41IDIwLDE1LjVBMSwxIDAgMCwxIDIxLDE2LjVWMjBBMSwxIDAgMCwxIDIwLDIxQTE3LDE3IDAgMCwxIDMsNEExLDEgMCAwLDEgNCwzSDcuNUExLDEgMCAwLDEgOC41LDRDOC41LDUuMjUgOC43LDYuNDUgOS4wNyw3LjU3QzkuMTgsNy45MiA5LjEsOC4zMSA4LjgyLDguNTlMNi42MiwxMC43OVpcIiAvPlxyXG5cdFx0XHRcdDwvc3ZnPlx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PGRpdj4rOTcyIDUwIDgxNDk0NTI8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdDwvZGl2Plx0XHRcclxuXHRcdDwvR3JpZD5cdFxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0XHJcblx0XHQ8c3R5bGUganN4ID57YFxyXG5cdFx0XHQud3JhcHBlciB7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMmVtO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IDEwcHggc29saWQgJHtjb2xvci5GT09URVJfQk9UVE9NfTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yLkZPT1RFUl9UT1B9O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pY29uIHtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiAuNHM7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICR7Y29sb3IuRk9PVEVSX0xJTkt9O1xyXG5cdFx0XHRcdHBhZGRpbmc6IDVweDtcclxuXHRcdFx0XHRtYXJnaW46IC41ZW07XHJcblx0XHRcdH1cclxuXHRcdFx0Lmljb246aG92ZXIge1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogJHtjb2xvci5GT09URVJfTElOS19BQ1RJVkV9O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3IuRk9PVEVSX0xJTktfQUNUSVZFfTtcclxuXHRcdFx0XHRmaWxsOiAke2NvbG9yLkZPT1RFUl9MSU5LX0lDT05fQUNUSVZFfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhOmhvdmVyICB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y29sb3I6ICR7Y29sb3IuRk9PVEVSX0xJTktfQUNUSVZFfTtcclxuXHRcdFx0XHQvLyBmaWxsOiBibGFjaztcclxuXHRcdFx0fVxyXG5cdFx0XHRhIHtcclxuXHRcdFx0XHQvLyB0cmFuc2l0aW9uOiAuNHM7XHJcblx0XHRcdFx0Y29sb3I6ICR7Y29sb3IuRk9PVEVSX0xJTkt9O1xyXG5cdFx0XHRcdGZpbGw6ICR7Y29sb3IuRk9PVEVSX0xJTkt9O1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pdGVtIHtcclxuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRtaW4td2lkdGg6MTMwcHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOi45ZW07XHJcblx0XHRcdH1cclxuXHRcdFx0Lmxpbmsge1xyXG5cdFx0XHRcdG1hcmdpbjogNXB4IDIwcHggNXB4O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0YH1cdFx0XHRcdFx0XHRcclxuXHRcdDwvc3R5bGU+IFxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=components\\Footer.js */'
	}));
};

exports.default = Footer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJjbGFzc2VzIiwic2NyZWVuIiwiZGlyZWN0aW9uIiwid2lkdGgiLCJhbGlnbiIsInB1c2giLCJoIiwic2V0SGVpZ2h0IiwiZWwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3BQdXNoIiwidG9wIiwiYm90dG9tUHVzaCIsImJvdHRvbSIsInRvcEZvb3RlciIsImJvdHRvbUZvb3RlciIsImhlaWdodFB1c2giLCJoZWlnaHRGb290ZXIiLCJoZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJzdHlsZSIsIm1heFdpZHRoIiwiRk9PVEVSX0JPVFRPTSIsIkZPT1RFUl9UT1AiLCJGT09URVJfTElOSyIsIkZPT1RFUl9MSU5LX0FDVElWRSIsIkZPT1RFUl9MSU5LX0lDT05fQUNUSVZFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBR0EsSUFBTSxTQUFTLFNBQVQsQUFBUyxhQUF1QjtLQUFyQixBQUFxQixlQUFyQixBQUFxQjtLQUFaLEFBQVksY0FBWixBQUFZLEFBQ3JDOztLQUFNLFlBQVksT0FBQSxBQUFPLFFBQVAsQUFBZSxNQUFmLEFBQXFCLFdBQXZDLEFBQWtELEFBQ2xEO0tBQU0sUUFBUSxPQUFBLEFBQU8sUUFBUCxBQUFlLE1BQWYsQUFBcUIsV0FBbkMsQUFBOEMsQUFDM0M7S0FBSSxPQUFKLEFBQVcsQUFDWDtLQUFNLElBQU4sQUFBVSxBQUVWOztLQUFNLFlBQVcsU0FBWCxBQUFXLFVBQUEsQUFBQyxJQUFPLEFBQ3hCO01BQUcsTUFBSCxBQUFTLE1BQUs7K0JBQ2dDLEtBRGhDLEFBQ2dDLEFBQUs7T0FEckMsQUFDQyxnQ0FERCxBQUNKO09BREksQUFDa0IsbUNBRGxCLEFBQ1U7OytCQUMwQixHQUZwQyxBQUVvQyxBQUFHO09BRnZDLEFBRUMsa0NBRkQsQUFFSjtPQUZJLEFBRW9CLHFDQUZwQixBQUVZLEFBQ3JCOztPQUFJLGFBQWEsYUFBakIsQUFBOEIsQUFDOUI7T0FBSSxlQUFlLGVBQW5CLEFBQWtDLEFBQ2xDO09BQUksU0FBUyxPQUFBLEFBQU8sU0FBUyxLQUFBLEFBQUssTUFBckIsQUFBZ0IsQUFBVyxnQkFBZ0IsS0FBQSxBQUFLLE1BQTdELEFBQXdELEFBQVcsQUFDbkU7T0FBRyxTQUFILEFBQVksR0FBRSxBQUNiO1NBQUEsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQixBQUNwQjtBQUZELFVBRU8sQUFDTjtTQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsU0FBcEIsQUFBNkIsQUFDN0I7QUFDRDtBQUNMO0FBYkQsQUFjSDt3QkFDQyxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUdBO0FBSEE7QUFBQSxFQUFBLGtCQUdBLHFCQUFBLFdBQU0sV0FBTixNQUFnQixTQUFoQixBQUF5QixHQUFHLFNBQTVCLEFBQXFDLFVBQVUsV0FBL0MsQUFBMEQsV0FBVyxZQUFyRSxBQUFpRjthQUFqRjtlQUFBLEFBR0E7QUFIQTtvQkFHQSxxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLE1BQWMsT0FBTyxFQUFDLFVBQXRCLEFBQXFCLEFBQVU7YUFBL0I7ZUFBQSxBQUVDO0FBRkQ7b0JBRUMsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFHQztBQUhEO0FBQUEsb0JBR0MsY0FBQSxPQUFHLE1BQUgsQUFBUSw0QkFBMkIsUUFBbkMsQUFBMEMscUJBQTFDOzthQUFBO2VBQUEsQUFDQTtBQURBO29CQUNBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBRWdCO0FBRmhCO0FBQUEsb0JBRWdCLGNBQUEsU0FBc0IsT0FBTyxFQUFFLE9BQUYsQUFBUyxJQUFHLFFBQXpDLEFBQTZCLEFBQW9CLDBDQUFqRCxBQUFlOzthQUFmO2VBQUEsQUFDWDtBQURXOzRDQUNMLEdBQU4sQUFBUSwwdkJBQVI7O2FBQUE7ZUFITCxBQUVnQixBQUNYLEFBR0o7QUFISTtzQkFHSixjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUFmSCxBQUdBLEFBRUMsQUFHQyxBQUNBLEFBTUMsQUFPSCw4QkFBQSxxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLE1BQWMsT0FBTyxFQUFDLFVBQXRCLEFBQXFCLEFBQVU7YUFBL0I7ZUFBQSxBQUNDO0FBREQ7b0JBQ0MsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFHQztBQUhEO0FBQUEsb0JBR0MsY0FBQSxPQUFHLE1BQUgsQUFBUSxxREFBb0QsUUFBNUQsQUFBbUUscUJBQW5FOzthQUFBO2VBQUEsQUFDQTtBQURBO29CQUNBLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBRUM7QUFGRDtBQUFBLG9CQUVDLGNBQUEsU0FBc0IsT0FBTyxFQUFFLE9BQUYsQUFBUyxJQUFHLFFBQXpDLEFBQTZCLEFBQW9CLDBDQUFqRCxBQUFlOzthQUFmO2VBQUEsQUFDSTtBQURKOzRDQUNVLEdBQU4sQUFBUSxnSUFBUjs7YUFBQTtlQUhMLEFBRUMsQUFDSSxBQUdKO0FBSEk7c0JBR0osY0FBQTthQUFBOzthQUFBO2VBQUE7QUFBQTtBQUFBLElBakNILEFBc0JBLEFBQ0MsQUFHQyxBQUNBLEFBTUMsQUFPSCw2Q0FBQSxxQkFBQSxXQUFNLE1BQU4sTUFBVyxJQUFYLE1BQWMsT0FBTyxFQUFDLFVBQXRCLEFBQXFCLEFBQVU7YUFBL0I7ZUFBQSxBQUNDO0FBREQ7b0JBQ0MsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFHQztBQUhEO0FBQUEsb0JBR0MsY0FBQSxPQUFHLE1BQUgsQUFBUSxtQ0FBUjs7YUFBQTtlQUFBLEFBQ0E7QUFEQTtvQkFDQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUVBO0FBRkE7QUFBQSxvQkFFQSxjQUFBLFNBQXNCLE9BQU8sRUFBRSxPQUFGLEFBQVMsSUFBRyxRQUF6QyxBQUE2QixBQUFvQiwwQ0FBakQsQUFBZTs7YUFBZjtlQUFBLEFBQ0k7QUFESjs0Q0FDVSxHQUFOLEFBQVEsc1NBQVI7O2FBQUE7ZUFISixBQUVBLEFBQ0ksQUFHSjtBQUhJO3NCQUdKLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQXRERixBQUdBLEFBd0NBLEFBQ0MsQUFHQyxBQUNBLEFBTUE7V0F0REY7NEVBa0U4QixlQWxFOUIsQUFrRW9DLHVDQUNkLGVBbkV0QixBQW1FNEIsa0hBS04sZUF4RXRCLEFBd0U0QixxRkFLVixlQTdFbEIsQUE2RXdCLDRDQUNGLGVBOUV0QixBQThFNEIsZ0NBQ2xCLGVBL0VWLEFBK0VnQiw4REFLTCxlQXBGWCxBQW9GaUIsbURBS04sZUF6RlgsQUF5RmlCLHlCQUNQLGVBMUZWLEFBMEZnQixjQTNGakIsQUFDQyxBQTZHRDtBQTdHQztBQXJCRjs7a0JBcUllLEEiLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=