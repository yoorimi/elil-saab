$(function(){

	   const MOB_NAV = $('.mob_nav') //left_Move
				const MOB_BTN =$('.mov_nav_btn') //click
				const MOB_SUB_BTN =$('.m_nav_list_tit')//On
				const MOB_BG = $('.m_nav_bg');
	
				MOB_BTN.click(function(){
					MOB_NAV.addClass('left_Move')
				})
				
				
				MOB_BG.click(function(){
					MOB_NAV.removeClass('left_Move')

				})


				MOB_SUB_BTN.click(function(){
					$(this).toggleClass('On')
					
					$(this).next('dl').slideToggle()

				})
	
	
	
	
	
	
	
	
	
	
	
	
	
	// select_language  click 선택자
   const T_LANG = $('.select_language .t_lang');
			// class가 붙고 떨어짐
			const SELECT_LANG =$('.select_language')
			T_LANG.click(function(){
				SELECT_LANG.toggleClass('show');
			})














    // search btn
				const SEARCH_BTN = $('a.h_open_search');
				const HEADER_LINK =$('.header_link');
				const SEARCH_CLOSE =$('a.sch_close');


    const MAIN = $('#main') //filter
				let winWidth = $(window).width();
				const SEARCH_BG = $('.top_search_bg')





				SEARCH_BTN.click(function(){
					HEADER_LINK.addClass('On')
					
					if(winWidth<999){
						MAIN.addClass('filter');
					}
				})
				
				
				SEARCH_BG.click(function(){
					HEADER_LINK.removeClass('On')
					MAIN.removeClass('filter');

				})



				SEARCH_CLOSE.click(function(){
					
					HEADER_LINK.removeClass('On')
				})



				// pc nav 

				const GNB = $('.gnb'); //is_Active
				const SUB_MENU = $('.sub_menu')   //On
				const SUB_MENU_LIST = $('.sub_menu>ul>li') //Over
				const GNB_LIST =$('.nav_d1.d1_over')


				GNB_LIST.mouseenter(function(){

					 const idx = $(this).index();

						console.log(idx);
						SUB_MENU_LIST.removeClass('Over')
						GNB.addClass('is_Active');
						SUB_MENU.addClass('On')
						SUB_MENU_LIST.eq(idx).addClass('Over')
					})
					
					
					SUB_MENU_LIST.mouseleave(function(){

						   setTimeout(pc_gnb_reset,1000)
						
					})
					
					
					function pc_gnb_reset(){
						
						GNB.removeClass('is_Active');
						SUB_MENU.removeClass('On')
						SUB_MENU_LIST.removeClass('Over')
				}


				$(window).scroll(pc_gnb_reset);
				$(window).resize(pc_gnb_reset);

})