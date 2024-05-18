let loStatus = document.location.search ? document.location.search.split("?")[1].split("&")[0].split("=")[1]=="LOGOUT" || document.location.search.split("?")[1].split("&").includes("source=LPBot") ? true : false : false;

if(!loStatus){
window.lpTag=window.lpTag||{},'undefined'==typeof window.lpTag._tagCount?(window.lpTag={wl:lpTag.wl||null,scp:lpTag.scp||null,site:'6091852'||'',section:lpTag.section||'',tagletSection:lpTag.tagletSection||null,autoStart:lpTag.autoStart!==!1,ovr:lpTag.ovr||{},_v:'1.10.0',_tagCount:1,protocol:'https:',events:{bind:function(t,e,i){lpTag.defer(function(){lpTag.events.bind(t,e,i)},0)},trigger:function(t,e,i){lpTag.defer(function(){lpTag.events.trigger(t,e,i)},1)}},defer:function(t,e){0===e?(this._defB=this._defB||[],this._defB.push(t)):1===e?(this._defT=this._defT||[],this._defT.push(t)):(this._defL=this._defL||[],this._defL.push(t))},load:function(t,e,i){var n=this;setTimeout(function(){n._load(t,e,i)},0)},_load:function(t,e,i){var n=t;t||(n=this.protocol+'//'+(this.ovr&&this.ovr.domain?this.ovr.domain:'lptag.liveperson.net')+'/tag/tag.js?site='+this.site);var o=document.createElement('script');o.setAttribute('charset',e?e:'UTF-8'),i&&o.setAttribute('id',i),o.setAttribute('src',n),document.getElementsByTagName('head').item(0).appendChild(o)},init:function(){this._timing=this._timing||{},this._timing.start=(new Date).getTime();var t=this;window.attachEvent?window.attachEvent('onload',function(){t._domReady('domReady')}):(window.addEventListener('DOMContentLoaded',function(){t._domReady('contReady')},!1),window.addEventListener('load',function(){t._domReady('domReady')},!1)),'undefined'===typeof window._lptStop&&this.load()},start:function(){this.autoStart=!0},_domReady:function(t){this.isDom||(this.isDom=!0,this.events.trigger('LPT','DOM_READY',{t:t})),this._timing[t]=(new Date).getTime()},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],hooks:lpTag.hooks||[],identities:lpTag.identities||[],ev:lpTag.ev||[]},lpTag.init()):window.lpTag._tagCount+=1;
}

let secondTimeout=1000;
let minuteTimeout=secondTimeout*60;
let closeSiBufferTimeout=secondTimeout*2;
let closeWindowBufferTimeout=secondTimeout*4;
let activePage = document.location.href.includes("login.page") || document.location.href.includes("orderStep1_form.page") ? true : false;

function closeWindow() {
  if(document.querySelector(".lpc_maximized-header__close-button")){
    document.querySelector(".lpc_maximized-header__close-button").click();
  }
}

function closeSi() {
    if(document.querySelector(".lpc_confirmation-dialog__confirm-button")){
      document.querySelector(".lpc_confirmation-dialog__confirm-button").click();
    }
}

function closeSequence() {
    closeWindow();
    setTimeout(closeSi, closeSiBufferTimeout);
    setTimeout(closeWindow, closeWindowBufferTimeout);
}

function autoReload() {
	let closeButton = document.querySelector(".lpc_maximized-header__close-button");
    closeButton.addEventListener("click", function(){
		let confirmButton = document.querySelector(".lpc_confirmation-dialog__confirm-button");
    	confirmButton.addEventListener("click", function(){
			setTimeout(()=>{
    			window.location.reload();
    		},500)
		})
	})
}

function autoClose(data, eventInfo) {
  	if(data.state=="chatting" || data.state=="interactive"){
		if(activePage){
    		autoReload();
    	}
    }
    if(data.state=="ended") {
      setTimeout(closeSequence, minuteTimeout);
	}
}

lpTag.events.bind("lpUnifiedWindow","state", autoClose);
