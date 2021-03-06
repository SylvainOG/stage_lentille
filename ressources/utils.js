//Bouton plein écran
(function() {

	function BoutonPleinEcran(element,cou) {
		this.Container_constructor();
		this.element=element;
		this.cou=cou||'#09F';
		this.setup();
	}
	var p = createjs.extend(BoutonPleinEcran, createjs.Container);
	
	
	p.setup = function() {
		var fl=new createjs.Shape()
		fl.graphics.s('#009').f('#009').mt(12,4).lt(12,10).lt(22,0).lt(12,-10).lt(12,4).ss(8).mt(0,0).lt(12,0)
		var ssbPE = new createjs.SpriteSheetBuilder();
		var frame0PE = new createjs.Container()
		var tx0PE=new createjs.Text('plein écran', "bold 14px Arial",this.cou).set({textAlign:'center',y:30});
		var fl1=fl.clone(true).setTransform(9,4,1,1,45)
		var fl2=fl.clone(true).setTransform(9,-4,1,1,-45)
		var fl3=fl.clone(true).setTransform(-9,-4,1,1,225)
		var fl4=fl.clone(true).setTransform(-9,4,1,1,-225)
		var fondPE=new createjs.Shape()
		fondPE.graphics.ss(4).s('grey').f('white').dr(-30,-25,60,50)
		frame0PE.addChild(fl1,fl2,fl3,fl4,tx0PE)
		var frame1PE = new createjs.Container()
		var tx1PE=new createjs.Text('fenêtre', "bold 14px Arial", this.cou).set({textAlign:'center',y:30});
		var fl11=fl.clone(true).setTransform(-23,-18,1,1,45)
		var fl21=fl.clone(true).setTransform(-23,18,1,1,-45)
		var fl31=fl.clone(true).setTransform(23,18,1,1,225)
		var fl41=fl.clone(true).setTransform(23,-18,1,1,-225)
		var fondPE=new createjs.Shape()
		fondPE.graphics.ss(4).s('grey').f('white').dr(-30,-25,60,50)
		frame1PE.addChild(fl11,fl21,fl31,fl41,tx1PE)
		var boundsPE = new createjs.Rectangle(-50,-25,100,70);
		ssbPE.addFrame(frame0PE, boundsPE);
		ssbPE.addFrame(frame1PE, boundsPE);
		var sSPE = ssbPE.build();
		var sbtPE = new createjs.Sprite(sSPE);
		sbtPE.gotoAndStop(0)
		this.hitArea=fondPE
		this.cursor='pointer'
		this.addChild(fondPE,sbtPE)
		
		this.on("click",function(evt){
			twPleinEcran(this.element.parentNode)
			stage.update();
		})
		
		var canv=this.element
		var w = canv.width, h = canv.height;
		
		function twPleinEcran(_element) {
		  var monElement = _element;
		  if (document.mozFullScreenEnabled) {
			if (!document.mozFullScreenElement) {
				sbtPE.gotoAndStop(1);
				  monElement.mozRequestFullScreen();
				} else {
					sbtPE.gotoAndStop(0)
				  	document.mozCancelFullScreen();
				}
			  }
		  if (document.fullscreenElement) {
			  prop=document.fullscreenElement
			if (!document.fullscreenElement) {
				sbtPE.gotoAndStop(1);
				  monElement.requestFullscreen();
				} else {
					sbtPE.gotoAndStop(0);
				  document.exitFullscreen();
				}
			  }
		  if (document.webkitFullscreenEnabled) {
			if (!document.webkitFullscreenElement) {
				sbtPE.gotoAndStop(1);
				  monElement.webkitRequestFullscreen();
				} else {
					sbtPE.gotoAndStop(0);
				  document.webkitExitFullscreen();
				}
			  }
		  if (document.msFullscreenEnabled) {
		if (!document.msFullscreenElement) {
			sbtPE.gotoAndStop(1);
			  monElement.msRequestFullscreen();
			} else {
				sbtPE.gotoAndStop(0);
			  document.msExitFullscreen();
			}
		  }
	   window.onresize = function (){
			setDimensions();
		}
		
		function setDimensions() {
			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			sRatio = Math.min(xRatio, yRatio);
				
			if(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement == _element){
				//console.log(_element.childNodes)
				for(var k=0;k<_element.childNodes.length;k++){
					var can=_element.childNodes[k]
				
				can.style.width =  w*sRatio+'px';				
				can.style.height =  h*sRatio+'px';
				}
				
			}
			else {
				for(var l=0;l<_element.childNodes.length;l++){
					var can=_element.childNodes[l]
				can.style.width =  w+'px';				
				can.style.height =  h+'px';
				}
			}
				stage.update()
	
			}
		}
		
	} ;
	
	
	window.BoutonPleinEcran = createjs.promote(BoutonPleinEcran, "Container");
	}());



