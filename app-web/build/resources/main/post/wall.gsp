<!doctype html>
<html>
    <head>
         <meta name="layout" content="main"/>
    </head>
<body>

<h1>Welcome to the main feed, <sec:loggedInUserInfo field="username" var="username"/></h2>

<g:if test="${flash.message}">
<div class="messageContainer">
  <div style="display: block">${flash.message}</div>
  </div>
</g:if>
<p/>
<div>
    <h3>
        What are you thinking?
    </h3>
    </p>
    <div>
        <g:form action="addPost">
        <g:textArea class="postContent" id="postContent" name="content" rows="3" cols="50"/><br/>
        <g:submitButton class="postSubmit loginButton" name="post" value="Post"/>
        </g:form>
    <div>
</div><br/>
    <div class="PostContainer">
<g:each var="post" in="${allPosts}">
              <div>
              <div class="postUser">
                  ${post.profile.user.username}
                  </div>
                  <div class="postInnerContainer">
                      ${post.content}
                  </div>
                  <div class="postDate">
                      ${post.dateCreated}
                  </div>
              </div>
</g:each>
</div>
    </div>

</body>
</html>