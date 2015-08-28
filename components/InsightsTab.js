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


var insights_dict = {
  "id1" : {
    "id": "id1",
    "title":"Github activities",
    "message": "You committed 10 PRs in the last week, this is more than your average weekly commits (8)",
    "category": "Github",
    "vote": 10
  }, 
  "id1" : {
    "id": "id1",
    "title":"Github activities",
    "message": "You committed 10 PRs in the last week, this is more than your average weekly commits (8)",
    "category": "Support",
    "vote": 10
  }, 
  "id2": {
    "id": "id2",
    "title":"Finance boring metrics",
    "message": "message2",
    "category": "Key Metrics",
    "vote": 10
  }
}


class InsightsTab extends Component{
  constructor(props) {
    super(props);
    this.state = {
      dataSource: insights_dict,
      loaded: false,
      voteUpdated: false,
    };
  }

  getInitialState() {
    return {
      dataSource: insights_dict,
      loaded: false,
      voteUpdated: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
        dataSource: insights_dict,
        loaded: true,
        voteUpdated: false,
      })
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    var insights = Object.keys(insights_dict).map(function(key){
      return insights_dict[key];
    });

    return (
      <ScrollView
        onScroll={() => { console.log('onScroll!'); }}
        style={styles.ScrollView}>
        {insights.map(this.renderInsight.bind(this))}
      </ScrollView>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading your insights...
        </Text>
      </View>
    );
  }

  renderInsight(insight) {
    if (insight.vote >= 0) {
      return (
        <View style={styles.container}>
          {this.renderButton(true, insight.id)}
          {this.renderButton(false, insight.id)}
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{insight.title}</Text>
            <Text style={styles.year}>{insight.message}</Text>
            <Text style={styles.year}>{insight.vote}</Text>
          </View>
        </View>
      );
    }
  }

  renderButton(display_thumbs_up, insight_id) {
    var icon = display_thumbs_up ? require('image!thumbsup') : require('image!thumbsdown');
    return (
      <TouchableHighlight underlayColor='transparent' onPress={this.onInsightVote.bind(this, insight_id, display_thumbs_up)}>
          <Image
            source={icon}
            style={styles.thumbnail}
          />
      </TouchableHighlight>
    );
  }

  onInsightVote(insight_id, is_thumbs_up) {
    var vote_adjustment = is_thumbs_up ? 1 : -1;
    insights_dict[insight_id].vote += vote_adjustment;
    this.setState({
        dataSource: insights_dict,
        loaded: true,
        voteUpdated: true
      });
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

module.exports = InsightsTab;
