import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';

export default function HomeScreen() {
  const { colors } = useTheme();

  return (
    <ScrollView 
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={styles.container}
    >
      <Text style={[styles.sectionTitle, { color: colors.text }]}>Variantes de Botón</Text>
      <CustomButton title='Botón Primario' onPress={() => {}} variant='primary' />
      <CustomButton title='Botón Secundario' onPress={() => {}} variant='secondary' />
      <CustomButton title='Botón Terciario' onPress={() => {}} variant='tertiary' />

      <Text style={[styles.sectionTitle, { color: colors.text }]}>Tarjetas</Text>
      <Card 
        title='Notificaciones' 
        icon='notifications' 
        description='Revisa tus alertas y mensajes recientes.' 
      />
      <Card 
        title='Actividad' 
        icon='pulse' 
        description='Consulta tu historial de actividad reciente.' 
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, paddingBottom: 40 },
  sectionTitle: { fontSize: 20, fontWeight: '700', marginTop: 24, marginBottom: 12 },
});