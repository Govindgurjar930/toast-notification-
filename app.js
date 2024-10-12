let toastbox=document.getElementById("toastbox");
let successmsg=' <i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errormsg=' <i class="fa-regular fa-circle-xmark"></i>  Please Fix The Error';
let invalidmsg=' <i class="fa-solid fa-exclamation"></i> Invalid Input , Check Again';
function showtoast(msg){
    let toast=document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastbox.appendChild(toast);
    if(msg.includes('Error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove()
    },5000);
    
}
