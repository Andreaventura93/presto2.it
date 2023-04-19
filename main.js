//cattura manina navbar

let navIcon = document.querySelector('#navIcon') ;
let btnIcon = document.querySelector('#btnIcon') ;



let confirm = false ;

//evento click sul toggler

btnIcon.addEventListener('click', ()=>{

 navIcon.classList.toggle('fa-rotate-180');


})


//cattura navabar

let mainNavbar = document.querySelector('#mainNavbar');

window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0){

        mainNavbar.classList.remove('bg-transparent');
        mainNavbar.classList.add('background-accentC');

        mainNavbar.style.height = '100px';


    } else {


        mainNavbar.classList.add('bg-transparent');
        mainNavbar.classList.remove('background-accentC');

        mainNavbar.style.height = '60px';



    }


})


//chiamate asincrona con il -set interval-

if(document.querySelector('#first-span')!=null){


let firstSpan = document.querySelector('#first-span');
let secondSpan = document.querySelector('#second-span');
let thirdSpan = document.querySelector('#third-span');

function createInterval(element , finalNumber , tempo){

    let counter = 0;

    let interval = setInterval( ()=>{

        
      
        if(counter < finalNumber){

            counter++ ;

           element.innerHTML = counter;

        } else {

            clearInterval(interval);
        }


    }, tempo)


}




//cattura degli span con numero 0









//intersection observer

let h2Test = document.querySelector('#h2Test');

let Intersectioncheck = false

let observer = new IntersectionObserver(

     (entries)=>{

        entries.forEach( (entry)=>{




            if(entry.isIntersecting && Intersectioncheck == false){

                createInterval(firstSpan, 2500, 0.4);
                createInterval(secondSpan, 1500, 4);
                createInterval(thirdSpan, 800, 6);

                Intersectioncheck =true;

            }

     } )


       
   }


)

observer.observe(h2Test);

}








