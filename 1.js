document.addEventListener("DOMContentLoaded",function(){
	var nut=document.getElementsByClassName('declick');
	var nd=document.getElementsByClassName('dehienthi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick=function(){


			if(this.classList[1]=='mautrang'){
				this.classList.remove('mautrang');
				var ndhienra=this.getAttribute('data-hienlen');
				var phantuHienra=document.getElementById(ndhienra);
				phantuHienra.classList.remove('ra');
			}
			else{
				for (var k = 0; k < nut.length; k++) {
					nut[k].classList.remove('mautrang')
				}
				this.classList.toggle('mautrang');
				var ndhienra=this.getAttribute('data-hienlen');
				var phantuHienra=document.getElementById(ndhienra);
				for (var i = 0; i < nd.length; i++) {
					nd[i].classList.remove('ra');
				}
				phantuHienra.classList.toggle('ra');

			}
			


		}
	}

},false)