//Aide
(function() {

function Aide(posx,posy,txt,largeur) {
	this.Container_constructor();
	this.posx=posx;
	this.posy=posy;
	this.txt=txt
	this.largeur=largeur;
	this.setup();
	
}

var p = createjs.extend(Aide, createjs.Container);

p.setup = function() {
	if(this.largeur==undefined){
		this.largeur=500
	}
	//dessin de la main
	var rond = new createjs.Shape();
	rond.graphics.ss(3).s("#06F").rf(["#FFF", "#99F"], [0, 1], 0, 0, 0, 0, 0, 20)
	.drawCircle(0, 0, 20).f("#0000CC").s().p("Ag7CFIAAgTIgOgRQgOgZgEgnIABgVIggg3QgIgOAAgIQAAgJAFgGQAGgFAIAAQAMAAAKARIAYAwIgShCQgFgOAAgFQABgLAFgGQAGgGAKAAQARAAAGAZIAOBFIAAhOQAAgPAGgIQAFgIAMAAQAKAAAGAJQAGAJAAAQIgCBPIAOg+QAKgeARAAQAJAAAGAEQAEAGAAAJQAAAJgDALIgUBSIACAOQABgCAIgEQAIgKAJgHQAJgGALAAQAMAAAPANIAFAEIgmAmIgfAqQgUATgOAIIAAAaQgYAKgUAAQgUAAgXgLgAhyhEQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABQAAADAHAQIAjA2IgDAYQAGAjALAXIAQATIAAAPQANAEAQAAQAOAAANgEIAAgXQAZgTAOgNIAcgnIAfgcQgFgCgHgBQgGABgHADQgGAFgHAMQgMADgNAHIgKgGQgBgOgDgLIAVhSQAEgLAAgGIgBgFQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAgBgBAAQgFAAgFAQIgaBNIgUAAIABhXIAAgHQABgLgCgEQgCgEgDgBQgDABgCACQgCADgBAGIAAAMIAABZIgTADIgWhSQgFgSgGAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAIgBAGIACAMIAZBZIgSAGIgng9QgGgLgDAAQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAABg")
	rond.x=20;
	rond.y=20;

//texte d'aide, avec son fond
	var contTexte=new createjs.Container()
	contTexte.visible=false
	
	var txtAide=new createjs.Text(this.txt, "11px Arial", '#006')
		txtAide.lineWidth = this.largeur;
		txtAide.lineHeight = 18;
		txtAide.textBaseline = "top";
		txtAide.textAlign = "left";
		txtAide.x=this.posx
		txtAide.y=this.posy
		//this.txtAide=txtAide;
		var bounds = txtAide.getBounds();
		this.bounds=bounds
		var pad = 10;
		var fondTexte=new createjs.Shape()
		fondTexte.graphics.setStrokeStyle(2).beginStroke('#039').beginFill('#D1E2F5').drawRoundRect(this.posx - pad + bounds.x, this.posy - pad + bounds.y, bounds.width + pad * 2, bounds.height + pad * 2,5)
	
	contTexte.addChild(fondTexte,txtAide)
	this.addChild(rond,contTexte)
	
	//this.on("click", this.handleClick);
	this.on("rollover", function(event) {  
		contTexte.visible=true;
		stage.update()
	});
	
	this.on("rollout", function(event) {  
		contTexte.visible=false;
		stage.update()
	});
	this.cursor = "pointer";
//
	
};

window.Aide = createjs.promote(Aide, "Container");
}());


