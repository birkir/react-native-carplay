import { Action, HeaderAction } from './Action';

export interface Header {
  title: string;

  /**
   * By default, a header will not have a start action.
   * Requirements Only one of APP_ICON or BACK is supported as a start header Action.
   */
  startAction?: Action<'appIcon' | 'back'>;
  /**
   * By default, a template will not have end header actions.
   * Requirements Up to 2 actions (which are APP_ICON, BACK or TYPE_CUSTOM with an icon) at the end of the header.
   */
  endActions?: [HeaderAction] | [HeaderAction, HeaderAction];
}
