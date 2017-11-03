# -*- coding: utf-8 -*-
# @Author: steve yuan
# @Date:   2017-05-27 09:21:47
# @Last Modified by:   steve yuan
# @Last Modified time: 2017-06-22 22:37:52
import fresh_tomatoes
import media


# House of card TV_show:movie_title, original_network, stars,
#                movie_storyline, poster_image, trailer_youtube
House_of_Card = media.Movies("House of card",
    "Netflix",
    "Kevin Spacey, Michel Gill, Robin Wright, etc",
    "A Congressman works with his equally conniving wife to exact revenge\
    on the people who betrayed him.",
    "http://i4.buimg.com/519918/3960229ee03f6b3a.jpg",  # NOQA
    "https://www.youtube.com/watch?v=UW8Zyt8SF_U")  # NOQA

# Breaking Bad TV_show:movie_title, original_network, stars,
#                movie_storyline, poster_image, trailer_youtube
Breaking_Bad = media.Movies("Breaking Bad",
    "AMC",
    "Bryan Cranston, Aaron Paul, Anna Gunn, etc",
    "A high school chemistry teacher diagnosed with inoperable lung cancer\
    turns to manufacturing and selling methamphetamine in order to secure\
    his family's future.",
    "http://i4.buimg.com/519918/b568c793f02acb41.jpg",  # NOQA
    "https://www.youtube.com/watch?v=HhesaQXLuRY")  # NOQA

# Game of Thrones TV_show:movie_title, original_network,
#              stars,movie_storyline, poster_image,
#              trailer_youtube
Game_of_Thrones = media.Movies("Game of Thrones",
    "HBO",
    "Emilia Clarke, Peter Dinklage, Kit Harington, etc",
    "Nine noble families fight for control over the mythical lands of\
    Westeros, while a forgotten race returns after being dormant\
    for thousands of years.",
    "http://i4.buimg.com/519918/eb9ad26926e4d5c8.jpg",  # NOQA
    "https://www.youtube.com/watch?v=giYeaKsXnsI")  # NOQA

# Fargo TV_show:movie_title, original_network,
#               stars,movie_storyline, poster_image,
#               trailer_youtube
Fargo = media.Movies("Fargo",
    "FX",
    "Billy Bob Thornton, Martin Freeman, Allison Tolman, etc",
    "Various chronicles of deception, intrigue and murder in and around\
    frozen Minnesota. Yet all of these tales mysteriously lead back one\
    way or another"
    "to Fargo, ND.",
    "http://i4.buimg.com/519918/13a3ac3008580be5.jpg",  # NOQA
    "https://www.youtube.com/watch?v=gKs8DzjPDMU")  # NOQA

# Sherlock TV_show:movie_title, original_network, stars,
#                movie_storyline, poster_image, trailer_youtube
Sherlock = media.Movies("Sherlock",
    "BBC",
    "Benedict Cumberbatch, Martin Freeman, Una Stubbs, etc",
    "A modern update finds the famous sleuth and his doctor partner solving\
    crime in 21st century London.",
    "http://i4.buimg.com/519918/64f982147c70bc8d.jpg",  # NOQA
    "https://www.youtube.com/watch?v=B89DeXZ7mhc")  # NOQA

# The Honourable Woman TV_show:movie_title, original_network, stars,
#                movie_storyline, poster_image, trailer_youtube
The_Honourable_Woman = media.Movies("The Honourable Woman",
    "BBC",
    "Maggie Gyllenhaal, Stephen Rea, Lubna Azabal, etc",
    "A modern update finds the famous sleuth and his doctor partner solving\
    crime in 21st century London.",
    "http://i1.piimg.com/519918/33298ad5a21d093a.jpg",  # NOQA
    "https://www.youtube.com/watch?v=xQYsZEbu1RI")  # NOQA

# Rome TV_show:movie_title, original_network, stars,
#                movie_storyline, poster_image, trailer_youtube
Rome = media.Movies("Rome",
    "BBC",
    "Kevin McKidd, Ray Stevenson, Polly Walker, etc",
    "A down-to-earth account of the lives of both illustrious and ordinary\
    Romans set in the last days of the Roman Republic.",
    "http://i1.piimg.com/519918/d7c0b7ca55f0e2bc.jpg",  # NOQA
    "https://www.youtube.com/watch?v=rtUQqiIa0oI")  # NOQA

# The Big Bang Theory TV_show:movie_title, original_network,
#               stars,movie_storyline, poster_image,
#               trailer_youtube
The_Big_Bang_Theory = media.Movies("The Big Bang Theory",
    "CBS",
    "Johnny Galecki, Jim Parsons, Kaley Cuoco, etc",
    "A woman who moves into an apartment across the hall from two\
    brilliant but socially awkward physicists shows them how little they\
    know about life outside of the laboratory.",
    "http://i4.buimg.com/519918/d97ecadde1637e6e.jpg",  # NOQA
    "https://www.youtube.com/watch?v=PpN584jc1fA")  # NOQA

# American Gods TV_show:movie_title, original_network, stars,
#                movie_storyline, poster_image, trailer_youtube
American_Gods = media.Movies("American Gods",
    "AMAZON",
    "Ricky Whittle, Emily Browning, Bruce Langley, etc",
    "A recently released ex-convict named Shadow meets a mysterious man who\
    calls himself Wednesday and who knows more than he first seems to about\
    Shadow's life and past.",
    "http://i1.piimg.com/519918/ac658bc5738527cc.jpg",  # NOQA
    "https://www.youtube.com/watch?v=z6HLeNl8DOs")  # NOQA

Movies = [House_of_Card, Breaking_Bad, Game_of_Thrones,
          Fargo, Sherlock, The_Honourable_Woman,
          Rome, The_Big_Bang_Theory, American_Gods]
fresh_tomatoes.open_movies_page(Movies)
"""
    This code can call the fresh_tomatoes.py and use function
    (open_movies_page(movies) to create a web page(fresh_tomatoes.html).
    And that pege is the final work.
"""

