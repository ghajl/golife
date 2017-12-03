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

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

var styles = {
	icon: {
		'border-radius': '50%',
		border: '1px solid rgba(0, 0, 0, .6)'
	}

};

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
			console.log(heightFooter);
			console.log(bottomPush);

			console.log(screen.height);
			// if (Math.floor(heightFooter) + Math.floor(heightPush) + Math.floor(topPush) <= screen.height){
			// 	console.log("cc")
			// 	push.style.height = screen.height - Math.floor(heightFooter) - Math.floor(topPush) + 'px';
			// } else {
			// 	console.log("cc2")
			// 	push.style.height = 0;
			// }
			console.log(push.style.height);
			// console.log(screen.height)
		}
	};
	return _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'wrapper',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 50
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'footer',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 52
		}
	}, _react2.default.createElement(_Grid2.default, { container: true, spacing: 0, justify: "center", direction: direction, alignItems: align, __source: {
			fileName: _jsxFileName,
			lineNumber: 53
		}
	}, _react2.default.createElement(_Grid2.default, { item: true, xs: true, style: { maxWidth: "160px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 56
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'link',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 58
		}
	}, _react2.default.createElement('a', { href: 'https://github.com/ghajl', target: '_blank', className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 61
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 62
		}
	}, _react2.default.createElement('svg', { style: { width: 24, height: 24 }, className: 'jsx-4163291625' + ' ' + 'icon',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 64
		}
	}, _react2.default.createElement('path', { d: 'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z', className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 65
		}
	})), _react2.default.createElement('div', {
		className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 68
		}
	}, 'ghajl'))))), _react2.default.createElement(_Grid2.default, { item: true, xs: true, style: { maxWidth: "160px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 75
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'link',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 76
		}
	}, _react2.default.createElement('a', { href: 'mailto:michaelknn@gmail.com?subject=Mail from GOL', target: '_blank', className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 79
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 80
		}
	}, _react2.default.createElement('svg', { style: { width: 24, height: 24 }, className: 'jsx-4163291625' + ' ' + 'icon',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 82
		}
	}, _react2.default.createElement('path', { d: 'M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z', className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 83
		}
	})), _react2.default.createElement('div', {
		className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 86
		}
	}, 'michaelknn@gmail.com'))))), _react2.default.createElement(_Grid2.default, { item: true, xs: true, style: { maxWidth: "160px" }, __source: {
			fileName: _jsxFileName,
			lineNumber: 93
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'link',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 94
		}
	}, _react2.default.createElement('a', { href: 'tel:+972-50-814-9452', className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 97
		}
	}, _react2.default.createElement('div', {
		className: 'jsx-4163291625' + ' ' + 'item',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 98
		}
	}, _react2.default.createElement('svg', { style: { width: 24, height: 24 }, className: 'jsx-4163291625' + ' ' + 'icon',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 100
		}
	}, _react2.default.createElement('path', { d: 'M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z', className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 101
		}
	})), _react2.default.createElement('div', {
		className: 'jsx-4163291625',
		__source: {
			fileName: _jsxFileName,
			lineNumber: 104
		}
	}, '+972 50 8149452'))))))), _react2.default.createElement(_style2.default, {
		styleId: '4163291625',
		css: '.wrapper.jsx-4163291625{margin-top:2em;border-bottom:10px solid rgba(162,215,41,.5);}.icon.jsx-4163291625{-webkit-transition:.4s;transition:.4s;border-radius:50%;border:1px solid rgba(1,22,39,.7);padding:5px;margin:.5em;}.icon.jsx-4163291625:hover{border-color:black;background-color:black;fill:white;}a.jsx-4163291625:hover{color:black;}a.jsx-4163291625{color:rgba(1,22,39,.7);fill:rgba(1,22,39,.7);}.item.jsx-4163291625{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;min-width:130px;font-size:.9em;}.link.jsx-4163291625{margin:5px 20px 5px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSGUsQUFHb0IsQUF5QkEsQUFPSSxBQU9QLEFBS1csQUFJVixBQU9PLFlBZHJCLEdBeEM4QyxJQWdDdEIsQ0F1QnhCLEdBWHVCLGVBbkJKLElBUVAsR0FZWixRQVhBLEdBUm1DLElBekJuQyxjQStDdUIsZ0JBckJWLFlBQ0EsWUFDYixzQ0FvQm9CLDZGQUNKLGdCQUNELGVBQ2YiLCJmaWxlIjoiY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgaW5qZWN0U2hlZXQgZnJvbSAncmVhY3QtanNzJztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ21hdGVyaWFsLXVpL3N0eWxlcyc7XHJcbmltcG9ydCBTdmdJY29uIGZyb20gJ21hdGVyaWFsLXVpL1N2Z0ljb24nO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdtYXRlcmlhbC11aS9HcmlkJztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuXHRpY29uOiB7XHJcbiAgICAgICAgJ2JvcmRlci1yYWRpdXMnOiAnNTAlJyxcclxuXHRcdGJvcmRlcjogJzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC42KScsXHJcblx0fVxyXG5cclxufVxyXG5cclxuY29uc3QgRm9vdGVyID0gKHtjbGFzc2VzLCBzY3JlZW59KSA9PiB7XHJcblx0Y29uc3QgZGlyZWN0aW9uID0gc2NyZWVuLndpZHRoIDwgNjAwID8gJ2NvbHVtbicgOiAncm93JztcclxuXHRjb25zdCBhbGlnbiA9IHNjcmVlbi53aWR0aCA8IDYwMCA/ICdjZW50ZXInIDogJ2ZsZXgtc3RhcnQnO1xyXG4gICAgbGV0IHB1c2ggPSBudWxsO1xyXG4gICAgY29uc3QgaCA9IDA7XHJcbiAgICAgICAgXHJcbiAgICBjb25zdCBzZXRIZWlnaHQgPShlbCkgPT4ge1xyXG4gICAgXHRpZihlbCAmJiBwdXNoKXtcclxuICAgIFx0ICAgIFx0bGV0IHt0b3A6IHRvcFB1c2gsIGJvdHRvbTogYm90dG9tUHVzaH0gPSBwdXNoLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgXHQgICAgXHRsZXQge3RvcDogdG9wRm9vdGVyLCBib3R0b206IGJvdHRvbUZvb3Rlcn0gPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIFx0ICAgIFx0bGV0IGhlaWdodFB1c2ggPSBib3R0b21QdXNoIC0gdG9wUHVzaDtcclxuICAgIFx0ICAgIFx0bGV0IGhlaWdodEZvb3RlciA9IGJvdHRvbUZvb3RlciAtIHRvcEZvb3RlcjtcclxuICAgIFx0ICAgIFx0bGV0IGhlaWdodCA9IHNjcmVlbi5oZWlnaHQgLSBNYXRoLmZsb29yKGhlaWdodEZvb3RlcikgLSBNYXRoLmZsb29yKHRvcFB1c2gpO1xyXG4gICAgXHQgICAgXHRpZihoZWlnaHQgPCAwKXtcclxuICAgIFx0ICAgIFx0XHRwdXNoLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBcdCAgICBcdH0gZWxzZSB7XHJcbiAgICBcdCAgICBcdFx0cHVzaC5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG4gICAgXHQgICAgXHR9XHJcbiAgICBcdCAgICBcdGNvbnNvbGUubG9nKGhlaWdodEZvb3RlcilcclxuICAgIFx0ICAgIFx0Y29uc29sZS5sb2coYm90dG9tUHVzaClcclxuICAgIFx0ICAgIFx0XHJcbiAgICBcdCAgICBcdGNvbnNvbGUubG9nKHNjcmVlbi5oZWlnaHQpXHJcbiAgICBcdCAgICBcdC8vIGlmIChNYXRoLmZsb29yKGhlaWdodEZvb3RlcikgKyBNYXRoLmZsb29yKGhlaWdodFB1c2gpICsgTWF0aC5mbG9vcih0b3BQdXNoKSA8PSBzY3JlZW4uaGVpZ2h0KXtcclxuICAgIFx0ICAgIFx0Ly8gXHRjb25zb2xlLmxvZyhcImNjXCIpXHJcbiAgICBcdCAgICBcdC8vIFx0cHVzaC5zdHlsZS5oZWlnaHQgPSBzY3JlZW4uaGVpZ2h0IC0gTWF0aC5mbG9vcihoZWlnaHRGb290ZXIpIC0gTWF0aC5mbG9vcih0b3BQdXNoKSArICdweCc7XHJcbiAgICBcdCAgICBcdC8vIH0gZWxzZSB7XHJcbiAgICBcdCAgICBcdC8vIFx0Y29uc29sZS5sb2coXCJjYzJcIilcclxuICAgIFx0ICAgIFx0Ly8gXHRwdXNoLnN0eWxlLmhlaWdodCA9IDA7XHJcbiAgICBcdCAgICBcdC8vIH1cclxuICAgIFx0ICAgIFx0Y29uc29sZS5sb2cocHVzaC5zdHlsZS5oZWlnaHQpXHJcbiAgICBcdCAgICBcdC8vIGNvbnNvbGUubG9nKHNjcmVlbi5oZWlnaHQpXHJcbiAgICBcdCAgICB9XHJcbiAgICB9XHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxyXG5cdFx0XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0PEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGp1c3RpZnk9e1wiY2VudGVyXCJ9IGRpcmVjdGlvbj17ZGlyZWN0aW9ufSBhbGlnbkl0ZW1zPXthbGlnbn0+XHJcbiAgICAgICAgICAgICAgICBcclxuXHRcdFxyXG5cdFx0PEdyaWQgaXRlbSB4cyBzdHlsZT17e21heFdpZHRoOlwiMTYwcHhcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2doYWpsXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XHJcblx0XHRcdFx0XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgc3R5bGU9e3sgd2lkdGg6IDI0LGhlaWdodDogMjQsIH19PlxyXG5cdFx0XHRcdFx0ICAgIDxwYXRoIGQ9XCJNMTIsMkExMCwxMCAwIDAsMCAyLDEyQzIsMTYuNDIgNC44NywyMC4xNyA4Ljg0LDIxLjVDOS4zNCwyMS41OCA5LjUsMjEuMjcgOS41LDIxQzkuNSwyMC43NyA5LjUsMjAuMTQgOS41LDE5LjMxQzYuNzMsMTkuOTEgNi4xNCwxNy45NyA2LjE0LDE3Ljk3QzUuNjgsMTYuODEgNS4wMywxNi41IDUuMDMsMTYuNUM0LjEyLDE1Ljg4IDUuMSwxNS45IDUuMSwxNS45QzYuMSwxNS45NyA2LjYzLDE2LjkzIDYuNjMsMTYuOTNDNy41LDE4LjQ1IDguOTcsMTggOS41NCwxNy43NkM5LjYzLDE3LjExIDkuODksMTYuNjcgMTAuMTcsMTYuNDJDNy45NSwxNi4xNyA1LjYyLDE1LjMxIDUuNjIsMTEuNUM1LjYyLDEwLjM5IDYsOS41IDYuNjUsOC43OUM2LjU1LDguNTQgNi4yLDcuNSA2Ljc1LDYuMTVDNi43NSw2LjE1IDcuNTksNS44OCA5LjUsNy4xN0MxMC4yOSw2Ljk1IDExLjE1LDYuODQgMTIsNi44NEMxMi44NSw2Ljg0IDEzLjcxLDYuOTUgMTQuNSw3LjE3QzE2LjQxLDUuODggMTcuMjUsNi4xNSAxNy4yNSw2LjE1QzE3LjgsNy41IDE3LjQ1LDguNTQgMTcuMzUsOC43OUMxOCw5LjUgMTguMzgsMTAuMzkgMTguMzgsMTEuNUMxOC4zOCwxNS4zMiAxNi4wNCwxNi4xNiAxMy44MSwxNi40MUMxNC4xNywxNi43MiAxNC41LDE3LjMzIDE0LjUsMTguMjZDMTQuNSwxOS42IDE0LjUsMjAuNjggMTQuNSwyMUMxNC41LDIxLjI3IDE0LjY2LDIxLjU5IDE1LjE3LDIxLjVDMTkuMTQsMjAuMTYgMjIsMTYuNDIgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPlxyXG5cdFx0XHRcdCAgICA8L3N2Zz5cclxuXHRcdFx0XHQgICAgXHJcblx0XHRcdFx0XHQ8ZGl2PmdoYWpsPC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHQgICAgXHJcblx0XHQgICAgICAgXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0PEdyaWQgaXRlbSB4cyBzdHlsZT17e21heFdpZHRoOlwiMTYwcHhcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8YSBocmVmPVwibWFpbHRvOm1pY2hhZWxrbm5AZ21haWwuY29tP3N1YmplY3Q9TWFpbCBmcm9tIEdPTFwiIHRhcmdldD1cIl9ibGFua1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgc3R5bGU9e3sgd2lkdGg6IDI0LGhlaWdodDogMjQsIH19PlxyXG5cdFx0XHRcdFx0ICAgIDxwYXRoIGQ9XCJNMjAsOEwxMiwxM0w0LDhWNkwxMiwxMUwyMCw2TTIwLDRINEMyLjg5LDQgMiw0Ljg5IDIsNlYxOEEyLDIgMCAwLDAgNCwyMEgyMEEyLDIgMCAwLDAgMjIsMThWNkMyMiw0Ljg5IDIxLjEsNCAyMCw0WlwiIC8+XHJcblx0XHRcdFx0XHQ8L3N2Zz5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdDxkaXY+bWljaGFlbGtubkBnbWFpbC5jb208L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9HcmlkPlxyXG5cdFx0PEdyaWQgaXRlbSB4cyBzdHlsZT17e21heFdpZHRoOlwiMTYwcHhcIn19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8YSBocmVmPVwidGVsOis5NzItNTAtODE0LTk0NTJcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj5cclxuXHJcblx0XHRcdFx0PHN2ZyBjbGFzc05hbWU9XCJpY29uXCIgc3R5bGU9e3sgd2lkdGg6IDI0LGhlaWdodDogMjQsIH19PlxyXG5cdFx0XHRcdCAgICA8cGF0aCBkPVwiTTYuNjIsMTAuNzlDOC4wNiwxMy42MiAxMC4zOCwxNS45NCAxMy4yMSwxNy4zOEwxNS40MSwxNS4xOEMxNS42OSwxNC45IDE2LjA4LDE0LjgyIDE2LjQzLDE0LjkzQzE3LjU1LDE1LjMgMTguNzUsMTUuNSAyMCwxNS41QTEsMSAwIDAsMSAyMSwxNi41VjIwQTEsMSAwIDAsMSAyMCwyMUExNywxNyAwIDAsMSAzLDRBMSwxIDAgMCwxIDQsM0g3LjVBMSwxIDAgMCwxIDguNSw0QzguNSw1LjI1IDguNyw2LjQ1IDkuMDcsNy41N0M5LjE4LDcuOTIgOS4xLDguMzEgOC44Miw4LjU5TDYuNjIsMTAuNzlaXCIgLz5cclxuXHRcdFx0XHQ8L3N2Zz5cdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXY+Kzk3MiA1MCA4MTQ5NDUyPC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHQ8L2Rpdj5cdFx0XHJcblx0XHQ8L0dyaWQ+XHRcclxuXHRcdDwvR3JpZD5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PHN0eWxlIGpzeCA+e2BcclxuXHRcdFx0LndyYXBwZXIge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDJlbTtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHJnYmEoMTYyLDIxNSw0MSwuNSk7XHJcblx0XHRcdH1cclxuXHRcdFx0LmZvb3RlciB7XHJcblx0XHRcdFx0Ly8gZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0Ly8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdFx0Ly8gZmxleC13cmFwOiB3cmFwO1xyXG5cdFx0XHRcdC8vIHdpZHRoOiA1MCU7XHJcblx0XHRcdFx0Ly8gYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMSwxMTEsMTg1LC44KTtcclxuXHRcdFx0XHQgLy8gcG9zaXRpb246YWJzb2x1dGU7XHJcblx0XHRcdCAgLy8gIGJvdHRvbTowO1xyXG5cdFx0XHQgIC8vICB3aWR0aDoxMDAlO1xyXG5cdFx0XHQgICAvLyBoZWlnaHQ6NjBweDtcclxuXHRcdFx0ICAgIC8vIHdpZHRoOiAxMDAlO1xyXG5cdFx0Ly8gXHRcdGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gLmZvb3Rlcjo6YmVmb3JlIHtcclxuXHRcdFx0Ly8gXHRjb250ZW50OiAnXCJcIic7XHJcblx0XHRcdC8vIFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHQvLyBcdHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHRcdFx0Ly8gXHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0Ly8gXHR3aWR0aDogMTAwJTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHQuaWNvbiB7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogLjRzO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEsMjIsMzksLjcpOy8vcmdiKDI1NSwxODUsNSlcclxuXHRcdFx0XHRwYWRkaW5nOiA1cHg7XHJcblx0XHRcdFx0bWFyZ2luOiAuNWVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5pY29uOmhvdmVyIHtcclxuXHRcdFx0XHRib3JkZXItY29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdGZpbGw6IHdoaXRlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGE6aG92ZXIgIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0Ly8gZmlsbDogYmxhY2s7XHJcblx0XHRcdH1cclxuXHRcdFx0YSB7XHJcblx0XHRcdFx0Ly8gdHJhbnNpdGlvbjogLjRzO1xyXG5cdFx0XHRcdGNvbG9yOiByZ2JhKDEsMjIsMzksLjcpO1xyXG5cdFx0XHRcdGZpbGw6IHJnYmEoMSwyMiwzOSwuNyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Lml0ZW0ge1xyXG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRcdG1pbi13aWR0aDoxMzBweDtcclxuXHRcdFx0XHRmb250LXNpemU6LjllbTtcclxuXHRcdFx0fVxyXG5cdFx0XHQubGluayB7XHJcblx0XHRcdFx0bWFyZ2luOiA1cHggMjBweCA1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gc3ZnIHtcclxuXHRcdFx0Ly8gXHR3aWR0aDogMjBweDtcclxuXHRcdFx0Ly8gXHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdC8vIH1cclxuXHRcdGB9XHRcdFx0XHRcdFx0XHJcblx0XHQ8L3N0eWxlPiBcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQ8L2Rpdj5cclxuXHQpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoRm9vdGVyKTsiXX0= */\n/*@ sourceURL=components\\Footer.js */'
	}));
};

