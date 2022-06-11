interface ISpeaker {
  playSound(): void;
}

interface IVolumeControl {
  volumeUp(): void;
  volumeDown(): void;
}

interface ISpeakerWithVolumeControl extends ISpeaker, IVolumeControl {}

class MySpeaker implements ISpeakerWithVolumeControl {
  playSound() {}

  volumeDown() {}
  volumeUp() {}
}

class MusicPlayer {
  speaker: ISpeakerWithVolumeControl;

  constructor(speaker: ISpeakerWithVolumeControl) {
    this.speaker = speaker;
  }
}