// Complément Point
//##############################################################################
//complément pour createjs.Point
//get length,add,subtract,equals,normalize,offset,setTo,copyFrom,distance,interpolate,polar
//rajouté : dot,cross,scale,scaleNew,normalNew
(function(d){"use strict";
if(!createjs||!createjs.Point){return}
var e=createjs.Point;
var p={get length(){return Math.sqrt(this.x*this.x+this.y*this.y)}};
var g=e.prototype;
for(var k in g){p[k]=g[k]}
e.prototype=p;
p.constructor=e;
p.getLength=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};
p.setLength=function(a){var b=this.length;if(b===0||a===0){this.x=0;this.y=0}else{var c=a/b;this.x*=c;this.y*=c}}

p.add=function(v){return new e(this.x+v.x,this.y+v.y)};
p.subtract=function(v){return new e(this.x-v.x,this.y-v.y)};
p.equals=function(a){return this.x===a.x&&this.y===a.y};
p.normalize=function(a){var b=this.length;if(b===0||a===0){this.x=0;this.y=0}else{var c=a/b;this.x*=c;this.y*=c}}
p.offset=function(a,b){this.x+=a;this.y+=b};
p.setTo=function(a,b){this.x=a;this.y=b};
p.copyFrom=p.copy;
e.distance=function(a,b){return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))};
e.interpolate=function(a,b,f){return new e((a.x-b.x)*f+b.x,(a.y-b.y)*f+b.y)};
p.dot=function(a){return (this.x*a.x+this.y*a.y)}
p.cross=function(a){return (this.x*a.y-this.y*a.x)}
p.scale=function(a){this.x*=a;this.y*=a}
p.scaleNew=function(s){var c=this.clone();c.normalize(c.length*s);return c}
p.unit=function(){var c=this.clone();c.normalize(1);return c}
p.unit1=function(){var c=this.clone();c.normalize(1);return new e(-c.y,c.x)}
p.angle=function(){return Math.atan2(this.y,this.x)}
///
p.getAngle=function(){return Math.atan2(this.y,this.x)}
p.setAngle=function(a){return e.polar(this.length,a)}
	Object.defineProperty(p, "ang", {
  get: function() { return Math.atan2(this.y,this.x)},
  set: function(y) { var l=this.length;this.x=l*Math.cos(y);this.y=l*Math.sin(y)}
})
Object.defineProperty(p, "mod", {
  get: function() { return this.getLength()},
  set: function(m) {this.x=m*Math.cos(this.ang);this.y=m*Math.sin(this.ang)}
})
////
p.normalNew=function(){return new e(-this.y,this.x)}
p.rotateNew=function(a){return new e.polar(this.length,this.angle()+a)}
p.symaxe=function(A,B){
	var uAB=(B.subtract(A)).unit();
	var AM=this.subtract(A)
	var AH=uAB.scaleNew(uAB.dot(AM))
	var H=A.add(AH)
	return e.interpolate(H,this,2)
}
p.sympoint=function(A){
	return e.interpolate(A,this,2)
}
e.sym=function(a,b){return new e.interpolate(b,a,2)}
e.milieu=function(a,b){return new e((a.x+b.x)/2,(a.y+b.y)/2)}
e.polar=function(a,b){return new e(Math.cos(b)*a,Math.sin(b)*a)}}

(window));




// Complexe.js
//##############################################################################

this.createjs = this.createjs||{};

(function() {
	"use strict";
	function Complexe(x, y) {
	 	this.setValues(x, y);
	}
	var p = Complexe.prototype;
	var e=Complexe;

	p.setValues = function(x, y) {
		this.x = x||0;
		this.y = y||0;
		return this;
	};

	p.copy = function(point) {
		this.x = point.x;
		this.y = point.y;
		return this;
	};

	p.clone = function() {
		return new Complexe(this.x, this.y);
	};

	p.toString = function() {
		return "[Complexe (x="+this.x+" y="+this.y+")]";
	};
	////////////////////////////////:
//	var p={get module(){return Math.sqrt(this.x*this.x+this.y*this.y)}};
//var g=e.prototype;
//for(var k in g){p[k]=g[k]}
//e.prototype=p;
//p.constructor=e;

p.getModule=function(){return Math.sqrt(this.x*this.x+this.y*this.y)};
p.add=function(v){return new e(this.x+v.x,this.y+v.y)};
p.subtract=function(v){return new e(this.x-v.x,this.y-v.y)};
p.equals=function(a){return this.x===a.x&&this.y===a.y};
p.normalize=function(a){var b=this.getModule();if(b===0||a===0){this.x=0;this.y=0}else{var c=a/b;this.x*=c;this.y*=c}}

p.offset=function(a,b){this.x+=a;this.y+=b};
p.setTo=function(a,b){this.x=a;this.y=b};
p.copyFrom=p.copy;
//e.distance=function(a,b){return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))};
//e.interpolate=function(a,b,f){return new e((a.x-b.x)*f+b.x,(a.y-b.y)*f+b.y)};
//p.dot=function(a){return (this.x*a.x+this.y*a.y)}
//p.cross=function(a){return (this.x*a.y-this.y*a.x)}

p.scale=function(a){this.x*=a;this.y*=a}
p.scaleNew=function(s){var c=this.clone();c.normalize(c.getModule()*s);return c}
p.unit=function(){var c=this.clone();c.normalize(1);return c}
p.unit1=function(){var c=this.clone();c.normalize(1);return new e(-c.y,c.x)}
p.arg=function(){return Math.atan2(this.y,this.x)}
e.conjugue=function(a){return new Complexe(a.x,-a.y)}
//e.inverse=function(a){var d=a.x*a.x+a.y*a.y;return new Complexe(a.x/d,-a.y/d)}
p.inverse=function(){var d=this.x*this.x+this.y*this.y;return new Complexe(this.x/d,-this.y/d)}
p.produit = function(v) {return new e(this.x*v.x-this.y*v.y, this.x*v.y+this.y*v.x);};
p.quotient = function(v) {var d=v.x*v.x+v.y*v.y;return new e((this.x*v.x+this.y*v.y)/d,(this.y*v.x -this.x*v.y)/d);};
p.expo=function(){var ex=Math.exp(this.x);return new e(ex*Math.cos(this.y),ex*Math.sin(this.y))}
	
	
	
	
//p.normalNew=function(){return new e(-this.y,this.x)}
p.rotateNew=function(a){return new e.polar(this.length,this.angle()+a)}
//p.symaxe=function(A,B){
//	var uAB=(B.subtract(A)).unit();
//	var AM=this.subtract(A)
//	var AH=uAB.scaleNew(uAB.dot(AM))
//	var H=A.add(AH)
//	return e.interpolate(H,this,2)
//}
//p.sympoint=function(A){
//	return e.interpolate(A,this,2)
//}

e.polar=function(a,b){return new e(Math.cos(b)*a,Math.sin(b)*a)};

	
	
	
	
	
	///////////////////////////////////
	createjs.Complexe = Complexe;
}());

