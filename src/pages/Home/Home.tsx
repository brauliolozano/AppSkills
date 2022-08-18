import React, { useState, useEffect } from 'react';  //useStandard
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    TextInput, 
    Platform,
    FlatList
} from 'react-native';
import { Button } from './components/Button';
import { SkillCard } from './components/SkillCard';

interface skillData {
    id: string;
    name: string;
}
export function Home(){
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<skillData[]>([]);
    const [greeting, setGretting] = useState('');

    function handleAddNewSkill(){
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        
        setMySkills(oldState => [...oldState, data]);
    }

    function handleRemoveSkill(id: string){
        setMySkills(oldstate => oldstate.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {
        const currentHour = new Date().getHours();

        if(currentHour < 12){ setGretting('Good morning');}
        else if(currentHour >= 12 && currentHour < 18){
            setGretting('Good afternoon');}
        else if(currentHour >=18 && currentHour < 20) { setGretting('Good evening');}
        else { setGretting('Good night');}
    }, [])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Braulio Lozano, Developer</Text>
            <TextInput  
            style={styles.input}
            placeholder="New skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
            />
        
        <Text style={styles.greetings}>
            { greeting }
        </Text>

        <Button 
            title='Add'
            onPress={handleAddNewSkill} 
            
        />
        
        <Text style={[styles.title, { marginVertical: 50}]}>
            My Skills
        </Text> 

        
        <FlatList 
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <SkillCard 
                skill={item.name}
                onPress={() => handleRemoveSkill(item.id)}
                />
            )}
        />

        </View>     
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 18,
        padding: Platform.OS == 'ios' ? 15 : 10,
        matginTop: 30,
        borderRadius: 8
    },
    greetings: {
        color: '#fff'
    }
});