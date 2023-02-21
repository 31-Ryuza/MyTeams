/*
 Highcharts Gantt JS v10.3.2 (2022-11-28)

 Pathfinder

 (c) 2016-2021 ystein Moseng

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/pathfinder",["highcharts"],function(x){a(x);a.Highcharts=x;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function x(a,y,u,v){a.hasOwnProperty(y)||(a[y]=v.apply(null,u),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:y,module:a[y]}})))}a=a?a._modules:{};x(a,
"Extensions/ArrowSymbols.js",[a["Core/Renderer/SVG/SVGRenderer.js"]],function(a){function y(a,d,n,q){return[["M",a,d+q/2],["L",a+n,d],["L",a,d+q/2],["L",a+n,d+q]]}function u(a,d,n,q){return[["M",a+n,d],["L",a,d+q/2],["L",a+n,d+q],["Z"]]}function v(a,d,n,q){return u(a,d,n/2,q)}a=a.prototype.symbols;a.arrow=y;a["arrow-filled"]=u;a["arrow-filled-half"]=v;a["arrow-half"]=function(a,d,n,q){return y(a,d,n/2,q)};a["triangle-left"]=u;a["triangle-left-half"]=v;return a});x(a,"Gantt/Connection.js",[a["Core/Defaults.js"],
a["Core/Globals.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"]],function(a,y,u,v){function B(a){var l=a.shapeArgs;return l?{xMin:l.x||0,xMax:(l.x||0)+(l.width||0),yMin:l.y||0,yMax:(l.y||0)+(l.height||0)}:(l=a.graphic&&a.graphic.getBBox())?{xMin:a.plotX-l.width/2,xMax:a.plotX+l.width/2,yMin:a.plotY-l.height/2,yMax:a.plotY+l.height/2}:null}var d=a.defaultOptions,n=v.defined,q=v.error;a=v.extend;var z=v.merge,x=v.objectEach;"";var h=y.deg2rad,b=Math.max,g=Math.min;a(d,{connectors:{type:"straight",
lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}});v=function(){function a(l,a,m){this.toPoint=this.pathfinder=this.graphics=this.fromPoint=this.chart=void 0;this.init(l,a,m)}a.prototype.init=function(l,a,m){this.fromPoint=l;this.toPoint=a;this.options=m;this.chart=l.series.chart;this.pathfinder=this.chart.pathfinder};a.prototype.renderPath=function(l,a,m){var f=this.chart,h=f.styledMode,b=
f.pathfinder,e=!f.options.chart.forExport&&!1!==m,c=this.graphics&&this.graphics.path;b.group||(b.group=f.renderer.g().addClass("highcharts-pathfinder-group").attr({zIndex:-1}).add(f.seriesGroup));b.group.translate(f.plotLeft,f.plotTop);c&&c.renderer||(c=f.renderer.path().add(b.group),h||c.attr({opacity:0}));c.attr(a);l={d:l};h||(l.opacity=1);c[e?"animate":"attr"](l,m);this.graphics=this.graphics||{};this.graphics.path=c};a.prototype.addMarker=function(a,f,m){var l=this.fromPoint.series.chart,b=l.pathfinder;
l=l.renderer;var g="start"===a?this.fromPoint:this.toPoint,e=g.getPathfinderAnchorPoint(f);if(f.enabled&&((m="start"===a?m[1]:m[m.length-2])&&"M"===m[0]||"L"===m[0])){m={x:m[1],y:m[2]};m=g.getRadiansToVector(m,e);e=g.getMarkerVector(m,f.radius,e);m=-m/h;if(f.width&&f.height){var c=f.width;var t=f.height}else c=t=2*f.radius;this.graphics=this.graphics||{};e={x:e.x-c/2,y:e.y-t/2,width:c,height:t,rotation:m,rotationOriginX:e.x,rotationOriginY:e.y};this.graphics[a]?this.graphics[a].animate(e):(this.graphics[a]=
l.symbol(f.symbol).addClass("highcharts-point-connecting-path-"+a+"-marker").attr(e).add(b.group),l.styledMode||this.graphics[a].attr({fill:f.color||this.fromPoint.color,stroke:f.lineColor,"stroke-width":f.lineWidth,opacity:0}).animate({opacity:1},g.series.options.animation))}};a.prototype.getPath=function(a){var f=this.pathfinder,l=this.chart,b=f.algorithms[a.type],h=f.chartObstacles;if("function"!==typeof b)return q('"'+a.type+'" is not a Pathfinder algorithm.'),{path:[],obstacles:[]};b.requiresObstacles&&
!h&&(h=f.chartObstacles=f.getChartObstacles(a),l.options.connectors.algorithmMargin=a.algorithmMargin,f.chartObstacleMetrics=f.getObstacleMetrics(h));return b(this.fromPoint.getPathfinderAnchorPoint(a.startMarker),this.toPoint.getPathfinderAnchorPoint(a.endMarker),z({chartObstacles:h,lineObstacles:f.lineObstacles||[],obstacleMetrics:f.chartObstacleMetrics,hardBounds:{xMin:0,xMax:l.plotWidth,yMin:0,yMax:l.plotHeight},obstacleOptions:{margin:a.algorithmMargin},startDirectionX:f.getAlgorithmStartDirection(a.startMarker)},
a))};a.prototype.render=function(){var a=this.fromPoint,f=a.series,h=f.chart,E=h.pathfinder,p=z(h.options.connectors,f.options.connectors,a.options.connectors,this.options),d={};h.styledMode||(d.stroke=p.lineColor||a.color,d["stroke-width"]=p.lineWidth,p.dashStyle&&(d.dashstyle=p.dashStyle));d["class"]="highcharts-point-connecting-path highcharts-color-"+a.colorIndex;p=z(d,p);n(p.marker.radius)||(p.marker.radius=g(b(Math.ceil((p.algorithmMargin||8)/2)-1,1),5));a=this.getPath(p);h=a.path;a.obstacles&&
(E.lineObstacles=E.lineObstacles||[],E.lineObstacles=E.lineObstacles.concat(a.obstacles));this.renderPath(h,d,f.options.animation);this.addMarker("start",z(p.marker,p.startMarker),h);this.addMarker("end",z(p.marker,p.endMarker),h)};a.prototype.destroy=function(){this.graphics&&(x(this.graphics,function(a){a.destroy()}),delete this.graphics)};return a}();y.Connection=v;a(u.prototype,{getPathfinderAnchorPoint:function(a){var h=B(this);switch(a.align){case "right":var f="xMax";break;case "left":f="xMin"}switch(a.verticalAlign){case "top":var b=
"yMin";break;case "bottom":b="yMax"}return{x:f?h[f]:(h.xMin+h.xMax)/2,y:b?h[b]:(h.yMin+h.yMax)/2}},getRadiansToVector:function(a,h){var f;n(h)||(f=B(this))&&(h={x:(f.xMin+f.xMax)/2,y:(f.yMin+f.yMax)/2});return Math.atan2(h.y-a.y,a.x-h.x)},getMarkerVector:function(a,h,f){var b=2*Math.PI,g=B(this),l=g.xMax-g.xMin,d=g.yMax-g.yMin,e=Math.atan2(d,l),c=!1;l/=2;var t=d/2,I=g.xMin+l;g=g.yMin+t;for(var F=I,G=g,k=1,r=1;a<-Math.PI;)a+=b;for(;a>Math.PI;)a-=b;b=Math.tan(a);a>-e&&a<=e?(r=-1,c=!0):a>e&&a<=Math.PI-
e?r=-1:a>Math.PI-e||a<=-(Math.PI-e)?(k=-1,c=!0):k=-1;c?(F+=k*l,G+=r*l*b):(F+=d/(2*b)*k,G+=r*t);f.x!==I&&(F=f.x);f.y!==g&&(G=f.y);return{x:F+h*Math.cos(a),y:G-h*Math.sin(a)}}});return v});x(a,"Gantt/PathfinderAlgorithms.js",[a["Core/Utilities.js"]],function(a){function y(a,b,g){g=g||0;var h=a.length-1;b-=1e-7;for(var l,f;g<=h;)if(l=h+g>>1,f=b-a[l].xMin,0<f)g=l+1;else if(0>f)h=l-1;else return l;return 0<g?g-1:0}function u(a,b){for(var h=y(a,b.x+1)+1;h--;){var d;if(d=a[h].xMax>=b.x)d=a[h],d=b.x<=d.xMax&&
b.x>=d.xMin&&b.y<=d.yMax&&b.y>=d.yMin;if(d)return h}return-1}function v(a){var h=[];if(a.length){h.push(["M",a[0].start.x,a[0].start.y]);for(var g=0;g<a.length;++g)h.push(["L",a[g].end.x,a[g].end.y])}return h}function x(a,b){a.yMin=q(a.yMin,b.yMin);a.yMax=n(a.yMax,b.yMax);a.xMin=q(a.xMin,b.xMin);a.xMax=n(a.xMax,b.xMax)}var d=a.pick,n=Math.min,q=Math.max,z=Math.abs;a=function(a,b,g){function h(a,e,b,h,f){a={x:a.x,y:a.y};a[e]=b[h||e]+(f||0);return a}function l(a,e,b){var c=z(e[b]-a[b+"Min"])>z(e[b]-
a[b+"Max"]);return h(e,b,a,b+(c?"Max":"Min"),c?1:-1)}var f=[],m=d(g.startDirectionX,z(b.x-a.x)>z(b.y-a.y))?"x":"y",n=g.chartObstacles,p=u(n,a);g=u(n,b);if(-1<g){var q=n[g];g=l(q,b,m);q={start:g,end:b};var e=g}else e=b;-1<p&&(n=n[p],g=l(n,a,m),f.push({start:a,end:g}),g[m]>=a[m]===g[m]>=e[m]&&(m="y"===m?"x":"y",b=a[m]<b[m],f.push({start:g,end:h(g,m,n,m+(b?"Max":"Min"),b?1:-1)}),m="y"===m?"x":"y"));a=f.length?f[f.length-1].end:a;g=h(a,m,e);f.push({start:a,end:g});m=h(g,"y"===m?"x":"y",e);f.push({start:g,
end:m});f.push(q);return{path:v(f),obstacles:f}};a.requiresObstacles=!0;var J=function(a,b,g){function h(a,c,e){var b,f=a.x<c.x?1:-1;if(a.x<c.x){var t=a;var h=c}else t=c,h=a;if(a.y<c.y){var g=a;var w=c}else g=c,w=a;for(b=0>f?n(y(k,h.x),k.length-1):0;k[b]&&(0<f&&k[b].xMin<=h.x||0>f&&k[b].xMax>=t.x);){if(k[b].xMin<=h.x&&k[b].xMax>=t.x&&k[b].yMin<=w.y&&k[b].yMax>=g.y)return e?{y:a.y,x:a.x<c.x?k[b].xMin-1:k[b].xMax+1,obstacle:k[b]}:{x:a.x,y:a.y<c.y?k[b].yMin-1:k[b].yMax+1,obstacle:k[b]};b+=f}return c}
function l(a,b,c,e,f){var t=f.soft,g=f.hard,k=e?"x":"y",l={x:b.x,y:b.y},w={x:b.x,y:b.y};f=a[k+"Max"]>=t[k+"Max"];t=a[k+"Min"]<=t[k+"Min"];var A=a[k+"Max"]>=g[k+"Max"];g=a[k+"Min"]<=g[k+"Min"];var d=z(a[k+"Min"]-b[k]),m=z(a[k+"Max"]-b[k]);c=10>z(d-m)?b[k]<c[k]:m<d;w[k]=a[k+"Min"];l[k]=a[k+"Max"];a=h(b,w,e)[k]!==w[k];b=h(b,l,e)[k]!==l[k];c=a?b?c:!0:b?!1:c;c=t?f?c:!0:f?!1:c;return g?A?c:!0:A?!1:c}function f(a,b,c){if(a.x===b.x&&a.y===b.y)return[];var d=c?"x":"y",m=g.obstacleOptions.margin;var r={soft:{xMin:t,
xMax:I,yMin:F,yMax:G},hard:g.hardBounds};var w=u(k,a);if(-1<w){w=k[w];r=l(w,a,b,c,r);x(w,g.hardBounds);var A=c?{y:a.y,x:w[r?"xMax":"xMin"]+(r?1:-1)}:{x:a.x,y:w[r?"yMax":"yMin"]+(r?1:-1)};var D=u(k,A);-1<D&&(D=k[D],x(D,g.hardBounds),A[d]=r?q(w[d+"Max"]-m+1,(D[d+"Min"]+w[d+"Max"])/2):n(w[d+"Min"]+m-1,(D[d+"Max"]+w[d+"Min"])/2),a.x===A.x&&a.y===A.y?(e&&(A[d]=r?q(w[d+"Max"],D[d+"Max"])+1:n(w[d+"Min"],D[d+"Min"])-1),e=!e):e=!1);a=[{start:a,end:A}]}else d=h(a,{x:c?b.x:a.x,y:c?a.y:b.y},c),a=[{start:a,end:{x:d.x,
y:d.y}}],d[c?"x":"y"]!==b[c?"x":"y"]&&(r=l(d.obstacle,d,b,!c,r),x(d.obstacle,g.hardBounds),r={x:c?d.x:d.obstacle[r?"xMax":"xMin"]+(r?1:-1),y:c?d.obstacle[r?"yMax":"yMin"]+(r?1:-1):d.y},c=!c,a=a.concat(f({x:d.x,y:d.y},r,c)));return a=a.concat(f(a[a.length-1].end,b,!c))}function m(a,c,b){var e=n(a.xMax-c.x,c.x-a.xMin)<n(a.yMax-c.y,c.y-a.yMin);b=l(a,c,b,e,{soft:g.hardBounds,hard:g.hardBounds});return e?{y:c.y,x:a[b?"xMax":"xMin"]+(b?1:-1)}:{x:c.x,y:a[b?"yMax":"yMin"]+(b?1:-1)}}var B=d(g.startDirectionX,
z(b.x-a.x)>z(b.y-a.y)),p=B?"x":"y",C=[],e=!1,c=g.obstacleMetrics,t=n(a.x,b.x)-c.maxWidth-10,I=q(a.x,b.x)+c.maxWidth+10,F=n(a.y,b.y)-c.maxHeight-10,G=q(a.y,b.y)+c.maxHeight+10,k=g.chartObstacles;var r=y(k,t);c=y(k,I);k=k.slice(r,c+1);if(-1<(c=u(k,b))){var H=m(k[c],b,a);C.push({end:b,start:H});b=H}for(;-1<(c=u(k,b));)r=0>b[p]-a[p],H={x:b.x,y:b.y},H[p]=k[c][r?p+"Max":p+"Min"]+(r?1:-1),C.push({end:b,start:H}),b=H;a=f(a,b,B);a=a.concat(C.reverse());return{path:v(a),obstacles:a}};J.requiresObstacles=!0;
return{fastAvoid:J,straight:function(a,b){return{path:[["M",a.x,a.y],["L",b.x,b.y]],obstacles:[{start:a,end:b}]}},simpleConnect:a}});x(a,"Gantt/Pathfinder.js",[a["Gantt/Connection.js"],a["Core/Chart/Chart.js"],a["Core/Defaults.js"],a["Core/Globals.js"],a["Core/Series/Point.js"],a["Core/Utilities.js"],a["Gantt/PathfinderAlgorithms.js"]],function(a,y,u,v,x,d,n){function q(a){var c=a.shapeArgs;return c?{xMin:c.x||0,xMax:(c.x||0)+(c.width||0),yMin:c.y||0,yMax:(c.y||0)+(c.height||0)}:(c=a.graphic&&a.graphic.getBBox())?
{xMin:a.plotX-c.width/2,xMax:a.plotX+c.width/2,yMin:a.plotY-c.height/2,yMax:a.plotY+c.height/2}:null}function z(a){for(var c=a.length,b=0,e,d,g=[],k=function(a,b,c){c=f(c,10);var e=a.yMax+c>b.yMin-c&&a.yMin-c<b.yMax+c,d=a.xMax+c>b.xMin-c&&a.xMin-c<b.xMax+c,g=e?a.xMin>b.xMax?a.xMin-b.xMax:b.xMin-a.xMax:Infinity,t=d?a.yMin>b.yMax?a.yMin-b.yMax:b.yMin-a.yMax:Infinity;return d&&e?c?k(a,b,Math.floor(c/2)):Infinity:p(g,t)};b<c;++b)for(e=b+1;e<c;++e)d=k(a[b],a[e]),80>d&&g.push(d);g.push(80);return K(Math.floor(g.sort(function(a,
c){return a-c})[Math.floor(g.length/10)]/2-1),1)}function B(a){if(a.options.pathfinder||a.series.reduce(function(a,b){b.options&&l(!0,b.options.connectors=b.options.connectors||{},b.options.pathfinder);return a||b.options&&b.options.pathfinder},!1))l(!0,a.options.connectors=a.options.connectors||{},a.options.pathfinder),g('WARNING: Pathfinder options have been renamed. Use "chart.connectors" or "series.connectors" instead.')}u=u.defaultOptions;var h=d.addEvent,b=d.defined,g=d.error,E=d.extend,l=d.merge,
f=d.pick,m=d.splat;"";var K=Math.max,p=Math.min;E(u,{connectors:{type:"straight",lineWidth:1,marker:{enabled:!1,align:"center",verticalAlign:"middle",inside:!1,lineWidth:1},startMarker:{symbol:"diamond"},endMarker:{symbol:"arrow-filled"}}});var C=function(){function e(a){this.lineObstacles=this.group=this.connections=this.chartObstacleMetrics=this.chartObstacles=this.chart=void 0;this.init(a)}e.prototype.init=function(a){this.chart=a;this.connections=[];h(a,"redraw",function(){this.pathfinder.update()})};
e.prototype.update=function(b){var c=this.chart,f=this,e=f.connections;f.connections=[];c.series.forEach(function(b){b.visible&&!b.options.isInternal&&b.points.forEach(function(b){var e=b.options;e&&e.dependency&&(e.connect=e.dependency);var d;e=b.options&&b.options.connect&&m(b.options.connect);b.visible&&!1!==b.isInside&&e&&e.forEach(function(e){d=c.get("string"===typeof e?e:e.to);d instanceof x&&d.series.visible&&d.visible&&!1!==d.isInside&&f.connections.push(new a(b,d,"string"===typeof e?{}:e))})})});
for(var d=0,k=void 0,g=void 0,h=e.length,l=f.connections.length;d<h;++d){g=!1;var n=e[d];for(k=0;k<l;++k){var A=f.connections[k];if((n.options&&n.options.type)===(A.options&&A.options.type)&&n.fromPoint===A.fromPoint&&n.toPoint===A.toPoint){A.graphics=n.graphics;g=!0;break}}g||n.destroy()}delete this.chartObstacles;delete this.lineObstacles;f.renderConnections(b)};e.prototype.renderConnections=function(a){a?this.chart.series.forEach(function(a){var b=function(){var b=a.chart.pathfinder;(b&&b.connections||
[]).forEach(function(b){b.fromPoint&&b.fromPoint.series===a&&b.render()});a.pathfinderRemoveRenderEvent&&(a.pathfinderRemoveRenderEvent(),delete a.pathfinderRemoveRenderEvent)};!1===a.options.animation?b():a.pathfinderRemoveRenderEvent=h(a,"afterAnimate",b)}):this.connections.forEach(function(a){a.render()})};e.prototype.getChartObstacles=function(a){for(var c=[],e=this.chart.series,d=f(a.algorithmMargin,0),g,k=0,h=e.length;k<h;++k)if(e[k].visible&&!e[k].options.isInternal){var l=0,m=e[k].points.length,
n=void 0;for(n=void 0;l<m;++l)n=e[k].points[l],n.visible&&(n=q(n))&&c.push({xMin:n.xMin-d,xMax:n.xMax+d,yMin:n.yMin-d,yMax:n.yMax+d})}c=c.sort(function(a,b){return a.xMin-b.xMin});b(a.algorithmMargin)||(g=a.algorithmMargin=z(c),c.forEach(function(a){a.xMin-=g;a.xMax+=g;a.yMin-=g;a.yMax+=g}));return c};e.prototype.getObstacleMetrics=function(a){for(var b=0,c=0,e,d,f=a.length;f--;)e=a[f].xMax-a[f].xMin,d=a[f].yMax-a[f].yMin,b<e&&(b=e),c<d&&(c=d);return{maxHeight:c,maxWidth:b}};e.prototype.getAlgorithmStartDirection=
function(a){var b="top"!==a.verticalAlign&&"bottom"!==a.verticalAlign;return"left"!==a.align&&"right"!==a.align?b?void 0:!1:b?!0:void 0};return e}();C.prototype.algorithms=n;v.Pathfinder=C;E(x.prototype,{getPathfinderAnchorPoint:function(a){var b=q(this);switch(a.align){case "right":var e="xMax";break;case "left":e="xMin"}switch(a.verticalAlign){case "top":var d="yMin";break;case "bottom":d="yMax"}return{x:e?b[e]:(b.xMin+b.xMax)/2,y:d?b[d]:(b.yMin+b.yMax)/2}},getRadiansToVector:function(a,c){var e;
b(c)||(e=q(this))&&(c={x:(e.xMin+e.xMax)/2,y:(e.yMin+e.yMax)/2});return Math.atan2(c.y-a.y,a.x-c.x)},getMarkerVector:function(a,b,d){var c=2*Math.PI,e=q(this),f=e.xMax-e.xMin,g=e.yMax-e.yMin,h=Math.atan2(g,f),l=!1;f/=2;var m=g/2,n=e.xMin+f;e=e.yMin+m;for(var p=n,t=e,u=1,v=1;a<-Math.PI;)a+=c;for(;a>Math.PI;)a-=c;c=Math.tan(a);a>-h&&a<=h?(v=-1,l=!0):a>h&&a<=Math.PI-h?v=-1:a>Math.PI-h||a<=-(Math.PI-h)?(u=-1,l=!0):u=-1;l?(p+=u*f,t+=v*f*c):(p+=g/(2*c)*u,t+=v*m);d.x!==n&&(p=d.x);d.y!==e&&(t=d.y);return{x:p+
b*Math.cos(a),y:t-b*Math.sin(a)}}});y.prototype.callbacks.push(function(a){!1!==a.options.connectors.enabled&&(B(a),this.pathfinder=new C(this),this.pathfinder.update(!0))});return C});x(a,"masters/modules/pathfinder.src.js",[],function(){})});
//# sourceMappingURL=pathfinder.js.map