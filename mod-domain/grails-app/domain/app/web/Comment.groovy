package app.web



class Comment {
    Post post
    Profile profile

    String id
    String content
    Date dateCreated


    static constraints = {
        content nullable: false, blank: false
        id generator: 'uuid'
    }

    static mapping = {
        cache true
    }
}
