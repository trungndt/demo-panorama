$('.panorama').panorama_viewer({
  repeat: true, // The image will repeat when the user scroll reach the bounding box. The default value is false.
  direction: 'horizontal', // Let you define the direction of the scroll. Acceptable values are 'horizontal' and 'vertical'. The default value is horizontal
  animationTime: 100, // This allows you to set the easing time when the image is being dragged. Set this to 0 to make it instant. The default value is 700.
  easing: 'linear', // You can define the easing options here. This option accepts CSS easing options. Available options are 'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', and 'cubic-bezier(...))'. The default value is 'ease-out'.
  overlay: false // Toggle this to false to hide the initial instruction overlay
});
// window.Panorama = {};
// // (function(document, window, $) {
// var $handPhone = $('.hand-phone'),
//   $panorama = $('#pano');
// $(document).ready(function() {
//   // initialSpenActivity();
//   $handPhone.on({
//     'click': function(e) {
//       var $me = $(this);
//       // Trigger event start
//       $me.trigger('moveout.start');
//       // Execute
//       $me.removeClass('active');
//       $panorama.removeClass('blur');
//       // Trigger event complete
//       setTimeout(function() {
//         $me.trigger('moveout.complete');
//       }, 300);

//     },
//     'moveout.start': function(e) {
//       // console.log('moveout.start');
//     },
//     'moveout.complete': function(e) {
//       // console.log('moveout.complete');
//     }
//   });
// });

// var initialSpenActivity = function(activityData, callback) {
//   // Demo value
//   var mainData = {
//     sides: ['img/pano-1.jpg', 'img/pano-2.jpg', 'img/pano-3.jpg', 'img/pano-4.jpg'],
//     limit: { top: 0, bottom: 0, right: 999, left: -999 },
//     autorotate: 0,
//     infobox: '<b>Transporter Room</b><br>Where do you want to go?',
//     touch: true,
//     gyro: false,
//     hotspots: [
//       { type: 'nav', face: 3, x: 500, y: 500, name: '', value: 'img/photo-zoom-1.jpg' },
//       { type: 'nav', face: 2, x: 750, y: 500, name: '', value: 'img/photo-zoom-2.jpg' },
//     ]
//   };
//   $.each(activityData, function(i, e) {
//     mainData.hotspots[i] = {
//       type: 'nav',
//       hotspot_code: e.hotspot_code,
//       face: e.face,
//       x: e.x,
//       y: e.y,
//       value: e.image
//     }
//   });

//   $panorama.leanorama(mainData)
//     .on('leanoramaHotspotClick', function(e, hotspot) {
//       $handPhone.addClass('active');
//       $panorama.addClass('blur');
//       $handPhone.find('.phone').css('background-image', 'url(' + hotspot.value + ')');
//     })
//     .on('leanoramaViewChanged', function(e) {});
//   if (callback != undefined) callback();
// }

// var getHotspotIndexByCode = function(code) {
//   $.each(code, function(i, e) {
    
//   });
// }
// // }(document, window, $));
