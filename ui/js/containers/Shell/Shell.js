import React, { Component, PropTypes } from 'react';
import Terminal from 'term.js';

//FIXME sami-airaksinen 11/27/15 : sockect heart beat
/*
window.setInterval(function() {
  window.socket.send("{\"ping\":1}");
}, 2000);
*/

//FIXME sami-airaksinen 11/27/15 : responsiveness
/*
$(window).resize(debouncer(function (e) {
  var nCols = parseInt(20 * $(window).width() / "0123456789ABCDEFGHIJK".width() + 1);
  var nRows = parseInt($(window).height() / "0123456789ABCDEFGHIJK".height() - 1);
  window.term.resize(nCols, nRows);
  window.socket.send("{\"cols\":" + nCols + ",\"rows\":" + nRows + "}");
}));
*/

export default class Shell extends Component {
  render() {
    return (
        <div>
          <h2>Here be shell terminal</h2>
        </div>
    )
  }
}

/*window.addEventListener('load', function() {
  var nCols = parseInt(20 * $(window).width() / "0123456789ABCDEFGHIJK".width());
  var nRows = parseInt($(window).height() / "0123456789ABCDEFGHIJK".height());
  var loc = window.location, ws_uri;
  if (loc.protocol === "https:") {
    ws_uri = "wss:";
  } else {
    ws_uri = "ws:";
  }
  var ctx = "/";
  var ctxEnd = loc.pathname.lastIndexOf("/");
  if (ctxEnd > 0) {
    if (loc.pathname.indexOf("/") === 0) {
      ctx = "";
    }
    ctx += loc.pathname.substring(0, contextEnd) + "/";
  }
  ws_uri += "//" + loc.host + ctx + "rawterminal/" + loc.search + "&cols=" + nCols + "&rows=" + nRows;
  var socket = new WebSocket(ws_uri);
  window.socket = socket;
  socket.onopen = function() {
    var term = new Terminal({
      cols: nCols,
      rows: nRows,
      screenKeys: true,
      cursorBlink: true,
      useStyles: true
    });
    term.on('data', function(data) {
      socket.send(data);
    });
    window.term = term;
    term.on('title', function(title) {
      document.title = title;
    });
    term.open(document.body);
    socket.onmessage = function(event) {
      term.write(event.data);
    };
    socket.onclose = function() {
      term.destroy();
    };
  };
}, false);*/
