# -*- coding: utf-8 -*-
# @Author: steve yuan
# @Date:   2017-05-27 09:21:47
# @Last Modified by:   steve yuan
# @Last Modified time: 2017-06-22 22:46:53
import webbrowser


class Movies():

    def __init__(self, movie_title, original_network, stars,
                 movie_storyline, poster_image, trailer_youtube):
        """
        '__init__' is a special function can create a workspace to\
        receive the arguments, such as movie_title, original_network,\
        stars, movie_storyline, atc. Then we can use this arguments\
        as material to create the web page. (Am I right?)
        """
        self.title = movie_title
        self.original_network = original_network
        self.stars = stars
        self.movie_storyline = movie_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    def show_trailer(self):
        webbrowser.open(self.trailer_youtube_url)
