import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}

const TodoScreen = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now().toString(), text: newTodo, done: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo))
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="New todo"
      />
      <Button title="Add todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Text style={item.done ? styles.done : null} onPress={() => handleToggleTodo(item.id)}>
            {item.text}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 20, padding: 10, borderColor: 'gray', borderWidth: 1 },
  done: { textDecorationLine: 'line-through' },
});

export default TodoScreen;
