import './style.css'




const collection  =<HTMLElement> document.querySelector(".nav_collection")
// const log = console.log

window.addEventListener("scroll",() => {
  if(window.scrollY > collection!.clientHeight )
    setTimeout(() => {

        collection!.style.transform = `translateY(${window.scrollY}px)`

  },300)


else{
  collection!.style.transform = `translateY(0px)`

}



})


export {}