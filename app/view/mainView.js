/*
 * File: app/view/mainView.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.1.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.mainView', {
    extend: 'Ext.container.Container',

    height: 564,
    width: 601,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'gridpanel',
                    region: 'west',
                    width: 200,
                    title: 'Noteable',
                    store: 'TopicStore',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            dataIndex: 'topic',
                            flex: 1,
                            text: 'Topic'
                        }
                    ],
                    tools: [
                        {
                            xtype: 'tool',
                            type: 'plus'
                        },
                        {
                            xtype: 'tool',
                            type: 'minus'
                        },
                        {
                            xtype: 'tool',
                            type: 'save'
                        }
                    ]
                },
                {
                    xtype: 'form',
                    region: 'center',
                    title: 'My Form',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'topic',
                            fieldLabel: 'Topic',
                            labelWidth: 30,
                            allowBlank: false
                        },
                        {
                            xtype: 'htmleditor',
                            height: 505,
                            width: 465,
                            name: 'content'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});