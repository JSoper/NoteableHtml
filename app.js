Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	models : [ 'TopicRecord' ],
	stores : [ 'TopicStore' ],
	views : [ 'mainView' ],
	autoCreateViewport : true,
	name : 'MyApp',
	controllers : [ 'NoteableController' ]
});
