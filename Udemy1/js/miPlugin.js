 jQuery.fn.txtHover = function (options) {
     var defaults = {
         txt: 'Mouse Hover',
         bgColor: 'Orange',
         fgColor: 'green',
         fSize: '2rem'
     }

     var o = jQuery.extend(defaults, options);

     return $(this).each(function(){
        var e = $(this)
        var txtOld = e.text()

        e.hover(function(){
            e.text(o.txt),
            e.css('background-color', o.bgColor),
            e.css('color', o.fgColor),
            e.css('font-size', o.fSize)
        },function(){
            e.text(txtOld),
            e.css('background-color', 'white'),
            e.css('color', 'black')
            e.css('font-size', '16px')
        })

     })
 }



 // $.fn.animandoCuadro = function (speed, fn) {
 //                 // console.log('funciona...')
 //                 return $(this).animate({
 //                     'height': '5rem',
 //                     'width': '5rem',
 //                     'font-size': '1rem'
 //                 }, speed, fn)
 //             }

 //             $('.ejercicio1').on('click', function () {
 //                 cuadro.animandoCuadro(1500, function () {
 //                     cuadro.animate({
 //                         'height': '10rem',
 //                         'width': '10rem',
 //                         'font-size': '1.5rem'
 //                     })
 //                     cuadro.text('')
 //                     cuadro.append('Funciono')
 //                 });
 //             })