package app.web


import grails.gorm.transactions.Transactional
import grails.plugin.springsecurity.SpringSecurityService
import grails.plugin.springsecurity.annotation.Secured

@Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY", "ROLE_ADMIN"])
class PostController {

    static scaffold = Post
    SpringSecurityService springSecurityService

    def profileService

    def postService

    def profile

    def allPosts

    @Transactional
    @Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
    def wall() {


        profile = springSecurityService.currentUser.getProfile()

        if(!profile){
            redirect(controller: "profile", action: "viewProfile")
        }else {
            [profile: profile]
            allPosts = postService.getPosts()
        }


    }

    @Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
    def list(){
        def allPosts = postService.getPosts()
    }

    @Secured(["IS_AUTHENTICATED_REMEMBERED", "IS_AUTHENTICATED_FULLY"])
    def addPost(String content) {
        def newUser = User.findByUsername(springSecurityService.currentUser.username)
        try {
            def newPost = profileService.createPost(newUser,content)
        }catch(PostException pe){
            flash.message = pe.message
        }
        redirect (uri: '/')
    }


}
