window.onload = function()	{
	
	var boxArray = [document.getElementById('box1'),document.getElementById('box2'),document.getElementById('box3'),document.getElementById('box4'),document.getElementById('box5'),document.getElementById('box6')];
	var centerToRight = 446;
	var leftToCenter = 456;
	
	var currentBox = 0;
	var nextBox = 1;
	var readyToGo = true;
	

	
	document.getElementById('forwardButton').onclick = function(e)	{
		if (readyToGo == true)	{
			readyToGo = false;
			moveRight();
		}	else	{
			e.preventDefault();
		}
		
	}
	
	/*function stopMoveRight(elem)	{
		elem.preventDefault();
	}*/
	
	//stop1 and stop is the function to clear the setInterval that I'm using.firstInterval repeatedly adds to the leftOne variable and appends its value to the left property of the box I want to move(currentBox)
	//it does that until it reaches a limit(the absolute amount of pixels it takes to traverse the space from center to right,calculated by counter variable)and calls the stop function.
	function moveRight()	{
		//Start: part of function for moving currentBox right.
		
		//getLeft1 gets the string version of the left property and leftOne turns it into an integer to be manipulated and applied.
		var getLeft1 = window.getComputedStyle(boxArray[currentBox],null).getPropertyValue("left");
		var leftOne = parseInt(getLeft1);
		var counter1 = 0;
		
		//stops setInterval,resets counter,resets imitation left property
		function stop1()	{
			clearInterval(firstInterval);
			counter1 = 0;
			boxArray[currentBox].style.left = leftOne - 902 + "px";
			leftOne = 0;
		}
		
		//This is where we actually move the box.
		var firstInterval = window.setInterval(function()	{
			boxArray[currentBox].style.left = leftOne + "px";
			leftOne++;
			counter1++;
			if (counter1 == 447)	{
				stop1();
			};
		},1);
		//End: part of function for moving currentBox right
		
		//Start: part of function for moving nextBox right
		
		//getLeft2 gets the string version of the left property and leftTwo turns it into an integer to be manipulated and applied..
		var getLeft2 = window.getComputedStyle(boxArray[nextBox],null).getPropertyValue("left");
		var leftTwo = parseInt(getLeft2);
		var counter2 = 0;
		
		function stop2()	{
			clearInterval(secondInterval);
			counter2 = 0;
			leftTwo = 0;
			readyToGo = true;
			findNext();
		}
		
		var secondInterval = window.setInterval(function()	{
			boxArray[nextBox].style.left = leftTwo + "px";
			leftTwo++;
			counter2++;
			if (counter2 == 456)	{
				stop2();
			}
		},1);
		
		//End: part of function for moving nextBox right
		
	}
	
	//This adds to the 'current' box and the 'next' box counters.
	function findNext()	{
	//currentBox takes an initial value of zero and keeps on increasing it 'till it reaches 4,it then restarts to zero where it will hide the blue box as its one-ahead friend nextBox show red 
		if (currentBox < boxArray.length - 1)	{ 
			currentBox++
		} else	{
			currentBox = 0;
		};
	//nextBox takes an initial value of one and keeps increasing it 'till it reaches the last element of the array and shows the last element,at the same time currentBox equals the penultimate element of the array and hides it,		//,then on next click nextBox,having restarted to 0,shows the first array item while currentBox,equalling the last element,hides it.
	//and finally,nextBox continues by showing red while currentBox,now equalling 0, hides blue.
		if (nextBox < boxArray.length - 1)	{
			nextBox++;
		} else	{
			nextBox = 0;
		};
		}
	//800
	//251
}