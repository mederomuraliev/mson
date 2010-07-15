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
            log( temp )

            if ( !token ) {
                if ( temp !== 'whitespace' || temp !== 'object' ) {
                    throw new SyntaxError( 'Unexpected token' );
                }
            }
        }
    }

    function findToken ( c ) {
        var type;
        if ( !token ) {
            for ( var prop in typesMap ) {
                if ( typesMap.hasOwnProperty( prop ) ) {
                    log( typesMap[prop] )
                    if ( typesMap[prop].indexOf( c ) != -1 ) {
                        type = prop
                    } else {
                        type = 'string'
                    }

                    log ( type )
                }
            }
            return type
        }
    }

    window.mson = parse;
    window.findToken = findToken;

})();
