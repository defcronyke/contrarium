function ContrariumSearch($scope, $http, search_text) {
    
    var words = search_text.split(' ');
    var antonyms = [];
    
    // Get antonyms
    (function lookupWord(i) {
    
        if (i >= words.length) {
        
            var search_terms = antonyms.join(' ');
            $scope.search_terms = 'Searching for: ' + search_terms;
            
            var google_search_terms = antonyms.join('+');
            
            var req = {
                method: 'GET',
                url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBBpQSa9YnyVZEn1dKUiG4YJx5KP9t2sN0&cx=008696593733086013386:hjbcz6in3hi&q=' + google_search_terms
            };
            
            $http(req).
            
            success(function(data, status) {
                //console.log(data);
                $scope.search_results = data;
            }).
            
            error(function(data, status) {
                console.log('Google search error: ' + data + ' : ' + status);
            });
            
            return;
        }
    
        var req = {
            method: 'GET',
            url: 'http://words.bighugelabs.com/api/2/4b45c02053c4b3c176ac139948771983/'+ words[i] +'/json'
        };

        $http(req).

        success(function(data, status) {
            
            for (var idx in data) {
            
                var item = data[idx];
            
                if (item.ant) {
                    antonyms.push(item.ant[0]);
                    break;
                } else {
                    antonyms.push(words[i]);
                    break;
                }
            
            }
            lookupWord(i+1);
        }).

        error(function(data, status) {

            antonyms.push(words[i]);
            lookupWord(i+1);
        });
    })(0);
};

