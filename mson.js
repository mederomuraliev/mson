(function() {

    var 
        // current character in loop
        char

        // current token ( string, array, object )
        , token

        // map of types
        , typesMap = {
            'object' : '{}',
            'array'  : '[]',
            'whitespace' : '\n\s\t',
            'stringdelimiter' : '\'"'
        }
        , log = function( msg ) {
            if ( window.console && console.log ) {
                console.log.apply( console, arguments );
            }
        }
        ;

    function parse ( data ) {
        var
            // data counter
            i = 0

            // length of json string
            , l = data.length
            ;

        for ( ; i<l; ++i ) {
            char = data[i];

            temp = findToken( char );
            log(i)
            log( temp )

            if ( !token ) {
                if ( temp !== 'whitespace' && temp !== 'object' ) {
                    throw new SyntaxError( 'Unexpected token' );
                } else {
                    token = temp
                }
            } 
        }
        return 'returned';
    }

    function findToken ( c ) {
        var type;

        for ( var prop in typesMap ) {
            if ( typesMap.hasOwnProperty( prop ) ) {
                if ( typesMap[prop].indexOf( c ) != -1 ) {
                    type = prop
                    return type
                }
            }
        }

        if ( !token ) {
            type = 'string'
            return type
        }
    }

    window.mson = parse;
    window.findToken = findToken;
    window.typesMap = typesMap;

})();
