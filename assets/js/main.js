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


var about__1 = document.querySelector("#about__1")
var experience = document.querySelector("#experience")
var education = document.querySelector("#education")
var about_content = document.querySelector(".about__container")
var about_titles = document.querySelectorAll('.about__titles')

about__1.addEventListener("click",(e)=>{
    about_titles.forEach(title=>title.classList.remove('active'));
    document.querySelector('#about__1').classList.add("active")
    about_content.innerHTML=`
    <div class="about__img  align-self-start">
    <img src="assets/img/allen2.png" style="padding: .5rem 1rem;
    margin-bottom: var(--mb-4);
    border-radius: .5rem;
    " alt="">
</div><div style="padding: 2rem 2rem;
margin-bottom: var(--mb-4);
border-radius: .5rem;
box-shadow: 0 4px 25px rgba(14,36,49,.15);">
    <h2 class="about__subtitle">Hi, I'am Allen</h2>
                        <p class="about__text">I have been working as a web and mobile developer since
							2018, the period during which I have worked in different
							environments, from  start-ups to big consultancy companies . I
							am a self-motivated and self-taught professional who likes to
							solve problems.
							I merge a passion for usability and user experience with
							technical knowledge to create cool digital experiences. My
							repertoire includes programming languages and tools such as
							React, Angular, Django, Spring Boot, Angular Material, MySQL,
							PostgreSQL, ASP.NET, and Mobile App Development in Android,
							Flutter, Swift, and more.</p> 
                            </div>
    `

})
education.addEventListener("click",(e)=>{

    about_titles.forEach(title=>title.classList.remove('active'));
    document.querySelector('#education').classList.add("active")

    about_content.innerHTML=`
    <div class="about__img  align-self-start">
    <img src="assets/img/allen2.png" style="padding: .5rem 1rem;
    margin-bottom: var(--mb-4);
    border-radius: .5rem;
    " alt="">
</div>
                                                <div id="education-data" class="p-4 about__text" style="padding: .5rem 1rem;
                                        margin-bottom: var(--mb-4);
                                        border-radius: .5rem;
                                        box-shadow: 0 4px 25px rgba(14,36,49,.15);">
                                        <table>
                                        <thead>
                                        <th></th>
                                        <th></th>
                                        </thead>
                                        <tbody>
                                        <tr>
                                        <td  class="d-flex  align-content-start"><p><strong>University </strong></p></td>
                                         <td> <p class="mx-2">National University of Science and technology</p>  </td>
                                        </tr>
                                        <tr ><td  class="d-flex  align-content-start"><p><strong>Major</strong> </p></td>
                                         <td> <p class="ml-4 mb-2">BSc Honours Degree in Computer Science</p>  </td></tr>
                                         <tr><td class="d-flex  align-content-start"><p><strong>Duration </strong></p></td>
                                         <td> <p class="ml-4 mb-2">Sept 2014 - June 2018</p>  </td></tr>
                                        </tbody>
                                        </table>
                                        </div>
                           
    `

})
experience.addEventListener("click",(e)=>{
    about_titles.forEach(title=>title.classList.remove('active'));
    document.querySelector('#experience').classList.add("active")
    about_content.innerHTML=`
    <div class="about__img  align-self-start">
                        <img src="assets/img/allen2.png" style="padding: .5rem 1rem;
                        margin-bottom: var(--mb-4);
                        border-radius: .5rem;
                        " alt="">
                    </div>
                    
                    <div>
                        
                        <div class="about__content">
                            <div class="p-4 about__text" style="padding: .5rem 1rem;
                                        margin-bottom: var(--mb-4);
                                        border-radius: .5rem;
                                        box-shadow: 0 4px 25px rgba(14,36,49,.15);">
                            <table>
                            <thead>
                            <th></th>
                            <th></th>
                            </thead>
                            <tbody>
                            <tr>
                            <td><p><strong>Company</strong></p></td>
                            <td> <p class="m-2">CentricData</p>  </td></tr>
                            
                            <tr><td><p><strong>Position</strong> </p></td>
                             <td> <p class="ml-4 mb-2">Software Developer</p>  </td></tr>
                             <tr><td><p><strong>Duration </strong></p></td>
                             <td> <p class="ml-4 mb-2">2019 - Current</p>  </td></tr>
                             <tr><td class="d-flex  align-content-start"><p><strong>Duties</strong> </p></td>
                             <td> <p class="ml-4 mb-2" >Frontend development (Angular,React, VueJs ,Angular Material,etc ) Backend development(SpringBoot , Django, Express, Laravel etc)
                                            Mobile App development (Android, IOS and Cross Platform)
                                            Web and Mobile app designing (Adobe Photoshop, )
                                            Design easy user interfaces and great user experiences for the digital
                                            platforms of small companies
                                            CMS management (WordPress , Drupal etc)
                                            VPS configuration and optimization (Apache & Nginx)</p>  </td></tr>
                            </tbody>
                            </table>
                            </div>
                            <div class="p-4 about__text" style="padding: .5rem 1rem;
                                        margin-bottom: var(--mb-4);
                                        border-radius: .5rem;
                                        box-shadow: 0 4px 25px rgba(14,36,49,.15);">
                            <table>
                            <thead>
                            <th></th>
                            <th></th>
                            </thead>
                            <tbody>
                            <tr>
                            <td><p><strong>Company</strong></p></td>
                             <td> <p class="m-2">Keytrackz Technologies</p>  </td>
                            </tr>
                            <tr><td><p><strong>Position</strong> </p></td>
                             <td> <p class="ml-4 mb-2">Juniour Software Developer</p>  </td></tr>
                             <tr><td><p><strong>Duration </strong></p></td>
                             <td> <p class="ml-4 mb-2">6 Months</p>  </td></tr>
                             <tr><td class="d-flex  align-content-start"><p><strong>Duties</strong> </p></td>
                             <td> <p class="ml-4 mb-2">Developing and Maintaining Enterprise Systems
                                    Developing Systems in Spring MVC Framework.
                                    Mobile Development ( Android, Cross Platform and IOS)
                                    Development using the following languages (Java, C#, Python, PHP,
                                    SQL MySQL, HTML, Java-Script etc.)</p>  </td></tr>
                            </tbody>
                            </table>
                            </div>

    `

})














