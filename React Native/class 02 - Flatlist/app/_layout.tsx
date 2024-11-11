import Post from "@/components/Post";
import { View, Text, ScrollView, TouchableOpacity, FlatList } from "react-native";

export default function RootLayout() {
  const fruits = ['apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes', 'apple', 'banana', 'mango', 'grapes'];
  const posts = [
    {
      id: "0",
      title: 'Hello World',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "1",
      title: 'Hello Mars',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "2",
      title: 'Hello Pluto',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "3",
      title: 'Hello Jupitor',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    },
    {
      id: "4",
      title: 'Hello Venus',
      content: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ',
      img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80"
    }
  ];

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => { console.log('Hello World') }}>
        <Text style={{ fontSize: 90 }}>Hello World</Text>
      </TouchableOpacity>

      {/* {fruits.map((fruit, index) => (
        <View key={index}>
          <Text style={{ fontSize: 50 }}>{fruit}</Text>
        </View>
      ))} */}

      {/* <FlatList
        data={fruits}
        renderItem={({ item }) => (
          <View>
            <Text style={{ fontSize: 50 }}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => item + index}
      /> */}

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            content={item.content}
            url={item.img}
          />
        )}
        keyExtractor={({ id }) => id}
      />

    </ScrollView >
  )
}
