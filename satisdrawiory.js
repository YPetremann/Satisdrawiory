Draw.loadPlugin(function(ui) {
	mxResources.parse('debugFromHere=Debug from here...');
	var graph = ui.editor.graph;
	var enabled = true;
	var counter = 0;
	debugger;
	console.log("Loaded now")
	ui.menus.createPopupMenu = function(menu, cell, evt) {
		uiCreatePopupMenu.apply(this, arguments);
		var graph = ui.editor.graph;
		if (graph.model.isVertex(graph.getSelectionCell())) {
			this.addMenuItems(menu, ['-', 'debugFromHere'], null, evt);
		}
	};
	ui.actions.addAction('debugFromHere', function() {
    cell = ui.editor.graph.getSelectionCell()
    debugger;
	});
});
