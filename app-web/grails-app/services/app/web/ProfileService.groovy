package app.web


import grails.gorm.transactions.Transactional

class PostException extends RuntimeException {
    String message
    Post post
}


@Transactional
class ProfileService {

    def createPost(User user, String content) {
        def profile = user.getProfile()
        if(profile) {
            def post = new Post(content: content)
            profile.addToPosts(post)
            if(post.validate() && profile.save()) {
                return post
            } else {
                throw new PostException(message: "Invalid or empty post", post: post)
            }

        }
        throw new PostException(message: "Invalid User Id")
    }


}
