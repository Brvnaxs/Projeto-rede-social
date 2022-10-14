document.addEventListener('DOMContentLoaded', event => {
    event.preventDefault()
    fetch("https://dummyapi.io/data/v1/post?limit=10")
    .then(res => res.json())
    .then(posts => {
        posts.map( post => {
            const div = document.createElement('div')
        })
    })
})
