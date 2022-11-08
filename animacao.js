const i = document.querySelector('.like')
i.addEventListener('click', ()=>{
    i.classList.remove('botao')
    i.classList.add('Anima')
})
i.addEventListener('animationend', ()=>{
    i.classList.remove('Anima')
    i.classList.add('botao')
})
// teste 3:
$('.post').each(()=>{
    const like = document.querySelector('.like')
    like.addEventListener('click', ()=>{
    like.classList.remove('botao')
    like.classList.add('Anima')
});
    like.addEventListener('animationend', ()=>{
    like.classList.remove('Anima')
    like.classList.add('botao')
});
})
// teste 5: ps: funcionou
var elem = document.querySelectorAll('.like')
                            elem.forEach((i)=>{
                                i.addEventListener('click', ()=>{
                                    i.classList.remove('botao')
                                    i.classList.add('Anima')
                                });
                                    i.addEventListener('animationend', ()=>{
                                    i.classList.remove('Anima')
                                    i.classList.add('botao')
                                });
                            })