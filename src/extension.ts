import * as vscode from 'vscode'
import applyTransform from '@vscodeshift/apply-jscodeshift'
import { FileInfo, API, Options } from 'jscodeshift'

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    'extension.graphql-typegen',
    async () => {
      const graphqlTypegenAsync = require('graphql-typegen/graphql-typegen-async')
      await applyTransform(
        (
          fileInfo: FileInfo,
          api: API,
          {
            /* eslint-disable @typescript-eslint/no-unused-vars */
            selectionStart,
            selectionEnd,
            /* eslint-enable @typescript-eslint/no-unused-vars */
            ...options
          }: Options
        ) => graphqlTypegenAsync(fileInfo, api, options)
      )
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
