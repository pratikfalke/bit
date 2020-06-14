import React from 'react';
import { WorkspaceUI } from '../workspace/workspace.ui';

export class TesterUI {
  static dependencies = [WorkspaceUI];

  static async provider([workspace]: [WorkspaceUI]) {
    workspace.registerMenuItem({
      label: 'Tests',
      getContent: function getContent() {
        // const componentId = useContext(ComponentContext);
        const componentId = 'ui/text';

        return <div>Tests! of {componentId}</div>;
      }
    });

    return new TesterUI();
  }
}
