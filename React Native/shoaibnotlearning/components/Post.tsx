import { View, Text, Image } from "react-native";

export default function Post({ title, content, url }) {
    return (
        <View>
            <Text style={{ fontSize: 50 }}>{title}</Text>
            <Text style={{ fontSize: 35 }}>{content}</Text>
            <Image
                source={{
                    uri: url,
                }}
                style={{ 
                    width: 370, 
                    height: 200,
                    resizeMode: "stretch"
                 }}
            />
        </View>
    )
}