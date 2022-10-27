const timeline = document.querySelector('#timeline')
window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()
            fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then( ({posts}) => { 
                posts.forEach(post => {
                    fetch('https://dummyjson.com/user/'+post.id)
                    .then(res => res.json())
                    .then( (user) =>{
                        const u = `<div class="post">
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
                <p class="textoPost">${post.body}</p>
                </section>
            </div>`
            timeline.innerHTML += u
                    })
                });
            })
});