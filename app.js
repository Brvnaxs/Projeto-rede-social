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
                                    <button class="like botao"><img src="src/like.png" alt=""></button>
                                    <button class="botao"><img src="src/coment.png" alt=""></button>
                                    <button class="botao"><img src="src/send.png" alt=""></button>
                                    </section>
                                    <section class="areaTexto">
                                    <p class="nomeUsuario">${user.username}</p>
                                    <p class="textoPost">${posts.body}</p>
                                    </section>
                                    <div class="sesaoComentarios">
                                                    <div class="comentario">
                                                        <h3>@${comment.user.username}</h3>
                                                        <p>${comment.body}</p>
                                                    </div>
                                                </div>
                                    </div>`
                                    timeline.innerHTML += postagem
                                    var like = document.querySelectorAll('.like')
                                    like.forEach((i)=>{
                                        i.addEventListener('click', ()=>{
                                            i.classList.remove('botao')
                                            i.classList.add('Anima')
                                        });
                                            i.addEventListener('animationend', ()=>{
                                            i.classList.remove('Anima')
                                            i.classList.add('botao')
                                        });
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
