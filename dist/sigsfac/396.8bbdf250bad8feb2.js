"use strict";(self.webpackChunksigsfac=self.webpackChunksigsfac||[]).push([[396],{4396:(A,l,o)=>{o.r(l),o.d(l,{SignInModule:()=>T});var c=o(8920),s=o(1741),u=o(9808),e=o(3075),t=o(5e3),p=o(8951),f=o(6850),d=o(9224),m=o(7322),h=o(7531),v=o(7423);function Z(n,i){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Email inv\xe1lido ! "),t.qZA())}function C(n,i){1&n&&(t.TgZ(0,"mat-error"),t._uU(1," Password inv\xe1lido ! "),t.qZA())}const I=function(){return["/sign-up"]},L=[{path:"",component:(()=>{class n{constructor(a,r,g){this.AuthService=a,this.Router=r,this.toast=g,this.loginForm=new e.cw({email:new e.NI("menga",[e.kI.required]),password:new e.NI("senhas",e.kI.required)})}ngOnInit(){}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}submit(){if(!this.loginForm.valid)return;const{email:a,password:r}=this.loginForm.value;this.AuthService.signIn({email:a,password:r}).pipe(this.toast.observe({success:"Logado com sucesso",loading:"Logando...",error:"Erro ao acessar"})).subscribe(()=>{this.Router.navigate(["../calendar"])})}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(p.e),t.Y36(s.F0),t.Y36(f.jE))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:25,vars:5,consts:[[1,"text-center"],["src","assets/images/engdb2.png"],[1,"login","d-flex","justify-content-between","align-items-center"],[1,"mat-card","mat-focus-indicator"],[1,"mat-elevation-z5"],[3,"formGroup","ngSubmit"],["appearance","fill",1,"example-full-width"],["matInput","","placeholder","Email address","formControlName","email"],[4,"ngIf"],["matInput","","placeholder","Password","formControlName","password","type","password"],["mat-raised-button","","color","primary","type","submit",1,"mat-focus-indicator","w-100","mt-3","mat-raised-button","mat-button-base","mat-primary"],[1,"text-center","mt-3"],[3,"routerLink"]],template:function(a,r){1&a&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.qZA(),t.TgZ(2,"div",2)(3,"mat-card",3)(4,"mat-card-content",4)(5,"h2"),t._uU(6,"LOGIN"),t.qZA(),t.TgZ(7,"form",5),t.NdJ("ngSubmit",function(){return r.submit()}),t.TgZ(8,"mat-form-field",6)(9,"mat-label"),t._uU(10,"E-mail"),t.qZA(),t._UZ(11,"input",7),t.YNc(12,Z,2,0,"mat-error",8),t.qZA(),t.TgZ(13,"mat-form-field",6)(14,"mat-label"),t._uU(15,"Senha"),t.qZA(),t._UZ(16,"input",9),t.YNc(17,C,2,0,"mat-error",8),t.qZA(),t.TgZ(18,"button",10),t._uU(19," LOGAR "),t.qZA(),t.TgZ(20,"div",11)(21,"span"),t._uU(22," N\xe3o tem uma conta? "),t.TgZ(23,"a",12),t._uU(24,"Cadastre-se"),t.qZA()()()()()()()),2&a&&(t.xp6(7),t.Q6J("formGroup",r.loginForm),t.xp6(5),t.Q6J("ngIf",null==r.email||null==r.email.errors?null:r.email.errors.required),t.xp6(5),t.Q6J("ngIf",null==r.password||null==r.password.errors?null:r.password.errors.required),t.xp6(6),t.Q6J("routerLink",t.DdM(4,I)))},directives:[d.a8,d.dn,e._Y,e.JL,e.sg,m.KE,m.hX,h.Nt,e.Fj,e.JJ,e.u,u.O5,m.TO,v.lW,s.yS],styles:["mat-card[_ngcontent-%COMP%]{margin:0 auto;padding:0}.mat-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%]{padding:35px 28px;width:350px}.mat-raised-button.mat-primary[_ngcontent-%COMP%]{width:100%;line-height:45px}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[s.Bz.forChild(L),u.ez,e.UX,c.M]]}),n})()}}]);