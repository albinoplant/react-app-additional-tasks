(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var s=n(8),a=n(1),r=n(2),i=n(4),c=n(3),u=n(5),l=n(0),o=n.n(l),h=n(7),m=n.n(h);n(16);function p(e){var t="square"+(e.highlight?" highlight":"");return o.a.createElement("button",{className:t,onClick:e.onClick},e.value)}var v=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"renderSquare",value:function(e){var t=this,n=this.props.winLine;return o.a.createElement(p,{key:e,value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},highlight:n&&n.includes(e)})}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++){for(var n=[],s=0;s<3;s++)n.push(this.renderSquare(3*t+s));e.push(o.a.createElement("div",{key:t,className:"board-row"}," ",n))}return o.a.createElement("div",null," ",e," ")}}]),t}(o.a.Component),d=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(c.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,isDescending:!0},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),n=t[t.length-1].squares.slice();b(n).winner||n[e]||(n[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:n,selected:e}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"sortHistory",value:function(){this.setState({isDescending:!this.state.isDescending})}},{key:"render",value:function(){var e,t=this,n=this.state.history,s=n[this.state.stepNumber],a=b(s.squares),r=a.winner,i=n.map(function(e,n){var s=e.selected,a=n?"Go to move #"+n+f(s):"Go to game start";return o.a.createElement("li",{key:n},o.a.createElement("button",{className:n===t.state.stepNumber?"list-item-selected":"",onClick:function(){return t.jumpTo(n)}}," ",a))});return e=r?"Winner: "+r:r||9!==this.state.stepNumber?"Next player: "+(this.state.xIsNext?"X":"O"):"Draw",o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,{squares:s.squares,onClick:function(e){return t.handleClick(e)},winLine:a.line})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",null," ",this.state.isDescending?i:i.reverse()),o.a.createElement("button",{onClick:function(){return t.sortHistory()}}," ",t.state.isDescending?"list v":"list ^"," ")))}}]),t}(o.a.Component),f=function(e){return{0:" (1, 1)",1:" (1, 2)",2:" (1, 3)",3:" (2, 1)",4:" (2, 2)",5:" (2, 3)",6:" (3, 1)",7:" (3, 2)",8:" (3, 3)"}[e]};function b(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(s.a)(t[n],3),r=a[0],i=a[1],c=a[2];if(e[r]&&e[r]===e[i]&&e[r]===e[c])return{winner:e[r],line:t[n]}}return{winner:null}}m.a.render(o.a.createElement(d,null),document.getElementById("root"))},16:function(e,t,n){},9:function(e,t,n){e.exports=n(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.ce869c0d.chunk.js.map