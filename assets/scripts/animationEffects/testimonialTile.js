//constant
const TESTIMONIALS = [

/*Testimonial 1*/
'<p>"I saw the curriculum for graphic arts, and I thought, wow, there'+"'"+'s no filler.<br />'
+'<span class="bluetestimonialtext"> Everything is to the point.</span> It'+"'"+'s a lot of hands-on study, very practical." -LUCIANO SORMANI</p>',

/*Testimonial 2*/
'<p>"I stopped in for an Interview at Continental Real Estate. About 15 minues later, I had <span class="bluetestimonialtext">an internship AND a job</span>."<br />'
+'-JODI CROSSON</p>',

/*Testimonial 3*/
'<p>"I love that I can more <span class="bluetestimonialtext">specifically target</span> what I want to do.<br />'+
'I think my South Hills degree can <span class="bluetestimonialtext">open a lot of doors</span> for me." -DANIELLE MEADOWS'

];//This is the closing TESTIMONIALS bracket

//global
var count=1;

$(document).ready(function() {
    //Testimonial Tile Switch Text Action
    var testimonialRotator=
    {
    init: function()
        {
            $('#testimonials-text').html(TESTIMONIALS[0]);
            //interval between items (in milliseconds)
            var testInterval = 7000;
            //count number of items
            var numTestimonials = TESTIMONIALS.length;
            //set current item
            var testimonialItem = 0;
            //loop through the items, switch out the text, and animate each one
            var infiniteTestLoop = setInterval(function(){
                var HTML = TESTIMONIALS[count];
                $('#testimonials-text').fadeOut('slow','swing',function(){
                    $('#testimonials-text').html(HTML);
                    $('#testimonials-text').show();
                    if (++count==numTestimonials)
                        count=0;
                });
                
              
            }, testInterval);
        }
    };
    testimonialRotator.init();
});