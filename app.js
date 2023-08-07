let StudentsArray=[];
function register(){
    let studentName=document.getElementById('name').value;
    let studentEmail=document.getElementById('email').value;
    let studentRollno=StudentsArray.length+1;
    StudentCheck = StudentsArray.filter((x)=>{
        return x.email==studentEmail
    })
    if(StudentCheck.length==0 && studentEmail!=''){
        let StudentsList={
            name:studentName,
            email:studentEmail,
            rollno:studentRollno,
        }
        StudentsArray.push(StudentsList)
    }
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    let container=document.getElementById('StudentsContainer');
    container.innerHTML="";
    StudentsArray.map((StudentsList)=>{
        let div=document.createElement('div');
        let name=document.createElement('h3');
        let email=document.createElement('p');
        let rollno=document.createElement('h2');
        div.innerHTML='';
        rollno.innerHTML=StudentsList.rollno;
        name.innerHTML=StudentsList.name;
        email.innerHTML=StudentsList.email
        container.appendChild(div);
        div.classList.add('student-card')
        div.appendChild(rollno);
        div.appendChild(name);
        div.appendChild(email);
    })
}