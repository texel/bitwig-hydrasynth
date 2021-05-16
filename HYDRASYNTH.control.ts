/// <reference path="typings.d.ts" />

loadAPI(13);

host.defineController(
  "Ashun Sound Machines",
  "HYDRASYNTH",
  "1.0",
  "0E424D64-637D-4961-8BB3-7E4CB2FA12CF"
);

// Define a 1 in, 1 out interface
host.defineMidiPorts(1, 1);

// Auto-identify from USB name
host.addDeviceNameBasedDiscoveryPair(["HYDRASYNTH KB"], ["HYDRASYNTH KB"]);

// These are the only events we want to handle-
// all others will cause issues if we try to send them
// to other devices.
enum MidiFilters {
  NoteOn = "9?????",
  NoteOff = "9?????",
  Aftertouch = "d?????",
  ModWheel = "b001??",
  PitchBend = "e0????",
}

function init() {
  // This callback will only be called for messages that aren't
  // consumed by the noteInput below. If you want to view events,
  // call `setShouldConsumeEvents` to `false`.
  host.getMidiInPort(0).setMidiCallback(onMidi);

  const noteInput = host
    .getMidiInPort(0)
    .createNoteInput(
      "HYDRASYNTH",
      MidiFilters.NoteOn,
      MidiFilters.NoteOff,
      MidiFilters.Aftertouch,
      MidiFilters.ModWheel,
      MidiFilters.PitchBend
    );

  noteInput.setUseExpressiveMidi(true, 0, 48);
}

function onMidi(status: number, data1: number, data2: number) {
  // printMidi(status, data1, data2);
}

function exit() {}
