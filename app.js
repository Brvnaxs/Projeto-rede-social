//Próxima etapa.
// const body = document.body
// const post = document.createElement('div')
// post.classList.add('post')
// const secaoUsuario = document.createElement('div')
// secaoUsuario.classList.add('headerPost')
// const ftUsuario = document.createElement('img')
// ftUsuario.classList.add('fotoUsuario')
// const nomeUsuario = document.createElement('h1')
// nomeUsuario.classList.add('nomeUsuario')
// const botaoOpcoes = document.createElement('botao')
// const botaocontent = document.createTextNode("...")
// botaoOpcoes.setAttribute(botaocontent)
// botaoOpcoes.classList.add('botao')
// secaoUsuario.appendChild(ftUsuario)
// secaoUsuario.appendChild(nomeUsuario)
// secaoUsuario.appendChild(botaoOpcoes)
// //lllllllllllllllllllllllll
// const ftPost = document.createElement('img')
// ftPost.setAttribute('href','src/Mae&filho.png')
// ftPost.classList.add('fotoPost')
// const botoes = document.createElement('div')
// botoes.classList.add('botoes')
// const bt1 = document.createElement('button')
// bt1.classList.add('botao')
// const bt2 = document.createElement('button')
// bt2.classList.add('botao')
// const bt3 = document.createElement('button')
// bt3.classList.add('botao')
// //conteudo
// const textoPost = document.createElement('p')
// textoPost.classList.add('textoPost')
// const areaTexto = document.createElement('div')
// areaTexto.classList.add('areaTexto')
// areaTexto.appendChild(nomeUsuario)
// areaTexto.appendChild(textoPost)
// botoes.appendChild(bt1)
// botoes.appendChild(bt2)
// botoes.appendChild(bt3)
// post.appendChild(secaoUsuario)
// post.appendChild(ftPost)
// post.appendChild(botoes)
// post.appendChild(areaTexto)
// const timeline = document.querySelector('#timeline')
// post.style.backgroundColor = "black"
// body.appendChild(post)

//novo teste:
const timeline = document.querySelector('#timeline')
// const nm = document.createTextNode("@novo.user")
// //timeline.append('<div class="post">'+'<section class="headerPost">'+'<img class="fotoUsuario" src="src/Pigmeu.jpg" alt="">'+'<h1 class="nomeUsuario">'+nm+'</h1>'+'<button class="botao">...</button>'+'</section>'+'<img class="fotoPost" src="src/Mae&filho.png" alt="">'+'<section class="botoes">'+'<button class="botao"><img src="src/like.png" alt=""></button>'+'<button class="botao"><img src="src/coment.png" alt=""></button>'+'<button class="botao"><img src="src/send.png" alt=""></button>'+'</section>'+'<section class="areaTexto">'+'<p class="nomeUsuario">@Baby_Hipo</p>'+'<p class="textoPost">Me and mommy 💕💕</p>'+'</section>'+'</div>')
// let testePost = '<div class="post">'+
// '<section class="headerPost">'+
// '<img class="fotoUsuario" src="src/Pigmeu.jpg" alt="">'+
// '<h1 class="nomeUsuario">@Baby_Hipo</h1>'+
// '<button class="botao">...</button>'+
// '</section>'+
// '<img class="fotoPost" src="src/Mae&filho.png" alt="">'+
// '<section class="botoes">'+
// '<button class="botao"><img src="src/like.png" alt=""></button>'+
// '<button class="botao"><img src="src/coment.png" alt=""></button>'+
// '<button class="botao"><img src="src/send.png" alt=""></button>'+
// '</section>'+
// '<section class="areaTexto">'+
// '<p class="nomeUsuario">@Baby_Hipo</p>'+
// '<p class="textoPost">Me and mommy 💕💕</p></section>'+
// '</div>'
// // let parser = new DOMParser();

// // let doc = new DOMParser().parseFromString(testePost, "text/html");

// let s = $.parseHTML(testePost)
// let ll = $.parseHTML(testePost)
// $('#timeline').append(ll)
// $('#timeline').append(s)

window.addEventListener('DOMContentLoaded', e => {
    e.preventDefault()

    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then( ({users}) => {
            users.forEach( user => {
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
                <p class="nomeUsuario">@Baby_Hipo</p>
                <p class="textoPost">Me and mommy 💕💕</p>
                </section>
            </div>`
                timeline.innerHTML += u
            });
        })
})
