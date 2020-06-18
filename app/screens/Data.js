import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

const Data = () => {
    return(
        <ScrollView style = {styles.container}>
            <Text>DATA</Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    }
}
)

export default Data;
