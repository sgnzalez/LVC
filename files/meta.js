(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"a0e369eb243687e2cf9b07c985fe1baf-57.php":"￼Trata de la recuperación del primer amor.\n\n","366752ea6dd41a374b4fdabe0c602371-95.php":"￼Vuelve a tratar sobre la obsesión del amor.\n\n\n\n","ab91b8a7f3cb3d587c028dffa0ccacba-5.php":"￼Trata sobre la infidelidad.\n\n\n","c68b8b798ac905635852c4e2082895f6-11.php":"￼Trata sobre la indecisión y el miedo a decidir\n\n","46ec7e39f0d709e886ad554f0af33965-39.php":"￼Trata sobre el miedo a lo desconocido.\n\n","44737385810250412c41c1baaa10412c-74.php":"￼Trata de la vida misma cuando ya queda menos de ella.\n\n","85e4ae522ce05621f0dc207f7d75db7d-27.php":"￼Trata de como justificamos que nos hayan rechazado menospreciando y considerando inferior al menospreciador\n\n","3882a2214f810dd2fe52c02289dfa627-73.php":"￼Trata sobre la dificultad de tener demasiada empatía.\n\n","79f7ce44023af6f4a46eed0f97504631-54.php":"￼Trata sobre que el amor lleva a veces incorporado maldiciones.\n\n","48c7021330c78e1c8b7aed5410cc6a4d-85.php":"￼ Trata de cuando el amor se acaba sin saber porque\n\n","445fe82f999fbdbcc7759d185a31e85e-97.php":"￼Trata sobre el amor después de la muerte\n\n\n\n","811a177b3c37cbeeec74a026fb5f94a5-71.php":"￼Trata de lo desconocido, cotidiano pero desconocido.\n\n","1e5c6730fe864ec4783deaa5caa5ecb0-51.php":"￼Trata sobre esa maldición que es el alcoholismo.\n\n","6e930365cc30803cdd615b421469edc7-88.php":"￼Trata sobre la locura colectiva aplicable a lo que el lector prefiera.\n","dbd9f1091bbf50a53ef15b0f67cc6960-14.php":"￼Trata sobre la vacuidad de todas las religiones\n\n","12bed3d8c522ff0beac43394bb0d0e1e-7.php":"￼Trata sobre lo aleatorio y lo fugaz que es el existo en ocasiones\n\n","073a7e674795f682e9a8bf41a25c3893-6.php":"￼Trata sobre el amor.\n\n","475aea9cee996a71705b0353d6e148a3-69.php":"￼Trata de como una niña de doce años es enviada a trabajar sola a mil quilómetros de su casa.\n\n","697d5cf57962d6184e51844c7fd57a7e-58.php":"￼Trata de cierta variedad de caza.\n\n","5beca8c9cc8bcf4eea0a17ea7355a9da-12.php":"￼Trata sobre el miedo al otro, al diferente, al extranjero.\n\n","5f32f7f0cf2eb5cbe4f9a48f7b841d14-16.php":"￼Trata sobre lo horrible que es la soledad y mas en la vejez\n\n","0815dd529832d716bfd2df4cf3fdfa88-1.php":"￼Trata sobre la indiferencia ante el sufrir humano cuando se está en manada\n\n","6f9d8ad3b822776adad8f258dde467cf-93.php":"￼Trata de la simpleza de la vida.\n\n","c8a467d81d47f8b9b65276aaeccb8985-52.php":"￼Trata sobre la muerte del ser querido.\n\n","ef900a9eae2c98359724daab8e27f25d-72.php":"￼Trata del miedo.\n\n","ab8f3d18cf34f5189ea6ea3eda09c62e-81.php":"￼Trata de como la vida podría haber sido de otra manera y un pequeño detalle lo impide.\n\n","ffd078c088ab157e82836c7472ef9eaf-26.php":"￼Trata de esos objetivos que devienen en obsesión y luego en locura\n\n","a41906489204bd04cac74053329ba352-92.php":"￼Trata sobre la generosidad humana y como lograr estimularla.\n\n\n","d8feb4c7719b227a6075c59147d866eb-82.php":"￼Trata del desamor que hay después del amor\n\n","6cea7ad06582dfc7310b51565a255711-25.php":"￼Trata sobre los riesgos de vivir al límite.\n\n","a67df0326fb5a2e13d0c47a834d93492-96.php":"￼Trata sobre los misterios del pasado\n\n\n","9daac35586e90bb293e3b92e96bcc19d-23.php":"￼Trata de ese gran engañador que es nuestro propio cerebro\n\n","category-relatos-cortos.php":"A list of posts in category &ldquo;Relatos cortos&rdquo;","7b128e84bf812519e9d55422427b0159-20.php":"￼Trata de la manipulación y del desprecio hacia la dignidad de los seres que queremos\n\n","14299a67fdad64ffa8a6ec729af036bb-3.php":"￼Trata sobre la desgracia humana y su injustificada razón\n\n","7d82a541df86592308c94443898e5b0e-0.php":"￼Trata sobre el vacío y la tristeza\n\n","94e73ddcbd4f028a3b8f9a624f0913cc-78.php":"￼Trata de la relación entre ciertos empresarios y ciertos trabajadores.\n\n","2f1deff993ea1e536f9e81d316435602-28.php":"￼Trata sobre la parte amarga de la vida.\n\n","12da7217b71236dcf0def4ac20d47f74-59.php":"￼Trata de ciertos profesores\n\n","5e1ec6e59a41e3637fcc20720982e138-65.php":"￼Trata sobre el demonio y otras locuras.\n\n","b6708da4488658e2c5de6e2bab8746d6-31.php":"￼Trata sobre un primer encuentro de adolescentes.\n\n","ad2c128731352cbcc856eea4bb0072eb-79.php":"￼Trata de como la imaginación suple a la monótona vida\n\n","98a401bb1c8cc75f1ca91f1d1514c616-13.php":"￼Trata de esas cosas tan humanas como son el machismo, el miedo, la crueldad.\n\n","3ab1ab8ee0098dc13de88aac7d5c13d7-50.php":"￼Trata sobre el amor, siempre el amor.\n\n","e9659d7febf96a37719908d58110cad0-30.php":"￼Trata sobre la facilidad para encumbrar héroes aunque sean villanos.\n\n\n","0c47ed6f1e074df6ba8c4615233c00e3-83.php":"￼Trata de lo innecesario, cuando el amor acaba\n\n","2bb769feb20343f17d8ba3851db61def-60.php":"￼Trata, de nuevo, de la soledad en la vejez.\n\n","a3a6328a277beeb75f308d95050fe96e-76.php":"￼Trata de como las obsesiones pueden llegar a cambiar la vida de una persona\n\n","a210b7e4ec74aa948cf67a5933f5183c-45.php":"￼Trata sobre esos incidentes que suceden a veces.\n\n","category-cuentos.php":"A list of posts in category &ldquo;Cuentos&rdquo;","be742ed6760f9b7690ff20d808e8c09c-90.php":"￼Trata sobre la soledad y la hipocresía y el amor en sus diferentes facetas.\n","522a20d109f4e4a007c0fc4e035bed07-55.php":"￼Trata de que el amor suele ser un poliedro.\n\n","62265e1199027d72a32343c983a08ad0-21.php":"￼Trata de una historia real de violencia y de como es analizada por sus protagonistas.\n \n","42776a0a90bafdcd8992cb6ab8abfcb0-19.php":"￼Trata del desencanto hacia la política de aquellos que la habían usado como una herramienta de cambio\n\n","8ac48300ae89fd2608f7c55e598be0ce-49.php":"￼Trata sobre esas historias que pasaban en los colegios católicos.\n\n","62a1d84aefb963bab129b2530274927a-91.php":"￼Trata sobre las paranoias y la falta de adaptación a la tecnología.\n\n","850c298dc567b274feb485c6004d6b86-48.php":"Le quitaron la vivienda \ny no hice nada\nLe vi dormir en la calle \ny no hice nada\nLe despidieron de su trabajo \ny no hice nada\nDejó de poder ir al médi","08cf6384eeb6804db364da88a7535768-15.php":"￼Trata sobre la búsqueda del pasado y del miedo a recuperarlo.\n\n","58ff2ad8634b1fb6807729a45d30d423-8.php":"￼Trata sobre lo irracional del amor en todo el reino animal.\n\n","d56076a593cbe1ee29631c38ce7809e7-68.php":"￼Trata de la soledad y de la vejez\n\n","c31dcca7f853564e6194a2e045b65821-10.php":"￼Trata sobre la fugacidad de la vida\n\n","27bb1b7527837a338774fd77252a7908-38.php":"￼Trata de esas ocasiones en que lo que pasa a otros nos importa poco.\n\n","3dc71e8091861d56f0f05acddaa5bc3c-56.php":"￼Trata de la desesperación ante la pobreza.\n\n","874becf15e3fe4e8a065de44aa659caa-67.php":"￼Trata del miedo al cambio aunque el cambio se desee.\n\n","8636af0fd7123bc485a030feae7dce3e-24.php":"￼Trata sobre la mas que probable inexistencia de dios y de su contrario\n\n","5822e9f1ad6b06a39383920c735484bc-70.php":"￼Trata de que la solidaridad solo existe, muchas veces, para hablar de ella.\n\n","c8c134b85aae509699ac94f5d0638951-44.php":"￼Trata del recuerdo y del amor padre - hijo\n\n","f25613ab7401cf2cdf1cbf0bb3ebbc99-89.php":"￼Silencios y palabras\n<div style=\"text-align:justify\"><p style='line-height:120%;'>La vida está hecha mas de silencios que de palabras; éstas son much","2de317d8f6724b37f85e19a9ae04ab79-22.php":"￼Trata de la inocencia de la infancia y de las ilusiones perdidas\n\n","dea37c57b0f54896b32f5acb931d4faf-66.php":"￼Trata del amor por encima de otras cosas.\n\n","d688e47915b9abae6ea9d513f42015b1-18.php":"￼Trata nuevamente del cerebro y de como nos lleva, aparentemente de forma aleatoria, a través de muchos laberintos.\n\n","41328694df25a573bb1d57fc36315f85-75.php":"￼Trata del recuerdo que vuelve de igual manera que fue.\n\n","455840b353ae3843fe02bd4a1e47f0c8-36.php":"￼Trata sobre la adaptación de las personas.\n\n\n","ec185cac416b15b71543465f674e55d8-9.php":"￼Trata sobre l desamparo existente, de nuevo, en esta sociedad\n\n","f3cdc2e1d479795162cffea7af59612d-94.php":"￼Trata sobre la obsesión del amor y la muerte.\n\n\n","e7e764b35a1934e9ed239ce335186772-4.php":"￼Trata sobre esa horrible locura que es la esquizofrenia\n\n","312ea08cd29adfbdbb947d140ad39071-32.php":"￼Trata sobre la grandeza del universo y su inaccesibilidad\n\n\n","8176bd9e3112aca6604e506da56096cc-84.php":"￼Trata del miedo que tiene el otro, el diferente, el extranjero.\n\n","d91e36e4ea080cbdec7c2f3ac2c6354e-86.php":"￼Trata del amor mas allá del tiempo y de la vida\n\n","fadfc3e383b39ce6fd82ffc3a3a99e18-17.php":"￼Trata sobre el suicidio, esa muerte desconocida y silenciosa.\n\n"};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();