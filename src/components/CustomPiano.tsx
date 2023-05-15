import React from 'react';
import { Audio } from 'expo-av';
import Piano from 'react-native-piano';

type PianoProps = {
    onPressNote: (note: string) => void;
};



const noteFiles: { [key: string]: any } = {
    C: require('../../assets/sounds/C.mp3'),
    'C#': require('../../assets/sounds/C#.mp3'),
    D: require('../../assets/sounds/D.mp3'),
    'D#': require('../../assets/sounds/D#.mp3'),
    E: require('../../assets/sounds/E.mp3'),
    F: require('../../assets/sounds/F.mp3'),
    'F#': require('../../assets/sounds/F#.mp3'),
    G: require('../../assets/sounds/G.mp3'),
    'G#': require('../../assets/sounds/G#.mp3'),
    A: require('../../assets/sounds/A.mp3'),
    'A#': require('../../assets/sounds/A#.mp3'),
    B: require('../../assets/sounds/B.mp3'),
};
export const CustomPiano: React.FC<PianoProps> = ({ onPressNote }) => {
    const playNote = async (note: string) => {
        const sound = new Audio.Sound();

        try {
            await sound.loadAsync(noteFiles[note]);
            await sound.playAsync();
        } catch (error) {
            console.log('Error playing sound:', error);
        } finally {
            setTimeout(() => {
                sound.unloadAsync();
            }, 1000);
        }
    };

    return (
        <Piano
            onPlayNote={note => {
                playNote(note);
                onPressNote(note);
            }}
        />
    );
};
