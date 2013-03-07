Ext.define('MyApp.store.TopicStore', {
	extend : 'Ext.data.Store',
	requires : [ 'MyApp.model.TopicRecord' ],
	model : 'MyApp.model.TopicRecord',
	storeId : 'TopicStore',
	proxy : {
		type : 'localstorage',
		id : 'NoteableHtml.store.TopicStore'
	}
});