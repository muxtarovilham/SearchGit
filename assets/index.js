const form = document.getElementById('form')
const inp = document.getElementById('inp')
const btn = document.getElementById('btn')
const url = ('https://api.github.com/users/')
const p1 = document.getElementById('p1')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    searchUser()
})

function searchUser(p) {
    fetch(url + inp.value)
    .then(res => res.json())
    .then(data => {
        renderUser(data)
    })
    
}

function renderUser(data) {
    const img = document.createElement('img');
    img.className = 'img1'
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    p2.className = 'p2'
    p3.className = 'p3'
    p4.className = 'p4'
    p2.textContent = 'Username: ' + data.login;
    p3.textContent = 'Followers: ' + data.followers;
    p4.textContent = 'Following: ' + data.following;
    img.src = data.avatar_url;
    
    myDiv.append(img,p2,p3,p4)
}
