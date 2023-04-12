

const clicou = () => {
    const sliders = document.querySelector('.sliders')
    const button = document.querySelector('.ponto')
    const button2 = document.querySelector('.ponto2')
    const button3 = document.querySelector('.ponto3')
    const section = document.querySelector('.section') 
    
    section.setAttribute('style',' background-color: rgba(0, 255, 255, 0.363);')


    sliders.setAttribute('style','margin-left:0')

    button.classList.add('active')
    
    button2.setAttribute('class','ponto2')
    
    button3.setAttribute('class','ponto3')
}

const clicou2 = () => {
    const sliders = document.querySelector('.sliders')
    const button = document.querySelector('.ponto')
    const button2 = document.querySelector('.ponto2')
    const button3 = document.querySelector('.ponto3')    
    const section = document.querySelector('.section') 

    section.setAttribute('style','background-color:red')

    sliders.setAttribute('style','margin-left:-100vw')

    button2.classList.add('active')
    
    button.setAttribute('class','ponto')
    
    button3.setAttribute('class','ponto3')
    
   
}

const clicou3 = () => {
    const sliders = document.querySelector('.sliders')
    const button = document.querySelector('.ponto')
    const button2 = document.querySelector('.ponto2')
    const button3 = document.querySelector('.ponto3')
    const section = document.querySelector('.section') 
    
    section.setAttribute('style',' background-color: rgba(0, 245, 200, 1);')
    

    sliders.setAttribute('style','margin-left:-200vw')

    button3.classList.add('active')
    
    button.setAttribute('class','ponto')
    
    button2.setAttribute('class','ponto2')
    
}