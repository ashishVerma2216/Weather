import { Image, Text, View } from "react-native";
import React from "react";
import moment from "moment-timezone";
import { iconUri, texts } from "../constants/constants";
import { styles } from "./styles";

export default function WeatherList({ list }: any) {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.listHeading}>{texts.forcastHeading}</Text>
      {list?.map((item: any, index: number) => {
        return (
          <View
            key={index.toString()}
            style={[
              styles.itemContainer,
              // eslint-disable-next-line react-native/no-inline-styles
              { borderBottomWidth: index < list?.length - 1 ? 0.5 : 0 },
            ]}
          >
            <View style={styles.listSubContainer}>
              <Text>{moment(item?.dt).format("MMM D")}</Text>
              <Image
                style={styles.iconStyle}
                source={{
                  uri: `${iconUri}${item?.weather?.[0]?.icon}.png`,
                }}
              />
              <View style={styles.text}>
                <Text>Min : {item?.temp?.min}° C</Text>
                <Text>Max : {item?.temp?.max}° C</Text>
              </View>
            </View>
            <Text>{item?.summary}</Text>
          </View>
        );
      })}
    </View>
  );
}
