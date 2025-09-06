import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren} from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


type Props = PropsWithChildren<{
  isVisible?: boolean;
  onClose?: () => void;
}>

export default function EmojiPicker({ isVisible, onClose, children }: Props) {
  return (
    <View>
      <Modal visible={isVisible} transparent={true} animationType="slide">
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title} >Choose A sticker</Text>
            <Pressable>
              <MaterialIcons name="close" size={22} color="#ffffffff" onPress={onClose}/>
            </Pressable>
          </View>
           {children}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContent: {
    height: '45%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
})