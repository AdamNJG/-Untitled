<html>
<head>
	<meta name="layout" content="main"/>
	<s2ui:title messageCode='spring.security.ui.register.title'/>
</head>
<body>
	<g:if test="${flash.message}">
                                    <div class="messageContainer">
                                      <div style="display: block">${flash.message}</div>
                                      </div>
                                    </g:if>
<div class="registerContainer">
<s2ui:formContainer type='register' focus='username' width='800px'>
	<s2ui:form class="regForm" beanName='registerCommand'>
		<g:if test='${emailSent}'>
		<br/>
		<g:message code='spring.security.ui.register.sent'/>
		</g:if>
		<g:else>
		<br/>
		<table>
			<tbody>
			<s2ui:textFieldRow class="textField" name='username' size='40' labelCodeDefault='Username'/>
			<s2ui:textFieldRow class="textField" name='email' size='40' labelCodeDefault='E-mail'/>
			<s2ui:passwordFieldRow class="textField" name='password' size='40' labelCodeDefault='Password'/>
			<s2ui:passwordFieldRow class="textField" name='password2' size='40' labelCodeDefault='Password (again)'/>

			</tbody>
		</table>
		 <g:submitButton class="button loginButton" name="register" value="Create account"/>
		</g:else>
	</s2ui:form>
</s2ui:formContainer>
</div>
</body>
</html>