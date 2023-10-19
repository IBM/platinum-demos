class InlineCode extends HTMLElement {
	constructor(...args) {
        super(...args);
    }
    static get observedAttributes() {
        return ['code'];
    }
    get code() {
        return this.getAttribute('code');
    }
    
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }
    render(){
    	var template = `<div class="code-block">`
        template += `<div class="code-text">`
        template += `<pre>`
        template += `<code>${this.code}</code>`
	    template += `</pre>`
        template += `</div>`
        template += `<div class="copy-icon">`
        template += `<button class="copy-button" onclick="copyText(event)">`
        template += `<svg class="copy-icon-image" focusable="false" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="16" height="16" viewBox="0 0 32 32" aria-hidden="true"><path d="M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path><path d="M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"></path></svg>`
        template += `<span class="popuptext">Copied!</span>`
        template += `</button>`
        template += `</div>`
        template += `</div>`;
        this.innerHTML = template;
    }

    
}

function copyText(e) {
    console.log(e);
    //console.log(e.srcElement.localName);
    var elementName = e.srcElement.localName;
    var popupElement;
    if(elementName=="svg"){
        var innerText = e.target.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.innerText;    
        popupElement = e.target.nextSibling;
    }
    else if(elementName=="path"){
        var innerText = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.firstChild.innerText;    
        popupElement = e.target.parentElement.nextSibling;
    }
    else if(elementName=="button"){
        var innerText = e.target.parentElement.parentElement.firstChild.firstChild.firstChild.innerText;
        popupElement = e.target.lastElementChild;
    }

    if(popupElement){
        popupElement.style.opacity = 1;
        setTimeout(function(){
            console.log("In setTimeout function");
            popupElement.style.opacity = 0;
        }, 5000, popupElement);
    }

    console.log(innerText);
    var re = new RegExp(String.fromCharCode(160), "g");
    var cleanText = innerText.replace(re, " ");
    console.log(cleanText);
    navigator.clipboard.writeText(cleanText);
}

window.customElements.define('inline-code', InlineCode);