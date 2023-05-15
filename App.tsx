import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { CustomPiano } from './src/components/CustomPiano';
import { PianoNotes } from './src/components/PianoNotes';
import { Audio } from 'expo-av';

const App = () => {
    const [pressedNote, setPressedNote] = useState<string | null>(null);

    useEffect(() => {
        const requestPermissionsAndConfigureAudio = async () => {
            await Audio.requestPermissionsAsync();
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                staysActiveInBackground: false,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                playThroughEarpieceAndroid: false,
            });
        };
        requestPermissionsAndConfigureAudio();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <PianoNotes notePressed={pressedNote} />
            <CustomPiano onPressNote={(note) => setPressedNote(note)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
});

export default App;
