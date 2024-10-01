+++
title = ""
layout = "artist"

stage = ""

bio_text = """
This is **long form** text.
"""

website_link = ""
instagram_link = ""
facebook_link = ""
twitter_link = ""
youtube_link = ""
tiktok_link = ""
apple_link = ""
spotify_link = ""
soundcloud_link = ""

[[hero]]
image = ""
alt_text = ""

[[portfolio]]
thumbnail_image = "https://placehold.co/882x624"
lightbox_image = "https://placehold.co/1000x1000"
lightbox_caption = "Test Caption"
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
values = ["Main Stage", "Second Stage"]
+++