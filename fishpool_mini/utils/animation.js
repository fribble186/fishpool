function fade(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.opacity(0.2).scale(0.9).step()
  animation.opacity(1).scale(1).step()
  return animation.export()
}
function scale_out(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.scale(0.8).step()
  animation.scale(1).step()
  return animation.export()
}
function scale_in(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.opacity(0).step()
  animation.scale(1.2).opacity(0.8).step()
  animation.scale(1).opacity(1).step()
  return animation.export()
}
function scale_top(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.opacity(0).step()
  animation.translateY(-20).step()
  animation.translateY(0).opacity(1).step()
  return animation.export()
}
function scale_down(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.opacity(0).step()
  animation.translateY(20).step()
  animation.translateY(0).opacity(1).step()
  return animation.export()
}
function scale_left(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.opacity(0).step()
  animation.translateX(-20).step()
  animation.translateX(0).opacity(1).step()
  return animation.export()
}
function scale_right(){
  let animation = my.createAnimation({
    duration:100,
    timeFunction:'ease-in-out'
  });
  animation.opacity(0).step()
  animation.translateX(20).step()
  animation.translateX(0).opacity(1).step()
  return animation.export()
}
function shake(){
  let animation = my.createAnimation({
    duration:50,
    timeFunction:'ease-in-out'
  });
  animation.translateX(10).step()
  animation.translateX(-10).step()
  animation.translateX(7).step()
  animation.translateX(-7).step()
  animation.translateX(5).step()
  animation.translateX(-5).step()
  animation.translateX(2).step()
  animation.translateX(0).step()
  return animation.export()
}
module.exports =  {
  fade,
  scale_out,
  scale_in,
  shake,
  scale_top,
  scale_down,
  scale_left,
  scale_right
};