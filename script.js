function addTask(text, color) {
    const tDiv = document.createElement('div');
    tDiv.className = 'task';
    tDiv.style.borderColor = color;

    const hDiv = document.createElement('div');
    hDiv.className = 'boxHeader';
    hDiv.id = 'header';
    hDiv.style.backgroundColor = color;

    const tInput = document.createElement('input');
    tInput.type = "checkbox";
    tInput.className = 'boxHeader';
    tInput.id = 'header';

    const sInput = document.createElement('span');
    sInput.className = 'fa fa-close';
    sInput.id = 'cross';

    const toDiv = document.createElement('div');
    toDiv.className = 'doIt';
    toDiv.innerHTML = text;
    
    
    
    const date = new Date();
    let dateHours = date.getHours();
    let dateMinutes = date.getMinutes();
    let datedays = date.getDay();
    let dateMonth = date.getMonth()+1;
    let dateYear = date.getFullYear();
    
    if (dateHours <= 9){
        dateHours = "0"+ dateHours;
    }

    if (dateMinutes <= 9){
        dateMinutes = "0" + dateMinutes;
    }  
    if (datedays <= 9){
        datedays = "0"+ datedays;
    }

    if (dateMonth <= 9){
        dateMonth = "0" + dateMonth;
    }
    

    
    const dDiv = document.createElement('div');
    dDiv.className = 'addDate';
    dDiv.id = 'addDate';
    dDiv.innerHTML ="Dodano: " + datedays + "-" + dateMonth + "-" + dateYear + "-" + dateHours + ":" + dateMinutes;
    dDiv.style.backgroundColor = color;
    

    document.querySelector(".list").appendChild(tDiv);
    tDiv.appendChild(hDiv);
    hDiv.appendChild(tInput);
    hDiv.appendChild(sInput);
    tDiv.appendChild(toDiv);
    tDiv.appendChild(dDiv);
    

    tInput.addEventListener("click", addX);
    sInput.addEventListener("click", delTask);
    // Usuwanie taska
    function delTask() {
        sInput.closest('.task').remove();
    }
    // Task wykonany
    function addX() {
        check = document.querySelector('checkbox');
        cross = document.querySelector('span');
        if (this.checked) {
            //console.log('Zaznaczone');
            sInput.style.display = "block";
            toDiv.style.textDecoration = "line-through";
        } else {
            // console.log('Odznaczone');
            sInput.style.display = "none";
            toDiv.style.textDecoration = "none";
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const textarea = this.querySelector('textarea');
        let color = document.querySelector('#colors').value;
        if (textarea.value !== '') {
            addTask(textarea.value, color);
            textarea.value = '';
        }
    });
});