import{r as e,a as t,o,c as s,b as n,d as l,e as a,w as i,v as r,f as m,g as c,h as d,i as u}from"./vendor.2f20791f.js";const p=/company\/(?<company>.*?)\//,h={name:"Home",components:{InformationCircleIcon:e},data:()=>({showInfoCompany:!1,showInfoPost:!1,companyUrl:"",postUrl:""}),mounted(){const e=localStorage.getItem("companyUrl");this.companyUrl=e||""},computed:{companyName(){var e;const t=this.companyUrl.match(p);return(null==(e=null==t?void 0:t.groups)?void 0:e.company)||""},postWithCompany(){return`${this.postUrl}?actorCompanyId=${this.companyName}`}},methods:{createLink(){console.log("createLink",this.companyUrl,this.companyName,this.postUrl,this.postWithCompany),localStorage.setItem("companyUrl",this.companyUrl),window.location.search=`?ref=${this.companyName}`,window.open(this.postWithCompany,"_blank")}}},f={class:"min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"},y=n("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[n("img",{class:"mx-auto h-12 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"}),n("h2",{class:"mt-6 text-center text-3xl font-extrabold text-gray-900"}," Commentez un post Linkedin avec votre entreprise ")],-1),x={class:"mt-8 sm:mx-auto sm:w-full sm:max-w-md"},g={class:"bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"},w={key:0,class:"rounded-md bg-yellow-50 p-4"},v={class:"flex"},b={class:"flex-shrink-0"},U=n("div",{class:"ml-3"},[n("h3",{class:"text-sm font-medium text-yellow-800"}," Pour trouver l'URL admin de votre entreprise : "),n("div",{class:"mt-2 text-sm text-yellow-700"},[n("ul",{class:"list-disc pl-5 space-y-1"},[n("li",null," Cliquez sur votre avatar en haut a gauche, puis le nom de l'entreprise voulu dans le menu. "),n("li",null," Copiez l'URL en haut dans le navigateur. "),n("li",null," Ce lien seras sauvegarder dans votre navigateur entre chaque visite ")])])],-1),k={class:"space-y-6"},C={for:"companyUrl",class:"block text-sm font-medium text-gray-700"},I=m(" URL Linkedin admin de votre entreprise "),L={class:"mt-1"},z={key:0,class:"rounded-md bg-yellow-50 p-4"},P={class:"flex"},R={class:"flex-shrink-0"},q=n("div",{class:"ml-3"},[n("h3",{class:"text-sm font-medium text-yellow-800"}," Pour trouver l'URL d'un post : "),n("div",{class:"mt-2 text-sm text-yellow-700"},[n("ul",{class:"list-disc pl-5 space-y-1"},[n("li",null,' Allez sur les 3 petits points en haut à droite d\'un post et cliquez sur "copier le lien vers le post". '),n("li",null," Your password must include at least one pro wrestling finishing move ")])])],-1),N={for:"postUrl",class:"block text-sm font-medium text-gray-700"},j=m(" URL du post à commenter "),A={class:"mt-1"},H=n("div",{class:"flex items-center justify-between"},[n("div",{class:"text-sm"},[n("a",{href:"https://msha.ke/martindonadieu",target:"blank",class:"font-medium text-indigo-600 hover:text-indigo-500"}," par Martin donadieu, INDIE MAKER ")])],-1),W=n("p",{class:"mt-5 mx-auto text-center text-sm text-gray-600"},[n("iframe",{class:"mx-auto",src:"https://ghbtns.com/github-btn.html?user=riderx&repo=autoswitch-linkedin-entreprise&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"120",height:"30",title:"GitHub"})],-1);h.render=function(e,m,c,d,u,p){const h=t("InformationCircleIcon");return o(),s("div",f,[y,n("div",x,[n("div",g,[u.showInfoCompany?(o(),s("div",w,[n("div",v,[n("div",b,[l(h,{class:"h-5 w-5 text-yellow-400 inline","aria-hidden":"true"})]),U])])):a("",!0),n("div",k,[n("div",null,[n("label",C,[I,l(h,{class:"h-5 w-5 text-yellow-400 inline","aria-hidden":"true",onClick:m[0]||(m[0]=e=>u.showInfoCompany=!u.showInfoCompany)})]),n("div",L,[i(n("input",{id:"companyUrl",name:"companyUrl","onUpdate:modelValue":m[1]||(m[1]=e=>u.companyUrl=e),autocomplete:"off",type:"text",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[r,u.companyUrl]])])]),n("div",null,[u.showInfoPost?(o(),s("div",z,[n("div",P,[n("div",R,[l(h,{class:"h-5 w-5 text-yellow-400 inline","aria-hidden":"true"})]),q])])):a("",!0),n("label",N,[j,l(h,{class:"h-5 w-5 text-yellow-400 inline","aria-hidden":"true",onClick:m[2]||(m[2]=e=>u.showInfoPost=!u.showInfoPost)})]),n("div",A,[i(n("input",{id:"postUrl",name:"postUrl",autocomplete:"off","onUpdate:modelValue":m[3]||(m[3]=e=>u.postUrl=e),type:"text",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},null,512),[[r,u.postUrl]])])]),H,n("div",null,[n("button",{onClick:m[4]||(m[4]=e=>p.createLink()),class:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Acceder ")])])])]),W])};var $=c({name:"App",components:{Home:h}});$.render=function(e,s,n,l,a,i){const r=t("Home");return o(),d(r)};u($).mount("#app");
