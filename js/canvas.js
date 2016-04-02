

    $(function(){
    
		       (function(){
			      var x,y,endX,endY;
		    	  
			      //undo redo
			      var history =[];
		    	  var cStep = -1;
		    	  
		    	  // simulate line rectangle input dialog when you interact with the UI
			      var lineTip = $("#container").appendLine({width:"1px",type:"solid",color:"red",beginX:0,beginY:0,endX:1,endY:1});
			      var rectTip = $(" <div style='border:1px solid gray;width:1px;height:1px;position:absolute;display:none;'></div>");
			      var fontTip =$("<textarea rows='3' cols='20' style='background:transparent;position:absolute;display:none;'></textarea>"); 
			      $("#container").append(rectTip);
			      $("#container").append(fontTip);
			      
			      
			      
			      var flag = false;
			      var ctx=document.getElementById("myCanvas").getContext("2d");

			      

			      var command = 1;
			      var commandCallbacks = $.Callbacks();
			      commandCallbacks.add(switchCanvasContext);
			      commandCallbacks.add(switchCursorStyle);
			      
			      // By default,
			      $("#tools_pencil").trigger("click");
			      commandCallbacks.fire(command);
			      
			      initUI();
			      
			      
			      
			      // command emitter
			      $("[name='toolsOption']").change(function(){
			    	  var val = $(this).val();
			    	  var type = $(this).attr("id");
			    	  if("on" == val)
			    	  {    
			    		  switch(type)
			    		  {
				    		  case "tools_pencil"		:{command=1;break;}
				    		  case "tools_eraser"		:{command=2;break;}
				    		  case "tools_trash"		:{command=3;break;}
				    		  case "tools_line"			:{command=4;break;}
				    		  case "tools_rectangle"	:{command=5;break;}
				    		  case "tools_circle"		:{command=6;break;}
							  default                :
							  {
								  command = 1;
							  }
						  }
			    		  //initialize canvas context and cursor style
			    		  commandCallbacks.fire(command);
			    	  }	
			      });
			      
			      $("#container").mousemove(mouseMoveEventHandler);
			      
			      /**
			       * In different function circumstances, the Mouse Move Event should be handled in different behalf.
			       */
			      function mouseMoveEventHandler(e)
			      {
			          switch(command)
			          {
			          	case 1	:	{	drawPencil(e);break; }
			          	case 2	:	{	drawPencil(e);break; }
			          	case 4	:	{   fakeLineInput(e);	break;	   }
			          	case 5	:	{   fakeRectangleInput(e);break;    }
			          	case 6	:	{   fakeWordsInput(e);break;    }
			          }
			      }
			      
			      
			      /**
			       * When you want to input some words on the canvas, the Input User Interface should be offered.
			       * you can drag a line on the canvas while  mouse button is pressed down
			       */
			      function fakeWordsInput(e)
			      {
			    	  var offset = $("#myCanvas").offset();
			          endX= e.pageX-offset.left;
			          endY  = e.pageY-offset.top;
			          if(flag)
			            {
			               fontTip.show();
			               fontTip.css({left:x,top:y});
			               fontTip.width(endX-x);
			               fontTip.height(endY-y);
			            }
			      }
			      
			      
			         });
		);