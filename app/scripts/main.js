// Template
var firstTemplate = _.template($('.formup').text());

var secondTemplate = _.template($('.outcome').text());


function TaskConstructor (property) {
    this.task = property.task || 'No Task Title';
    this.notes = property.notes || 'no notes...';
};

var taskArray = [];

$( document ).ready(function() {
   

	$('.makebutton').click(function(){
		$('.dark-ghost').addClass('active');
		$('body').append(firstTemplate());

		$('.submitbtn').click(function(){
		    $('.dark-ghost').removeClass('active');
			

			var input = {
	            task: $('.taskname').val(),
	            notes: $('.tasknotes').val()
	        };

			 taskArray.push(new TaskConstructor(input));
			 		$('.form').remove();

			 		$('.created-task').html('');

				_.each(taskArray, function(task, index) {
	              $('.created-task').append(secondTemplate(task));
        	});

			});

			$('.cancelbtn').click(function(){
				$('.dark-ghost').removeClass('active');
				$('.form').remove();
		});
	});
});