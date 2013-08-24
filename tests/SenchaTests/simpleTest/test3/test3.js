// render simple panel
function test3_1() {
	Ext.create('Ext.form.Panel', {
		title : 'Absolute Layout',
		width : 300,
		height : 275,
		layout : 'absolute',
		layoutConfig : {
		// layout-specific configs go here
		// itemCls: 'x-abs-layout-item',
		},
		url : 'save-form.php',
		defaultType : 'textfield',
		items : [ {
			x : 10,
			y : 10,
			xtype : 'label',
			text : 'Send To:'
		}, {
			x : 80,
			y : 10,
			name : 'to',
			anchor : '90%' // anchor width by percentage
		}, {
			x : 10,
			y : 40,
			xtype : 'label',
			text : 'Subject:'
		}, {
			x : 80,
			y : 40,
			name : 'subject',
			anchor : '90%' // anchor width by percentage
		}, {
			x : 0,
			y : 80,
			xtype : 'textareafield',
			name : 'msg',
			anchor : '100% 100%' // anchor width and height
		} ],
		renderTo : Ext.getBody()
	});
};

function test3_2() {
	Ext.create('Ext.panel.Panel', {
		title : 'Accordion Layout',
		width : 300,
		height : 300,
		layout : 'accordion',
		defaults : {
			// applied to each contained panel
			bodyStyle : 'padding:15px'
		},
		layoutConfig : {
			// layout-specific configs go here
			titleCollapse : false,
			animate : true,
			activeOnTop : true
		},
		items : [ {
			title : 'Panel 1',
			html : 'Panel content!'
		}, {
			title : 'Panel 2',
			html : 'Panel content!'
		}, {
			title : 'Panel 3',
			html : 'Panel content!'
		} ],
		renderTo : Ext.getBody()
	});
};

function test3_3() {
	Ext.create('Ext.Panel', {
		width : 500,
		height : 400,
		title : "AnchorLayout Panel",
		layout : 'anchor',
		renderTo : Ext.getBody(),
		items : [ {
			xtype : 'panel',
			title : '75% Width and 20% Height',
			anchor : '75% 20%'
		}, {
			xtype : 'panel',
			title : 'Offset -300 Width & -200 Height',
			anchor : '-300 -200'
		}, {
			xtype : 'panel',
			title : 'Mixed Offset and Percent',
			anchor : '-250 20%'
		} ]
	});
};

function test3_4() {
	Ext.create('Ext.Panel', {
		width : 500,
		height : 280,
		title : "AutoLayout Panel",
		layout : 'auto',
		renderTo : Ext.getBody(),
		items : [ {
			xtype : 'panel',
			title : 'Top Inner Panel',
			width : '75%',
			html : 'Panel1',
			height : 90
		}, {
			xtype : 'panel',
			title : 'Bottom Inner Panel',
			width : '75%',
			html : 'Panel2',
			height : 90
		} ]
	});
};

function test3_5() {
	Ext.create('Ext.panel.Panel', {
		width : 500,
		height : 400,
		title : 'Border Layout',
		layout : 'border',
		items : [ {
			title : 'South Region is resizable',
			region : 'south', // position for region
			xtype : 'panel',
			height : 100,
			split : true, // enable resizing
			margins : '0 5 5 5'
		}, {
			// xtype: 'panel' implied by default
			title : 'West Region is collapsible',
			region : 'west',
			xtype : 'panel',
			margins : '5 0 0 5',
			width : 200,
			collapsible : true, // make collapsible
			id : 'west-region-container',
			layout : 'fit'
		}, {
			title : 'Center Region',
			region : 'center', // center region is required, no width/height
			// specified
			xtype : 'panel',
			layout : 'fit',
			margins : '5 5 0 0'
		} ],
		renderTo : Ext.getBody()
	});
};

