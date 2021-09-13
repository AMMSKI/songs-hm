class SongsController < ApplicationController

  def index
    songs = Song.all
    render json: songs
  end

  def create
    song = Song.create(song_params)
    if song.save
      render json: song
    end
  end

  def update
    song = Song.find(params[:id])
    if song.update(song_params)
      render json: song
    end
  end

  def destroy
    song = Song.find(params[:id])
    song.destroy
  end

  private

  def song_params
    params.require(:song).permit(:name, :author, :id)
  end


end
