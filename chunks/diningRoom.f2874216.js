import{D as a,L as V,l as U,O as q,a as H,f as $,h as J}from"./stats.module.4a77fa82.js";import{C as s,T as K,A as Q,S as X,P as Y}from"./vendor.fd21b549.js";import{d as Z}from"./lightConfig.b74fa21b.js";import{m as ee}from"./makeCommonGUI.f7eef3ea.js";async function ae(){let e=[];const i=[],t=new K;return["/models/diningRoom/textures/book1.jpg","/models/diningRoom/textures/book2.jpg","/models/diningRoom/textures/book3.jpg","/models/diningRoom/textures/book4.jpg","/models/diningRoom/textures/book6.jpg","/models/diningRoom/textures/book7.jpg","/models/diningRoom/textures/book8.jpg","/models/diningRoom/textures/book9.jpg","/models/diningRoom/textures/book10.jpg","/models/diningRoom/textures/book11.jpg","/models/diningRoom/textures/book14.jpg","/models/diningRoom/textures/book15.jpg","/models/diningRoom/textures/book16.jpg","/models/diningRoom/textures/book17.jpg","/models/diningRoom/textures/book18.jpg","/models/diningRoom/textures/box.jpg","/models/diningRoom/textures/floor.jpg","/models/diningRoom/textures/painting.jpg","/models/diningRoom/textures/shelfbook1.jpg","/models/diningRoom/textures/shelfbook2.jpg"].forEach(r=>{i.push(new Promise(m=>{t.load(r,m)}))}),await Promise.all(i).then(r=>{e=r}),e}async function oe(){const e=await ae(),i=new a({color:new s(.005,.005,.005),roughness:.4472}),t=new a({roughness:0,metalness:1}),l=new a({color:new s(1,1,1),roughness:.3872,metalness:1}),r=new a({color:new s(.713,.8,.8),transmission:1,roughness:.01}),m=new a({color:new s(.787,.758,.737),roughness:0,clearcoat:1}),P=new a({map:e[16],roughness:.2236}),x=new a({map:e[16],roughness:.3162}),R=new a({map:e[17]}),h=new a({color:new s(.842,.842,.842),roughness:.44721}),j=new a({color:new s(.016,.047,.002),roughness:.44721}),b=new a({color:new s(.009,.009,.009),roughness:.44721,clearcoat:1}),_=new a({map:e[18]}),p=new a({map:e[19]}),z=new a({map:e[0]}),S=new a({map:e[1]}),w=new a({map:e[2]}),L=new a({map:e[3]}),E=new a({map:e[4]}),y=new a({map:e[5]}),D=new a({map:e[6]}),T=new a({map:e[7]}),v=new a({map:e[8]}),A=new a({map:e[9]}),G=new a({map:e[10]}),F=new a({map:e[11]}),I=new a({map:e[12]}),W=new a({map:e[13]}),O=new a({map:e[14]});return[{material:null,meshName:["Plane","Plane224_Plane005","Plane223_Plane004","Plane220_Plane001","Plane221_Plane002","Plane222_Plane003"]},{material:z,meshName:["1_Cube011"]},{material:S,meshName:["3_Cube025"]},{material:w,meshName:["5_Cube027"]},{material:L,meshName:["6_Cube028"]},{material:_,meshName:["7_Cube029"]},{material:E,meshName:["9_Cube031"]},{material:y,meshName:["10_Cube014"]},{material:D,meshName:["11_Cube015"]},{material:T,meshName:["12_Cube016"]},{material:v,meshName:["13_Cube017"]},{material:A,meshName:["14_Cube018"]},{material:p,meshName:["15_small_Cube019"]},{material:w,meshName:["16_small_Cube020"]},{material:G,meshName:["17_small_Cube021"]},{material:F,meshName:["18_Cube022"]},{material:I,meshName:["19_Cube023"]},{material:W,meshName:["Plane002_Plane000"]},{material:O,meshName:["Plane012"]},{material:x,meshName:["Vildapel_Bamboo_Planter001_Cube034","Vildapel_Bamboo_Planter_Cube033","Vildapel_Bamboo_Planter003_Cube036","Vildapel_Bamboo_Planter002_Cube035"]},{material:t,meshName:["BezierCircle000","BezierCircle001","BezierCircle002","BezierCircle003","BezierCircle004","BezierCircle005","BezierCircle006","BezierCircle007","BezierCircle008","BezierCircle009","BezierCircle010","BezierCircle011","BezierCircle012","BezierCircle013","BezierCircle014","BezierCircle015"]},{material:t,meshName:["Bolt002_Bolt001","Bolt001_Bolt000","Bolt003_Bolt002","Bolt002_Bolt005"]},{material:i,meshName:["Circle002_Circle007","Circle003_Circle002","Circle005_Circle008","Circle007_Circle010"]},{material:i,meshName:["Circle000_Circle005","Circle001","Circle004_Circle006","Circle006_Circle009"]},{material:b,meshName:["Cube002_Cube","Cube011_Cube003"]},{material:P,meshName:["Cube012_Cube010","Cube005_Cube000","Cube006_Cube001","Cube007_Cube012"]},{material:t,meshName:["Cube014_Cube024","Cube015_Cube026"]},{material:h,meshName:["Cube000_Cube002"]},{material:j,meshName:["Cube013_Cube004"]},{material:R,meshName:["Cube003_Cube009","Cube004_Cube008"]},{material:b,meshName:["decoration_twig_branch003_Plane007","decoration_twig_branch004_Plane010","decoration_twig_branch007_Plane011"]},{material:h,meshName:["Cube001_Cube005"]},{material:r,meshName:["Cube010_Cube013"]},{material:l,meshName:["Cube008_Cube006","Cube009_Cube007"]},{material:m,meshName:["Circle"]},{material:_,meshName:["17_small002_Cube038"]},{material:p,meshName:["17_small001_Cube037"]},{material:l,meshName:["Circle008_Circle004","Circle009_Circle011","Circle010_Circle012"]},{material:b,meshName:["Cylinder009_Cylinder007"]}]}const te=location.href.includes("compress"),ie=Z,ne=te?$:J,o=new V;o.bounces=3;o.renderWhenOffFocus=!0;o.enableDenoise=!0;o.enableTemporalDenoise=!0;o.enableSpatialDenoise=!0;o.toneMapping=Q;document.body.appendChild(o.domElement);const u=document.querySelector("#container");function re(e){e?u.classList.contains("isLoading")||u.classList.add("isLoading"):u.classList.contains("isLoading")&&u.classList.remove("isLoading")}const g=!0,{initStats:se,initGUI:le,initCameraDebugInfo:me}=ee();o.loadingCallback={onProgress:e=>console.log(e),onComplete:e=>{console.log(e),re(!1),ce(),le(g,o)}};const f=se(g),M=me(g);let B=null,C=null;function ce(){o.setDenoiseColorFactor(.4),o.setDenoisePositionFactor(.2)}const d=new X;U(ie,d);const n=new Y(60,window.innerWidth/window.innerHeight,.001,1e3),c=new q(n,o.domElement);c.screenSpacePanning=!0;function ue(){n.position.set(-3,1.5,0),c.target.y=.5,c.update()}async function Ce(e){const i=await oe();e.traverse(t=>{t.isMesh&&i.forEach(l=>{const r=l.meshName,m=l.material;if(~r.indexOf(t.name)){m?t.material=m:t.visible=!1;return}})}),e.traverse(t=>{if(t.isMesh&&t.material){if(t.material.isRayTracingMaterial)return;t.material.isMeshStandardMaterial?t.material=new a().fromStandardMaterial(t.material):t.material=new a}})}async function de(){const i=(await H(ne)).scene;await Ce(i),d.add(i),ue(),o.buildScene(d,n).then(()=>{N()})}function k(){if(o.domElement.parentElement){const e=o.domElement.parentElement.clientWidth,i=o.domElement.parentElement.clientHeight;o.setSize(e,i),n.aspect=e/i,n.updateProjectionMatrix()}}window.addEventListener("resize",k);k();function N(e){c.update(),n.focus=c.target.distanceTo(n.position),f.begin(),o.render(d,n),f.end(),M&&(C=o.getTotalSamples(),B!=C&&(M.innerText=`Samples: ${C}`,B=C)),requestAnimationFrame(N)}de();