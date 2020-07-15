CKEDITOR.plugins.add('tablestep', {
    icons: "tablestep",
    init: function(editor) {
        editor.ui.addButton('Tablestep', {
            label: "Insert tablestep",
            command: "insertTableStep",
            toolbar: "insert"
        })

        editor.addCommand('insertTableStep', {
            exec: function(editor) {
                var now = "<p>This is a new paragraph.</p><p>This is a new paragraph.</p>";
                editor.insertHtml(now)
            }
        })
    }
})