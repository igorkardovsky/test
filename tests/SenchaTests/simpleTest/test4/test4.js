function test4_1() {

	Ext.create('Ext.data.Store', {
		storeId : 'simpsonsStore',
		fields : [ 'name', 'email', 'phone' ],
		data : {
			'items' : [ {
				'name' : 'Lisa',
				"email" : "lisa@simpsons.com",
				"phone" : "555-111-1224"
			}, {
				'name' : 'Bart',
				"email" : "bart@simpsons.com",
				"phone" : "555-222-1234"
			}, {
				'name' : 'Homer',
				"email" : "home@simpsons.com",
				"phone" : "555-222-1244"
			}, {
				'name' : 'Marge',
				"email" : "marge@simpsons.com",
				"phone" : "555-222-1254"
			}, {
				'name' : 'Lisa',
				"email" : "lisa@simpsons.com",
				"phone" : "555-111-1224"
			}, {
				'name' : 'Bart',
				"email" : "bart@simpsons.com",
				"phone" : "555-222-1234"
			}, {
				'name' : 'Homer',
				"email" : "home@simpsons.com",
				"phone" : "555-222-1244"
			}, {
				'name' : 'Marge',
				"email" : "marge@simpsons.com",
				"phone" : "555-222-1254"
			} ]
		},
		proxy : {
			type : 'memory',
			reader : {
				type : 'json',
				root : 'items'
			}
		}
	});

	Ext.create('Ext.grid.Panel', {
		title : 'Simpsons',
		store : Ext.data.StoreManager.lookup('simpsonsStore'),
		columns : [ {
			text : 'Name',
			dataIndex : 'name'
		}, {
			text : 'Email',
			dataIndex : 'email',
			flex : 1
		}, {
			text : 'Phone',
			dataIndex : 'phone'
		} ],
		height : 200,
		width : 400,
		renderTo : Ext.getBody()
	});
};

function test4_2() {
	Ext.create('Ext.data.Store', {
		storeId : 'simpsonsStore',
		fields : [ 'name', 'email', 'phone' ],
		data : [ {
			"name" : "Lisa",
			"email" : "lisa@simpsons.com",
			"phone" : "555-111-1224"
		}, {
			"name" : "Bart",
			"email" : "bart@simpsons.com",
			"phone" : "555-222-1234"
		}, {
			"name" : "Homer",
			"email" : "home@simpsons.com",
			"phone" : "555-222-1244"
		}, {
			"name" : "Marge",
			"email" : "marge@simpsons.com",
			"phone" : "555-222-1254"
		} ]
	});

	Ext.create('Ext.grid.Panel', {
		title : 'Simpsons',
		store : Ext.data.StoreManager.lookup('simpsonsStore'),
		columns : [ {
			header : 'Name',
			dataIndex : 'name',
			editor : 'textfield'
		}, {
			header : 'Email',
			dataIndex : 'email',
			flex : 1,
			editor : {
				xtype : 'textfield',
				allowBlank : false
			}
		}, {
			header : 'Phone',
			dataIndex : 'phone'
		} ],
		selType : 'rowmodel',
		plugins : [ Ext.create('Ext.grid.plugin.RowEditing', {
			clicksToEdit : 1
		}) ],
		height : 200,
		width : 400,
		renderTo : Ext.getBody()
	});
};

function test4_3() {

	Ext.define('User', {
		extend : 'Ext.data.Model',
		fields : [ {
			name : 'name',
			type : 'string'
		}, {
			name : 'phone',
			type : 'string'
		}, {
			name : 'email',
			type : 'string'
		} ],

	});

	var store = Ext.create('Ext.data.Store', {
		storeId : 'simpsonsStore',
		model : 'User'
	});
	Ext.create('Ext.container.Viewport', {
		layout : 'border',
		renderTo : Ext.getBody(),
		items : [
				{
					// xtype: 'panel' implied by default
					title : 'East Region is collapsible',
					region : 'east',
					xtype : 'form',
					width : 200,
					collapsible : true, // make collapsible
					id : 'east-region-container',
					split : true,
					items : [ {
						xtype : 'textfield',
						name : 'name',
						fieldLabel : 'имя',
						allowBlank : false
					// requires a non-empty value
					}, {
						xtype : 'textfield',
						name : 'email',
						fieldLabel : 'почта',
						allowBlank : false
					// requires a non-empty value
					}, {
						xtype : 'textfield',
						name : 'phone',
						fieldLabel : 'телефон',
						allowBlank : false
					// requires a non-empty value
					} ],
					buttons : [ {
						text : 'Add',
						handler : function() {
							var user = Ext.create('User', {});
							this.up('form').getForm().updateRecord(user);
							Ext.data.StoreManager.lookup('simpsonsStore').add(
									user);
						}
					} ]
				},
				{

					region : 'center', // center region is required, no
										// width/height
					// specified
					xtype : 'gridpanel',
					title : 'Simpsons',
					store : Ext.data.StoreManager.lookup('simpsonsStore'),
					columns : [ {
						text : 'имя',
						dataIndex : 'name'
					}, {
						text : 'почта',
						dataIndex : 'email',
						flex : 1
					}, {
						text : 'Phone',
						dataIndex : 'phone'
					} ],
					margins : '5 5 0 0',
				    remove: function( record ) {
				    	var me = this,
				    		store = record.store;
				    	// show confirmation before continuing
				    	Ext.Msg.confirm( 'Attention', 'Are you sure you want to delete this item? This action cannot be undone.', function( buttonId, text, opt ) {
				    		if( buttonId=='yes' ) {
				    			store.remove( record );
				    			store.sync({
				    				/**
				    				 * On failure, add record back to store at correct index
				    				 * @param {Ext.data.Model[]} records
				    				 * @param {Ext.data.Operation} operation
				    				 */
				    				failure: function( records, operation ) {
				    					store.rejectChanges();
				    				}
				    			})
				    		}
				    	})
				    },
					listeners : {
						itemcontextmenu : function(view, record, item, index,
								e, eOpts) {
							var me = this;
							// stop event so browser's normal right-click action
							// doesn't continue
							e.stopEvent();
							// if a menu doesn't already exist, create one
							if (!item.contextMenu) {
								// add menu
								item.contextMenu = new Ext.menu.Menu({
									items : [ {
										text : 'Удалить запись',
										handler : function(item, e) {
											me.remove(record);
										}
									} ]
								})
							}
							// show menu relative to item which was
							// right-clicked
							item.contextMenu.showBy(item);
						}
					}
				} ],

	});

};

Ext.onReady(test4_3);