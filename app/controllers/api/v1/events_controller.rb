class Api::V1::EventsController < ApplicationController
  before_action :require_event_organizer, only: [:create]
  skip_before_filter :verify_authenticity_token, :if => Proc.new { |c| c.request.format == 'application/json' }

  def index
    @events = Event.all

    render json: @events
  end

  def show
    @event = Event.find(params[:id])

    render json: @event
  end

  def create
    @event = Event.new(params[:event])

    if @event.save
      render json: @event, status: :created, location: api_v1_event_url(@event)
    else
      render json: @event.errors, status: :unprocessable_entity
    end
  end

  private
  def require_event_organizer
    #Obviously this will fail right now
    unless current_user && current_user[:role] == :event_organizer
      render json: {}, status: :unauthorized
    end
  end

end
