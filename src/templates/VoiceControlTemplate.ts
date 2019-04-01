import { CarPlay } from '../CarPlay';
import { VoiceControlState } from '../interfaces/VoiceControlState';
import { Template } from './Template';

interface VoiceControlTemplateConfig {
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
  get type() {
    return 'voice';
  }

  public activateVoiceControlState(identifier: string) {
    CarPlay.bridge.activateVoiceControlState(this.id, identifier);
  }
}
