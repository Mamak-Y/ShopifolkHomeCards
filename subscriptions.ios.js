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
} = React;


var subscriptions = [
  "Dev Tools",
  "Support",
  "Finance Metrics",
  "Marketing Metrics"
  "Platform Metrics"
]
  



class SubscriptionsTab extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: subscriptions,
      loaded: false,
    };
  }

  getInitialState() {
    return {
      dataSource: subscriptions,
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
        dataSource: subscriptions,
        loaded: true,
      })
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderSubscription}
      />
    );
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

  renderSubscription(subscription) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{subscription}</Text>
        </View>
      );
    }
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
