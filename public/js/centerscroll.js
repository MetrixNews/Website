$(document).ready(function(){
  var outer = $('.hs');
  var inner = $('.hs div');
  outer.scrollLeft( (inner.width() - outer.width()) / 2);

  var target = $('li.active'); //Lets assume one element has the class active, it is the one we want to center
  var containerWidth = outer.width();
  var targetWidth = target.outerWidth(true);
  var targetIndex = target.index(); //Tells us what position this is in. Useful in calculations

  var leftScreenOffset = (containerWidth - targetWidth) / 2; //See Note 1 below
  var leftSiblingOffset = targetWidth * targetIndex; //See Note 2 below

  var scrollValue = leftSiblingOffset - leftScreenOffset;
  outer.scrollLeft(Math.max(0, scrollValue)); //our target is now centered.
});
