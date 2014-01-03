Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer unless Rails.env.production?
  provider :facebook, '264467447036796', 'ed177856e997cfddec6b9fa06eb8e380'

  OmniAuth.config.logger = Rails.logger
end
