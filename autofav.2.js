/* Twitterアカウント2-  */
var twitter = require('twitter');

var client = new twitter({
    consumer_key: '9b7owmGEXIpzeXAj1bJLgUYTy',
    consumer_secret: 'SUXdgdxIf9k1PSTWGR9nlmCpM9U4x7I2s7RICcIB1rqFBMsiMr',
    access_token_key: '972736570368430081-2BrB4ekDAILq7LeQ5dl6oUHP3nLsbMW',
    access_token_secret: 'QoA2FlW6QPXn4tIVxQfpP3xzYoLvK01qJltJ98tL2gXUy'
});
var tag = 'チューバー.com';

client.stream( 'statuses/filter', { track : tag }, function( stream ) {
    stream.on( 'data', function( data ) {
        var tweetid = data.id_str;
        client.post('favorites/create',{id: tweetid},  function(error, tweet, response){
                      if(error) throw error;
                      console.log(response);
              });
        });
});
