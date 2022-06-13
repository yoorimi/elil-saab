$(function(){
//  0 변수의 정의
   const SLIDE = $('.visu_slide');
			const BTM_LIST =$('.visu_btm_wrap>li.visu_btm_list')
			const LEFT_BTN =$('.visu_arrow.left')
			const RIGHT_BTN =$('.visu_arrow.right')


			const STOP=$('.controls_wrap .control.stop')
			const START=$('.controls_wrap .control.start')

			 // 10 play btn영역  6초에 한번씩 실행하는 내용을 변수에 저장 

			let slider_play=setInterval(auto,7000)
			let slider_stop;


			 //1-0 첫번째 함수 호출
			first();


			 // 1 첫번째 불이 켜지는 함수 만들기
			function first(){
					SLIDE.eq(0).addClass('On')
					event()
			}


			// 2.이벤트 함수 만들기
				function event(){

						const ON_SLIDE = $('.visu_slide.On');//활성화된 슬라이드 저장
						const IDX = ON_SLIDE.index();//활성화된 슬라이드의 순서값 저장
						const VEIL = ON_SLIDE.children('.visu_veil');//활성화된 슬라이드 자식 veil
						const TXT = ON_SLIDE.children('.visu_txt_wrap');//활성화된 슬라이드 자식 txt
						
						VEIL.animate({
							'width':'48%',
							'opacity':'1'
						},1000)
						
						TXT.delay(1000).animate({
							'opacity':'1'
							
						})
						
						BTM_LIST.eq(IDX).addClass('Act')
					
				}



				// 3.right btn click
				RIGHT_BTN.click(right)


// 3-1 right 함수 만들기

			function right(e){
				e.preventDefault();
								
				//현재의 순서값 저장
				const INDEX = $('.visu_slide.On').index()

				reset()

				if(INDEX<3){
				SLIDE.eq(INDEX+1).addClass('On')
				
			}
			else if(INDEX==3){
				SLIDE.eq(0).addClass('On')
				
				}
				event();
			}


  // 5 left btn click
		LEFT_BTN.click(left);


		function left(e){
			e.preventDefault();
								
			//현재의 순서값 저장
			const INDEX = $('.visu_slide.On').index()

			reset()

				if(INDEX>0){
				SLIDE.eq(INDEX-1).addClass('On')
				
			}
			else if(INDEX==0){
				SLIDE.eq(3).addClass('On')
				
				}
			event();
		}


		  // 6 bottom btn click
				BTM_LIST.click(bottom)


				function bottom(e){

					e.preventDefault();

						const idx =$(this).index()//현재 순서값 저장
						reset()

						SLIDE.eq(idx).addClass('On')


						event()

				}


				// 자동play 함수

				function auto(){
					RIGHT_BTN.trigger('click');
				}



				//11 stop btn click
				STOP.click(function(){

							$(this).fadeOut(0)
							START.fadeIn(0);
      // fadeIn()  / fadeOut()
						slider_stop=clearInterval(slider_play)

				})


				//12 start btn click
				START.click(function(){
					$(this).fadeOut(0);
					STOP.fadeIn(0)

					slider_play=setInterval(auto,7000)


				})






  // 4.reset 함수 만들기

   function reset(){
								// 기본값 설정
								SLIDE.removeClass('On');
								BTM_LIST.removeClass('Act')

								SLIDE.children('.visu_veil').animate({
									'width':'0%',
									'opacity':'0'
								},0)
								SLIDE.children('.visu_txt_wrap').animate({
									
									'opacity':'0'
								},0)
				
			}




				

})