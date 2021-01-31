package app.web



class Post {
    Profile profile

    String id
    String content
    Date dateCreated

    static hasMany = [comments : Comment]

    static constraints = {
        content nullable: false, blank: false
        comments: nullable: true
        id generator: 'uuid'
    }

    static mapping = {
        cache true
    }
}
