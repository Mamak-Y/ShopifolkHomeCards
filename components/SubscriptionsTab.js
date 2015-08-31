/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  ScrollView,
  TabBarIOS,
  Component,
  PickerIOS,
} = React;

var PickerItemIOS = PickerIOS.Item;

var subscriptions = [
  {"name": "Dev Tools"},
  {"name": "Support"},
  {"name": "Finance Metrics"},
  {"name": "Marketing Metrics"},
  {"name": "Platform Metrics"},
];
  



class SubscriptionsTab extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  getInitialState() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(subscriptions),
      loaded: true,
      defaultItem: "Finance Metrics",
    });
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
    <PickerIOS
      selectedValue={this.state.defaultItem}
      onValueChange={this.subscriptionSelected.bind(this)}>
      {subscriptions.map(this.renderSubscriptionOption)}
    </PickerIOS>
    );
  }

  subscriptionSelected(selectedValue) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(subscriptions),
      loaded: true,
      defaultItem: selectedValue,  
    });
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading your subscriptions...
        </Text>
      </View>
    );
  }

  renderSubscriptionOption(subscription) {
    return (
      <PickerItemIOS
        key={subscription.name}
        value={subscription.name}
        label={subscription.name}
      />
    );
  }
  

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 20,
    marginRight: 8,
    height: 20,
  },
  listView: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 7,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  scrollView: {
    backgroundColor: '#6A85B1',
    height: 100,
  },
});

module.exports = SubscriptionsTab;
