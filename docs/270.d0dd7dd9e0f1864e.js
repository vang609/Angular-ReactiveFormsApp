"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[270],{7270:(b,l,m)=>{m.r(l),m.d(l,{ReactiveModule:()=>y});var s=m(6814),t=m(95),u=m(1643),e=m(4946);function p(r,a){if(1&r&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.hij(" ",o.getFieldError("name")," ")}}function d(r,a){1&r&&(e.TgZ(0,"span",11),e._uU(1," Price must be > 0 "),e.qZA())}function Z(r,a){1&r&&(e.TgZ(0,"span",11),e._uU(1," Stock must be => 0 "),e.qZA())}function f(r,a){if(1&r&&(e.TgZ(0,"span",14),e._uU(1),e.qZA()),2&r){const o=e.oxw();e.xp6(1),e.hij(" ",o.getFieldError("name")," ")}}function h(r,a){1&r&&(e.TgZ(0,"span",14),e._uU(1," This field is requiered "),e.qZA())}function _(r,a){if(1&r){const o=e.EpF();e.TgZ(0,"div",15)(1,"div",6),e._UZ(2,"input",16),e.TgZ(3,"button",17),e.NdJ("click",function(){const c=e.CHM(o).index,F=e.oxw();return e.KtG(F.onDeleteFavorite(c))}),e._uU(4," Delete "),e.qZA()(),e.YNc(5,h,2,0,"span",5),e.qZA()}if(2&r){const o=a.index,i=e.oxw();e.xp6(2),e.Q6J("formControlName",o),e.xp6(3),e.Q6J("ngIf",i.isValidFieldInArray(i.favoriteGames,o))}}function T(r,a){1&r&&(e.TgZ(0,"span",18),e._uU(1," Debe de aceptar las condiciones de uso "),e.qZA())}const A=[{path:"",children:[{path:"basic",component:(()=>{class r{constructor(o){this.fb=o,this.myForm=this.fb.group({name:["",[t.kI.required,t.kI.minLength(3)]],price:[0,[t.kI.required,t.kI.min(0)]],inStorage:[0,[t.kI.required,t.kI.min(0)]]})}ngOnInit(){}isValidField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}getFieldError(o){if(!this.myForm.controls[o])return null;const i=this.myForm.controls[o].errors||{};for(const n of Object.keys(i))switch(n){case"required":return"This field is required";case"minlength":return`Min length ${i.minlength.requiredLength} characters.`}return null}onSave(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.reset({price:0,inStorage:0}))}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:70,vars:28,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Name of product",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","formControlName","price","placeholder","Precio del producto",1,"form-control"],["type","number","formControlName","inStorage","placeholder","Existencias del producto",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(i,n){1&i&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: B\xe1sicos"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return n.onSave()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Producto"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,p,2,1,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Precio"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,d,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Stock"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,Z,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",0)(25,"div",1)(26,"button",10),e._uU(27," Save "),e.qZA()()()()()(),e.TgZ(28,"div",0)(29,"div",1)(30,"span"),e._uU(31,"Valid"),e.qZA(),e.TgZ(32,"pre"),e._uU(33),e.ALo(34,"json"),e.qZA(),e.TgZ(35,"span"),e._uU(36,"Pristine"),e.qZA(),e.TgZ(37,"pre"),e._uU(38),e.ALo(39,"json"),e.qZA(),e.TgZ(40,"span"),e._uU(41,"Touched"),e.qZA(),e.TgZ(42,"pre"),e._uU(43),e.ALo(44,"json"),e.qZA(),e.TgZ(45,"span"),e._uU(46,"Value"),e.qZA(),e.TgZ(47,"pre"),e._uU(48),e.ALo(49,"json"),e.qZA(),e.TgZ(50,"span"),e._uU(51,"Precio"),e.qZA(),e.TgZ(52,"pre"),e._uU(53),e.ALo(54,"json"),e.qZA(),e.TgZ(55,"span"),e._uU(56,"Precio - Errors"),e.qZA(),e.TgZ(57,"pre"),e._uU(58),e.ALo(59,"json"),e.qZA(),e.TgZ(60,"span"),e._uU(61,"Producto"),e.qZA(),e.TgZ(62,"pre"),e._uU(63),e.ALo(64,"json"),e.qZA(),e.TgZ(65,"span"),e._uU(66,"Producto"),e.qZA(),e.TgZ(67,"pre"),e._uU(68),e.ALo(69,"json"),e.qZA()()()),2&i&&(e.xp6(5),e.Q6J("formGroup",n.myForm),e.xp6(6),e.Q6J("ngIf",n.isValidField("name")),e.xp6(6),e.Q6J("ngIf",n.isValidField("price")),e.xp6(6),e.Q6J("ngIf",n.isValidField("inStorage")),e.xp6(10),e.Oqu(e.lcZ(34,12,n.myForm.valid)),e.xp6(5),e.Oqu(e.lcZ(39,14,n.myForm.pristine)),e.xp6(5),e.Oqu(e.lcZ(44,16,n.myForm.touched)),e.xp6(5),e.Oqu(e.lcZ(49,18,n.myForm.value)),e.xp6(5),e.Oqu(e.lcZ(54,20,n.myForm.controls.price.value)),e.xp6(5),e.Oqu(e.lcZ(59,22,n.myForm.controls.price.errors)),e.xp6(5),e.Oqu(e.lcZ(64,24,n.myForm.controls.name.value)),e.xp6(5),e.Oqu(e.lcZ(69,26,n.myForm.controls.name.errors)))},dependencies:[s.O5,t._Y,t.Fj,t.wV,t.JJ,t.JL,t.sg,t.u,s.Ts],encapsulation:2})}return r})()},{path:"dynamic",component:(()=>{class r{constructor(o){this.fb=o,this.myForm=this.fb.group({name:["",[t.kI.required,t.kI.minLength(3)]],favoriteGames:this.fb.array([["Metal Gear",t.kI.required],["Death Stranding",t.kI.required]])}),this.newFavorite=new t.NI("",t.kI.required)}get favoriteGames(){return this.myForm.get("favoriteGames")}isValidField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}isValidFieldInArray(o,i){return o.controls[i].errors&&o.controls[i].touched}getFieldError(o){if(!this.myForm.controls[o])return null;const i=this.myForm.controls[o].errors||{};for(const n of Object.keys(i))switch(n){case"required":return"Este campo es requerido";case"minlength":return`M\xednimo ${i.minlength.requiredLength} caracters.`}return null}onAddToFavorites(){this.newFavorite.invalid||(this.favoriteGames.push(this.fb.control(this.newFavorite.value,t.kI.required)),this.newFavorite.reset())}onDeleteFavorite(o){this.favoriteGames.removeAt(o)}onSubmit(){this.myForm.invalid?this.myForm.markAllAsTouched():(console.log(this.myForm.value),this.myForm.controls.favoriteGames=this.fb.array([]),this.myForm.reset())}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:49,vars:16,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"mb-3","row"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["formControlName","name","placeholder","Person name",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"input-group"],["placeholder","Add to favorite",1,"form-control",3,"formControl"],["type","button",1,"btn","btn-outline-primary",3,"click"],["formArrayName","favoriteGames",1,"col-sm-9"],["class","mb-1",4,"ngFor","ngForOf"],[1,"row"],[1,"col-sm-12"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"],[1,"mb-1"],[1,"form-control",3,"formControlName"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(i,n){1&i&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: "),e.TgZ(2,"small"),e._uU(3," Din\xe1micos "),e.qZA()(),e._UZ(4,"hr"),e.TgZ(5,"form",0),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(6,"div",1)(7,"label",2),e._uU(8,"Name"),e.qZA(),e.TgZ(9,"div",3),e._UZ(10,"input",4),e.YNc(11,f,2,1,"span",5),e.qZA()(),e.TgZ(12,"div",1)(13,"label",2),e._uU(14,"Add"),e.qZA(),e.TgZ(15,"div",3)(16,"div",6),e._UZ(17,"input",7),e.TgZ(18,"button",8),e.NdJ("click",function(){return n.onAddToFavorites()}),e._uU(19," Add to favorites "),e.qZA()()()(),e.TgZ(20,"div",1)(21,"label",2),e._uU(22,"Favoritos"),e.qZA(),e.TgZ(23,"div",9),e.YNc(24,_,6,2,"div",10),e.qZA()(),e.TgZ(25,"div",11)(26,"div",12)(27,"button",13),e._uU(28," Save "),e.qZA()()()(),e.TgZ(29,"span"),e._uU(30,"Valid"),e.qZA(),e.TgZ(31,"pre"),e._uU(32),e.ALo(33,"json"),e.qZA(),e._UZ(34,"br"),e.TgZ(35,"span"),e._uU(36,"Value"),e.qZA(),e.TgZ(37,"pre"),e._uU(38),e.ALo(39,"json"),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"span"),e._uU(42,"Agregar Juego"),e.qZA(),e.TgZ(43,"pre"),e._uU(44),e.ALo(45,"json"),e.qZA(),e.TgZ(46,"pre"),e._uU(47),e.ALo(48,"json"),e.qZA()),2&i&&(e.xp6(5),e.Q6J("formGroup",n.myForm),e.xp6(6),e.Q6J("ngIf",n.isValidField("name")),e.xp6(6),e.Q6J("formControl",n.newFavorite),e.xp6(7),e.Q6J("ngForOf",n.favoriteGames.controls),e.xp6(8),e.Oqu(e.lcZ(33,8,n.myForm.valid)),e.xp6(6),e.Oqu(e.lcZ(39,10,n.myForm.value)),e.xp6(6),e.Oqu(e.lcZ(45,12,n.newFavorite.valid)),e.xp6(3),e.Oqu(e.lcZ(48,14,n.newFavorite.value)))},dependencies:[s.sg,s.O5,t._Y,t.Fj,t.JJ,t.JL,t.oH,t.sg,t.u,t.CE,s.Ts],encapsulation:2})}return r})()},{path:"switches",component:(()=>{class r{constructor(o){this.fb=o,this.myForm=this.fb.group({gender:["M",t.kI.required],wantNotifications:[!0,t.kI.required],termsAndConditions:[!1,t.kI.requiredTrue]}),this.person={gender:"F",wantNotifications:!1}}ngOnInit(){this.myForm.reset(this.person)}isValidField(o){return this.myForm.controls[o].errors&&this.myForm.controls[o].touched}onSave(){if(this.myForm.invalid)return void this.myForm.markAllAsTouched();const{termsAndConditions:o,...i}=this.myForm.value;this.person=i,console.log(this.myForm.value),console.log(this.person)}static#e=this.\u0275fac=function(i){return new(i||r)(e.Y36(t.qu))};static#o=this.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],decls:53,vars:11,consts:[["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],[1,"form-check"],["type","radio","value","M","formControlName","gender","id","radioMasculino",1,"form-check-input"],["for","radioMasculino",1,"form-check-label"],["type","radio","value","F","formControlName","gender","id","radioFemenino",1,"form-check-input"],["for","radioFemenino",1,"form-check-label"],[1,"form-check","form-switch","mt-2"],["type","checkbox","formControlName","wantNotifications","id","flexSwitchCheckChecked",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","formControlName","termsAndConditions","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["class","form-text text-danger",4,"ngIf"],[1,"row"],[1,"col"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(i,n){1&i&&(e.TgZ(0,"h2"),e._uU(1,"Reactivos: Switches"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"form",0),e.NdJ("ngSubmit",function(){return n.onSave()}),e.TgZ(4,"div",1)(5,"label",2),e._uU(6,"G\xe9nero"),e.qZA(),e.TgZ(7,"div",3)(8,"div",4),e._UZ(9,"input",5),e.TgZ(10,"label",6),e._uU(11," Masculino "),e.qZA()(),e.TgZ(12,"div",4),e._UZ(13,"input",7),e.TgZ(14,"label",8),e._uU(15," Femenino "),e.qZA()()()(),e.TgZ(16,"div",1)(17,"label",2),e._uU(18,"Notificaciones"),e.qZA(),e.TgZ(19,"div",3)(20,"div",9),e._UZ(21,"input",10),e.TgZ(22,"label",11),e._uU(23,"Quiero recibir notificaciones"),e.qZA()()()(),e.TgZ(24,"div",1),e._UZ(25,"label",2),e.TgZ(26,"div",3)(27,"div",4),e._UZ(28,"input",12),e.TgZ(29,"label",13),e._uU(30," T\xe9rminos y condiciones de uso "),e.qZA()(),e.YNc(31,T,2,0,"span",14),e.qZA()(),e.TgZ(32,"div",15)(33,"div",16)(34,"button",17),e._uU(35," Guardar "),e.qZA()()()(),e.TgZ(36,"h5"),e._uU(37,"Valor del formulario"),e.qZA(),e.TgZ(38,"pre"),e._uU(39),e.ALo(40,"json"),e.qZA(),e._UZ(41,"br"),e.TgZ(42,"h5"),e._uU(43,"Persona"),e.qZA(),e.TgZ(44,"pre"),e._uU(45),e.ALo(46,"json"),e.qZA(),e._UZ(47,"br"),e.TgZ(48,"h5"),e._uU(49,"Valid"),e.qZA(),e.TgZ(50,"pre"),e._uU(51),e.ALo(52,"json"),e.qZA()),2&i&&(e.xp6(3),e.Q6J("formGroup",n.myForm),e.xp6(28),e.Q6J("ngIf",n.isValidField("termsAndConditions")),e.xp6(8),e.Oqu(e.lcZ(40,5,n.myForm.value)),e.xp6(6),e.Oqu(e.lcZ(46,7,n.person)),e.xp6(6),e.Oqu(e.lcZ(52,9,n.myForm.valid)))},dependencies:[s.O5,t._Y,t.Fj,t.Wl,t._,t.JJ,t.JL,t.sg,t.u,s.Ts],encapsulation:2})}return r})()},{path:"**",redirectTo:"basic"}]}];let q=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#o=this.\u0275mod=e.oAB({type:r});static#t=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(A),u.Bz]})}return r})(),y=(()=>{class r{static#e=this.\u0275fac=function(i){return new(i||r)};static#o=this.\u0275mod=e.oAB({type:r});static#t=this.\u0275inj=e.cJS({imports:[s.ez,q,t.UX]})}return r})()}}]);