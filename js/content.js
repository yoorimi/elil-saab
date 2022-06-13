$(function(){
   

	const TAB = $('.recomm_tab a');  //On
	const RECOMM_LIST = $('.recomm_list')  //On
// with


const WITH_LIST =$('.with_list')




		TAB.click(function(e){
			e.preventDefault();


			const idx = $(this).index();


			TAB.removeClass('On');
   RECOMM_LIST.removeClass('On');



			$(this).addClass('On');
   RECOMM_LIST.eq(idx).addClass('On');
			console.log(idx);


		})
   


		WITH_LIST.slick({
			dots: false,
			infinite: false,
			speed: 300,
			arrows:true,
			slidesToShow: 5,
			slidesToScroll: 5,
			responsive: [
					{
							breakpoint: 1190,
							settings: {
									slidesToShow: 3,
									slidesToScroll: 3,
								
							}
					},
					{
							breakpoint: 767,
							settings: {
									slidesToShow: 1,
									slidesToScroll: 1
							}
					},
					{
							breakpoint: 480,
							settings: {
									slidesToShow: 1,
									slidesToScroll: 1
							}
					}

			]
	});




})