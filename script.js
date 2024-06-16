let first=document.querySelector("#first_name")
let second=document.querySelector("#second_name")
let submit_btn=document.querySelector("#submit_btn")
let first_required_field=document.querySelector("#first-field")
let second_required_field=document.querySelector("#second-field")
let email=document.querySelector("#email")
let email_required_field=document.querySelector("#email-field")
let email_pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
let messages_box=document.querySelector("#boxing")
let message_required_field=document.querySelector("#message_required")
let submit_required=document.querySelector("#submit_required")
let checking=document.querySelector("#checking")
let pop_up=document.querySelector(".pop_up")
submit_btn.addEventListener("click",(event)=>
{
    event.preventDefault();
    
    if(first.value.trim().length==0){
        first_required_field.style.display="block"
        first.classList.add("name_first")                    
        // name_first => Red Color
        first.classList.remove("first_name")
        // first_name => Black color
        
    }
    else if(first.value.trim().length>=1){
        
        
        first_required_field.style.display="none"
        first.classList.add("first_name")
        first.classList.remove("name_first")

    }
    if(second.value.trim().length==0)
    {
        second_required_field.style.display="block"
        second.classList.add("name_second")
        second.classList.remove("second_name")
    }
    else if(second.value.trim().length>=1){
        
        second_required_field.style.display="none"
        second.classList.remove("name_second")
        second.classList.add("second_name")
        
    }
    if(email.value.trim().length==0)
    {
        email_required_field.style.display="block"
        email.classList.add("name_email")
        email.classList.remove("email_name")
    }
    else if(email_pattern.test(email.value))
    {
        email_required_field.style.display="none"
        email.classList.remove("name_email")
        email.classList.add("email_name")
    }
    if(messages_box.value.trim().length<5)
    {
        message_required_field.style.display="block"
        messages_box.classList.add("name_boxing")
        messages_box.classList.remove("boxing")
    }
    else if(messages_box.value.trim().length>5)
    {    
        message_required_field.style.display="none"
        messages_box.classList.add("boxing")
        messages_box.classList.remove("name_boxing")
    }
    if(!checking.checked)
    {
        submit_required.style.display="block"
    }
    else if(checking.checked){
        
        submit_required.style.display="none"
    }

    if(first.value.trim().length>=1 && second.value.trim().length>=1 
    && email_pattern.test(email.value) 
    && messages_box.value.trim().length>5 && checking.checked)
    {
        pop_up.style.display="block"
    }


}
)