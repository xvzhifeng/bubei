<script>
	export default {
		globalData: {  
            userID: 1,
			userEmail:"user@sumu.com",
			bkurl:"/static/temp/index.jpg",
			api_updateStudyRecord:"http://api.sumu.today:10111/words/updateStudyRecord",
			api_addStudyRecord:"http://api.sumu.today:10111/words/addStudyRecord",
			api_passwordLogin:"http://api.sumu.today:10111/user/passwordLogin",
			api_emailLogin:"http://api.sumu.today:10111/login/email/text",
			api_emailRegister:"http://api.sumu.today:10111/user/register",
			api_getBK:"http://api.sumu.today:10111/background-image/getBK",
			api_getUserInfo:"http://api.sumu.today:10111/user/getUserInfo",
			api_getWordBookInfo:"http://api.sumu.today:10111/word-book/getWordBookInfo",
			api_getAllWordBook:"http://api.sumu.today:10111/word-book/getAllWordBook",
			api_choiceUserWordBook:"http://api.sumu.today:10111/user/choiceUserWordBook",
			api_getNotStudyWords:"http://api.sumu.today:10111/words/getNotStudyWords",
			api_getStudyWords:"http://api.sumu.today:10111/words/getStudyWords",
			api_getNotStudyRecordCount:"http://api.sumu.today:10111/words/getNotStudyRecordCount",
			api_getStudyRecordCount:"http://api.sumu.today:10111/words/getStudyRecordCount",
			api_getMp3:"http://api.sumu.today:10111/res/util/getMp3",
			api_getWordBookSectionList:"http://api.sumu.today:10111/word-book/getWordBookSectionList",
			api_getWordBookSectionWordList:"http://api.sumu.today:10111/word-book/getWordBookSectionWordList"

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
