
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
                        const postagem = `<div class="post">
                <section class="headerPost">
                <img class="fotoUsuario" src="${user.image}"alt="">
                <h1 class="nomeUsuario">${user.username}</h1>
                <button class="botao">...</button>
                </section>
                <img class="fotoPost" src="src/Mae&filho.png" alt="">
                <section class="botoes">
                <button class="botao"><img src="src/like.png" alt=""></button>
                <button class="botao"><img src="src/coment.png" alt=""></button>
                <button class="botao"><img src="src/send.png" alt=""></button>
                </section>
                <section class="areaTexto">
                <p class="nomeUsuario">${user.username}</p>
                <p class="textoPost">${posts.body}</p>
                </section>
            </div>`
                timeline.innerHTML += postagem
            }); 
                

            });
                
        })
    })

    // for(var i = 1; i < 3; i++){
    //     fetch('https://dummyjson.com/users/'+i)
    //     .then(res => res.json())
    //     .then((user) => {
    //        var usuario = document.querySelector(`#user${i}`)
    //         usuario.setAttribute('src', `${user.image}`)
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

                