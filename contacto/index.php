<?php
	// Start session.
	session_start();
	
	// Set a key, checked in mailer, prevents against spammers trying to hijack the mailer.
	$security_token = $_SESSION['security_token'] = uniqid(rand());
	
	if ( ! isset($_SESSION['formMessage'])) {
		$_SESSION['formMessage'] = 'Rellena este formulario para enviar un mensaje.<br />Los campos marcados con * son necesarios.';	
	}
	
	if ( ! isset($_SESSION['formFooter'])) {
		$_SESSION['formFooter'] = '';
	}
	
	if ( ! isset($_SESSION['form'])) {
		$_SESSION['form'] = array();
	}
	
	function check($field, $type = '', $value = '') {
		$string = "";
		if (isset($_SESSION['form'][$field])) {
			switch($type) {
				case 'checkbox':
					$string = 'checked="checked"';
					break;
				case 'radio':
					if($_SESSION['form'][$field] === $value) {
						$string = 'checked="checked"';
					}
					break;
				case 'select':
					if($_SESSION['form'][$field] === $value) {
						$string = 'selected="selected"';
					}
					break;
				default:
					$string = $_SESSION['form'][$field];
			}
		}
		return $string;
	}
?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es">
	<head>
		
<!-- Start of StatCounter Code for Freewebs -->
<script type="text/javascript">
var sc_project=7648838; 
var sc_invisible=1; 
var sc_security="06352044"; 
</script>
<script type="text/javascript"
src="http://www.statcounter.com/counter/counter.js"></script>
<noscript><div class="statcounter"><a title="free analytics
for godaddy"
href="http://statcounter.com/godaddy_website_tonight/"
target="_blank"><img class="statcounter"
src="http://c.statcounter.com/7648838/0/06352044/1/"
alt="free analytics for godaddy"></a></div></noscript>
<!-- End of StatCounter Code for Freewebs -->

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="Author" content="Salvador Gonzalez" />
		<meta name="Description" content="Cuentos creativos y nihilistas" />
		<meta name="keywords" content="cuentos, narraciones, narrativa, ateneu, amor, muerte, indignados" />
		<meta name="robots" content="index, follow" />
		<link rel="apple-touch-icon" sizes="180x180" href="https://www.lavacachata.es/resources/apple-touch-icon.png" />
<link rel="icon" type="image/x-icon" href="https://www.lavacachata.es/resources/favicon.ico" sizes="64x64" />

	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Foprmulario para enviarme un mail">
	<meta name="twitter:url" content="https://www.lavacachata.es/contacto/index.php">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="La Vaca Chata">
	<meta property="og:title" content="Foprmulario para enviarme un mail">
	<meta property="og:url" content="https://www.lavacachata.es/contacto/index.php">
		<title>Foprmulario para enviarme un mail</title>
		<link rel="stylesheet" type="text/css" media="all" href="../rw_common/themes/bionicle14/consolidated.css" />
		
		
		
		
		
		
		<script type="text/javascript" src="../rw_common/themes/bionicle14/javascript.js"></script>
		

<script type="text/javascript" src="../rw_common/themes/bionicle14/css/mediabox/js/mootools.js"></script>
<script type="text/javascript" src="../rw_common/themes/bionicle14/css/mediabox/js/swfobject.js"></script>
<script type="text/javascript" src="../rw_common/themes/bionicle14/css/mediabox/js/mediabox67.js"></script>


		</style>
		
		
	</head>
	<body>
		<div id="screenBadge"><img src="../rw_common/images/lvc gris.jpg" width="650" height="70" alt="El logo es la cabeza de una vaca"/></div>
		<div id="topContainer">
			<div id="primaryNavigation"><!-- Start Navigation -->
				<ul><li><a href="../" rel="">Cuentos cortos</a></li><li><a href="../fotos/" rel="">Fotos</a></li><li><a href="../code/" rel="">Subscripción</a></li></ul>
			
