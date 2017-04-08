/**
 * @author mrdoob / http://mrdoob.com/
 */

Menubar.Examples = function ( editor ) {

	var container = new UI.Panel();
	container.setClass( 'menu' );

	var title = new UI.Panel();
	title.setClass( 'title' );
	title.setTextContent( 'Examples' );
	container.add( title );

	var options = new UI.Panel();
	options.setClass( 'options' );
	container.add( options );

	// Examples

	var items = [
		{ title: 'サンプル', file: 'japanfirst.app.json' },
	{ title: 'ブロックくずし', file: 'arkanoid.app.json' },
		{ title: 'カメラぐるぐる', file: 'camera.app.json' },
		{ title: '粒子', file: 'particles.app.json' },
		{ title: 'ピンポン', file: 'pong.app.json' },
		{ title: 'シェーダー', file: 'shaders.app.json' }
	];

	var loader = new THREE.FileLoader();

	for ( var i = 0; i < items.length; i ++ ) {

		( function ( i ) {

			var item = items[ i ];

			var option = new UI.Row();
			option.setClass( 'option' );
			option.setTextContent( item.title );
			option.onClick( function () {

				if ( confirm( _('Any unsaved data will be lost. Are you sure?' ) ) ) {

					loader.load( 'examples/' + item.file, function ( text ) {

						editor.clear();
						editor.fromJSON( JSON.parse( text ) );

					} );

				}

			} );
			options.add( option );

		} )( i )

	}

	return container;

};
