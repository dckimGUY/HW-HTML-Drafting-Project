/* THIS SHOULD STOP US FROM INTERFERING WITH HDUB, THAT WAY WE CAN ENTER TEXT ETC. */
menuWrapper.addEventListener("mousedown", function(event) { event.stopPropagation(); }, true);
menuWrapper.addEventListener("mousemove", function(event) { event.stopPropagation(); }, true);
menuWrapper.addEventListener("keydown",   function(event) { /*   esc   */ if (event.keyCode ==  27) { F.focus(); return; }
event.stopPropagation(); }, true);
menuWrapper.addEventListener("keypress",  function() { event.stopPropagation(); }, true);
menuWrapper.addEventListener("keyup",     function() { event.stopPropagation(); }, true);