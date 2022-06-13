$(function(){

	   //2. 이름 정의
   const FL_SLIDER =$('.flag_slider li')//On
			const FL_BTM_LIST=$('.flag_btm_wrap li')//Act

		 const FL_LEFT=$('.flag_side.left')
		 const FL_RIGHT=$('.flag_side.right')

			first();
	



  //1. 첫번째 슬라이드 실행 함수
 function first(){
		FL_SLIDER.eq(0).addClass('On');
		FL_BTM_LIST.eq(0).addClass('Act');
	}
	
	// 2 기존에 붙어있는 class제거해주는 함수
	function reset(){
		FL_SLIDER.removeClass('On');
		FL_BTM_LIST.removeClass('Act');
		
	}

	// right btn click
	FL_RIGHT.click(right)
	// left btn click
		FL_LEFT.click(left)
	// bottom btn click
	FL_BTM_LIST.click(bottom)



	// bottom 함수
	function bottom(e){
		e.preventDefault();

		const idx = $(this).index();

		reset()

		FL_SLIDER.eq(idx).addClass('On');
		FL_BTM_LIST.eq(idx).addClass('Act');

	}

	// right 함수
	function right(e){
		e.preventDefault();

		const idx = $('.flag_slider li.On').index();
		console.log(idx);

		reset()

		if(idx<3){
			FL_SLIDER.eq(idx+1).addClass('On');
			FL_BTM_LIST.eq(idx+1).addClass('Act');
		}
		else if(idx==3){
			FL_SLIDER.eq(0).addClass('On');
			FL_BTM_LIST.eq(0).addClass('Act');
			
		}


	}
// left 함수
	function left(e){
		e.preventDefault();

		const idx = $('.flag_slider li.On').index();
		console.log(idx);

		reset()

		if(idx>0){
			FL_SLIDER.eq(idx-1).addClass('On');
			FL_BTM_LIST.eq(idx-1).addClass('Act');
		}
		else if(idx==0){
			FL_SLIDER.eq(3).addClass('On');
			FL_BTM_LIST.eq(3).addClass('Act');
			
		}


	}

})