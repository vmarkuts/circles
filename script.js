		for (var i = 0; i < circlesNumber; i++) {
			circles[i] = drawCircle(x,y);
			for (var j = 0; j < circlesNumber; j++) {
				circles[j] = drawCircle(x,y);
				y+=change;
			}
			y = 0;
			x+=change;
		}

		function drawCircle(xCord, yCord) {
			cirlce = new Path.Circle(new Point(xCord, yCord), r);
			cirlce.fillColor = 'purple';
			return cirlce;
		}
