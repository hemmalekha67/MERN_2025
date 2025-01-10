function submitForm(submit,isFormValid){
    if(isFormValid()){
        console.log("Form Validation Successful")
        console.log(submit);
    }
    else{
        console.log("Form Validation Failed")
        console.log("Form Submission Unsuccessful")
    }
}

function formValidation(){
    email="Hemma@gmail.com"
    password="1234"
    if(email==="Hemma@gmail.com"&&password){
        return true
    }else{
        return false
    }
}
function database(){
    dbName="SECE"
    return[dbName,"Data stored successfully"];
}

submitForm("Form Submission Successful",formValidation)