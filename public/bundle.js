(() => {
  'use strict';
  var e = {
      156: function (e, t, r) {
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, r, i) {
                  void 0 === i && (i = r);
                  var n = Object.getOwnPropertyDescriptor(t, r);
                  (n &&
                    !('get' in n
                      ? !t.__esModule
                      : n.writable || n.configurable)) ||
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    }),
                    Object.defineProperty(e, i, n);
                }
              : function (e, t, r, i) {
                  void 0 === i && (i = r), (e[i] = t[r]);
                }),
          n =
            (this && this.__setModuleDefault) ||
            (Object.create
              ? function (e, t) {
                  Object.defineProperty(e, 'default', {
                    enumerable: !0,
                    value: t,
                  });
                }
              : function (e, t) {
                  e.default = t;
                }),
          s =
            (this && this.__importStar) ||
            function (e) {
              if (e && e.__esModule) return e;
              var t = {};
              if (null != e)
                for (var r in e)
                  'default' !== r &&
                    Object.prototype.hasOwnProperty.call(e, r) &&
                    i(t, e, r);
              return n(t, e), t;
            };
        Object.defineProperty(t, '__esModule', {value: !0}),
          (new (s(r(555)).Canvas)().element.style.backgroundColor = 'blue');
      },
      555: (e, t, r) => {
        r.r(t), r.d(t, {Canvas: () => i, Square: () => n});
        var i = class {
            context;
            element;
            window;
            document;
            width;
            height;
            constructor(e) {
              (this.window = window), (this.document = document);
              const {
                selector: t,
                isFullscreen: r,
                width: i,
                height: n,
              } = e ?? {selector: null};
              if (!i && n && !r) throw new Error('Missing width');
              if (i && !n && !r) throw new Error('Missing height');
              (this.element =
                i && n && !r
                  ? this.createCustomCanvas(i, n, t)
                  : this.createFullScreenCanvas(t)),
                (this.context = this.element.getContext('2d')),
                (this.width = this.element.width),
                (this.height = this.element.height);
            }
            createFullScreenCanvas(e) {
              const {body: t} = document;
              t.setAttribute('margin', '0'),
                t.setAttribute('width', '100%'),
                t.setAttribute('height', '100%');
              const {innerWidth: r, innerHeight: i} = window;
              return this.createCustomCanvas(r, i, e);
            }
            createCustomCanvas(e, t, r) {
              const i = this.createCanvas(r);
              return (i.width = e), (i.height = t), i;
            }
            createCanvas(e) {
              if (e) return this.selectCanvas(e);
              const {body: t} = document,
                r = this.document.createElement('canvas');
              return t.insertBefore(r, t.firstChild), r;
            }
            selectCanvas(e) {
              const t = this.document.querySelector(e),
                r = 'CANVAS' === t?.tagName;
              if (!t) throw new Error('Canvas does not exist!');
              if (!r)
                throw new Error(
                  'Specified selector does not refer to a Canvas element!'
                );
              return t;
            }
            draw(e) {
              e.renderToCanvas(this.context);
            }
          },
          n = class {
            x;
            y;
            size;
            isClear;
            isStroke;
            fillStyle;
            strokeStyle;
            constructor(e) {
              const {
                x: t,
                y: r,
                size: i,
                isClear: n,
                isStroke: s,
                fillStyle: o,
                strokeStyle: a,
              } = e;
              (this.x = t),
                (this.y = r),
                (this.size = i),
                (this.isClear = n),
                (this.isStroke = s),
                (this.fillStyle = o),
                (this.strokeStyle = a);
            }
            renderToCanvas(e) {
              const {
                x: t,
                y: r,
                size: i,
                isClear: n,
                isStroke: s,
                fillStyle: o,
                strokeStyle: a,
              } = this;
              o && (e.fillStyle = o),
                a && (e.strokeStyle = a),
                n || s ? e.clearRect(t, r, i, i) : e.fillRect(t, r, i, i);
            }
          };
      },
    },
    t = {};
  function r(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var s = (t[i] = {exports: {}});
    return e[i].call(s.exports, s, s.exports, r), s.exports;
  }
  (r.d = (e, t) => {
    for (var i in t)
      r.o(t, i) &&
        !r.o(e, i) &&
        Object.defineProperty(e, i, {enumerable: !0, get: t[i]});
  }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {value: 'Module'}),
        Object.defineProperty(e, '__esModule', {value: !0});
    }),
    r(156);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUZFTyxFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJFLElBQWpCRCxFQUNILE9BQU9BLEVBQWFFLFFBR3JCLElBQUlDLEVBQVNOLEVBQXlCRSxHQUFZLENBR2pERyxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkwsR0FBVU0sS0FBS0YsRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0osR0FHcEVLLEVBQU9ELE9BQ2YsQ0NyQkFKLEVBQW9CUSxFQUFJLENBQUNKLEVBQVNLLEtBQ2pDLElBQUksSUFBSUMsS0FBT0QsRUFDWFQsRUFBb0JXLEVBQUVGLEVBQVlDLEtBQVNWLEVBQW9CVyxFQUFFUCxFQUFTTSxJQUM1RUUsT0FBT0MsZUFBZVQsRUFBU00sRUFBSyxDQUFFSSxZQUFZLEVBQU1DLElBQUtOLEVBQVdDLElBRTFFLEVDTkRWLEVBQW9CVyxFQUFJLENBQUNLLEVBQUtDLElBQVVMLE9BQU9NLFVBQVVDLGVBQWVaLEtBQUtTLEVBQUtDLEdDQ2xGakIsRUFBb0JvQixFQUFLaEIsSUFDSCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ1YsT0FBT0MsZUFBZVQsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFgsT0FBT0MsZUFBZVQsRUFBUyxhQUFjLENBQUVtQixPQUFPLEdBQU8sRUNGcEN2QixFQUFvQixJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbG95ZC5jb2Rlcy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9sb3lkLmNvZGVzLy4vbm9kZV9tb2R1bGVzL0Bsb3lkZGV0cm96L2d1aGl0LmpzL2J1aWxkL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9sb3lkLmNvZGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xveWQuY29kZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xveWQuY29kZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9sb3lkLmNvZGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbG95ZC5jb2Rlcy93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZ3VoaXQgZnJvbSAnQGxveWRkZXRyb3ovZ3VoaXQuanMnO1xuXG5jb25zdCBjYW52YXMgPSBuZXcgZ3VoaXQuQ2FudmFzKCk7XG5jYW52YXMuZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4iLCIvLyBzcmMvZ3VoaXQtY29yZS9jYW52YXMvaW5kZXgudHNcbnZhciBDYW52YXMgPSBjbGFzcyB7XG4gIGNvbnRleHQ7XG4gIGVsZW1lbnQ7XG4gIHdpbmRvdztcbiAgZG9jdW1lbnQ7XG4gIHdpZHRoO1xuICBoZWlnaHQ7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICB0aGlzLndpbmRvdyA9IHdpbmRvdztcbiAgICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgeyBzZWxlY3RvciwgaXNGdWxsc2NyZWVuLCB3aWR0aCwgaGVpZ2h0IH0gPSBvcHRpb25zID8/IHsgc2VsZWN0b3I6IG51bGwgfTtcbiAgICBpZiAoIXdpZHRoICYmIGhlaWdodCAmJiAhaXNGdWxsc2NyZWVuKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyB3aWR0aFwiKTtcbiAgICBpZiAod2lkdGggJiYgIWhlaWdodCAmJiAhaXNGdWxsc2NyZWVuKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyBoZWlnaHRcIik7XG4gICAgaWYgKHdpZHRoICYmIGhlaWdodCAmJiAhaXNGdWxsc2NyZWVuKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmNyZWF0ZUN1c3RvbUNhbnZhcyh3aWR0aCwgaGVpZ2h0LCBzZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY3JlYXRlRnVsbFNjcmVlbkNhbnZhcyhzZWxlY3Rvcik7XG4gICAgfVxuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuZWxlbWVudC5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgdGhpcy53aWR0aCA9IHRoaXMuZWxlbWVudC53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWxlbWVudC5oZWlnaHQ7XG4gIH1cbiAgY3JlYXRlRnVsbFNjcmVlbkNhbnZhcyhzZWxlY3Rvcikge1xuICAgIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoXCJtYXJnaW5cIiwgXCIwXCIpO1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICAgIGJvZHkuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwJVwiKTtcbiAgICBjb25zdCB7IGlubmVyV2lkdGgsIGlubmVySGVpZ2h0IH0gPSB3aW5kb3c7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ3VzdG9tQ2FudmFzKGlubmVyV2lkdGgsIGlubmVySGVpZ2h0LCBzZWxlY3Rvcik7XG4gIH1cbiAgY3JlYXRlQ3VzdG9tQ2FudmFzKHdpZHRoLCBoZWlnaHQsIHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jcmVhdGVDYW52YXMoc2VsZWN0b3IpO1xuICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuICBjcmVhdGVDYW52YXMoc2VsZWN0b3IpIHtcbiAgICBpZiAoc2VsZWN0b3IpXG4gICAgICByZXR1cm4gdGhpcy5zZWxlY3RDYW52YXMoc2VsZWN0b3IpO1xuICAgIGNvbnN0IHsgYm9keSB9ID0gZG9jdW1lbnQ7XG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGNhbnZhcywgYm9keS5maXJzdENoaWxkKTtcbiAgICByZXR1cm4gY2FudmFzO1xuICB9XG4gIHNlbGVjdENhbnZhcyhzZWxlY3Rvcikge1xuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgaXNDYW52YXNUYWcgPSBjYW52YXM/LnRhZ05hbWUgPT09IFwiQ0FOVkFTXCI7XG4gICAgaWYgKCFjYW52YXMpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW52YXMgZG9lcyBub3QgZXhpc3QhXCIpO1xuICAgIGlmICghaXNDYW52YXNUYWcpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTcGVjaWZpZWQgc2VsZWN0b3IgZG9lcyBub3QgcmVmZXIgdG8gYSBDYW52YXMgZWxlbWVudCFcIik7XG4gICAgcmV0dXJuIGNhbnZhcztcbiAgfVxuICBkcmF3KHNoYXBlKSB7XG4gICAgc2hhcGUucmVuZGVyVG9DYW52YXModGhpcy5jb250ZXh0KTtcbiAgfVxufTtcblxuLy8gc3JjL2d1aGl0LXNoYXBlcy9zcXVhcmUudHNcbnZhciBTcXVhcmUgPSBjbGFzcyB7XG4gIHg7XG4gIHk7XG4gIHNpemU7XG4gIGlzQ2xlYXI7XG4gIGlzU3Ryb2tlO1xuICBmaWxsU3R5bGU7XG4gIHN0cm9rZVN0eWxlO1xuICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgY29uc3QgeyB4LCB5LCBzaXplLCBpc0NsZWFyLCBpc1N0cm9rZSwgZmlsbFN0eWxlLCBzdHJva2VTdHlsZSB9ID0gb3B0aW9ucztcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICB0aGlzLmlzQ2xlYXIgPSBpc0NsZWFyO1xuICAgIHRoaXMuaXNTdHJva2UgPSBpc1N0cm9rZTtcbiAgICB0aGlzLmZpbGxTdHlsZSA9IGZpbGxTdHlsZTtcbiAgICB0aGlzLnN0cm9rZVN0eWxlID0gc3Ryb2tlU3R5bGU7XG4gIH1cbiAgcmVuZGVyVG9DYW52YXMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgeCwgeSwgc2l6ZSwgaXNDbGVhciwgaXNTdHJva2UsIGZpbGxTdHlsZSwgc3Ryb2tlU3R5bGUgfSA9IHRoaXM7XG4gICAgaWYgKGZpbGxTdHlsZSlcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZmlsbFN0eWxlO1xuICAgIGlmIChzdHJva2VTdHlsZSlcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHJva2VTdHlsZTtcbiAgICBpZiAoaXNDbGVhcikge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1N0cm9rZSkge1xuICAgICAgY29udGV4dC5jbGVhclJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSwgc2l6ZSwgc2l6ZSk7XG4gIH1cbn07XG5leHBvcnQge1xuICBDYW52YXMsXG4gIFNxdWFyZVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1Nik7XG4iXSwibmFtZXMiOlsiQ2FudmFzIiwiZWxlbWVudCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29udGV4dCIsIndpbmRvdyIsImRvY3VtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJ0aGlzIiwic2VsZWN0b3IiLCJpc0Z1bGxzY3JlZW4iLCJFcnJvciIsImNyZWF0ZUN1c3RvbUNhbnZhcyIsImNyZWF0ZUZ1bGxTY3JlZW5DYW52YXMiLCJnZXRDb250ZXh0IiwiYm9keSIsInNldEF0dHJpYnV0ZSIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNhbnZhcyIsImNyZWF0ZUNhbnZhcyIsInNlbGVjdENhbnZhcyIsImNyZWF0ZUVsZW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwicXVlcnlTZWxlY3RvciIsImlzQ2FudmFzVGFnIiwidGFnTmFtZSIsImRyYXciLCJzaGFwZSIsInJlbmRlclRvQ2FudmFzIiwiU3F1YXJlIiwieCIsInkiLCJzaXplIiwiaXNDbGVhciIsImlzU3Ryb2tlIiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJjbGVhclJlY3QiLCJmaWxsUmVjdCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsInVuZGVmaW5lZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiY2FsbCIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==
