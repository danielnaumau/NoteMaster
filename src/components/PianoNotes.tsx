import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type PianoNotesProps = {
    notePressed: string | null;
};

export const PianoNotes: React.FC<PianoNotesProps> = ({ notePressed }) => {
    const [currentNote, setCurrentNote] = useState<string>('');

    useEffect(() => {
        if (notePressed === currentNote) {
            generateRandomNote();
        }
    }, [notePressed]);

    useEffect(() => {
        generateRandomNote();
    }, []);

    const generateRandomNote = () => {
        const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        setCurrentNote(randomNote);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.noteText}>{currentNote}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteText: {
        fontSize: 48,
        fontWeight: 'bold',
    },
});
