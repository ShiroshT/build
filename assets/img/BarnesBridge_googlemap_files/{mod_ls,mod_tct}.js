__gjsload_maps2__('ls', 'GAddMessages({13645:"English",13646:"Show English labels",14047:"Switch between labels in the local language and transliterated text."});\'use strict\';function hW(a,b,c,d){this.K=a;this.G=a.U();this.I=c;this.H=!1;this.j=b;this.F=!1;this.Oa=new rj(null);this.Oa.Th();this.Oa.j="layer";this.j?this.Oa.show():this.Oa.initialize();this.Oa.uc(!1);this.Oa.ac(Y(13645));this.Oa.Rg(Y(14047));this.Oa.Je=100;this.Oa.Sa="langswitch";L(this.Oa,Ka,v(this.C,this,!0));L(this.Oa,La,v(this.C,this,!1));L(this.Oa,Oa,v(this.L,this));d.Vg(this.Oa);J(this.G,wb,this,this.o);J(Ba.ia(),Ga,this,this.J);J(this.G,Bb,this,this.o);J(this.G,Ab,this,this.o);this.o()} var cua=function(a,b){a.H!=b?(a.Oa.uc(b),a.H=b,bua(a,b,a.j)):a.F||bua(a,b,a.j)}; hW.prototype.J=function(a){"langswitch"==a&&this.o()}; hW.prototype.o=function(a){this.G.Cb&&Ml(this.G.ma())?cua(this,!1):Ba.ia().Eh("langswitch",this.G.Ja(),v(function(a){cua(this,a)}, this),a,this.G.ga())}; hW.prototype.L=function(){this.C(1<this.Oa.ub())}; hW.prototype.C=function(a,b){if(this.j!=a&&this.Oa.Jb()){this.j=a;var c=this.G;c.L=this.j?ml(jl):"x-local";A(c,wc);wq(this.I,b).D[28]=a;c={ct:"ls"};c.cd=a?"1":"0";this.K.Jc(null,c)}}; var bua=function(a,b,c){var d=[];d.push("ls");d.push(a.F?"i:0":"i:1");d.push(b?"v:1":"v:0");d.push(c?"t:1":"t:0");a.F=!0;a.K.nc(d.join(","))};X(Jd,Kd,function(a,b,c,d){new hW(a,b,c,d)}); X(Jd);', '', []);
__gjsload_maps2__('tct', 'GAddMessages({});\'use strict\';function W$(a){this.o=null;var b=this;Wv([a.C,a.J],function(a,d){b.o=d;var e={arrowClick:v(b.C,b),textClick:v(b.F,b)};a.ta("tt",null,e)}); this.j=document.getElementById("tactile-promo")} var CRa=function(a,b){b?(Nm(a.j,"tactile-promo"),R(a.j,"tactile-promo-collapsed")):(Nm(a.j,"tactile-promo-collapsed"),R(a.j,"tactile-promo"));a.o&&(wq(a.o).D[41]=b)}, DRa=function(a){return 0<=Mm(a.j).search("tactile-promo-collapsed")}; W$.prototype.C=function(){this.j&&CRa(this,!DRa(this))}; W$.prototype.F=function(){this.j&&DRa(this)&&CRa(this,!1)};X("tct",Md,function(a){var b=new W$(a);a.Da.set(b)}); X("tct");', '', []);