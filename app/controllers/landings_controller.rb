class LandingsController < ApplicationController
  def index
    @mov_path = movies_path
  end
end
