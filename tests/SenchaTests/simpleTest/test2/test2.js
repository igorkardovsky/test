// render simple panel
function test2_1(){
	// создает панель 
	Ext.create('Ext.panel.Panel', {
		//название панели
	    title: 'Hello',
	    // высота панели
	    width: 200,
	    // содержимое панели
	    html: '<p>World!</p>',
	    renderTo: Ext.getBody()
	});
	
};

function test2_2(){
	Ext.create('Ext.panel.Panel', {
	    bodyPadding: 5,  // Don't want content to crunch against the borders
	    //width: 300,
	    title: 'Filters',
	    items: [{
	        xtype: 'datefield',
	        fieldLabel: 'Start date'
	    }, {
	        xtype: 'datefield',
	        fieldLabel: 'End date'
	    }],
	    renderTo: Ext.getBody()
	});	
};

function test2_3(){
	 Ext.create('Ext.panel.Panel', {
		    title: 'Results',
		    width: 600,
		    height: 400,
		    renderTo: Ext.getBody(),
		    layout: {
		        type: 'vbox',       // Arrange child items vertically
		        align: 'stretch',    // Each takes up full width
		        padding: 5
		    },
		    items: [{               // Results grid specified as a config object with an xtype of 'grid'
		        xtype: 'grid',
		        columns: [{header: 'Column One'}],            // One header just for show. There's no data,
		        store: Ext.create('Ext.data.ArrayStore', {}), // A dummy empty data store
		        flex: 1                                       // Use 1/3 of Container's height (hint to Box layout)
		    }, {
		        xtype: 'splitter'   // A splitter between the two child items
		    }, {                    // Details Panel specified as a config object (no xtype defaults to 'panel').
		        title: 'Details',
		        bodyPadding: 5,
		        items: [{
		            fieldLabel: 'Data item',
		            xtype: 'textfield'
		        }], // An array of form fields
		        flex: 2             // Use 2/3 of Container's height (hint to Box layout)
		    }]
		});
};

function test2_4(){
	Ext.create('Ext.container.Viewport', {
	    layout: 'border',
	    items: [{
	        region: 'north',
	        html: '<h1 class="x-panel-header">Page Title</h1>',
	        border: false,
	        margins: '0 0 5 0'
	    }, {
	        region: 'west',
	        collapsible: true,
	        title: 'Navigation',
	        width: 150
	        // could use a TreePanel or AccordionLayout for navigational items
	    }, {
	        region: 'south',
	        title: 'South Panel',
	        collapsible: true,
	        html: 'Information goes here',
	        split: true,
	        height: 100,
	        minHeight: 100
	    }, {
	        region: 'east',
	        title: 'East Panel',
	        collapsible: true,
	        split: true,
	        width: 150
	    }, {
	        region: 'center',
	        xtype: 'tabpanel', // TabPanel itself has no title
	        activeTab: 0,      // First tab active by default
	        items: {
	            title: 'Default Tab',
	            html: 'The first tab\'s content. Others may be added dynamically'
	        }
	    }]
	});
};

Ext.onReady(test2_4);