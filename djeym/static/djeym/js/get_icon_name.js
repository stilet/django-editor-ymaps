/*
* Get Icon name.
*/

$( document ).ready( function() {
  "use strict";

  $( "#id_svg" ).on( "change", function() {
    let img = $( this )[ 0 ].files[ 0 ];
    let imgName = img.name.split( "." ).slice( 0, -1 ).join( "." );
    $( "#id_title" ).val( imgName );
  } );
} );
