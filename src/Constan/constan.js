import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const _width = 428;
const _height = 813;
//ponsel
//tab >600
//web >800

const sizes = size => screenWidth * (size / _width);

export {sizes};