function test3_6() {
	var navigate = function(panel, direction) {
		// This routine could contain business logic required to manage the
		// navigation steps.
		// It would call setActiveItem as needed, manage navigation button
		// state, handle any
		// branching logic that might be required, handle alternate actions like
		// cancellation
		// or finalization, etc. A complete wizard implementation could get
		// pretty
		// sophisticated depending on the complexity required, and should
		// probably be
		// done as a subclass of CardLayout in a real-world implementation.
		var layout = panel.getLayout();
		layout[direction]();
		Ext.getCmp('move-prev').setDisabled(!layout.getPrev());
		Ext.getCmp('move-next').setDisabled(!layout.getNext());
	};

	Ext.create('Ext.panel.Panel', {
		title : 'Example Wizard',
		width : 300,
		height : 200,
		layout : 'card',
		bodyStyle : 'padding:15px',
		defaults : {
			// applied to each contained panel
			border : false
		},
		// just an example of one possible navigation scheme, using buttons
		bbar : [ {
			id : 'move-prev',
			text : 'Back',
			handler : function(btn) {
				navigate(btn.up("panel"), "prev");
			},
			disabled : true
		}, '->', // greedy spacer so that the buttons are aligned to each
		// side
		{
			id : 'move-next',
			text : 'Next',
			handler : function(btn) {
				navigate(btn.up("panel"), "next");
			}
		} ],
		// the panels (or "cards") within the layout
		items : [ {
			id : 'card-0',
			html : '<h1>Welcome to the Wizard!</h1><p>Step 1 of 3</p>'
		}, {
			id : 'card-1',
			html : '<p>Step 2 of 3</p>'
		}, {
			id : 'card-2',
			html : '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
		} ],
		renderTo : Ext.getBody()
	});
};

function test3_7() {
	// All columns are percentages -- they must add up to 1

	Ext.create('Ext.panel.Panel', {
		title : 'Column Layout - Percentage Only',
		width : 350,
		height : 250,
		layout : 'column',
		items : [ {
			title : 'Column 1',
			columnWidth : .25
		}, {
			title : 'Column 2',
			columnWidth : .55
		}, {
			title : 'Column 3',
			columnWidth : .20
		} ],
		renderTo : Ext.getBody()
	});
};

// Mix of width and columnWidth -- all columnWidth values must add up
// to 1. The first column will take up exactly 120px, and the last two
// columns will fill the remaining container width.
function test3_8() {
	Ext.create('Ext.Panel', {
		title : 'Column Layout - Mixed',
		width : 350,
		height : 250,
		layout : 'column',
		items : [ {
			title : 'Column 1',
			width : 120
		}, {
			title : 'Column 2',
			columnWidth : .7
		}, {
			title : 'Column 3',
			columnWidth : .3
		} ],
		renderTo : Ext.getBody()
	});
};

function test3_9() {
	Ext.create('Ext.panel.Panel', {
		title : 'Fit Layout',
		width : 300,
		height : 150,
		layout : 'fit',
		items : {
			title : 'Inner Panel',
			html : 'This is the inner panel content',
			bodyPadding : 20,
			border : false
		},
		renderTo : Ext.getBody()
	});
};

function test3_10() {
	Ext.create('Ext.Panel', {
		width : 500,
		height : 300,
		title : "HBoxLayout Panel",
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		renderTo : document.body,
		items : [ {
			xtype : 'panel',
			title : 'Inner Panel One',
			flex : 2
		}, {
			xtype : 'panel',
			title : 'Inner Panel Two',
			flex : 1
		}, {
			xtype : 'panel',
			title : 'Inner Panel Three',
			flex : 1
		} ]
	});
};

function test3_11() {
	Ext.create('Ext.panel.Panel', {
		title : 'Table Layout',
		width : 300,
		height : 150,
		layout : {
			type : 'table',
			// The total column count must be specified here
			columns : 3
		},
		defaults : {
			// applied to each contained panel
			bodyStyle : 'padding:20px'
		},
		items : [ {
			html : 'Cell A content',
			rowspan : 2
		}, {
			html : 'Cell B content',
			colspan : 2
		}, {
			html : 'Cell C content',
			cellCls : 'highlight'
		}, {
			html : 'Cell D content'
		} ],
		renderTo : Ext.getBody()
	});
};

function test3_12(){
	
	Ext.create('Ext.Panel', {
	    width: 500,
	    height: 400,
	    title: "VBoxLayout Panel",
	    layout: {
	        type: 'vbox',
	        align: 'center'
	    },
	    renderTo: document.body,
	    items: [{
	        xtype: 'panel',
	        title: 'Inner Panel One',
	        width: 250,
	        flex: 2
	    },
	    {
	        xtype: 'panel',
	        title: 'Inner Panel Two',
	        width: 250,
	        flex: 4
	    },
	    {
	        xtype: 'panel',
	        title: 'Inner Panel Three',
	        width: '50%',
	        flex: 4
	    }]
	});
};

Ext.onReady(test3_12);