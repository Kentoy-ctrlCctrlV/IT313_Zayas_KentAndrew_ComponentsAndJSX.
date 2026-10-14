import { StyleSheet, Text, View } from 'react-native';

export default function StudentCard({ name, course, units, isFullLoad }) {
	return (
		<View style={styles.card}>
			<View style={styles.studentInfo}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.details}>{course}  |  {units} units enrolled</Text>
			</View>
			{isFullLoad && <Text style={styles.fullLoad}>Full Load</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#FFFFFF',
		borderColor: '#DDE6DF',
		borderRadius: 12,
		borderWidth: 1,
		padding: 18,
		marginBottom: 12,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 12,
	},
	studentInfo: {
		flex: 1,
		gap: 6,
	},
	name: {
		color: '#18352B',
		fontSize: 17,
		fontWeight: '700',
	},
	details: {
		color: '#5E7066',
		fontSize: 14,
	},
	fullLoad: {
		color: '#FFFFFF',
		backgroundColor: '#2F7057',
		borderRadius: 6,
		overflow: 'hidden',
		paddingHorizontal: 10,
		paddingVertical: 6,
		fontSize: 12,
		fontWeight: '700',
	},
});
