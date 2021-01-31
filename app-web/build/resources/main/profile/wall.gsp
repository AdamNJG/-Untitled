<!doctype html>
<html>
    <head>
         <meta name="layout" content="main"/>
    </head>
<body>
<h1>Wall for ${profile.fullName}</h2>

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
        <g:textFieldRow  id="fullName" name="fullName" cols="30"/><br/>
        <g:submitButton name="post" value="Post"/>
        </g:form>
    <div>
</div>
    <div class="PostContainer">
        <g:each in="${profile.posts}" var="post">
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

</body>
</html>