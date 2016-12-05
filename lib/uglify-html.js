'use babel'

import { CompositeDisposable } from 'atom'

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'uglify-html:Uglify Editor': () => this.uglify()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  uglify() {
    console.log("start")
    let editor = atom.workspace.getActiveTextEditor()
    let text = editor.getText().replace(/\s+/g, ' ').replace(/>\s+</g, '><')
    editor.setText(text)
    console.log("end")
  }
};
