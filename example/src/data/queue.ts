import SoundPlayer from 'react-native-sound-player'

type AudioTrack = {
  id: string
  url: string
  title: string
}

class AudioQueue {
  private audioTracks: AudioTrack[]
  private currentTrack: AudioTrack | undefined
  private listeners: ((audioTracks: AudioTrack[]) => void)[]

  constructor () {
    this.audioTracks = []
    this.listeners = []

    SoundPlayer.addEventListener('FinishedPlaying', () => {
      const nextAudioTrack = this.audioTracks.pop()

      if (nextAudioTrack) {
        SoundPlayer.playUrl(nextAudioTrack?.url)

        this.next()
      } else {
        this.currentTrack = undefined
      }
    })
  }

  add (audioTrack: AudioTrack) {
    this.audioTracks.push(audioTrack)

    this.onQueueChange()
  }

  next () {
    const nextAudioTrack = this.audioTracks.shift()

    if (nextAudioTrack) {
      SoundPlayer.playUrl(nextAudioTrack?.url)

      this.currentTrack = nextAudioTrack

      this.onQueueChange()
    } else {
      this.currentTrack = undefined
    }
  }

  play (audioTrack: AudioTrack) {
    this.currentTrack = audioTrack

    // SoundPlayer.playUrl(audioTrack.url)

    this.onQueueChange()
  }

  stop () {
    this.currentTrack = undefined

    SoundPlayer.stop()

    this.onQueueChange()
  }

  getCurrentTrack () {
    return this.currentTrack
  }

  getQueueLength () {
    return this.audioTracks.length
  }

  getQueueItems () {
    return this.audioTracks
  }

  addListener (listener: (audioTracks: AudioTrack[]) => void) {
    this.listeners.push(listener)
  }

  private onQueueChange () {
    this.listeners.forEach((listener) => {
      listener(this.audioTracks)
    })
  }
}

export default new AudioQueue()
