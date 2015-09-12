class MoviesController < ApplicationController
  def index
  end
  def show
    @movie_id = params[:id]
  end
end