exports.default = (0, _styles.withStyles)(styles)(Footer);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJpY29uIiwiYm9yZGVyIiwiRm9vdGVyIiwiY2xhc3NlcyIsInNjcmVlbiIsImRpcmVjdGlvbiIsIndpZHRoIiwiYWxpZ24iLCJwdXNoIiwiaCIsInNldEhlaWdodCIsImVsIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wUHVzaCIsInRvcCIsImJvdHRvbVB1c2giLCJib3R0b20iLCJ0b3BGb290ZXIiLCJib3R0b21Gb290ZXIiLCJoZWlnaHRQdXNoIiwiaGVpZ2h0Rm9vdGVyIiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwic3R5bGUiLCJjb25zb2xlIiwibG9nIiwibWF4V2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNOzttQkFDQyxBQUNrQixBQUN2QjtVQUhGLEFBQWUsQUFDUixBQUVHO0FBRkgsQUFDQzs7QUFGTyxBQUNkOztBQU9ELElBQU0sU0FBUyxTQUFULEFBQVMsYUFBdUI7S0FBckIsQUFBcUIsZUFBckIsQUFBcUI7S0FBWixBQUFZLGNBQVosQUFBWSxBQUNyQzs7S0FBTSxZQUFZLE9BQUEsQUFBTyxRQUFQLEFBQWUsTUFBZixBQUFxQixXQUF2QyxBQUFrRCxBQUNsRDtLQUFNLFFBQVEsT0FBQSxBQUFPLFFBQVAsQUFBZSxNQUFmLEFBQXFCLFdBQW5DLEFBQThDLEFBQzNDO0tBQUksT0FBSixBQUFXLEFBQ1g7S0FBTSxJQUFOLEFBQVUsQUFFVjs7S0FBTSxZQUFXLFNBQVgsQUFBVyxVQUFBLEFBQUMsSUFBTyxBQUN4QjtNQUFHLE1BQUgsQUFBUyxNQUFLOytCQUNnQyxLQURoQyxBQUNnQyxBQUFLO09BRHJDLEFBQ0MsZ0NBREQsQUFDSjtPQURJLEFBQ2tCLG1DQURsQixBQUNVOzsrQkFDMEIsR0FGcEMsQUFFb0MsQUFBRztPQUZ2QyxBQUVDLGtDQUZELEFBRUo7T0FGSSxBQUVvQixxQ0FGcEIsQUFFWSxBQUNyQjs7T0FBSSxhQUFhLGFBQWpCLEFBQThCLEFBQzlCO09BQUksZUFBZSxlQUFuQixBQUFrQyxBQUNsQztPQUFJLFNBQVMsT0FBQSxBQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXJCLEFBQWdCLEFBQVcsZ0JBQWdCLEtBQUEsQUFBSyxNQUE3RCxBQUF3RCxBQUFXLEFBQ25FO09BQUcsU0FBSCxBQUFZLEdBQUUsQUFDYjtTQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7QUFGRCxVQUVPLEFBQ047U0FBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLFNBQXBCLEFBQTZCLEFBQzdCO0FBQ0Q7V0FBQSxBQUFRLElBQVIsQUFBWSxBQUNaO1dBQUEsQUFBUSxJQUFSLEFBQVksQUFFWjs7V0FBQSxBQUFRLElBQUksT0FBWixBQUFtQixBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO1dBQUEsQUFBUSxJQUFJLEtBQUEsQUFBSyxNQUFqQixBQUF1QixBQUN2QjtBQUNBO0FBQ0w7QUExQkQsQUEyQkg7d0JBQ0MsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFFQTtBQUZBO0FBQUEsRUFBQSxrQkFFQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUNBO0FBREE7QUFBQSxvQkFDQSxxQkFBQSxXQUFNLFdBQU4sTUFBZ0IsU0FBaEIsQUFBeUIsR0FBRyxTQUE1QixBQUFxQyxVQUFVLFdBQS9DLEFBQTBELFdBQVcsWUFBckUsQUFBaUY7YUFBakY7ZUFBQSxBQUdBO0FBSEE7b0JBR0EscUJBQUEsV0FBTSxNQUFOLE1BQVcsSUFBWCxNQUFjLE9BQU8sRUFBQyxVQUF0QixBQUFxQixBQUFVO2FBQS9CO2VBQUEsQUFFQztBQUZEO29CQUVDLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBR0M7QUFIRDtBQUFBLG9CQUdDLGNBQUEsT0FBRyxNQUFILEFBQVEsNEJBQTJCLFFBQW5DLEFBQTBDLHFCQUExQzs7YUFBQTtlQUFBLEFBQ0E7QUFEQTtvQkFDQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUVnQjtBQUZoQjtBQUFBLG9CQUVnQixjQUFBLFNBQXNCLE9BQU8sRUFBRSxPQUFGLEFBQVMsSUFBRyxRQUF6QyxBQUE2QixBQUFvQiwwQ0FBakQsQUFBZTs7YUFBZjtlQUFBLEFBQ1g7QUFEVzs0Q0FDTCxHQUFOLEFBQVEsMHZCQUFSOzthQUFBO2VBSEwsQUFFZ0IsQUFDWCxBQUdKO0FBSEk7c0JBR0osY0FBQTthQUFBOzthQUFBO2VBQUE7QUFBQTtBQUFBLElBZkgsQUFHQSxBQUVDLEFBR0MsQUFDQSxBQU1DLEFBT0gsOEJBQUEscUJBQUEsV0FBTSxNQUFOLE1BQVcsSUFBWCxNQUFjLE9BQU8sRUFBQyxVQUF0QixBQUFxQixBQUFVO2FBQS9CO2VBQUEsQUFDQztBQUREO29CQUNDLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBR0M7QUFIRDtBQUFBLG9CQUdDLGNBQUEsT0FBRyxNQUFILEFBQVEscURBQW9ELFFBQTVELEFBQW1FLHFCQUFuRTs7YUFBQTtlQUFBLEFBQ0E7QUFEQTtvQkFDQSxjQUFBO3NDQUFBLEFBQWU7O2FBQWY7ZUFBQSxBQUVDO0FBRkQ7QUFBQSxvQkFFQyxjQUFBLFNBQXNCLE9BQU8sRUFBRSxPQUFGLEFBQVMsSUFBRyxRQUF6QyxBQUE2QixBQUFvQiwwQ0FBakQsQUFBZTs7YUFBZjtlQUFBLEFBQ0k7QUFESjs0Q0FDVSxHQUFOLEFBQVEsZ0lBQVI7O2FBQUE7ZUFITCxBQUVDLEFBQ0ksQUFHSjtBQUhJO3NCQUdKLGNBQUE7YUFBQTs7YUFBQTtlQUFBO0FBQUE7QUFBQSxJQWpDSCxBQXNCQSxBQUNDLEFBR0MsQUFDQSxBQU1DLEFBT0gsNkNBQUEscUJBQUEsV0FBTSxNQUFOLE1BQVcsSUFBWCxNQUFjLE9BQU8sRUFBQyxVQUF0QixBQUFxQixBQUFVO2FBQS9CO2VBQUEsQUFDQztBQUREO29CQUNDLGNBQUE7c0NBQUEsQUFBZTs7YUFBZjtlQUFBLEFBR0M7QUFIRDtBQUFBLG9CQUdDLGNBQUEsT0FBRyxNQUFILEFBQVEsbUNBQVI7O2FBQUE7ZUFBQSxBQUNBO0FBREE7b0JBQ0EsY0FBQTtzQ0FBQSxBQUFlOzthQUFmO2VBQUEsQUFFQTtBQUZBO0FBQUEsb0JBRUEsY0FBQSxTQUFzQixPQUFPLEVBQUUsT0FBRixBQUFTLElBQUcsUUFBekMsQUFBNkIsQUFBb0IsMENBQWpELEFBQWU7O2FBQWY7ZUFBQSxBQUNJO0FBREo7NENBQ1UsR0FBTixBQUFRLHNTQUFSOzthQUFBO2VBSEosQUFFQSxBQUNJLEFBR0o7QUFISTtzQkFHSixjQUFBO2FBQUE7O2FBQUE7ZUFBQTtBQUFBO0FBQUEsSUF0REYsQUFFQSxBQUNBLEFBd0NBLEFBQ0MsQUFHQyxBQUNBLEFBTUE7V0F0REY7T0FERCxBQUNDLEFBb0lEO0FBcElDO0FBbENGOztrQkF5S2Usd0JBQUEsQUFBVyxRQUFYLEFBQW1CLEEiLCJmaWxlIjoiRm9vdGVyLmpzIiwic291cmNlUm9vdCI6IkM6L2ZvbGRlci9uZXcvZ29sIn0=