/*
https://github.com/u-kudox/Matrix3D_for_EaselJS
License : public domain
*/
this.createjs=this.createjs||{},function(){"use strict";function a(a){this.rawData=new Float32Array(a&&16===a.length?a:[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function b(a,b){var c=a.rawData,d=c[0],e=c[4],f=c[8],g=c[12],h=c[1],i=c[5],j=c[9],k=c[13],l=c[2],m=c[6],n=c[10],o=c[14],p=c[3],q=c[7],r=c[11],s=c[15],t=b.rawData,u=t[0],v=t[4],w=t[8],x=t[12],y=t[1],z=t[5],A=t[9],B=t[13],C=t[2],D=t[6],E=t[10],F=t[14],G=t[3],H=t[7],I=t[11],J=t[15],K=this.rawData;K[0]=d*u+e*y+f*C+g*G,K[1]=h*u+i*y+j*C+k*G,K[2]=l*u+m*y+n*C+o*G,K[3]=p*u+q*y+r*C+s*G,K[4]=d*v+e*z+f*D+g*H,K[5]=h*v+i*z+j*D+k*H,K[6]=l*v+m*z+n*D+o*H,K[7]=p*v+q*z+r*D+s*H,K[8]=d*w+e*A+f*E+g*I,K[9]=h*w+i*A+j*E+k*I,K[10]=l*w+m*A+n*E+o*I,K[11]=p*w+q*A+r*E+s*I,K[12]=d*x+e*B+f*F+g*J,K[13]=h*x+i*B+j*F+k*J,K[14]=l*x+m*B+n*F+o*J,K[15]=p*x+q*B+r*F+s*J}var c=a,d=a.prototype={get determinant(){var a=this.rawData,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],k=a[6],l=a[10],m=a[14],n=a[3],o=a[7],p=a[11],q=a[15],r=l*q-p*m,s=h*q-p*i,t=h*m-l*i,u=j*o-n*k,v=f*o-n*g,w=f*k-j*g,x=b*(g*r-k*s+o*t)-c*(f*r-j*s+n*t)+d*(i*u-m*v+q*w)-e*(h*u-l*v+p*w);return x},get position(){var a=this.rawData;return new createjs.Vector3D(a[12],a[13],a[14])},set position(a){var b=this.rawData;b[12]=a.x,b[13]=a.y,b[14]=a.z}};d.rawData=null,d.append=function(a){b.call(this,a,this)},d.appendRotation=function(b,c,d){var e,f,g;e=f=g=0,d instanceof createjs.Vector3D&&(e=d.x,f=d.y,g=d.z);var h=b*a.DEG_TO_RAD,i=Math.cos(h),j=Math.sin(h),k=c.x,l=c.y,m=c.z,n=k*k,o=l*l,p=m*m,q=n+o+p;if(0!==q){var r=Math.sqrt(q);k/=r,l/=r,m/=r,n/=q,o/=q,p/=q}var s=1-i,t=new a,u=t.rawData;u[0]=n+(o+p)*i,u[1]=k*l*s+m*j,u[2]=k*m*s-l*j,u[4]=k*l*s-m*j,u[5]=o+(n+p)*i,u[6]=l*m*s+k*j,u[8]=k*m*s+l*j,u[9]=l*m*s-k*j,u[10]=p+(n+o)*i,u[12]=(e*(o+p)-k*(f*l+g*m))*s+(f*m-g*l)*j,u[13]=(f*(n+p)-l*(e*k+g*m))*s+(g*k-e*m)*j,u[14]=(g*(n+o)-m*(e*k+f*l))*s+(e*l-f*k)*j,this.append(t)},d.appendScale=function(a,b,c){var d=this.rawData;isNaN(a)||1===a||(d[0]*=a,d[4]*=a,d[8]*=a,d[12]*=a),isNaN(b)||1===b||(d[1]*=b,d[5]*=b,d[9]*=b,d[13]*=b),isNaN(c)||1===c||(d[2]*=c,d[6]*=c,d[10]*=c,d[14]*=c)},d.appendTranslation=function(a,b,c){a=a||0,b=b||0,c=c||0;var d=this.rawData,e=d[3],f=d[7],g=d[11],h=d[15];0!==a&&(d[0]+=a*e,d[4]+=a*f,d[8]+=a*g,d[12]+=a*h),0!==b&&(d[1]+=b*e,d[5]+=b*f,d[9]+=b*g,d[13]+=b*h),0!==c&&(d[2]+=c*e,d[6]+=c*f,d[10]+=c*g,d[14]+=c*h)},d.clone=function(){return new a(this.rawData)},d.copyColumnFrom=function(a,b){if(a=0|a,!(0>a||a>3)){var c=4*a,d=this.rawData;d[c]=b.x,d[++c]=b.y,d[++c]=b.z,d[++c]=b.w}},d.copyColumnTo=function(a,b){if(a=0|a,!(0>a||a>3)){var c=4*a,d=this.rawData;b.x=d[c],b.y=d[++c],b.z=d[++c],b.w=d[++c]}},d.copyFrom=function(a){for(var b=this.rawData,c=a.rawData,d=0;16>d;d++)b[d]=c[d]},d.copyRawDataFrom=function(a,b,c){b=0|b;var d=a.length;if(0>b||16>d-b)throw new Error("Invalid parameter");for(var e=this.rawData,f=0;16>f;f++)e[f]=a[b++];c&&this.transpose()},d.copyRawDataTo=function(a,b,c){if(b=0|b,0>b)throw new Error("Invalid parameter");var d;if(c){var e=this.clone();e.transpose(),d=e.rawData}else d=this.rawData;for(var f=0;16>f;f++)a[b++]=d[f]},d.copyRowFrom=function(a,b){if(a=0|a,!(0>a||a>3)){var c=this.rawData;c[a]=b.x,c[a+=4]=b.y,c[a+=4]=b.z,c[a+=4]=b.w}},d.copyRowTo=function(a,b){if(a=0|a,!(0>a||a>3)){var c=this.rawData;b.x=c[a],b.y=c[a+=4],b.z=c[a+=4],b.w=c[a+=4]}},d.copyToMatrix3D=function(a){for(var b=a.rawData,c=this.rawData,d=0;16>d;d++)b[d]=c[d]},d.decompose=function(a){var b=e,c=b.EULER_ANGLES,d=b.QUATERNION,f=b.AXIS_ANGLE;if(a=a||c,a!==c&&a!==d&&a!==f)throw new Error("The 1st parameter is invalid.");var g=this.rawData,h=new createjs.Vector3D(g[12],g[13],g[14]),i=g[0],j=g[4],k=g[8],l=g[1],m=g[5],n=g[9],o=g[2],p=g[6],q=g[10],r=Math.sqrt(i*i+l*l+o*o),s=Math.sqrt(j*j+m*m+p*p),t=Math.sqrt(k*k+n*n+q*q),u=new createjs.Vector3D(r,s,t);r>0&&(i/=r,l/=r,o/=r),s>0&&(j/=s,m/=s,p/=s),t>0&&(k/=t,n/=t,q/=t);var v;if(a===c){var w,x,y,z=-o;x=-1>=z?.5*-Math.PI:z>=1?.5*Math.PI:Math.asin(z);var A=Math.cos(x);.001>=A?(y=0,w=Math.atan2(-n,m)):(y=Math.atan2(l,i),w=Math.atan2(p,q)),v=new createjs.Vector3D(w,x,y)}else{var B,C,D,E,F=[i+m+q,i-m-q,m-i-q,q-i-m],G=F.indexOf(Math.max.apply(null,F)),H=.5*Math.sqrt(F[G]+1),I=.25/H;switch(G){case 0:B=(p-n)*I,C=(k-o)*I,D=(l-j)*I,E=H;break;case 1:B=H,C=(l+j)*I,D=(k+o)*I,E=(p-n)*I;break;case 2:B=(l+j)*I,C=H,D=(p+n)*I,E=(k-o)*I;break;case 3:B=(k+o)*I,C=(p+n)*I,D=H,E=(l-j)*I}var J=Math.sqrt(B*B+C*C+D*D+E*E);if(0!==J&&(B/=J,C/=J,D/=J,E/=J),a===f){var K=Math.acos(E),L=Math.sin(K);0!==L?(B/=L,C/=L,D/=L,E=2*K):B=C=D=E=0}v=new createjs.Vector3D(B,C,D,E)}return[h,v,u]},d.deltaTransformVector=function(a){var b=a.x,c=a.y,d=a.z,e=this.rawData,f=e[0]*b+e[4]*c+e[8]*d,g=e[1]*b+e[5]*c+e[9]*d,h=e[2]*b+e[6]*c+e[10]*d;return new createjs.Vector3D(f,g,h)},d.identity=function(){var a=this.rawData;a[0]=a[5]=a[10]=a[15]=1,a[1]=a[2]=a[3]=a[4]=a[6]=a[7]=a[8]=a[9]=a[11]=a[12]=a[13]=a[14]=0},d.interpolateTo=function(a,b){0>b?b=0:b>1&&(b=1);var c=e.QUATERNION,d=this.decompose(c),f=a.decompose(c),g=d[0],h=f[0];h=h.subtract(g),h.scaleBy(b),g=g.add(h);var i=d[1],j=f[1],k=i.x,l=i.y,m=i.z,n=i.w,o=j.x,p=j.y,q=j.z,r=j.w,s=k*o+l*p+m*q+n*r;0>s&&(o=-o,p=-p,q=-q,r=-r,s=-s);var t,u;if(s>.9999)t=1-b,u=b;else{var v=Math.sqrt(1-s*s),w=Math.atan2(v,s),x=1/v;t=Math.sin((1-b)*w)*x,u=Math.sin(b*w)*x}var y=k*t+o*u,z=l*t+p*u,A=m*t+q*u,B=n*t+r*u;this.recompose([g,new createjs.Vector3D(y,z,A,B),new createjs.Vector3D(1,1,1)],c)},d.invert=function(){var a=this.rawData,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],k=a[6],l=a[10],m=a[14],n=a[3],o=a[7],p=a[11],q=a[15],r=l*q-p*m,s=h*q-p*i,t=h*m-l*i,u=j*o-n*k,v=f*o-n*g,w=f*k-j*g,x=b*(g*r-k*s+o*t)-c*(f*r-j*s+n*t)+d*(i*u-m*v+q*w)-e*(h*u-l*v+p*w);if(0===x)return!1;var y=1/x,z=d*q-p*e,A=d*m-l*e,B=b*o-n*c,C=b*k-j*c,D=d*i-h*e,E=b*g-f*c;return a[0]=(g*r-k*s+o*t)*y,a[1]=(f*r-j*s+n*t)*-y,a[2]=(i*u-m*v+q*w)*y,a[3]=(h*u-l*v+p*w)*-y,a[4]=(c*r-k*z+o*A)*-y,a[5]=(b*r-j*z+n*A)*y,a[6]=(e*u-m*B+q*C)*-y,a[7]=(d*u-l*B+p*C)*y,a[8]=(c*s-g*z+o*D)*y,a[9]=(b*s-f*z+n*D)*-y,a[10]=(e*v-i*B+q*E)*y,a[11]=(d*v-h*B+p*E)*-y,a[12]=(c*t-g*A+k*D)*-y,a[13]=(b*t-f*A+j*D)*y,a[14]=(e*w-i*C+m*E)*-y,a[15]=(d*w-h*C+l*E)*y,!0},d.prepend=function(a){b.call(this,this,a)},d.prependRotation=function(b,c,d){var e,f,g;e=f=g=0,d instanceof createjs.Vector3D&&(e=d.x,f=d.y,g=d.z);var h=b*a.DEG_TO_RAD,i=Math.cos(h),j=Math.sin(h),k=c.x,l=c.y,m=c.z,n=k*k,o=l*l,p=m*m,q=n+o+p;if(0!==q){var r=Math.sqrt(q);k/=r,l/=r,m/=r,n/=q,o/=q,p/=q}var s=1-i,t=new a,u=t.rawData;u[0]=n+(o+p)*i,u[1]=k*l*s+m*j,u[2]=k*m*s-l*j,u[4]=k*l*s-m*j,u[5]=o+(n+p)*i,u[6]=l*m*s+k*j,u[8]=k*m*s+l*j,u[9]=l*m*s-k*j,u[10]=p+(n+o)*i,u[12]=(e*(o+p)-k*(f*l+g*m))*s+(f*m-g*l)*j,u[13]=(f*(n+p)-l*(e*k+g*m))*s+(g*k-e*m)*j,u[14]=(g*(n+o)-m*(e*k+f*l))*s+(e*l-f*k)*j,this.prepend(t)},d.prependScale=function(a,b,c){var d=this.rawData;isNaN(a)||1===a||(d[0]*=a,d[1]*=a,d[2]*=a,d[3]*=a),isNaN(b)||1===b||(d[4]*=b,d[5]*=b,d[6]*=b,d[7]*=b),isNaN(c)||1===c||(d[8]*=c,d[9]*=c,d[10]*=c,d[11]*=c)},d.prependTranslation=function(a,b,c){a=a||0,b=b||0,c=c||0;{var d=this.rawData,e=d[0],f=d[4],g=d[8],h=(d[12],d[1]),i=d[5],j=d[9],k=(d[13],d[2]),l=d[6],m=d[10],n=(d[14],d[3]),o=d[7],p=d[11];d[15]}d[12]+=e*a+f*b+g*c,d[13]+=h*a+i*b+j*c,d[14]+=k*a+l*b+m*c,d[15]+=n*a+o*b+p*c},d.recompose=function(a,b){if(!a||a.length<3)return!1;for(var c=0;3>c;c++)if(!(a[c]instanceof createjs.Vector3D))return!1;var d=e,f=d.EULER_ANGLES,g=d.QUATERNION,h=d.AXIS_ANGLE;if(b=b||f,b!==f&&b!==g&&b!==h)throw new Error("The 2nd parameter is invalid.");var i=this.rawData,j=a[0];i[12]=j.x,i[13]=j.y,i[14]=j.z;var k=a[1],l=a[2];if(i[0]=i[1]=i[2]=l.x,i[4]=i[5]=i[6]=l.y,i[8]=i[9]=i[10]=l.z,b===f){var m=k.x,n=Math.cos(m),o=Math.sin(m),p=k.y,q=Math.cos(p),r=Math.sin(p),s=k.z,t=Math.cos(s),u=Math.sin(s);i[0]*=q*t,i[1]*=q*u,i[2]*=-r,i[4]*=o*r*t-n*u,i[5]*=o*r*u+n*t,i[6]*=o*q,i[8]*=n*r*t+o*u,i[9]*=n*r*u-o*t,i[10]*=n*q}else{var v=k.x,w=k.y,x=k.z,y=k.w;if(b===h){var z=.5*y,A=Math.sin(z);v*=A,w*=A,x*=A,y=Math.cos(z)}i[0]*=1-2*(w*w+x*x),i[1]*=2*(v*w+x*y),i[2]*=2*(v*x-w*y),i[4]*=2*(v*w-x*y),i[5]*=1-2*(v*v+x*x),i[6]*=2*(w*x+v*y),i[8]*=2*(v*x+w*y),i[9]*=2*(w*x-v*y),i[10]*=1-2*(v*v+w*w)}return!0},d.toString=function(){return"[Matrix3D ["+Array.prototype.slice.call(this.rawData).toString()+"]]"},d.transformVector=function(a){var b=a.x,c=a.y,d=a.z,e=this.rawData,f=e[0]*b+e[4]*c+e[8]*d+e[12],g=e[1]*b+e[5]*c+e[9]*d+e[13],h=e[2]*b+e[6]*c+e[10]*d+e[14];return new createjs.Vector3D(f,g,h,1)},d.transformVectors=function(a,b){for(var c,d,e,f=this.rawData,g=f[0],h=f[4],i=f[8],j=f[12],k=f[1],l=f[5],m=f[9],n=f[13],o=f[2],p=f[6],q=f[10],r=f[14],s=0,t=a.length;t>s;s+=3){var u=s+1,v=s+2;c=a[s],d=a[u],e=a[v],b[s]=g*c+h*d+i*e+j,b[u]=k*c+l*d+m*e+n,b[v]=o*c+p*d+q*e+r}},d.transpose=function(){var a=this.rawData;this.rawData=new Float32Array([a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15]])},c.DEG_TO_RAD=Math.PI/180,c.interpolate=function(b,c,d){0>d?d=0:d>1&&(d=1);var f=e.QUATERNION,g=b.decompose(f),h=c.decompose(f),i=g[0],j=h[0];j=j.subtract(i),j.scaleBy(d),i=i.add(j);var k=g[1],l=h[1],m=k.x,n=k.y,o=k.z,p=k.w,q=l.x,r=l.y,s=l.z,t=l.w,u=m*q+n*r+o*s+p*t;0>u&&(q=-q,r=-r,s=-s,t=-t,u=-u);var v,w;if(u>.9999)v=1-d,w=d;else{var x=Math.sqrt(1-u*u),y=Math.atan2(x,u),z=1/x;v=Math.sin((1-d)*y)*z,w=Math.sin(d*y)*z}var A=m*v+q*w,B=n*v+r*w,C=o*v+s*w,D=p*v+t*w,E=[i,new createjs.Vector3D(A,B,C,D),new createjs.Vector3D(1,1,1)],F=new a;return F.recompose(E,f),F};var e={AXIS_ANGLE:"axisAngle",EULER_ANGLES:"eulerAngles",QUATERNION:"quaternion"};createjs.Matrix3D=a,createjs.Orientation3D=e}(window);



