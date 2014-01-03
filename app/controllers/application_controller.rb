class ApplicationController < ActionController::Base
  protect_from_forgery
  def index
  end

  def events
    respond_to do |format|
      format.any do
        render :json => my_events
      end
    end
  end

  private
  def my_events
    [
        {name: "Test", url: "http://google.com", game: "Warmachine", location: "Test", date: Time.now, time: Time.now, seatsRemaining: 4, totalSeats: 16},
        {name: "Test2", url: "http://google.com", game: "Hordes", location: "Test", date: Time.now, time: Time.now, seatsRemaining: 4, totalSeats: 16},
        {name: "Test3", url: "http://google.com", game: "High Command", location: "Test", date: Time.now, time: Time.now, seatsRemaining: 4, totalSeats: 16}
    ]
  end

  helper_method :current_user

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end
end

