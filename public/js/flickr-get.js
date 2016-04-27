$(() => {

  var flickrAPI = 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  var $imagePlaceholders = $('.redpanda-info--img');
  var $flickrErrParagraphs = $('.flickr-error--p');

  var runImagePopulate = function(data) {

   for (var i = 0; i < $imagePlaceholders.length; i++) {
      $imagePlaceholders[i].setAttribute('src', data.items[i].media.m);
    }

  };

  $.ajax({
    type: 'GET',
    url: flickrAPI,
    data: { tags: 'red panda', format: 'json' },
    dataType: 'json',
    success: (data) => {

      (data.items.length === 0 || data.items.length < 3)
        ? $flickrErrParagraphs.html('What the DUCK??!! Sorry, Flickr down try again soon.')
        : runImagePopulate(data);

    },
    error: (err) => {

      $flickrErrParagraphs.html('What the DUCK??!! Sorry, Flickr down try again soon.');
      throw err;

    }
  });
});
