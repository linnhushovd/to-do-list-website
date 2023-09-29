//create the element 
//(lager regler for hvordan siden vil oppføre seg )
//funker !!!!

window.addEventListener('load',() => {//eventlistner gjør at siden reagerer på en måte 
    const form = document.querySelector("#new-task-form" ); //const er variabel deklarasjon
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

     //opsettet for html siden - layout ish
    form.addEventListener('submit',(e) => {
        e.preventDefault(); //stop from refreshing the page 

        const task = input.value;

        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content'); //under div, class er content,class list er content 
       
        task_el.appendChild(task_content_el); //hva gjør append child??

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text'); //under input, class er text i html fila
        task_input_el.type = 'text' ; //her hadde jg tulla litt
        task_input_el.value = task;
        task_input_el.setAttribute('readonly' ,'readonly');

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit'); //button er class edit HELVETTES SATAN JEEG HADDE = istedet for en punktum
        task_edit_el.innerText = 'Edit' ;

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
        
        task_el.appendChild(task_actions_el);
        list_el.appendChild(task_el);

        input.value ='';

        //^opsettet for html siden - layout ish

        //gjøre slik at buttons får funksjonalitet 
        task_edit_el.addEventListener("click", () =>{
            if (task_edit_el.innerText.toLowerCase()== "edit"){ // glemte () etter tolowercase rettet nå
                task_input_el.removeAttribute("readonly"); //at man kan edite tasksene allerede laget 
                task_input_el.focus();//noe med cursor fokuserer på tasken ish 
                task_edit_el.innerText = "save"; //endrer navn fra edit til save
            }
            else{
                task_input_el.setAttribute("readonly","readonly");
                task_edit_el.innerText ="Edit"
            }
        })
        task_delete_el.addEventListener('click', () =>{
            list_el.removeChild(task_el) //taskene ligger i list el - må fjernes derfra 
        })
        


    });

});