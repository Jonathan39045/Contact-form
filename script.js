let first=document.querySelector("#first_name")
let second=document.querySelector("#second_name")
let submit_btn=document.querySelector("#submit_btn")
let first_required_field=document.querySelector("#first-field")
let second_required_field=document.querySelector("#second-field")
let email=document.querySelector("#email")
let email_required_field=document.querySelector("#email-field")
submit_btn.addEventListener("click",(event)=>
{
    event.preventDefault();
    
    if(first.innerHTML.length==0){
        first_required_field.style.display="block"
        
    }
    if(second.innerHTML.length==0){
        second_required_field.style.display="block"
    }
    if(email.innerHTML.length==0)
    {
        email_required_field.style.display="block"
    }
    
}
)