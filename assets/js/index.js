TweenMax.set('svg', {
  visibility: 'visible'
})
TweenMax.set('.wiperBlade', {
  svgOrigin:'400 350',
  rotation:1
})
TweenMax.set('#wifiLines path', {
  drawSVG:'100% 100%'
})

var tl = new TimelineMax({repeat:-1});
tl.to('.wiperBlade', 2, {
  rotation:-70,
  ease:Power1.easeInOut
})
.to('#wifiLines path', 2, {
  drawSVG:'100% 0%',
  ease:Power1.easeInOut
},'-=2')
.staggerTo('#wifiLines path', 1, {
  drawSVG:'0% 0%',
  alpha:0,
  ease:Linear.easeNone
},0.1,'-=0')
.set('#wifiLines path', {
  alpha:1
})
.to('.wiperBlade', 2, {
  rotation:1,
  ease:Power1.easeInOut
})
.to('#wifiLines path', 2, {
  drawSVG:'0% 100%',
  ease:Power1.easeInOut
},'-=2')
.staggerTo('#wifiLines path',1, {
  drawSVG:'100% 100%',
  alpha:0,
  ease:Linear.easeNone
},0.1,'-=0')
.set('#wifiLines path', {
  alpha:1
})

TweenMax.globalTimeScale(3)