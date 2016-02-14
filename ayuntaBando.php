<?php 
include('assets/inc/top.inc');
include('assets/inc/nav.inc');
 ?>

<!-- Encabezado Bando Municipal -->
				<header id="header">
					<div class="logo container">
						<div>
							<h1><a href="#" id="logo">Bando Municipal</a></h1>
						</div>
					</div>
				</header>
<!-- Cuadro Bando Municipal -->			

<!-- Cuadro PDF -->		
				<object data="pdf/BANDO.pdf" type="application/pdf" width='100%' height='880'></object>
<!-- Cuadro PDF -->			
				<?php 
 // Creamos array de móviles  
 $mobiles = array("iPhone","iPod");  
  
 foreach( $mobiles as $mobiles ) {  
   if( preg_match('#'.$mobile.'#i',$_SERVER['HTTP_USER_AGENT'])){  
// Si da 'true' redigirimos el contenido  
  	header('Location:pdf/BANDO.pdf');  
        exit();  
     
   } else{
   
   } 
  }  

				 ?>
				 
<?php 

include("assets/inc/footer.inc");

 ?>