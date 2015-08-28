/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var InsightsTabComponent = require('./components/InsightsTab');
var SubscriptionsTabComponent = require('./components/SubscriptionsTab');
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
} = React;


var MyFirstApp = React.createClass({

  statics: {
    title: 'Shopifolks Homecards',
    description: 'Internal insights.',
  },

  displayName: 'Shopifolks Homecards',

  getInitialState: function() {
    return {
      selectedTab: 'subscriptionsTab'
    };
  },

  _renderContent: function(pageName: string) {
    if (pageName == 'insightsTab') {
      return <InsightsTabComponent />
    } else {
        return <SubscriptionsTabComponent />
    }
  },

  render: function() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="Subscriptions"
          selected={this.state.selectedTab === 'subscriptionsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'subscriptionsTab',
            });
          }}>
          {this._renderContent('subscriptionsTab')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Insights"
          selected={this.state.selectedTab === 'insightsTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'insightsTab',
            });
          }}>
          {this._renderContent('insightsTab')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

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

AppRegistry.registerComponent('MyFirstApp', () => MyFirstApp);
