+++
_schema = "default"
title = "Divining Rod"
layout = "artist"
stage = ""
bio_text = """
## Divining Rod

Artist short bio will go here. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."""
website_link = ""
instagram_link = "test"
facebook_link = "test"
twitter_link = "test"
youtube_link = "test"
tiktok_link = "test"
apple_link = "test"
spotify_link = "test"
soundcloud_link = "test"

[[hero]]
image = "/images/band/divining-rod-hero.jpg"
alt_text = ""
lightbox_caption = ""

[[portfolio]]
thumbnail_image = "https://placehold.co/882x624"
lightbox_image = ""
is_approved = true

[_inputs.hero]
comment = "Single hero image at the top of the page. 1700 x 586."

[_inputs.title]
type = "text"
comment = "This is the title in blue bar. It is also the file name of the artist. Do not change this. There are other areas of the site that link to this page as it is named currently."

[_inputs.draft]
hidden = true

[_inputs.website_link]
comment = "As with all the links, if you include one it will show on the site."

[_inputs.stage]
type = "select"
comment = "_For future use._ Choose the stage for this artist."

  [_inputs.stage.options]
  values = [ "Main Stage", "Second Stage" ]
+++
