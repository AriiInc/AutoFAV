/* Twitterアカウント1  */
var twitter = require('twitter');

var client = new twitter({
    consumer_key: 'AgAaPuj87WSMVZWfliq3dLemT',
    consumer_secret: 'A4q1KVyZXEMasT4MwgShmRDFu7nosZGbhwG8U5UhSTjC9iMS3p',
    access_token_key: '976945846507003905-mAiS2CD1FKUGOwEckaTPUVm3Ubz35it',
    access_token_secret: 'wTei1IDhGy1aENJEtmZkqAuhoCTBvK0MYwGuoa4nX2qG6'
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
