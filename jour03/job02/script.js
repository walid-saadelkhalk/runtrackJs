$(document).ready(function() {
    function shuffleImages() {
        var images = $('#imageContainer img').toArray();
        for (var i = images.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = images[i];
            images[i] = images[j];
            images[j] = temp;
        }
        $('#imageContainer').empty().append(images);
        applyDraggableDroppable();
    }

    function applyDraggableDroppable() {
        $("#imageContainer img").draggable({
            revert: true,
            zIndex: 100,
            containment: "document"
        });

        $("#dropZone").droppable({
            drop: function(event, ui) {
                var draggable = ui.draggable;
                draggable.appendTo($(this)).css({
                    top: 0,
                    left: 0
                });
                checkOrder(); 
            }
        });
    }

    function checkOrder() {
        const imagesInDropZone = $('#dropZone img').length;
        if (imagesInDropZone === 6) {
            let correctOrder = true;
            $('#dropZone img').each(function(index) {
                const expectedIndex = index + 1;
                const imageName = $(this).attr('alt');
                const currentIndex = parseInt(imageName.match(/\d+/)[0]);
                console.log("Current index:", currentIndex);
                console.log("Expected index:", expectedIndex);
                if (currentIndex !== expectedIndex) {
                    correctOrder = false;
                    return false;
                }
            });
    
            if (correctOrder) {
                $('#resultMessage').text("Vous avez gagné !").css("color", "green");
            } else {
                $('#resultMessage').text("Vous avez perdu !").css("color", "red");
            }
        }
    }
    
    applyDraggableDroppable();

    $('#shuffleButton').click(function() {
        shuffleImages();
        $('#resultMessage').text(""); 
    });

    $('#resetButton').click(function() {
        location.reload();
    });
});
