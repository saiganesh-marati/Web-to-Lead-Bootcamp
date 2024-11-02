function beforesubmit()
{
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("inputdate.value",inputdate.value);// string -->date (en_IN)

    let formattedDate= new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log("formattedDate",formattedDate);
    outputdate.value=formattedDate;
}