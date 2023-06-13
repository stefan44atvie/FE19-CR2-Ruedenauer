const priorlevel = document.getElementById('levelup');
const prior = document.getElementById('level_prior');
const info = document.getElementById('info');


let tasks = [{
    image: "https://sfr-fotografie.at/wp-content/uploads/2020/10/Kiev2015-366-1200x900.jpeg",
    title: "Theater Tabor",
    description: "3nach OÖ fahren und Theaterstück anschauen",
    priority: 3,
    deadline: "27/4/2023"
}, {
    image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1",
    title: "CodeFactory FrontEnd",
    description: "just another day of Coding. This time it's our Day 6 of JavaScript",
    priority: 4,
    deadline: "12/6/2023"
}, {
    image: "https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=1390&crop=1",
    title: "CodeFactory FrondEnd",
    description: "Yet Another Day of Coding with JavaScript",
    priority: 3,
    deadline: "13/6/2023"
}, {
    image: "https://www.stuttgarter-zeitung.de/media.media.e88094f9-fe94-4b66-88bf-dad32db070ac.original1920.jpg",
    title: "Washing",
    description: "Cleaning Clothes time :)",
    priority: 4,
    deadline: "13/6/2023"
}, {
    image: "https://www.fitforfun.de/files/images/202306/1/diese-sechs-wasser-workouts-verbrennen-richtig-viele-kalorien-1407932503,557038_m_n.jpg",
    title: "Fitness",
    description: "Don't forget to improve your strength :)",
    priority: 0,
    deadline: "14/6/2023"
}];

//     document.getElementById("me_tasks0").innerHTML += `
//     <div class="card" style="width: 18rem;">
//     <img src="${tasks[1].image}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <p class = "card-text prior_level"><a class="prior_title">${tasks[1].priority}: </a><a class='btn btn-warning uplevel' id='levelup'>Level up</a></p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
//   </div>
         
//     `;

    for (let task of tasks) {
        document.getElementById("me_tasks").innerHTML += `
            <div class="col">
        <div class="card" style="width: 200px;">
            <img src="${task.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">ji0i0 quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p class = "card-text prior_level"><a class="prior_title">${task.priority}: </a><a class='btn btn-warning uplevel' id='levelup'>Level up</a></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
             </div>
        `;
    }








let btnLevel = document.getElementsByClassName("uplevel");



    btnLevel[i].addEventListener("click", function() {
        tasks[i].priority++;
        console.log(tasks[i].priority)
        document.getElementsByClassName("priornum")[i].innerHTML = tasks[i].priority;

        const level = document.getElementsByClassName('priornum');
        const web = document.getElementsByClassName("infotext")


        if (tasks[i].priority<=1){
            level[i].style.backgroundColor="green";
            web[i].innerHTML="It's still enough time to fullfill this task";
        } else if (tasks[i].priority<=3){
            level[i].style.backgroundColor="yellow";
            web[i].innerHTML="Please take this task seriously soon";
        } else if (tasks[i].priority>3 && tasks[i].priority<4 ){
            console.log("GEFAHR");
            level[i].style.backgroundColor="red";


        } else if (tasks[i].priority>4){
            tasks[i].priority = -1;
            level[i].style.backgroundColor="red";
            // web[i].style.color="red";
        }

        if (tasks[i].priority<=1){
            web[i].style.color="green";
        }else if(tasks[i].priority>1 && tasks[i].priority < 4){
            web[i].style.color="blue";
        }
        else{
            web[i].style.color="red";
            console.log(web[i]);
            web[i].innerHTML="This task is overtime already";
            // level[i].style.backgroundColor="red";

        }
    })
    

    


   
