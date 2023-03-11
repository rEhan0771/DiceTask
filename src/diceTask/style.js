import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5'
    },

    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    inputStyle: {
        width: '80%',
        height: 40,
        borderRadius: 10,
        paddingLeft:10,
        backgroundColor: 'white'
    },
    sortContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 10,
        marginTop: 20
    },
    sortImg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 40,
        backgroundColor: 'white'
    },
    img: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    pressContainer: {
        flexDirection: 'row',
        height: 40,
        paddingLeft: 5,
        backgroundColor: '#136e01',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 10
    },
    flatlistStyle: {
        marginTop: 20,
        marginBottom: 20
    },
    cardContainer: {
        width: '90%',
        elevation: 5,
        borderRadius: 5,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 10,
        paddingBottom: 10
    },
    dateStyle: {
        fontSize: 12
    }
});

export default styles;