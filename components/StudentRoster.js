import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import StudentCard from './StudentCard';

const students = [
	{ id: 's1', name: 'Ana Cruz', course: 'IT313', units: 21, isFullLoad: true },
	{ id: 's2', name: 'Bea Santos', course: 'IT313', units: 15, isFullLoad: false },
	{ id: 's3', name: 'Cid Ramos', course: 'IT313', units: 18, isFullLoad: true },
	{ id: 's4', name: 'Dex Alonzo', course: 'IT313', units: 12, isFullLoad: false },
];

export default function StudentRoster() {
	const [displayedStudents, setDisplayedStudents] = useState(students);

	function reverseRoster() {
		setDisplayedStudents((currentStudents) => [...currentStudents].reverse());
	}

	return (
		<ScrollView contentContainerStyle={styles.content}>
			<View style={styles.heading}>
				<Text style={styles.eyebrow}>MOBILE PROGRAMMING LAB 04</Text>
				<Text style={styles.title}>IT313 Student Roster</Text>
				<Text style={styles.subtitle}>
					{students.length} students are enrolled in IT313 this semester.
				</Text>
			</View>

			<View style={styles.listHeading}>
				<Text style={styles.sectionTitle}>Class roster</Text>
				<Text style={styles.count}>{students.length} students</Text>
			</View>

			<View style={styles.cards}>
				{displayedStudents.map((student) => (
					// For the key experiment, add an index parameter and temporarily change this to key={index}.
					<StudentCard
						key={student.id}
						name={student.name}
						course={student.course}
						units={student.units}
						isFullLoad={student.isFullLoad}
					/>
				))}
			</View>

			<Pressable
				accessibilityRole="button"
				onPress={reverseRoster}
				style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
				<Text style={styles.buttonText}>Reverse Roster</Text>
			</Pressable>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	content: {
		flexGrow: 1,
		paddingHorizontal: 22,
		paddingTop: 34,
		paddingBottom: 30,
		backgroundColor: '#F3F6F1',
	},
	heading: {
		marginBottom: 32,
	},
	eyebrow: {
		color: '#47745D',
		fontSize: 11,
		fontWeight: '800',
		letterSpacing: 1,
		marginBottom: 10,
	},
	title: {
		color: '#18352B',
		fontSize: 29,
		lineHeight: 35,
		fontWeight: '800',
		marginBottom: 8,
	},
	subtitle: {
		color: '#5E7066',
		fontSize: 15,
		lineHeight: 22,
	},
	listHeading: {
		flexDirection: 'row',
		alignItems: 'baseline',
		justifyContent: 'space-between',
		marginBottom: 14,
	},
	sectionTitle: {
		color: '#18352B',
		fontSize: 19,
		fontWeight: '700',
	},
	count: {
		color: '#687A70',
		fontSize: 13,
	},
	cards: {
		marginBottom: 8,
	},
	button: {
		minHeight: 52,
		backgroundColor: '#245D45',
		borderRadius: 10,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: 18,
	},
	buttonPressed: {
		opacity: 0.82,
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 15,
		fontWeight: '700',
	},
});
