import { useState } from 'react';

import{ View, Text, TextInput, TouchableOpacity, 
    styleSheet, Alert } from 'react-native';

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrarUsuario() {
        try {
            const resposta = 
            await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, senha }),
            });
            
            const dados = await resposta.json();

            Alert.alert(dados.mensagem);
        
            setNome('');
            setEmail('');
            setSenha('');
    } catch (erro) {
        Alert.alert('Erro ao cadastrar usuário');
    }
}

}