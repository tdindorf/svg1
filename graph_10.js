function setLiquidLevel() {

  var oY = {oY};		// ++ for graphs not starting at 0,0
  var oX = {oX};

	var rY = {rY};		// ++ scale range
	var rX = {rX};

	var Ymx = oY + rY;		// ++ scale max
	var Xmx = oX + rX;

	var Yinc = rY/5;		// ++ scale increments (default = 5 steps)
	var Xinc = rX/5;

	var Xmx_px = 200;		// ++ set graph size in px
	var Ymx_px = 200;

	var Ypx_unt = Ymx_px/rY;	// ++ set px scale  
	var Xpx_unt = Xmx_px/rX;

				// ++ draw and label axes
	for (var i=0; i<6; i++) {
	N = document.getElementById("Y_label_" + i);
  	N.setAttribute("x", 0); 			
  	N.setAttribute("y", - 40*i);		// *!*! 40 px per step hardcoded !*!*
  		N.textContent = oY + (i+0) * Yinc; // set Y scale values
	}

  	for (i=0; i<6; i++) {
	N = document.getElementById("X_label_" + i);
  	N.setAttribute("x", 40*i); 		// *!*! 40 px per step hardcoded !*!*		
  	N.setAttribute("y", 0);
  		N.textContent = oX + (i+0) * Xinc; // set X scale values
	}

				// ++ import data values ++

	var X1 = {X1};	// line form x-axis to x-max
	var X2 = Xmx;

	var Y1 = 0;
	var Y2 = Ymx;

				// ++ convert data values to px values (y = -y hardcoded)
	X1 = X1 * Xpx_unt; // * Xinc;
	X2 = X2 * Xpx_unt; //  * Xinc;

	Y1 = -Y1 * Ypx_unt; //  * Yinc;
	Y2 = -Y2 * Ypx_unt; //  * Yinc;

				// ++ draw coordinate lines and curves ++

	Y2_crd = document.getElementById("Y2_crd"); 
		Y2_crd.setAttributeNS(null,"d", "m 0 " + Y2 + " h " + X2);
	X2_crd = document.getElementById("X2_crd"); 
		X2_crd.setAttributeNS(null,"d", "m "+ X2 + " 0 v " + Y2);

	line_b = document.getElementById("line b"); 
		line_b.setAttributeNS(null,"d", "m " + 
		X1 + " " + Y1 + " L " + X2 + " " + Y2);
        }
