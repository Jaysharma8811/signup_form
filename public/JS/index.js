// Form validation code

function formvalid()
{
    var name=document.myform.name.value;
    var phone=document.myform.phone.value;
    var email=document.myform.email.value;
    var password=document.myform.password.value;

    if(name=="" || phone=="" || password=="" || email=="" )
    {
        alert("All fields should be filled");
        return false;
    }
    else if(password.length < 3)
    {
        alert("Password must be at least 6 characters long");
        return false;
    }
}