</div><!-- End navigation -->
		</div>

		<div id="gecko"></div>
		<div class="break"></div>
		<div id="container">
			<div id="mediaFrame">
				<div id="flashBox">
					<!-- Insert flash content here -->
					<div id="siteSlogan">
						<div id="siteSloganLogo"><img src="../rw_common/images/lvc gris.jpg" width="650" height="70" alt="El logo es la cabeza de una vaca"/></div>
						<h2>Cuentos cortos imaginativos y nihilistas</h2>
					</div>
					<div id="pageHeader"><!-- Start page header -->
						<div id="headerLogo"><img src="../rw_common/images/lvc gris.jpg" width="650" height="70" alt="El logo es la cabeza de una vaca"/></div>
						<h1>La Vaca Chata</h1>
					</div><!-- End page header -->
				</div>
			</div>
			<div id="sidebarContainer"><!-- Start Sidebar wrapper -->
				<div class="sideHeader">
					<div id="sidebarLogo"><img src="../rw_common/images/lvc gris.jpg" width="650" height="70" alt="El logo es la cabeza de una vaca"/></div>
					
				</div><!-- Sidebar header -->
				<div id="sidebar"><!-- Start sidebar content -->
					<span style="color:#535353;"><br /><a href="http://www.blogarama.com/arts-and-entertainment-blogs/243017-blog/" target="_blank"><img src="http://www.blogarama.com/images/button_sm_2.gif" alt="Follow me on Blogarama" /></a></span> <br /><!-- sidebar content you enter in the page inspector -->
				</div><!-- End sidebar content -->
				<div id="navigationContainer">
					<div class="secondaryNavigation"><!-- Start Navigation -->
						<ul><li><a href="../" rel="">Cuentos cortos</a></li><li><a href="../fotos/" rel="">Fotos</a></li><li><a href="../code/" rel="">Subscripción</a></li></ul>
					</div><!-- End navigation -->
				</div>
				<div id="dynamicSidebar">
					 <!-- sidebar content such as the blog archive links -->
				</div><!-- End sidebar content -->
			</div><!-- End sidebar wrapper -->
			<div id="contentContainer"><!-- Start main content wrapper -->
				<div id="content"><!-- Start content -->
					
<div class="message-text"><?php echo $_SESSION['formMessage']; unset($_SESSION['formMessage']); ?></div><br />

<form class="rw-contact-form" action="./files/mailer.php" method="post" enctype="multipart/form-data">
	 <div>
		<label>Nombre:</label> <br />
		<input class="form-input-field" type="text" value="<?php echo check('element0'); ?>" name="form[element0]" size="40"/><br /><br />

		<label>Correo:</label> *<br />
		<input class="form-input-field" type="text" value="<?php echo check('element1'); ?>" name="form[element1]" size="40"/><br /><br />

		<label>Mensaje:</label> *<br />
		<textarea class="form-input-field" name="form[element2]" rows="8" cols="38"><?php echo check('element2'); ?></textarea><br /><br />

		<div style="display: none;">
			<label>Spam Protection: Please don't fill this in:</label>
			<textarea name="comment" rows="1" cols="1"></textarea>
		</div>
		<input type="hidden" name="form_token" value="<?php echo $security_token; ?>" />
		<input class="form-input-button" type="reset" name="resetButton" value="Anular" />
		<input class="form-input-button" type="submit" name="submitButton" value="Enviar" />
	</div>
</form>

<br />
<div class="form-footer"><?php echo $_SESSION['formFooter']; unset($_SESSION['formFooter']); ?></div><br />

<?php unset($_SESSION['form']); ?>

				</div><!-- End content -->
			</div><!-- End main content wrapper -->
			<div class="clearer"></div>
			<div id="footer"><!-- Start Footer -->
				<div id="footerLogo"><img src="../rw_common/images/lvc gris.jpg" width="650" height="70" alt="El logo es la cabeza de una vaca"/></div>
				<div id="breadcrumbcontainer"><!-- Start the breadcrumb wrapper -->
					<ul><li><a href="../">Cuentos cortos</a>&nbsp;-</li><li><a href="./">Contacto</a>&nbsp;-</li></ul>
				</div><!-- End breadcrumb -->
				<div class="lastPublished">6/10/25</div>
				
			</div><!-- End Footer -->
		</div><!--End of Main Container-->
	<rapidweaver-badge url="https://www.realmacsoftware.com" position-x="left" position-y="bottom" transition="slide" delay-type="time" delay="1000" mode="auto" target="_blank"><img src= "../rw_common/assets/RWBadge.png" alt="" /><p>Made in RapidWeaver</p></rapidweaver-badge>
<script src="../rw_common/assets/rw-badge.js"></script>
<!-- Global Site Tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-29311256-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'UA-29311256-1');
</script>


</body>
</html>
