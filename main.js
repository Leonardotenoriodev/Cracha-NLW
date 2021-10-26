const LinksSocialMedia = {
    twitter: 'Leonardo013sp',
    facebook: 'leonardo.tenorio.75',
    instagram: 'leonardotenorio',
    youtube: 'channel/UCXgBoMUOnNHAwV0Y3wpE6sg',
    github: 'leonardotenoriodev',
}
  
function changeSocialMediaLinks(){                  
    for(let li of socialLinks.children) {
        const social = li.getAttribute ('class')
        
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`


    }
}


changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`

fetch(url)
.then(response => response.json())
.then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio 
} )

}

getGitHubProfileInfos ( ) 
