window.onload = function() {


	$(document).ready(function() {


		$('#tweet-controls').css('display', 'none'); //hides char-count and tweet-submit button until you click in
		// $('.time').timeago(); //Not sure if I needed this. It works without.

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

			//PUSHED 5/27 at 2:10pm
			$('.action-favorite').on('click', function() {
				var count = $('.num-favorites').val();
				count++;

				// for (var i = 0; i < count.length; i++) {
				// 	$('.num-favorites').clone()
				// }
				$('.num-favorites').prop('value', count);

				// var count = $('.num-favorites').html();
				// $(this).find('.num-favorites').html(count, count++);
				// console.log('.num-favorites');

				// var count = $('.num-favorites').val();
				// var newVal = count++;
				// $(count).find('.num-favorites').html(newVal);
				console.log(count);

				// console.log(newVal);
			});





	// END
	});
}