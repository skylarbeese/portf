   const box2 = document.querySelector(".box2");
    const nav = document.querySelector("nav");
    const email = document.querySelector(".email");
    const facebook = document.querySelector(".facebook");
    const instagram = document.querySelector(".instagram");
    const github = document.querySelector(".github");
  

    window.onscroll = function() {
        if(window.scrollY > 500) {
            box2.classList.add("box-active")
            
           
        } else {
            box2.classList.remove("box-active")
          
        }
    }
    email.addEventListener('mouseover', () => {
    email.classList.add('email-active')
    //alert("working")
})
email.addEventListener('mouseout', () => {
	email.classList.remove('email-active')
})
facebook.addEventListener('mouseover', () => {
    facebook.classList.add('email-active')
    //alert("working")
})
facebook.addEventListener('mouseout', () => {
	facebook.classList.remove('email-active')
})
instagram.addEventListener('mouseover', () => {
    instagram.classList.add('email-active')
    //alert("working")
})
instagram.addEventListener('mouseout', () => {
	instagram.classList.remove('email-active')
})
github.addEventListener('mouseover', () => {
    github.classList.add('email-active')
    //alert("working")
})
github.addEventListener('mouseout', () => {
	github.classList.remove('email-active')
})