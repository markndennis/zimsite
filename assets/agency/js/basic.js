<!doctype html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!--> <html lang="en"> <!--<![endif]-->
<head>
<meta name="viewport" content="width = 1050, user-scalable = no" />
  <!-- default width is 1050 -->
<script type="text/javascript" src="../../extras/jquery.min.1.7.js"></script>
<script type="text/javascript" src="../../extras/modernizr.2.5.3.min.js"></script>
</head>
<body>

<div class="flipbook-viewport">
	<div class="container">
		<div class="flipbook">
			<div style="background-image:url(pages/Champions_of_Hara_001.png)"></div>
			<div style="background-image:url(pages/Champions_of_Hara_002.png)"></div>
			<div style="background-image:url(pages/Champions_of_Hara_003.png)"></div>
			<div style="background-image:url(pages/Champions_of_Hara_004.png)"></div>
			<div style="background-image:url(pages/Champions_of_Hara_005.png)"></div>
			<div style="background-image:url(pages/Champions_of_Hara_006.png)"></div>
			<div style="background-image:url(pages/Champions_of_Hara_007.png)"></div>
		</div>
	</div>
</div>


<script type="text/javascript">

function loadApp() {

	// Create the flipbook

	$('.flipbook').turn({
			// Width

			width:1384,
			
			// Height

			height:800,

			// Elevation

			elevation: 50,
			
			// Enable gradients

			gradients: true,
			
			// Auto center this flipbook

			autoCenter: true
     
         
	});
  
}

  
// Load the HTML4 version if there's not CSS transform

yepnope({
	test : Modernizr.csstransforms,
	yep: ['js/turn.min.js'],
	nope: ['js/turn.html4.min.js'],
	both: ['css/basic.css'],
	complete: loadApp
});

</script>

</body>
</html>