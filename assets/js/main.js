/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

var web = document.querySelector("#web")
var mobile = document.querySelector("#mobile")
var devops = document.querySelector("#devops")
var db = document.querySelector('#db')
var skillsInfo = document.querySelector('.skills-info')
var skillsTab = document.querySelectorAll(".skills__subtitle")


web.addEventListener("click", function webClicked(e) {

    
    for (let index = 0; index < skillsTab.length; index++) {
        skillsTab[index].classList.remove('active')
          
    }
    web.classList.add('active')

    skillsInfo.innerHTML=`

    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-react skills__icon'></i>
            <span class="skills__name">React</span>
        </div>
        <div class="skills__bar skills__html">

        </div>
        <div>
            <span class="skills__percentage">95%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-angular skills__icon text-danger'></i>
            <span class="skills__name text-danger">Angular</span>
        </div>
        <div class="skills__bar skills__css bg-danger">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-nodejs skills__icon text-success' ></i>
            <span class="skills__html text-success">Nodejs</span>
        </div>
        <div class="skills__bar skills__html bg-success">
            
        </div>
        <div>
            <span class="skills__percentage">95%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-spring-boot text-success'></i>
            <span class="skills__name text-success">Spring Boot</span>
        </div>
        <div class="skills__bar skills__ux bg-success">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-django text-secondary skills__icon'></i>
            <span class="skills__name text-secondary">Python Django</span>
        </div>
        <div class="skills__bar skills__ux bg-secondary">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-windows skills__icon'></i>
            <span class="skills__name">APS.NET</span>
        </div>
        <div class="skills__bar skills__ux">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
    

        `
})

mobile.addEventListener("click", function webClicked(e) {

    for (let index = 0; index < skillsTab.length; index++) {
        skillsTab[index].classList.remove('active')
          
    }
    

    mobile.classList.add('active')
    skillsInfo.innerHTML=`

    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-android skills__icon text-success'></i>
            <span class="skills__name text-success">Andoid ~ Java</span>
        </div>
        <div class="skills__bar skills__html bg-success">

        </div>
        <div>
            <span class="skills__percentage">95%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-android skills__icon text-success'></i>
            <span class="skills__name text-success">Android~Kotlin</span>
        </div>
        <div class="skills__bar skills__js bg-success">
            
        </div>
        <div>
            <span class="skills__percentage">65%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-apple skills__icon text-secondary' ></i>
            <span class="skills__html text-secondary">IOS~Swift</span>
        </div>
        <div class="skills__bar skills__ux bg-secondary">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
   
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-android skills__icon text-success'></i><i class='bx bxl-apple skills__icon text-secondary'></i>
            <span class="skills__name">Flutter</span>
        </div>
        <div class="skills__bar skills__html">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
        <i class='bx bxl-android skills__icon text-success'></i><i class='bx bxl-apple skills__icon text-secondary'></i>
            <span class="skills__name">React Native </span>
        </div>
        <div class="skills__bar skills__js">
            
        </div>
        <div>
            <span class="skills__percentage">65%</span>
        </div>
    </div>
        `
})

db.addEventListener("click", function webClicked(e) {

    for (let index = 0; index < skillsTab.length; index++) {
        skillsTab[index].classList.remove('active')
          
    }
    

    db.classList.add('active')
    skillsInfo.innerHTML=`

    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxs-data skills__icon text-danger'></i>
            <span class="skills__name text-danger">MySQL</span>
        </div>
        <div class="skills__bar skills__html bg-danger">

        </div>
        <div>
            <span class="skills__percentage">95%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxs-data skills__icon text-secondary '></i>
            <span class="skills__name text-secondary ">Postgress</span>
        </div>
        <div class="skills__bar skills__js bg-secondary">
            
        </div>
        <div>
            <span class="skills__percentage">65%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-windows skills__icon' ></i>
            <span class="skills__html ">SQL Server</span>
        </div>
        <div class="skills__bar skills__ux ">
            
        </div>
        <div>
            <span class="skills__percentage">90%</span>
        </div>
    </div>
   
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-firebase skills__icon text-warning'></i>
            <span class="skills__name text-warning">Firebase</span>
        </div>
        <div class="skills__bar skills__html bg-warning">
            
        </div>
        <div>
            <span class="skills__percentage">95%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
        <i class='bx bxs-data skills__icon text-success'></i>
            <span class="skills__name text-success">Mongo DB </span>
        </div>
        <div class="skills__bar skills__js bg-success">
            
        </div>
        <div>
            <span class="skills__percentage">65%</span>
        </div>
    </div>
        `
})
devops.addEventListener("click", function webClicked(e) {

    for (let index = 0; index < skillsTab.length; index++) {
        skillsTab[index].classList.remove('active')
          
    }
    

    devops.classList.add('active')
    skillsInfo.innerHTML=`

    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxs-data skills__icon text-danger'></i>
            <span class="skills__name text-danger">Oracle Cloud</span>
        </div>
        <div class="skills__bar skills__html bg-danger">

        </div>
        <div>
            <span class="skills__percentage">95%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-amazon skills__icon text-warning  '></i>
            <span class="skills__name text-warning ">Amazone Web Services</span>
        </div>
        <div class="skills__bar skills__ux bg-warning">
            
        </div>
        <div>
            <span class="skills__percentag ">90%</span>
        </div>
    </div>
    <div class="skills__data">
        <div class="skills__names">
            <i class='bx bxl-microsoft skills__icon ' ></i>
            <span class="skills__html ">Microsft Azure</span>
        </div>
        <div class="skills__bar skills__js">
            
        </div>
        <div>
            <span class="skills__percentage">65%</span>
        </div>
    </div>
   
  

        `
})












