window.onload = function() {


	$(document).ready(function() {


		$('#tweet-controls').css('display', 'none'); //hides char-count and tweet-submit button until you click in
		$('.time').timeago();

		var charCountColor = $('#char-count').css('color'); //keeps char-count color gray after typing
		var maxlength = 140;

		//Expand textarea on click
		$('.tweet-compose').on('focus', function() {
			$(this).css('height', '5em')
			$('#tweet-controls').css('display', 'block');
		});

		// $('.tweet-compose').on('blur', function() {
		// 	$(this).css('height', '2.5em')
		// 	$('#tweet-controls').css('display', 'block')
		// })

		//Decrease counter while typing
		$('.tweet-compose').on('keyup', function() {
			var textLength = $(this).val().length;
			var textCount = maxlength - textLength;
			$('#char-count').text(textCount);
			//Turn char-count red once char are 10 or less
			if (textCount < 11) {
				$('#char-count').css('color', 'red')
			} else {
				$('#char-count').css('color', charCountColor);
			}
			//Disable tweet button after passing over 140 char
			if (textCount <= 0) {
				$('#tweet-submit').prop('disabled', true);
			} else {
				$('#tweet-submit').prop('disabled', false);
			}
		});

		//When Tweet button is clicked, create and add tweet to the stream in main column
		$('#tweet-submit').on('click', function() {
			var text = $('.tweet-compose').val();
			var cloneTweet = $('.tweet').clone()[0];
			$(cloneTweet).find('.username').html('@TheBoucher');
			$(cloneTweet).find('.fullname').html('Jesse');
			$(cloneTweet).find('.avatar').attr('src','img/alagoon.jpg');
			$(cloneTweet).find('.tweet-text').html(text);
			$(cloneTweet).find('.num-retweets').html('0');
			$(cloneTweet).find('.num-favorites').html('0');
			$(cloneTweet).find('.time').html($.timeago(new Date()));

			// $('.tweet-actions').css('display', 'none');

			$('#stream').prepend(cloneTweet);
			$('.tweet-compose').val(''); //clears the tweet compose box after clicking tweet button
			// tweetActionSfuff(); //invoke function instead of repeating code
			// tweetActionStuff(); wouldn't work, so I repeated code for the new tweet
			$('.tweet').mouseenter(function() {
				$(this).find('.tweet-actions').show();
			});

			$('.tweet').mouseleave(function() {
				$(this).find('.tweet-actions').hide();
			});

			//Hide tweet actions, time, reply. Make appear when clicking on tweet.


			$('.tweet').on('click', function() {
				$(this).find('.stats').slideDown(500).removeClass('active');
				$(this).find('.reply').slideDown(500).removeClass('active');
				$('.stats.active').slideUp(500);
				$('.reply.active').slideUp(500);
				$(this).find('.stats').slideDown(500).addClass('active');
				$(this).find('.reply').slideDown(500).addClass('active');
				
			});

		});

			$('.stats').hide();
			$('.reply').hide();
		

		// function tweetActionStuff() {

			//Show/hide 'reply, retweet, favorite, more..' Had to add above so the new tweet would have same function
			$('.tweet').mouseenter(function() {
				$(this).find('.tweet-actions').show();
			});

			$('.tweet').mouseleave(function() {
				$(this).find('.tweet-actions').hide();
			});

			//Hide tweet actions, time, reply. Make appear when clicking on tweet.


			$('.tweet').on('click', function() {
				$(this).find('.stats').slideDown(500).removeClass('active');
				$(this).find('.reply').slideDown(500).removeClass('active');
				$('.stats.active').slideUp(500);
				$('.reply.active').slideUp(500);
				$(this).find('.stats').slideDown(500).addClass('active');
				$(this).find('.reply').slideDown(500).addClass('active');
				
			});

			
			$('.action-favorite').on('click', function() {
				var curCount = $(this).find('.num-favorites').val();
				curCount = curCount + 1;
				$(this).find('.num-favorites').html(curCount);
			})





	// END
	});
}