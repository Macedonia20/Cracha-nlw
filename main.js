const LinksSocialMedia = {
  github: 'Macedonia20',
  youtube: 'channel/UCpX8tlMVO7cZ3gtEfV0HRmA',
  facebook: 'matheus.macedo.98434',
  instagram: 'macedoo_matheus',
  twitter: 'macedo_matheuss'
}

function changeSocialMediaLinks() {
   for (let li of socialLinks.children) {
     const social = li.getAttribute ('class')

   li.children[0].href = `https://${social}.com/${LinksSocialMedia [social]}`
   }
}

 changeSocialMediaLinks() 
   
  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}` 

     fetch(url)
     .then(response => response.json())
     .then(data => {
     userName.textContent = data.name
     userLink.href = data.html_url
     UserImage.src = data.avatar_url
     userLongin.textContent = data.login
     

    })
  }
  getGitHubProfileInfos()


 

