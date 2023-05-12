import { CarPlay } from '../CarPlay';
import { VoiceControlState } from '../interfaces/VoiceControlState';
import { Template, TemplateConfig } from './Template';

export interface VoiceControlTemplateConfig
  extends Omit<TemplateConfig, 'leadingNavigationBarButtons' | 'trailingNavigationBarButtons'> {
  /**
   * The array of voice control states that can be used by your voice control template.
   */
  voiceControlStates: VoiceControlState[];
}

/**
 * Displays a voice control indicator on the CarPlay screen.
 *
 * CarPlay navigation apps must show the voice control template during audio input.
 */
export class VoiceControlTemplate extends Template<VoiceControlTemplateConfig> {
  public get type(): string {
    return 'voicecontrol';
  }

  constructor(config: VoiceControlTemplateConfig) {
    super(config);
  }

  public activateVoiceControlState(identifier: string) {
    CarPlay.bridge.activateVoiceControlState(this.id, identifier);
  }
}
