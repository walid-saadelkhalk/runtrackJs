$(document).ready(function() {

    function checkOrder() {
        var correctOrder = true;
        $('.cell img').each(function(index) {
            var fileName = $(this).attr('src');
            var currentNumber = parseInt(fileName.match(/\d+/)[0]);
            if (index + 1 !== currentNumber) { 
                correctOrder = false;
                return false; 
            }
        });
        return correctOrder;
    }
    


    $('#checkButton').click(function() {
        if (checkOrder()) {
            $('#message').text("Vous avez gagné !").css("color", "green");
        } else {
            $('#message').text(""); 
        }
    });

});


$(document).ready(function() {
    function applyDraggableDroppable() {
    }
    applyDraggableDroppable();
    
    
    $('#resetButton').click(function() {
        location.reload(); 
    });
    
    function shuffleImages() {
        var cells = $('.cell img');
        var cellCount = cells.length;
        
        cells.each(function() {
            var randomIndex = Math.floor(Math.random() * cellCount); 
            var temp = $(this).attr('src');
            $(this).attr('src', cells.eq(randomIndex).attr('src')); 
            cells.eq(randomIndex).attr('src', temp);
        });
    }
    
    $('#shuffleButton').click(function() {
        shuffleImages(); 
    });
});


$(document).ready(function() {
    var emptyCell = $('#emptyCell');
    var cells = $('.cell');

    cells.click(function() {
        var clickedCell = $(this);

        if (isAdjacent(clickedCell, emptyCell)) {
            var clickedContent = clickedCell.html();
            clickedCell.html(emptyCell.html());
            emptyCell.html(clickedContent);
            emptyCell = clickedCell;
        }
    });

    function isAdjacent(cell1, cell2) {
        var cellIndex1 = cells.index(cell1);
        var cellIndex2 = cells.index(cell2);

        var rows = 3; 
        var cols = 3; 

        var row1 = Math.floor(cellIndex1 / cols);
        var col1 = cellIndex1 % cols;
        var row2 = Math.floor(cellIndex2 / cols);
        var col2 = cellIndex2 % cols;

        return (Math.abs(row1 - row2) === 1 && col1 === col2) ||
               (Math.abs(col1 - col2) === 1 && row1 === row2);
    }
});




