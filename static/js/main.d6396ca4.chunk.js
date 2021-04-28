(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(12),s=n.n(r),i=n(4),o=n.n(i),u=n(6),l=n(3),j=n(8),b=n(7),d=n(5),p=n(0),h=function(e){var t=e.currentSong,n=e.isPlaying,a=e.setIsPlaying,c=e.audioRef,r=e.setSongInfo,s=e.songInfo,i=e.songs,j=e.setCurrentSong,h=e.setSongs,g=function(e){var t=i.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));h(t)},f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=function(){var e=Object(u.a)(o.a.mark((function e(a){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=i.findIndex((function(e){return e.id===t.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,j(i[(r+1)%i.length]);case 4:g(i[(r+1)%i.length]);case 5:if("skip-back"!==a){e.next=15;break}if((r-1)%i.length!==-1){e.next=12;break}return e.next=9,j(i[i.length-1]);case 9:return g(i[i.length-1]),n&&c.current.play(),e.abrupt("return");case 12:return e.next=14,j(i[(r-1)%i.length]);case 14:g(i[(r-1)%i.length]);case 15:n&&c.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(s.animationPercentage,"%)")};return Object(p.jsxs)("div",{className:"player",children:[Object(p.jsxs)("div",{className:"time-control",children:[Object(p.jsx)("p",{children:f(s.currentTime)}),Object(p.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],",").concat(t.color[1],")")},className:"track",children:[Object(p.jsx)("input",{min:0,max:s.duration||0,value:s.currentTime,onChange:function(e){c.current.currentTime=e.target.value,r(Object(l.a)(Object(l.a)({},s),{},{currentTime:e.target.value}))},type:"range"}),Object(p.jsx)("div",{style:O,className:"animate-track"})]}),Object(p.jsx)("p",{children:s.duration?f(s.duration):"0:00"})]}),Object(p.jsxs)("div",{className:"play-control",children:[Object(p.jsx)(b.a,{className:"skip-back",size:"2x",icon:d.a,onClick:function(){return m("skip-back")}}),Object(p.jsx)(b.a,{onClick:function(){n?(c.current.pause(),a(!n)):(c.current.play(),a(!n))},className:"play",size:"2x",icon:n?d.d:d.e}),Object(p.jsx)(b.a,{className:"skip-forward",size:"2x",icon:d.b,onClick:function(){return m("skip-forward")}})]})]})},g=function(e){var t=e.currentSong,n=e.isPlaying;return Object(p.jsxs)("div",{className:"song-container",children:[Object(p.jsx)("img",{className:"App ".concat(n?"rotate-img":""),alt:t.name,src:t.cover}),Object(p.jsx)("h2",{children:t.name}),Object(p.jsx)("h3",{children:t.artist})]})},f=function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,c=e.id,r=e.audioRef,s=e.isPlaying,i=e.setSongs,j=function(){var e=Object(u.a)(o.a.mark((function e(){var u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:u=n.map((function(e){return e.id===c?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),i(u),s&&r.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{onClick:j,className:"library-song ".concat(t.active?"selected":""),children:[Object(p.jsx)("img",{alt:t.name,src:t.cover}),Object(p.jsxs)("div",{className:"song-description",children:[Object(p.jsx)("h3",{children:t.name}),Object(p.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,c=e.isPlaying,r=e.setSongs,s=e.libraryStatus;return Object(p.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(p.jsx)("h2",{children:"Library"}),Object(p.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(p.jsx)(f,{songs:t,song:e,setCurrentSong:n,id:e.id,audioRef:a,isPlaying:c,setSongs:r},e.id)}))})]})},O=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(p.jsxs)("nav",{children:[Object(p.jsx)("h1",{children:"Waves"}),Object(p.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(p.jsx)(b.a,{icon:d.c})]})]})},v=(n(24),n(27));var x=function(){return[{name:"By Chance",artist:"SwuM",cover:"https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",color:["#924F2D","#CDA47B"],id:Object(v.a)(),active:!0,audio:"https://mp3.chillhop.com/serve.php/?mp3=15223"},{name:"Roses n Flames",artist:"C Y G N",cover:"https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",color:["#F2B5FA","#81B5E4"],id:Object(v.a)(),active:!1,audio:"https://mp3.chillhop.com/serve.php/?mp3=14984"},{name:"Soul Samba",artist:"Screen Jazzmaster, Zmeyev",cover:"https://chillhop.com/wp-content/uploads/2021/03/630fbe3721ce9fa27e56b6b01c460f709fbce3b7-1024x1024.jpg",color:["#FBB334","#F64830"],id:Object(v.a)(),active:!1,audio:"https://mp3.chillhop.com/serve.php/?mp3=16061"}]};var y=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(c[0]),i=Object(j.a)(s,2),b=i[0],d=i[1],f=Object(a.useState)(!1),v=Object(j.a)(f,2),y=v[0],S=v[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(j.a)(k,2),N=C[0],w=C[1],P=Object(a.useState)(!1),F=Object(j.a)(P,2),I=F[0],T=F[1],B=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);w(Object(l.a)(Object(l.a)({},N),{},{currentTime:t,duration:n,animationPercentage:r}))},M=function(){var t=Object(u.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.findIndex((function(e){return e.id===b.id})),t.next=3,d(c[(n+1)%c.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App ".concat(I?"library-active":""),children:[Object(p.jsx)(O,{libraryStatus:I,setLibraryStatus:T}),Object(p.jsx)(g,{currentSong:b,isPlaying:y}),Object(p.jsx)(h,{setIsPlaying:S,isPlaying:y,currentSong:b,audioRef:e,setSongInfo:w,songInfo:N,songs:c,setCurrentSong:d,setSongs:r}),Object(p.jsx)(m,{songs:c,setCurrentSong:d,audioRef:e,isPlaying:y,setSongs:r,libraryStatus:I}),Object(p.jsx)("audio",{onTimeUpdate:B,onLoadedMetadata:B,ref:e,src:b.audio,onEnded:M})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.d6396ca4.chunk.js.map