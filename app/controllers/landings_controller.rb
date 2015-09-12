class LandingsController < ApplicationController
  def index
    gon.movies_url = movies_path;
  end
end
