<script>
	export default {
		globalData: {  
            userID: 1,
			userEmail:"user@sumu.com",
			api_updateStudyRecord:"http://127.0.0.1:10111/words/updateStudyRecord",
			api_addStudyRecord:"http://127.0.0.1:10111/words/addStudyRecord"
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
