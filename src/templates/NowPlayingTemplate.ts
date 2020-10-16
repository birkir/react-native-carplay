import { Template, TemplateConfig } from './Template';

export class NowPlayingTemplate extends Template<TemplateConfig> {
  public get type(): string {
    return 'nowplaying';
  }
}