//Vector3D
this.createjs=this.createjs||{},function(){"use strict";function a(a,b,c,d){this.x=a||0,this.y=b||0,this.z=c||0,this.w=d||0}var b=a,c=a.prototype={get length(){var a=this.x,b=this.y,c=this.z;return Math.sqrt(a*a+b*b+c*c)},get lengthSquared(){var a=this.x,b=this.y,c=this.z;return a*a+b*b+c*c}};c.constructor=a,c.x,c.y,c.z,c.w,c.add=function(b){return new a(this.x+b.x,this.y+b.y,this.z+b.z)},c.subtract=function(b){return new a(this.x-b.x,this.y-b.y,this.z-b.z)},c.equals=function(a,b){return b=b||!1,b?this.x===a.x&&this.y===a.y&&this.z===a.z&&this.w===a.w:this.x===a.x&&this.y===a.y&&this.z===a.z},c.nearEquals=function(a,b,c){c=c||!1;var d=Math.abs(a.x-this.x),e=Math.abs(a.y-this.y),f=Math.abs(a.z-this.z);if(c){var g=Math.abs(a.w-this.w);return b>d&&b>e&&b>f&&b>g}return b>d&&b>e&&b>f},c.negate=function(){this.x=-this.x,this.y=-this.y,this.z=-this.z},c.incrementBy=function(a){this.x+=a.x,this.y+=a.y,this.z+=a.z},c.decrementBy=function(a){this.x-=a.x,this.y-=a.y,this.z-=a.z},c.scaleBy=function(a){this.x*=a,this.y*=a,this.z*=a},c.scaleNew=function(b){return new a(this.x*b,this.y*b,this.z*b)},c.project=function(){var a=this.w;this.x/=a,this.y/=a,this.z/=a},c.normalize=function(){var a=this.length;return 0!==a&&(this.x/=a,this.y/=a,this.z/=a),a},c.dotProduct=function(a){return this.x*a.x+this.y*a.y+this.z*a.z},c.crossProduct=function(b){var c=this.x,d=this.y,e=this.z,f=b.x,g=b.y,h=b.z;return new a(d*h-e*g,e*f-c*h,c*g-d*f,1)},c.setTo=function(a,b,c){this.x=a,this.y=b,this.z=c},c.copyFrom=function(a){this.x=a.x,this.y=a.y,this.z=a.z},c.clone=function(){return new a(this.x,this.y,this.z,this.w)},c.toString=function(){return"[Vector3D (x="+this.x+" y="+this.y+" z="+this.z+")]"},b.X_AXIS=new a(1,0,0),b.Y_AXIS=new a(0,1,0),b.Z_AXIS=new a(0,0,1),b.distance=function(a,b){return Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2)+Math.pow(b.z-a.z,2))},b.angleBetween=function(a,b){var c=a.dotProduct(b)/(a.length*b.length);return c>1?0:-1>c?Math.PI:Math.acos(c)},createjs.Vector3D=a}(window);
