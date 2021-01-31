package app.web


import grails.gorm.transactions.Transactional
import grails.plugin.springsecurity.SpringSecurityService
import grails.plugin.springsecurity.annotation.Secured

@Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
class ProfileController {

    static scaffold = Profile

    SpringSecurityService springSecurityService

    def profileService

    def profile

    def wall() {
        profile = springSecurityService.currentUser.getProfile()
        if(!profile){
            response.sendError(404)
        }else {
            [profile: profile]
        }

    }

    def addPost(String content) {
        def newUser = User.findByUsername(springSecurityService.currentUser.username)
        try {
            def newPost = profileService.createPost(newUser,content)
        }catch(PostException pe){
            flash.message = pe.message
        }
        redirect (action: 'wall')
    }

    @Transactional
    @Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
    def viewProfile(String fullName) {
        String username = springSecurityService.principal.username
        def user = User.findByUsername(username)
        String email = user.email.toString()
        profile = springSecurityService.currentUser.getProfile()
        if (!profile){
                profile = new Profile(fullName: "please change your name!", user: user, email: user.email)
            if(profile.save()){
               redirect (controller: "profile" , action: "editProfile")
            }
        } else if(profile.fullName == "please change your name!"){
            redirect (controller: "profile" , action: "editProfile")
        }
        else {
            [profile:profile]
        }
    }

    @Transactional
    @Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
    def editProfile() {
        def username = springSecurityService.principal.username
        profile = springSecurityService.currentUser.getProfile()
        if(profile){
            if(profile.fullName == "please change your name!"){
                [profile:profile]
                flash.message = "Please change your name!"
            }
            [profile:profile]
        } else {
            redirect (controller: "profile", action: "viewProfile")
        }
    }

    @Transactional
    @Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
    def editCommit(String nameChange) {
        profile = springSecurityService.currentUser.getProfile()
        if(profile){
            if(!(nameChange == profile.fullName))
            profile.fullName = nameChange
            if(profile.fullName == nameChange){
                if(profile.save()){
                    redirect (controller: "profile", action: "viewProfile")
                    flash.message = "Name edited"
                } else { redirect (controller: "profile", action: "editProfile")
                    flash.message = "profile failed to save, contact administrator"}
            }
        } else {redirect (controller: "profile", action: "editProfile")
            flash.message = "profile not found"}


    }


}
