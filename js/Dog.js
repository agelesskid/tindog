class Dog {
    constructor(data){
        Object.assign(this, data)
    }

    setSwipeData(condition){
        this.hasBeenSwiped = true
        if (condition === 'accepted'){
            this.hasBeenLiked = true
        }
    }

    getProfileHtml(){
        const { avatar, alt, name, age, bio, hasBeenLiked, hasBeenSwiped } = this

        const badgeHtml = hasBeenLiked ?
            `<img class="badge" src="./images/badge-like.png" alt="Approval Badge">` : hasBeenSwiped ?
            `<img class="badge" src="./images/badge-nope.png" alt="Refusal Badge">` : ''

        return `
                <img class="profile-pic" src="./${avatar}" alt="${alt}">
                ${badgeHtml}
                <div class="text-wrapper">
                    <h2>${name}, ${age}</h2>
                    <h4>${bio}</h4>
                </div>
            `
    }
}

export default Dog