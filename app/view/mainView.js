Ext.define('MyApp.view.mainView', {
	extend : 'Ext.container.Container',
	
	requires: [ 'Ext.layout.container.Border', 
	            'Ext.grid.Panel', 
	            'Ext.form.Panel',
	            'Ext.grid.plugin.CellEditing'
	            ],

	height : 300,
	layout : {
		type : 'border'
	},

	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ {
				xtype : 'gridpanel',
				region : 'west',
				flex : 1,
				title : 'Noteable',
				store : 'TopicStore',
				plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {
					clicksToEdit : 2
				}) ],
				columns : [ {
					xtype : 'gridcolumn',
					dataIndex : 'topic',
					flex : 1,
					text : 'Topics',
					editor : 'textfield'
				} ],
				tools : [ {
					xtype : 'tool',
					type : 'plus'
				}, {
					xtype : 'tool',
					type : 'minus'
				}, {
					xtype : 'tool',
					type : 'save'
				} ]
			}, {
				xtype : 'form',
				region : 'center',
				title : 'My Form',
				flex : 4,
				layout : 'fit',
				items : [ {
					xtype : 'htmleditor',
					name : 'content'
				} ]
			} ]
		});
		me.callParent(arguments);
	}
});