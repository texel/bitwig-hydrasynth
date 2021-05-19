# Bitwig HYDRASYNTH controller script

This is a controller script for the ASM Hydrasynth, that allows
you to use it as an MPE controller. Only poly aftertouch is supported.

This will allow you to record note pressure expressions from your
Hydrasynth into Bitwig, and play them back out via your Hydrasynth.

You can also use the Hydrasynth as a controller for other synths
that support polyphonic aftertouch, such as the Novation Peak/Summit.

## Setup

1. Download the latest extension file from the [releases page](https://github.com/texel/bitwig-hydrasynth/releases)
2. Put `HYDRASYNTH.control.js` in your controller scripts directory. On macOS that's `~/Documents/Bitwig Studio/Controller Scripts`.
3. When you launch Bitwig Studio, your Hydrasynth should be automatically detected, and available as an input

## Use

In order for this extension to work properly, your Hydrasynth has to be transmitting MPE data. You can find this setting
on page 5 of the "System Setup" menu. Make sure "MPE" is set to "ON".

Now when you record performances into Bitwig, polyphonic aftertouch should also be recorded. If you're recording performances
to play back through the Hydrasynth via HW Instrument plugin, make sure "Use MPE" is also activated.
