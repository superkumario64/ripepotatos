class MoviesController < ApplicationController
  def index
  end
  def show
    @movie_id = params[:id]
    @movie_title = params[:title]
    puts params
  end
end
