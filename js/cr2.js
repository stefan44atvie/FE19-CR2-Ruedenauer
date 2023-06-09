class Task {
    image;
    title;
    description;
    priority;
    deadline;

    constructor (image, title, description, priority,deadline){
        this.image = image;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;
    }
        fullTask(){
            return this.title + ' with description ' + this.description + ' has a ' + this.priority + ' priority' + ' and a deadline of ' + this.deadline;
        }
        addLevel(){
           return this.priority = Number(this.priority)+1;
            console.log(priority);
        }
    }


var task1 = new Task('https://sfr-fotografie.at/wp-content/uploads/2020/10/Kiev2015-366-1200x900.jpeg', 'Theater Tabor','nach OÖ fahren und Theaterstück anschauen', 2,'25/4/2023');
console.log(task1.fullTask());
var task2 = new Task('https://sfr-fotografie.at/wp-content/uploads/2020/10/LNT_Lounge_Augarten-vom-06.-September-2018-20-08_19480-1200x864.jpeg', 'CodeFactory FrontEnd Course', 'taking another FrontEnd Course day. This time: JavaScript Day 6', 3, '12/6/2023');


//Display Task as Bootstrap Card 
document.getElementById("me_tasks").innerHTML += `
<div class="card" style="width: 18rem;">
<div class="row row-cols-3 d-flex justify-content-between  py-1 px-2 row-cols-12">
    <span class="card_sub text-start col-lg-3 col col-2">Task</span>
    <span class="card_sub text-start col-lg-3 col col-1"><img src="./images/fav.png" width="20px"></span>
</div>
<img src="${task1.image}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${task1.title}</h5>
  <p class="card-text description">${task1.description}</p>
  <hr>
  <p class="card-text prior_level"><a class="prior_title">Priority</a>: <a id ='level_prior' class="priornum">${task1.priority}</a> <a class='btn btn-warning' id='levelup'>Level up</a></p>
  <p class="card-text prior_level"><a class="infotext" id='info'></a>
  <p class="card-text deadline"><a class="deadline_title">Deadline</a>: ${task1.deadline}</p>
  <hr>
  <a href="#" class="btn btn-danger">Delete</a> 
  <a href="#" class="btn btn-success">Done</a>

</div>
</div>
`;

const priorlevel = document.getElementById('levelup');
const prior = document.getElementById('level_prior');
const info = document.getElementById('info');

priorlevel.addEventListener("click", function(){
    task1.addLevel()
    prior.innerHTML = task1.priority;   
    console.log(task1.priority)
    
    // Changing of the background-color 
    if(task1.priority<=1){
        prior.style.backgroundColor="green";
        prior.style.color="white";
        info.innerHTML="It's still enough time to fullfill this task";
        info.style.color="green";
    }else if(task1.priority<=3){
        prior.style.backgroundColor="yellow";
        prior.style.color="black";
        info.innerHTML="Please take this task seriously soon";
        info.style.color="yellow";
    }else if(task1.priority<=5){
        prior.style.backgroundColor="red";
        prior.style.color="white";
        info.innerHTML="This task is overtime already";
        info.style.color="red";
    }

    //Setting max priority to 5
    if(task1.priority>4){
        task1.priority=-1;
    }
    // for(let i=0; i<=5;i++){
    //     let num = i;

    //     console.log(num);
    //     priorlevel.innerHTML = Number(num);
    // }
});

// Setting of background-color Priority 
if(task1.priority<=1){
    prior.style.backgroundColor="green";
    prior.style.fontColor="white";

}else if(task1.priority<=3){
    prior.style.backgroundColor="yellow";
    prior.style.color="black";
} else{
    prior.style.backgroundColor="red";
    prior.style.fontColor="white";

}
