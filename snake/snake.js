/**
 * Created by Boaz on 17/01/2017.
 */
(function () {
    //init vars
    var rows = 10;
    var cols = 10;
    // var posX = 0;
    // var posY = 0;
    var snake ={
        posX : 0,
        posY : 0,
        direction :'right',
        moveTo : function () {

            switch(this.direction) {
                case 'right':
                    this.posX++;
                    this.posX = this.posX > 9 ? 0 : this.posX;//check if it's the end of the road, in order to move it to the other side
                    break;
                case 'left':
                    this.posX--;
                    this.posX = this.posX < 0 ? 9 : this.posX;
                    break;
                case 'up':
                    this.posY--;
                    this.posY = this.posY < 0 ? 9 : this.posY;
                    break;
                case  'down':
                    this.posY++;
                    this.posY = this.posY > 9 ? 0 : this.posY;
                    break;
                default:
                    console.log("what are you doing here??")
            }

                matrix = initMatrix(rows, cols, this.posX, this.posY);
                drawMatrix(rows,cols,matrix);

        }



    };


    var matrix = initMatrix(rows, cols, snake.posX, snake.posY);//init all cells in matrix with false values


    $(document).ready(function () {
        drawMatrix(rows, cols, matrix);

    });



//init our matrix with false in all cells before drwing it
    function initMatrix(rows ,cols, x, y ){
        var matrix = [];
        for(var i = 0; i < rows; i++){
            var row  =[];
            for(var j = 0; j < cols; j++){
                if(i === y && j === x){
                    row.push(true);
                }
                else {
                    row.push(false);
                }
            }
            matrix.push(row);
        }
        return matrix;
    }

    function drawMatrix(rows, cols, matrix) {
        var stage = $('#stage').html('');
        for(var r =0; r < rows; r++){
            var row = $('<div class="row" ></div>').appendTo(stage);
            for(var c= 0; c < cols; c++){
                var col = $('<div class="col"></div>').appendTo(row);
                if(matrix[r][c] == true){
                    col.addClass('black');
                }
            }

        }
    }



    $(document).ready(function () {
        drawMatrix(rows, cols, matrix);
    });

    $(window).on('keydown', function(e){
        if (e.keyCode === 37){//left
            snake.direction ='left';

                if(snake.posX < 0){
                    snake.posX = 9;
                }

        }if (e.keyCode === 38){//up
                snake.direction = 'up';
                if(snake.posY < 0){
                    snake.posY = 9;
            }

        }if (e.keyCode === 39){//right
            snake.direction = 'right';

                if(snake.posX > 9){
                    snake.posX = 0;
            }

        }if (e.keyCode === 40){//down
            snake.direction ='down';

                if(snake.posY >9 ){
                    snake.posY =0;
            }

        }
        snake.moveTo();




    });



    setInterval(function(){//automatically moves the snake to the current direction
                snake.moveTo();
         }, 250);




})();
