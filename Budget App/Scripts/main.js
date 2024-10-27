function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    
    sidebar.classList.toggle('collapsed');
    content.classList.toggle('collapsed');
}

console.log(profile)

profile.forEach((item)=>{
    document.querySelector('.profile-section').innerHTML = `
        <img src="${item.userPic}"alt="Profile Picture" class="profile-pic">
            <h3 class="profile-name">${item.userName}</h3>
            <p class="profile-email">${item.userEmail}</p>
    `
})
