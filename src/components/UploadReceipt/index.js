import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UploadReceipt = ({
  handleReceiptUpload,
  isParsingReceipt = false,
  receiptItems = [],
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Upload Receipt</Text>
    <TouchableOpacity
      style={styles.uploadButton}
      onPress={handleReceiptUpload}
    >
      <Text style={styles.uploadButtonText}>Select Receipt Image</Text>
    </TouchableOpacity>

    {isParsingReceipt && <Text style={styles.parsingText}>Parsing receipt...</Text>}

    {receiptItems.length > 0 && (
      <View style={styles.itemsContainer}>
        <Text style={styles.itemsTitle}>Detected Items:</Text>
        <FlatList
          data={receiptItems}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          )}
        />
      </View>
    )}
  </View>
);

UploadReceipt.propTypes = {
  handleReceiptUpload: PropTypes.func.isRequired,
  isParsingReceipt: PropTypes.bool,
  receiptItems: PropTypes.array,
};

UploadReceipt.defaultProps = {
  isParsingReceipt: false,
  receiptItems: [],
};

export default UploadReceipt;
