let hindiBtn = document.querySelector('#hindi-lang');
let langBtn = document.querySelector('#language');
let visible = false;
let language = "english";
langBtn.onclick = ()=>{
    if(!visible){
    visible = true;
    hindiBtn.classList.remove('d-none');
    }
    else{
        visible=false;
        hindiBtn.classList.add('d-none');
    }
}
hindiBtn.onclick = ()=>{
    if(language=="english"){
        language = "hindi";
        langBtn.innerHTML = "<i class=\"fa-solid fa-language\"></i> Hindi";
        hindiBtn.innerHTML = "<i class=\"fa-solid fa-language\"></i> English";
    }
    else{
        language = "english";
        langBtn.innerHTML = "<i class=\"fa-solid fa-language\"></i> English";
        hindiBtn.innerHTML = "<i class=\"fa-solid fa-language\"></i> Hindi";
    }

}
function checkEmail(){
    let email = document.querySelector('#email').value;
    let emailReq = document.querySelector('#email-req');
    if(email==null || email==""){
        emailReq.classList.remove('d-none');
        return false;
    }
    else{
        emailReq.classList.add('d-none');
        return true;
    }
}
function hideWarning(){
    let emailReq = document.querySelector('#email-req');
    emailReq.classList.add('d-none');
}