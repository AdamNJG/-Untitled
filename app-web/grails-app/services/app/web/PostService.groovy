package app.web

import grails.gorm.transactions.Transactional

@Transactional
class PostService {

    def getPosts() {
        [allPosts:Post.list()]
    }
}
