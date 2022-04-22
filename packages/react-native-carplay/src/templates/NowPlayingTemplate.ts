import type { TemplateConfig } from './Template';
import { Template } from './Template';

export class NowPlayingTemplate extends Template<TemplateConfig> {
  public get type(): string {
    return 'nowplaying';
  }
}
