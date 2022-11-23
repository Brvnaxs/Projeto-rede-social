const timeline = document.querySelector('#timeline')
window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then( ({users}) => {
            users.forEach(user => {
                fetch('https://dummyjson.com/posts/'+user.id)
                .then(res => res.json())
                .then((posts) =>{
                        fetch('https://jsonplaceholder.typicode.com/photos/'+user.id)
                        .then(res => res.json())
                        .then((photo)=>{
                                fetch('https://dummyjson.com/comments/'+user.id)
                                .then(res => res.json())
                                .then((comment) => {
                                    const postagem = `<div class="post">
                                    <section class="headerPost">
                                    <img class="fotoUsuario" src="${user.image}"alt="">
                                    <a href="./Perfil/index.html" class="link" data-id="${user.id}"><h1 class="nomeUsuario">${user.username}</h1></a>
                                    <button class="botao">...</button>
                                    </section>
                                    <img class="fotoPost" src="${photo.url}" alt="">
                                    <section class="botoes">
                                    <img src="src/like.png" class="like botao" alt="">
                                    <button class="botao"><img src="src/coment.png" alt=""></button>
                                    <button class="botao"><img src="src/send.png" alt=""></button>
                                    </section>
                                    <section class="areaTexto">
                                    <p class="nomeUsuario">${user.username}</p>
                                    <p class="textoPost">${posts.body}</p>
                                    </section>
                                    <div class="sessaoComentarios">
                                                    <div class="comentario">
                                                        <h3><font color="black">@${comment.user.username}</font> ${comment.body}</h3>
                                                    </div>
                                                </div>
                                                <div class="mais-opcoes">
                                                <img src="src/camera.png" alt="">
                                                <img src="src/salvar.png" alt="">
                                            </div>
                                    </div>`
                                    timeline.innerHTML += postagem
                                    var like = document.querySelectorAll('.like')
                                    var baloes1 = document.querySelector('.baloes1')
                                    
                                    like.forEach((i)=>{
                                        i.addEventListener('click', ()=>{
                                            i.setAttribute('src', 'src/balloon.png') 
                                            
                                            baloes1.classList.add('Anima')
                                        });
                                           
                                    })
                                    baloes1.addEventListener('animationend', ()=>{
                                        baloes1.classList.remove('Anima')
                                        baloes1.classList.add('baloes1')
                                    })

                                    const link = document.querySelectorAll(".link");
                                    link.forEach(i =>{
                                        i.addEventListener('click', ()=>{
                                            const dataId = i.getAttribute("data-id")
                                            localStorage.setItem('id',dataId)
                                        })
                                    })
                                })
                            
                            
                        })
            }); 
            });
                
        })
    })

    // for(var i = 1; i <= 3; i++){
    //     fetch('https://dummyjson.com/users/'+i)
    //     .then(res => res.json())
    //     .then((users) => {
    //        var url = users.image
    //        var usuario = document.getElementById(`user${i}`)
    //        usuario.setAttribute('src', url)
    //     })
        
    // }
    
    fetch('https://dummyjson.com/users/1')
    .then(res => res.json())
    .then((user) =>{
        var usuario = document.getElementById('user1')
        usuario.setAttribute('src', `${user.image}`)
    });

    fetch('https://dummyjson.com/users/2')
    .then(res => res.json())
    .then((user) =>{
        var usuario = document.getElementById('user2')
        usuario.setAttribute('src', `${user.image}`)
    });

    fetch('https://dummyjson.com/users/3')
    .then(res => res.json())
    .then((user) =>{
        var usuario = document.getElementById('user3')
        usuario.setAttribute('src', `${user.image}`)
    });
