<script>
	export default {
		globalData: {  
            userID: 1,
			userEmail:"user@sumu.com",
			bkurl:"/static/temp/index.jpg",
			api_updateStudyRecord:"http://127.0.0.1:10111/words/updateStudyRecord",
			api_addStudyRecord:"http://127.0.0.1:10111/words/addStudyRecord",
			api_passwordLogin:"http://127.0.0.1:10111/user/passwordLogin",
			api_emailLogin:"http://127.0.0.1:10111/login/email/text",
			api_emailRegister:"http://127.0.0.1:10111/user/register",
			api_getBK:"http://127.0.0.1:10111/background-image/getBK"
        },
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
