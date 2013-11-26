Ext.Loader.setConfig({
	enabled : true
});

Ext.application({
	stores : [ 'TopicStore' ],
	views : [ 'mainView' ],
	autoCreateViewport : true,
	name : 'MyApp',
	controllers : [ 'NoteableController' ]
});
